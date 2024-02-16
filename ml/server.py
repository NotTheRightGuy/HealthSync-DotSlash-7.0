from flask import Flask
from flask import request
from flask_cors import CORS, cross_origin
from utils.predict import predict_disease
from utils.template_maker import create_template
from utils.upload_prescription import upload_prescription

app = Flask(__name__)
cors = CORS(app)
app.config["CORS_HEADERS"] = "Content-Type"


@app.post("/predict")
@cross_origin()
def predict():
    symptoms = request.json["symptoms"]
    token = request.headers.get("Authorization")
    if not token:
        return {"error": "Unauthorized"}, 401
    prediction = predict_disease(symptoms)
    return prediction


@app.post("/create-prescription")
@cross_origin()
def create_prescription():
    data = request.json
    token = request.headers.get("Authorization")
    if not token:
        return {"error": "Unauthorized"}, 401
    create_template(
        data["name"],
        data["age"],
        data["phone"],
        data["blood_group"],
        data["diagnosis"],
        data["confidence_level"],
        data["feedback"],
        data["medicine"],
    )
    if "download" in data:
        if bool(data["download"]):
            url = upload_prescription()
            return {"message": "Prescription created and uploaded successfully", "url": url}
        else:
            return {"message": "Prescription created successfully"}
    else:
        return {"message": "Prescription created successfully"}


