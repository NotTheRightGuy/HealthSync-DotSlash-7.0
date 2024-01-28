import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";

function DiagnosisCard({ diagnosis }) {
    return (
        <div
            className="bg-[#0f0f11] rounded-3xl w-72 border-[1px] border-[#bfbfbf] font-inter hover:cursor-pointer"
            onClick={() => {
                navigate(
                    `http://localhost:3000/api/v1/diagnosis/update/${diagnosis._id}`
                );
            }}
        >
            <div className="px-5 py-3 flex-col justify-between text-3xl font-medium h-24 font-bricolage">
                {diagnosis.disease}
                <div className="text-2xl font-medium text-gray-300 opacity-45">
                    {Math.round(diagnosis.probability)}%
                </div>
            </div>
            <hr className="opacity-50" />
            <div className="px-6 py-3">
                <p className="text-xs font-medium opacity-75 ">
                    Diagnosed on {diagnosis.date}
                </p>
                <ul className="mt-2 mb-4 text-white font-bricolage font-bold">
                    Listed Symptoms
                </ul>

                {diagnosis.symptoms.map((symptom) => {
                    return (
                        <li
                            className="text-sm opacity-75 px-2"
                            key={Math.random()}
                        >
                            {symptom}
                        </li>
                    );
                })}

                <p className="text-xl font-medium mt-10 text-white font-bricolage">
                    Doctor's Remark
                </p>
                {diagnosis.needFeedback ? (
                    <p className="text-sm font-inter text-yellow-300 font-medium">
                        Awaiting Doctor Check
                    </p>
                ) : (
                    <p className="text-sm font-inter text-green-300 font-medium">
                        Doctor Check Completed, Click to view
                    </p>
                )}
            </div>
        </div>
    );
}

const DoctorDashboardPatientsWithId = () => {
    const [diagnosis, setDiagnosis] = useState({});
    useEffect(() => {
        axios
            .get(`http://localhost:3000/api/v1/diagnosis/get-all`, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((res) => {
                console.log(res.data.diagnosis);
                setDiagnosis(res.data.diagnosis);
            });
    }, []);

    return (
        <div className="p-10">
            {diagnosis.map((dia, index) => {
                if (dia.needFeedback)
                    return <DiagnosisCard key={index} diagnosis={dia} />;
            })}
        </div>
    );
};

export default DoctorDashboardPatientsWithId;
