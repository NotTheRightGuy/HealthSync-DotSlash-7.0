from flask import Flask
from flask import request
from flask_cors import CORS, cross_origin
from main import predict_disease
from chat import conversation

app = Flask(__name__)
cors = CORS(app)
app.config["CORS_HEADERS"] = "Content-Type"

@app.post("/predict")
@cross_origin()
def predict():
    symptoms = request.json["symptoms"]
    prediction = predict_disease(symptoms)
    return prediction

@app.post("/chat")
@cross_origin()
def chat():
    message = request.json["message"]
    response = conversation(message)
    return {
        "response": response
    }
