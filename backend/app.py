from datetime import datetime, timedelta
from flask import Flask
import pymongo
import json
from model import Challenge
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

    cur = db.get_dorms().find_one({"id": {"$eq": name}})
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


@app.route("/")
def index():
    return "<h1>DormWars API</h1><p>Try the /dorm or /ranks routes!</p>"


if __name__ == "__main__":
    app.run()
    db.client.close()
