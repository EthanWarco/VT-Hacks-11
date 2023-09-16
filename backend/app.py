from flask import Flask, make_response
import pymongo
import requests
import json
from data import DatabaseConnection
from bson.son import SON
from bson import json_util

app = Flask(__name__)
db = DatabaseConnection()

"""
Returns all dorms, sorted by fire alarm count in descending order.
"""
@app.route('/ranks')
def get_dorm_ranks():
    dc = db.get_dorms()
    cursor = dc.find({"alarm_count": {"$gte": 0}}).sort("alarm_count", pymongo.DESCENDING)
    found_elements = list(cursor)
    return json.loads(json_util.dumps(found_elements))
    
"""
Gets data for one dorm by its id. 
Slusher Tower: `slusher`
West Ambler Johnson: `west_aj`
"""
@app.route('/dorm/<name>')
def get_dorm_data(name=None):
    cur = db.get_dorms().find_one({"id": {"$eq": name}})
    return json.loads(json_util.dumps(cur))

@app.route("/")
def index():
    return "<h1>DormWars API</h1><p>Try the /dorm or /ranks routes!</p>"

if __name__ == "__main__":
    app.run()