from pymongo import MongoClient

from flask import Flask
from flask import render_template
from bson import json_util
import pandas
import json
#Specify string names inside '' for following variables 
MONGODB_HOST = 'localhost'
DBS_NAME = 'test_db'
COLLECTION_NAME = 'test_collection' 
#Specify numerical variable (default used)
MONGODB_PORT = 27017

#Specify variables in csv of interest
FIELDS = {'Name': True, 'Platform': True, 'Year_of_Release': True,'Genre': True, 'Publisher': True,'NA_Sales': True,'EU_Sales': True,'JP_Sales': True,'Other_Sales': True, 'Global_Sales': True,'Critic_Score': True,'User_Score': True,'User_Count': True,'Developer': True,'Rating': True,'_id': False}

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")


@app.route("/donorschoose/projects/<start_date>")
def donorschoose_projects():
    connection = MongoClient(MONGODB_HOST, MONGODB_PORT)
    collection = connection[DBS_NAME][COLLECTION_NAME]
    projects = collection.find(projection=FIELDS, limit=100000)
    #projects = collection.find(projection=FIELDS)
    json_projects = []
    for project in projects:
        json_projects.append(project)
    json_projects = json.dumps(json_projects, default=json_util.default)
    connection.close()
    return json_projects


if __name__ == "__main__":
    app.run(host='0.0.0.0',port=8000,debug=True)