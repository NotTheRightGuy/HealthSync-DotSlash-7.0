import { useState, useEffect } from "react";
import Gears from "../assets/Gears.png";
import medDoc from "../assets/Medical Doctor.png";
import { useNavigate } from "react-router-dom";
import DiagnosisCard from "./DiagnosisCard";
const Diagnosis = () => {
    const [diagnosis, setDiagnosis] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(
            "http://ec2-52-66-237-98.ap-south-1.compute.amazonaws.com:3000/api/v1/patient/get-diagnosis",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: localStorage.getItem("token"),
                },
            }
        )
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setDiagnosis(data.diagnosis);
            });
    }, []);

    if (diagnosis.length === 0) {
        return (
            <div className="mt-52">
                <div className="flex flex-col gap-12 justify-center items-center text-xs h-5/6 font-medium">
                    <div className="flex w-full gap-10 justify-center">
                        <div className="flex flex-col gap-4 items-center w-1/6">
                            <div>
                                <img className="h-24" src={Gears} alt="" />
                            </div>
                            <div className="opacity-50 text-center">
                                List your symptoms, and we'll help predict your
                                potential condition.
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 items-center w-1/6">
                            <div>
                                <img className="h-24" src={medDoc} alt="" />
                            </div>
                            <div className="opacity-50 text-center">
                                Our expert doctor will then review your
                                symptoms, and provide a diagnosis.
                            </div>
                        </div>
                    </div>
                    <div
                        onClick={() => {
                            navigate("/patient/diagnosis/form");
                        }}
                        className="border-2 border-gray-800 rounded-2xl px-12 p-2 text-xs text-white opacity-80 hover:cursor-pointer hover:opacity-100 "
                    >
                        Make Diagnosis
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="mt-2">
                <div className="p-10 grid gap-80 grid-cols-6">
                    {diagnosis.map((diagnosis) => {
                        return (
                            <DiagnosisCard
                                key={diagnosis.id}
                                id={diagnosis.id}
                                disease={diagnosis.diagnosis_name}
                                date={diagnosis.diagnosis_date}
                                probability={diagnosis.diagnosis_confidence}
                                feedback={diagnosis.feedback}
                            />
                        );
                    })}
                </div>
                <button className="absolute bottom-8 right-4">
                    <div
                        onClick={() => {
                            navigate("/patient/diagnosis/form");
                        }}
                        className="border-2 border-gray-800 rounded-2xl px-12 p-2 text-xs text-white opacity-80 hover:cursor-pointer hover:opacity-100 "
                    >
                        Make Diagnosis
                    </div>
                </button>
            </div>
        );
    }
};

export default Diagnosis;
