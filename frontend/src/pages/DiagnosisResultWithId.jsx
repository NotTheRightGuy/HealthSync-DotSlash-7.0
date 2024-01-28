import { useState, useEffect } from "react";
import { FaLock } from "react-icons/fa";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const DiagnosisResultWithId = () => {
    const diagnosisID = useParams().id;
    const [diagnosis, setDiagnosis] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`http://localhost:3000/api/v1/diagnosis/get/${diagnosisID}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `${localStorage.getItem("token")}`,
                },
            })
            .then((res) => {
                console.log(res.data);
                setDiagnosis(res.data.diagnosis);
            });
    }, []);

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
                            {diagnosis.disease}
                        </h1>
                        <p className="mt-6 text-xs opacity-55 font-inter">
                            We can say this with a certanity of
                        </p>
                        <h1 className="text-4xl font-bricolage mt-1 opacity-90">
                            {Math.round(diagnosis.probability)}%
                        </h1>

                        <h1 className="font-bricolage mt-6 text-5xl font-semibold opacity-85">
                            Feedback
                        </h1>
                        <p className="mt-4 text-sm font-inter opacity-70">
                            {diagnosis.modelFeedback}
                        </p>

                        <button
                            onClick={() => {
                                navigate("/patientDashboard/diagnosis");
                            }}
                            className="self-end absolute bottom-4 font-bricolage bg-secondary px-8 py-2 rounded-full opacity-70 hover:opacity-90 transition-opacity"
                        >
                            Back to Dashboard
                        </button>
                    </main>
                </section>
                {diagnosis.needFeedback ? (
                    <>
                        {" "}
                        <div className="blur-md">
                            <section className="bg-[#232328] border-l-2 border-secondary h-full p-10">
                                <div className="bg-secondary w-full h-64 rounded-xl"></div>
                                <div className="mt-5">
                                    <h1 className="font-white text-3xl font-bricolage font-bold">
                                        Diagnosis Result
                                    </h1>
                                    <p className="font-inter opacity-50 text-sm">
                                        Your doctor will provide his feedback
                                        soon.
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
                        </div>{" "}
                    </>
                ) : (
                    <div className="p-10">
                        <h1 className="font-bricolage text-4xl font-bold opacity-75">
                            Doctor's Feedback
                        </h1>

                        <h1 className="font-bricolage text-3xl font-bold opacity-80 mt-14">
                            Doctor's remark
                        </h1>
                        <p className="">{diagnosis.doctorFeedback}</p>
                        <h1 className="font-bricolage text-3xl font-bold opacity-80 mt-14">
                            Generated Prescription
                        </h1>
                        <p className="font-inter text-sm">
                            {diagnosis.doctorPres}
                        </p>
                    </div>
                )}
            </main>
        </div>
    );
};

export default DiagnosisResultWithId;
