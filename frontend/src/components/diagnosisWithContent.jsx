import PatientDiagnosisCard from "./diagnosisCard";
import { IoAddCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router";
export default function DiagnosisWithContent({ diagnosis }) {
    const navigate = useNavigate();
    return (
        <div className="grid grid-cols-4 p-10 justify-items-center gap-10 bg-black">
            {diagnosis.map((diagnosis, index) => {
                const formattedDate = new Date(diagnosis.date);
                return (
                    <PatientDiagnosisCard
                        disease={diagnosis.disease}
                        probability={diagnosis.probability}
                        date={`${formattedDate.getDate()}/${
                            formattedDate.getMonth() + 1
                        }/${formattedDate.getFullYear()}`}
                        symptoms={diagnosis.symptoms}
                        remark={diagnosis.doctorRemark}
                        needFeedback={diagnosis.needFeedback}
                        visit={diagnosis.visit}
                        key={index}
                    />
                );
            })}

            <button
                className="absolute bottom-10 right-10"
                onClick={() => {
                    navigate("/patientDashboard/diagnosis-form");
                }}
            >
                <IoAddCircleOutline className="text-7xl text-white opacity-70" />
            </button>
        </div>
    );
}
