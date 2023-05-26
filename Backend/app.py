from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import sqlite3
app = Flask(__name__)
cors = CORS(app)
app.config["CORS_HEADERS"] = "Content-Type"

#CREATE TABLE meeting(name TINYTEXT, description MEDIUMTEXT, picture int, location TINYTEXT, time TINYTEXT, day char(3));

@app.route("/")
def home():
    return "Test"

@app.route("/meeting", methods = ["Get", "Post"])
@cross_origin()
def meeting():
    if request.method == "GET": 
        cur = sqlite3.connect("meetings.db").cursor()
        try:
            data = cur.execute("SELECT * FROM meeting")
            meetingList = []

            for i in data.fetchall():
                meetingList.append({
                    "name": i[0],
                    "description": i[1],
                    "picture": i[2],
                    "location": i[3],
                    "time": i[4],
                    "day": i[5]}
                )                
            
            return jsonify(results = meetingList)
        except:
            return "Unable to find the meetings", 501
        
    if request.method == "POST":
        try:
            con = sqlite3.connect("meetings.db")
            cur = con.cursor()
            data = cur.execute(f""" INSERT INTO meeting(picture, name, location, time, description, day)
            VALUES(        
            "{request.json[0]}",
            "{request.json[1]}",
            "{request.json[2]}",
            "{request.json[3]}",
            "{request.json[4]}",
            "{request.json[5]}"
            )""")
            con.commit()
            return request.json
        except:
            return "Unable to save the meeting", 502