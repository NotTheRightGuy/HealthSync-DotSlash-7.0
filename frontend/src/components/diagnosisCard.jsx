import { useState } from "react";
import { useNavigate } from "react-router";

export default function DiagnosisCard(props) {
    const [diagnosis, _] = useState({
        id: props.id,
        disease: props.disease,
        date: props.date,
        probability: props.probability,
        feedback: props.feedback,
    });
    const formatedDate = new Date(diagnosis.date).toDateString();
    const feedback_array = diagnosis.feedback;
    const navigate = useNavigate();

    return (
        <div
            className="bg-[#0f0f11] rounded-3xl w-72 border-[1px] border-[#bfbfbf] font-inter hover:cursor-pointer"
            onClick={() => {
                navigate(`/patient/diagnosis/id/${diagnosis.id}`);
            }}
        >
            <div className="px-5 py-3 flex-col justify-between text-3xl font-medium font-bricolage">
                {diagnosis.disease}
                <div className="text-2xl font-medium text-gray-300 opacity-45">
                    {Math.round(diagnosis.probability)}%
                </div>
            </div>
            <div className="border-t-2 border-[#bfbfbf] border-opacity-50" />
            <div className="px-5 py-3">
                <p className="text-sm font-medium opacity-50">
                    {feedback_array.map((feedback, index) => {
                        return (
                            <span key={index}>
                                {feedback}
                                <br />
                            </span>
                        );
                    })}
                </p>
            </div>
            <hr className="opacity-50" />
            <div className="px-5 py-2">
                <p className="text-sm font-medium opacity-50">
                    Diagnosed on {formatedDate}
                </p>

                <div className="flex justify-between items-center mt-2">
                    <div className="text-xs font-medium opacity-40">
                        View Details
                    </div>
                    <div className="text-xs font-medium opacity-75">→</div>
                </div>
            </div>
        </div>
    );
}
