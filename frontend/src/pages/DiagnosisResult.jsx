import { useState, useEffect } from "react";
import { FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import currentDiagnosis from "../recoil/currentDiagnosis";
import currentUser from "../recoil/currentUser";
import { SkeletonText } from "@chakra-ui/react";

const DiagnosisResult = () => {
    const diagnosis = useRecoilValue(currentDiagnosis);
    const user = useRecoilValue(currentUser);
    const navigate = useNavigate();
    const [diagnosisResult, setDiagnosisResult] = useState({});
    const [feedback, setFeedback] = useState("");

    useEffect(() => {
        console.log(user);
        console.log(diagnosis);
        fetch("http://localhost:5000/predict", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: localStorage.getItem("token"),
            },
            body: JSON.stringify({
                symptoms: diagnosis.symptoms,
            }),
        }).then(async (res) => {
            const data = await res.json();
            setDiagnosisResult(data);
        });
    }, []);

    function handleSubmit() {}

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
                            {Math.round(diagnosisResult?.confidence)}%
                        </h1>

                        <h1 className="font-bricolage mt-6 text-5xl font-semibold opacity-85">
                            Feedback
                        </h1>
                        <div className="mt-4 text-sm font-inter opacity-70">
                            {feedback.length == 0 ? (
                                <SkeletonText noOfLines={6} spacing="5" />
                            ) : (
                                feedback.response
                            )}
                        </div>

                        <button
                            onClick={handleSubmit}
                            className="self-end absolute bottom-4 font-bricolage bg-secondary px-8 py-2 rounded-full opacity-70 hover:opacity-90 transition-opacity"
                        >
                            Continue
                        </button>
                    </main>
                </section>
            </main>
        </div>
    );
};

export default DiagnosisResult;
