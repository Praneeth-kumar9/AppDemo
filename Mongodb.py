from flask import Flask,request,jsonify
from flask_pymongo import PyMongo
from flask_cors import  CORS
from flask_restplus import Resource,Api
from datetime import datetime
app = Flask(__name__)

app.config["MONGO_URI"] = "mongodb://localhost:27017/holidays"
mongo = PyMongo(app)
api = Api(app)
cors = CORS(app)
class Holidays(Resource):
    def get(self):
        holiday_collection = mongo.db.holidayslist
        result =[]
        for holidays in holiday_collection.find():
            result.append({'Name':str(holidays['Name']),'Date':str(holidays['Date']),'url':str(holidays['url']),'Description':str(holidays['Description'])})
        return jsonify(result)
api.add_resource(Holidays,'/Holidays')
class monthHolidays(Resource):
    def get(self):
        current_month_text = datetime.now().strftime('%B')
        holiday_collection = mongo.db.holidayslist
        result =[]
        for holidays in holiday_collection.find():
            w=holidays['Date'].split()
            if(w[1] == current_month_text):
                result.append({'Name':str(holidays['Name']),'Date':str(holidays['Date']),'url':str(holidays['url']),'Description':str(holidays['Description'])})
        return jsonify(result)
api.add_resource(monthHolidays,'/monthHolidays')
class todayHolidays(Resource):
    def get(self):
        current_month_text = datetime.now().strftime('%B')
        today = datetime.today().day
        holiday_collection = mongo.db.holidayslist
        result =[]
        for holidays in holiday_collection.find():
            w=holidays['Date'].split()
            if w[0] == str(today) and w[1] == current_month_text:
                result.append({'Name':str(holidays['Name']),'Date':str(holidays['Date']),'url':str(holidays['url']),'Description':str(holidays['Description'])})
        return jsonify(result)
api.add_resource(todayHolidays,'/todayHolidays')
if __name__ == '__main__':
    app.run()
