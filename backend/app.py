from datetime import datetime, timedelta
from flask import Flask, jsonify, request
from flask import logging

import pymongo
import json
from model import Challenge, Review, Report
from data import DatabaseConnection
from bson.son import SON
from bson import json_util
from flask_cors import CORS

app = Flask(__name__)
db = DatabaseConnection()
CORS(app)


@app.route("/ranks")
def get_dorm_ranks():
    """
    Returns all dorms, sorted by fire alarm count in descending order."""
    dc = db.dorms()
    cursor = dc.find({"alarm_count": {"$gte": 0}}).sort(
        "alarm_count", pymongo.DESCENDING
    )
    found_elements = list(cursor)
    return json.loads(json_util.dumps(found_elements))


@app.route("/dorm/<name>")
def get_dorm_data(name=None):
    """
    Gets data for one dorm by its id.

    For example:\n
    Slusher Tower: `slusher`,
    West Ambler Johnson: `west_aj`"""

    cur = db.dorms().find_one({"id": {"$eq": name}})
    return json.loads(json_util.dumps(cur))


@app.route("/challenge")
def challenge_err():
    return "USAGE: /from_dorm/to_dorm/metric_dorm"


@app.route("/challenge/<from_dorm>/<to_dorm>/<metric>")
def create_challenge(from_dorm=str, to_dorm=str, metric=str):
    """
    Creates a new challenge from a given dorm to another dorm tracking a specified metric.
    Adds the challenge to the "challenges" collection in the database.
    The default expiration of a challenge is 7 days."""

    res = format(f"{from_dorm} challenged {to_dorm} tracking {metric}")

    start = datetime.now()
    end = start + timedelta(days=7)

    challenge = Challenge(
        from_dorm=from_dorm,
        to_dorm=to_dorm,
        metric=metric,
        start_date=start,
        end_date=end,
    )

    challenge_json = challenge.model_dump_json()
    db.challenges().insert_one(challenge.model_dump())

    return challenge_json


@app.route("/challenges")
def get_all_challenges():
    """
    Get list of all active challenges (where the end date is > current date)"""
    cur_time = datetime.now()

    cursor = db.challenges().find({"end_date": {"$gt": cur_time}})

    cursor_list = list(cursor)
    converted_json = json.loads(json_util.dumps(cursor_list))

    return converted_json


@app.route("/report", methods=["POST"])
def create_report():
    """
    Creates a report for the given metric.
    First it checks if there is a report in the last 30 minutes.
    If so, it is probably referring to the same event, so disregard. Otherwise add to the report collection.
    """
    try:
        data = request.get_json()

        if not data:
            return jsonify({"error": "No JSON data provided"}), 400

        dorm = data["dorm"]
        metric = data["metric"]
        date = data["date"]

        app.logger.info(f"Attempting to report {metric} at {dorm} at time {date}")

        provided_time = datetime.fromisoformat(date)
        cutoff_time = provided_time - timedelta(minutes=30)

        cursor = db.reports().find(
            {
                "metric": {"$eq": metric},
                "date": {"$gte": cutoff_time},
                "dorm": {"$eq": dorm},
            }
        )

        results = list(cursor)
        app.logger.info(results)

        if len(results) > 0:
            app.logger.error("Event has already been reported!")
            return jsonify({"error": "The event has already been reported"}), 400

        report = Report(dorm=dorm, date=provided_time, metric=metric)

        # Add the report to total list of reports
        db.reports().insert_one(report.model_dump())

        # Increment the counter for the thing
        db.reports().update_one({{"id": dorm}, {"$inc": {metric: "1"}}})

        return jsonify({"result": f"Reported {dorm}, {metric}"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route("/review", methods=["POST"])
def add_review():
    try:
        # Get the JSON data from the request
        data = request.get_json()

        # Check if the request contains JSON data
        if not data:
            return jsonify({"error": "No JSON data provided"}), 400

        # Access JSON parameters
        user_name = data["userName"]
        dorm_name = data["dormName"]
        body = data["body"]
        app.logger.info(f"userName: {user_name} dormName: {dorm_name}")
        app.logger.info(data)

        review = Review(
            dorm_name=dorm_name, user_name=user_name, date=datetime.now(), body=body
        )

        res = db.reviews().insert_one(review.model_dump())

        app.logger.info(res)

        # Do something with the parameters (e.g., perform some processing)
        result = {"result": f"Processed parameters: {user_name}, {dorm_name}"}

        return jsonify(result), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route("/")
def index():
    return "<h1>DormWars API</h1><p>Try the /dorm or /ranks routes!</p>"


if __name__ == "__main__":
    app.run()
    db.client.close()
