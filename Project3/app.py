from pymongo import MongoClient

from flask import Flask
from flask import render_template
from bson import json_util
import pandas
import json
# #Specify string names inside '' for following variables 
# MONGODB_HOST = 'localhost'
# DBS_NAME = 'VehiclesOnRegister_db'
# COLLECTION_NAME = 'RegisterAgebyState_collection' 
# #Specify numerical variable (default used)
# MONGODB_PORT = 27017
# connection = MongoClient(MONGODB_HOST, MONGODB_PORT)
# collection = connection[DBS_NAME][COLLECTION_NAME]

#Specify variables in csv of interest
FIELDS = {'report_year': True, 'states_name': True,'register_amount': True, 'average_income': True,'population_number': True,'average_register': True,'age_used':True,'land_size':True,'_id': False}

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")


@app.route("/donorschoose/projects/")
def donorschoose_projects():
    connection = MongoClient('localhost', 27017)
    collection = connection['VehiclesOnRegister_db']['RegisterAgebyState_collection']
    projects = collection.find(projection={'report_year': True, 'states_name': True,'register_amount': True, 
    'average_income': True,'population_number': True,'average_register': True,'age_used':True,
    'land_size':True,'_id': False}, limit=100000)
    #projects = collection.find(projection=FIELDS)
    json_projects = []
    for project in projects:
        json_projects.append(project)
    json_projects = json.dumps(json_projects, default=json_util.default)
    connection.close()
    return json_projects

@app.route("/Register/Type/State/Age/")
def Register_Type_State_Age():
    connection = MongoClient('localhost', 27017)
    collection = connection['VehiclesOnRegister_db']['RegisterTypeStateAge_collection']
    projects = collection.find(projection={'report_year': True, 'states_name': True,'vehicles_type': True,
         'register_amount': True,'age_used': True,'short_name':True, '_id': False}, limit=100000)
    #projects = collection.find(projection=FIELDS)
    json_projects = []
    for project in projects:
        json_projects.append(project)
    json_projects = json.dumps(json_projects, default=json_util.default)
    connection.close()
    return json_projects

@app.route("/Register/Brand/")
def Register_Brand():
    connection = MongoClient('localhost', 27017)
    collection = connection['VehiclesOnRegister_db']['RegisterBrand_collection']
    projects = collection.find(projection={'report_year': True, 'brand_name': True,'register_amount': True,'_id': False}, limit=100000)
    #projects = collection.find(projection=FIELDS)
    json_projects = []
    for project in projects:
        json_projects.append(project)
    json_projects = json.dumps(json_projects, default=json_util.default)
    connection.close()
    return json_projects

if __name__ == "__main__":
    # app.run(host='0.0.0.0',port=8000,debug=True)
    app.run(host='0.0.0.0', port=9090)