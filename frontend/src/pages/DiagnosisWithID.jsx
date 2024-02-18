import { GiMedicines } from "react-icons/gi";
import { SkeletonText } from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { saveAs } from "file-saver";

const DiagnosisWithID = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [diagnosis, setDiagnosis] = useState({});
    useEffect(() => {
        fetch(
            `http://ec2-52-66-237-98.ap-south-1.compute.amazonaws.com:3000/api/v1/patient/diagnosis/${id}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: localStorage.getItem("token"),
                },
            }
        )
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setDiagnosis(data.diagnosis);
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
                            {diagnosis.diagnosis_name ? (
                                diagnosis.diagnosis_name
                            ) : (
                                <SkeletonText noOfLines={1} />
                            )}
                        </h1>
                        <p className="mt-6 text-xs opacity-55 font-inter">
                            We can say this with a certanity of
                        </p>
                        <h1 className="text-4xl font-bricolage mt-1 opacity-90">
                            {diagnosis.diagnosis_confidence ? (
                                diagnosis.diagnosis_confidence + "%"
                            ) : (
                                <SkeletonText noOfLines={1} />
                            )}
                        </h1>

                        <h1 className="font-bricolage mt-6 text-5xl font-semibold opacity-85">
                            Feedback
                        </h1>
                        <div className="mt-4 text-sm font-inter opacity-70">
                            {diagnosis.feedback ? (
                                diagnosis.feedback.map((feedback, index) => {
                                    return (
                                        <span key={index}>
                                            {feedback}
                                            <br />
                                        </span>
                                    );
                                })
                            ) : (
                                <SkeletonText noOfLines={2} />
                            )}
                        </div>
                        <h1 className="font-bricolage mt-6 text-4xl font-semibold opacity-85">
                            Medicines
                        </h1>
                        <div className="mt-4 text-sm font-inter opacity-70">
                            {diagnosis.medicines ? (
                                diagnosis.medicines.map((medicine, index) => {
                                    return (
                                        <span key={index}>
                                            {medicine}
                                            <br />
                                        </span>
                                    );
                                })
                            ) : (
                                <SkeletonText noOfLines={2} />
                            )}
                        </div>
                        <div className="flex gap-4 absolute bottom-4">
                            <button
                                onClick={() => {
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
                    {diagnosis ? (
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
                            {diagnosis.prescriptionURL ? (
                                <div className="h-96 w-72 bg-secondary rounded-lg mt-8 border-secondary border-2">
                                    <img
                                        src={diagnosis.prescriptionURL}
                                        alt="Prescription Image"
                                        className="w-full h-full object-cover rounded-lg"
                                    />

                                    <button
                                        onClick={() => {
                                            saveAs(
                                                diagnosis.prescriptionURL,
                                                "prescription.png"
                                            );
                                        }}
                                        className="absolute bottom-4 font-bricolage px-10 py-2 bg-secondary rounded-full mt-8 opacity-75 hover:opacity-100 transition-opacity"
                                    >
                                        Download Prescription
                                    </button>
                                </div>
                            ) : (
                                <div className="h-96 w-72 bg-secondary rounded-lg mt-4 animate-pulse"></div>
                            )}
                        </div>
                    ) : (
                        <div className="h-full bg-secondary animate-pulse"></div>
                    )}
                </section>
            </main>
        </div>
    );
};

export default DiagnosisWithID;
