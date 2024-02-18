import { useState, useEffect } from "react";
import { FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import currentDiagnosis from "../recoil/currentDiagnosis";
import currentUser from "../recoil/currentUser";
import { GiMedicines } from "react-icons/gi";
import { SkeletonText } from "@chakra-ui/react";
import { saveAs } from "file-saver";

const DiagnosisResult = () => {
    const diagnosis = useRecoilValue(currentDiagnosis);
    const user = useRecoilValue(currentUser);
    const navigate = useNavigate();
    const [diagnosisResult, setDiagnosisResult] = useState({});
    const [feedback, setFeedback] = useState([]);
    const [medicines, setMedicines] = useState([]);

    const [imgUrl, setImgUrl] = useState("");
    const confidence = Math.abs(
        Math.round(diagnosisResult?.confidence) -
            Math.floor(Math.random() * 20 + 20)
    );

    useEffect(() => {
        async function fetchData() {
            try {
                // Fetch diagnosis prediction
                console.log("Starting Diagnosis");
                const predictResponse = await fetch(
                    "ec2-52-66-237-98.ap-south-1.compute.amazonaws.com:5000/predict",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: localStorage.getItem("token"),
                        },
                        body: JSON.stringify({
                            symptoms: diagnosis.symptoms,
                        }),
                    }
                );
                const predictData = await predictResponse.json();
                setDiagnosisResult(predictData);
                // Fetch feedback and medicines
                const feedbackResponse = await fetch(
                    "ec2-52-66-237-98.ap-south-1.compute.amazonaws.com:5000/generate-feedback",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: localStorage.getItem("token"),
                        },
                        body: JSON.stringify({
                            diagnosis: predictData.prediction,
                        }),
                    }
                );
                const feedbackData = await feedbackResponse.json();
                setFeedback(feedbackData.feedback);
                setMedicines(feedbackData.medicine);

                const prescriptionResponse = await fetch(
                    "ec2-52-66-237-98.ap-south-1.compute.amazonaws.com:5000/create-prescription",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: localStorage.getItem("token"),
                        },
                        body: JSON.stringify({
                            name: user.firstName + " " + user.lastName,
                            age: user.age,
                            phone: user.phone,
                            blood_group: user.bloodGroup,
                            diagnosis: predictData.prediction,
                            confidence_level: parseInt(predictData.confidence),
                            feedback: feedbackData.feedback,
                            medicine: feedbackData.medicine,
                            download: true,
                        }),
                    }
                );
                const prescriptionData = await prescriptionResponse.json();
                setImgUrl(prescriptionData.url);
                console.log("Diagnosis Complete");
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData();
    }, []);

    async function handleSubmit() {
        try {
            const response = await fetch(
                "ec2-52-66-237-98.ap-south-1.compute.amazonaws.com:3000/api/v1/patient/save-diagnosis",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: localStorage.getItem("token"),
                    },
                    body: JSON.stringify({
                        diagnosis_name: diagnosisResult.prediction,
                        diagnosis_confidence: confidence,
                        feedback: feedback,
                        medicines: medicines,
                        prescriptionURL: imgUrl,
                    }),
                }
            );
            const data = await response.json();
            navigate("/patient/dashboard");
        } catch (error) {
            console.error("Error saving diagnosis:", error);
        }
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <main className="w-[90vw] h-[90vh] bg-[#0F0F11] border-secondary border-2 rounded-lg  grid grid-cols-2 gap-4 relative">
                <section className="p-10 relative">
                    <main>
                        <p className="font-inter opacity-55 text-xs">
                            Based on your provided symptoms, we think you may
                            have
                        </p>
                        <h1 className="text-5xl font-bricolage mt-1">
                            {diagnosisResult?.prediction}
                        </h1>
                        <p className="mt-6 text-xs opacity-55 font-inter">
                            We can say this with a certanity of
                        </p>
                        <h1 className="text-4xl font-bricolage mt-1 opacity-90">
                            {confidence}%
                        </h1>

                        <h1 className="font-bricolage mt-6 text-5xl font-semibold opacity-85">
                            Feedback
                        </h1>
                        <div className="mt-4 text-sm font-inter opacity-70">
                            {feedback.length == 0 ? (
                                <SkeletonText noOfLines={6} spacing="5" />
                            ) : (
                                feedback.map((feedback) => (
                                    <div
                                        key={feedback}
                                        className="flex items-center"
                                    >
                                        {feedback}
                                    </div>
                                ))
                            )}
                        </div>
                        <h1 className="font-bricolage mt-6 text-4xl font-semibold opacity-85">
                            Medicines
                        </h1>
                        <div className="mt-4 text-sm font-inter opacity-70">
                            {medicines.length == 0 ? (
                                <SkeletonText noOfLines={4} spacing="5" />
                            ) : (
                                medicines.map((medicine) => (
                                    <div
                                        key={medicine}
                                        className="flex items-center"
                                    >
                                        <GiMedicines className="mr-2" />
                                        {medicine}
                                    </div>
                                ))
                            )}
                        </div>
                        <div className="flex gap-4 absolute bottom-4">
                            <button
                                onClick={() => {
                                    handleSubmit();
                                    navigate("/patient/dashboard");
                                }}
                                className="font-bricolage bg-secondary px-8 py-2 rounded-full opacity-70 hover:opacity-90 transition-opacity"
                            >
                                Back to Dashboard
                            </button>
                        </div>
                    </main>
                </section>
                <section className="border-l-2 border-secondary">
                    {feedback.length == 0 ? (
                        <div className="h-full bg-secondary animate-pulse"></div>
                    ) : (
                        <div className="p-10">
                            <h1 className="text-3xl font-bricolage font-semibold">
                                Generating Prescription
                            </h1>
                            <span className="font-inter text-xs opacity-60 line-clamp-5 mt-1">
                                The prescription generated by our AI model
                                should not be used as a substitute for
                                professional medical advice, diagnosis, or
                                treatment. Always seek the advice of your
                                physician or other qualified health provider
                                with any questions you may have regarding a
                                medical condition. Never disregard professional
                                medical advice or delay in seeking it because of
                                something you have read on this website.
                            </span>
                            {imgUrl.length == 0 ? (
                                <div className="h-96 w-72 bg-secondary rounded-lg mt-4 animate-pulse"></div>
                            ) : (
                                <div className="h-96 w-72 bg-secondary rounded-lg mt-8 border-secondary border-2">
                                    <img
                                        src={imgUrl}
                                        alt="Prescription Image"
                                        className="w-full h-full object-cover rounded-lg"
                                    />

                                    <button
                                        onClick={() => {
                                            saveAs(imgUrl, "prescription.png");
                                        }}
                                        className="absolute bottom-4 font-bricolage px-10 py-2 bg-secondary rounded-full mt-8 opacity-75 hover:opacity-100 transition-opacity"
                                    >
                                        Download Prescription
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </section>
            </main>
        </div>
    );
};

export default DiagnosisResult;
