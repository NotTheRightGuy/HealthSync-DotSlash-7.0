import { useState } from "react";
import Gears from "../assets/Gears.svg";
import medDoc from "../assets/Medical Doctor.svg";
import { useNavigate } from "react-router-dom";
import DiagnosisCard from "./diagnosisCard";
const Diagnosis = () => {
    const [diagnosis, setDiagnosis] = useState([]);
    const navigate = useNavigate();
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
            <div className="mt-20">
                <div className="flex flex-col gap-10 items-center">
                    {diagnosis.map((diagnosis) => {
                        return (
                            <DiagnosisCard
                                key={diagnosis.id}
                                id={diagnosis.id}
                                disease={diagnosis.disease}
                                date={diagnosis.date}
                                probability={diagnosis.probability}
                                symptoms={diagnosis.symptoms}
                                remark={diagnosis.remark}
                                needFeedback={diagnosis.needFeedback}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }
};

export default Diagnosis;
