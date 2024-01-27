import React from "react";
import { CiCircleRemove } from "react-icons/ci";

const SelectedSymptom = ({ name, setSymptoms }) => {
    return (
        <>
            <div className="font-inter text-sm opacity-75 bg-secondary px-2 py-1 rounded-full flex gap-2">
                <p>{name}</p>
                <button
                    onClick={() => {
                        setSymptoms((prev) =>
                            prev.filter((symptom) => symptom.name !== name)
                        );
                    }}
                >
                    <CiCircleRemove />
                </button>
            </div>
        </>
    );
};

export default SelectedSymptom;
