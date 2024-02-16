from PIL import Image, ImageFont, ImageDraw
import datetime
prescription_template = "./templates/Prescription.jpg"


def create_template(name, age, phone, blood_group, diagnosis, confidence_level, feedback, medicine):
    date_coords = (225, 690)
    name_coords = (1159, 605)
    age_coords = (1160, 702)
    phone_coords = (1160, 805)
    blood_group_coords = (1260, 907)
    diagnosis_coords = (293, 815)
    confidence_level_coords = (381, 885)
    feedback_coords = (134, 1034)
    medicine_coords = (155, 1619)

    img = Image.open(prescription_template)
    draw = ImageDraw.Draw(img)
    font = ImageFont.truetype("./fonts/arial.ttf", 30)
    draw.text(date_coords, str(datetime.date.today()), (0, 0, 0), font=font)
    draw.text(name_coords, name, (0, 0, 0), font=font)
    draw.text(age_coords, str(age), (0, 0, 0), font=font)
    draw.text(phone_coords, phone, (0, 0, 0), font=font)
    draw.text(blood_group_coords, blood_group, (0, 0, 0), font=font)
    draw.text(diagnosis_coords, diagnosis, (0, 0, 0), font=font)
    draw.text(confidence_level_coords, confidence_level, (0, 0, 0), font=font)
    # Wrap feedback to fit the prescription by only keeping 10 words per line
    wrap_feedback = ""
    for i, word in enumerate(feedback.split()):
        if i % 10 == 0 and i != 0:
            wrap_feedback += "\n" + word
        else:
            wrap_feedback += " " + word
    draw.text(feedback_coords, wrap_feedback, (0, 0, 0), font=font)

    # Map through the medicine which will be a list of medicines and print them on the prescription
    y = 1619
    for med in medicine:
        draw.text((155, y), med, (0, 0, 0), font=font)
        y += 50
    img.save(f"dist/prescription-output.jpg")

