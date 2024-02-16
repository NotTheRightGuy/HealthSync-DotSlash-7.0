import cloudinary
from cloudinary.uploader import upload
import os
from dotenv import load_dotenv
load_dotenv()

cloudinary.config(
    cloud_name="dhpnvzdyl",
    api_key="465974755168453",
    api_secret=os.getenv("CLOUDINARY_API_SECRET")
)


def upload_prescription():
    pres_path = os.getcwd() + "/dist/prescription-output.jpg"
    response = upload(pres_path)
    return response["secure_url"]


