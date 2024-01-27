import { useState } from "react";
import { FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { useQuery } from "react-query";
import axios from "axios";
import currentDiagnosis from "../recoil/currentDiagnosis";
import currentUser from "../recoil/currentUser";

const DiagnosisResult = () => {
    const [diagnosis] = useRecoilState(currentDiagnosis);
    const [user] = useRecoilState(currentUser);
    const navigate = useNavigate();

    const [diagnosisResult, setDiagnosisResult] = useState({});
    const [feedback, setFeedback] = useState("");

    function handleSubmit() {
        const newDiagnosis = {
            patientID: user._id,
            symptoms: diagnosis.symptoms,
            disease: diagnosisResult.prediction,
            probability: diagnosisResult.confidence,
            modelFeedback: feedback.response,
            notes: diagnosis.additionalNotes,
        };
        axios
            .post(
                "http://localhost:3000/api/v1/diagnosis/upload",
                newDiagnosis,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `${localStorage.getItem("token")}`,
                    },
                }
            )
            .then((res) => {
                console.log(res.data);
                navigate("/patientDashboard/diagnosis");
            });
    }

    const { isLoading, error, data } = useQuery("diagnosisResult", () => {
        axios
            .post(
                "http://localhost:3000/api/v1/diagnosis/predict",
                {
                    symptoms: diagnosis.symptoms,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `${localStorage.getItem("token")}`,
                    },
                }
            )
            .then((res) => {
                setDiagnosisResult(res.data);
                const message = `I think I'm suffering ${res.data.prediction} and I'm feeling ${res.data.confidence}
                sure about it. I have sent the diagnosis report to my doctor but in the mean time, 
                I would like to get your feedback on this. Provide me any medicines out there which are used to cure it?
                Any home remedies available? Be concise, upto point and don't repeat yourself.
                `;
                axios
                    .post(
                        "http://localhost:3000/api/v1/diagnosis/chat",
                        {
                            message: message,
                        },
                        {
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: `${localStorage.getItem(
                                    "token"
                                )}`,
                            },
                        }
                    )
                    .then((res) => {
                        setFeedback(res.data);
                    });
            });
    });

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
                            {isLoading
                                ? "Loading..."
                                : diagnosisResult.prediction}
                        </h1>
                        <p className="mt-6 text-xs opacity-55 font-inter">
                            We can say this with a certanity of
                        </p>
                        <h1 className="text-4xl font-bricolage mt-1 opacity-90">
                            {isLoading
                                ? "Loading..."
                                : Math.round(diagnosisResult.confidence)}
                            %
                        </h1>

                        <h1 className="font-bricolage mt-6 text-5xl font-semibold opacity-85">
                            Feedback
                        </h1>
                        <p className="mt-4 text-sm font-inter opacity-70">
                            {feedback.length == 0 ? (
                                <div>Loading...</div>
                            ) : (
                                feedback.response
                            )}
                        </p>

                        <button
                            onClick={handleSubmit}
                            className="self-end absolute bottom-4 font-bricolage bg-secondary px-8 py-2 rounded-full opacity-70 hover:opacity-90 transition-opacity"
                        >
                            Continue
                        </button>
                    </main>
                </section>
                <div className="blur-md">
                    <section className="bg-[#232328] border-l-2 border-secondary h-full p-10">
                        <div className="bg-secondary w-full h-64 rounded-xl"></div>
                        <div className="mt-5">
                            <h1 className="font-white text-3xl font-bricolage font-bold">
                                Diagnosis Result
                            </h1>
                            <p className="font-inter opacity-50 text-sm">
                                Your doctor will provide his feedback soon.
                            </p>
                        </div>
                    </section>
                </div>
                <div className="absolute w-fit h-fit text-sm text-center right-[15%] top-[45%] font-bricolage opacity-65">
                    <FaLock className="ml-32 text-2xl" />
                    <br />
                    You will be able to access this section,
                    <br />
                    once your doctor has provided his feedback
                </div>
            </main>
        </div>
    );
};

export default DiagnosisResult;
