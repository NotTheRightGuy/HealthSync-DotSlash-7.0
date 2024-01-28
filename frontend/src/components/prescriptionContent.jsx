import PrescriptionCard from "./prescriptionCard";
import React, { useState } from "react";
export default function DiagnosisWithContent(props) {
    const [allDiagnosis, setAllDiagnosis] = useState([]);

    return (
        <div className="grid grid-cols-5 p-10 justify-items-center gap-10 bg-black ">
            <PrescriptionCard title="Father's Prescription" content="" />
            <PrescriptionCard title="Father's Prescription" content="" />
            <PrescriptionCard title="Father's Prescription" content="" />
            <PrescriptionCard title="Father's Prescription" content="" />
            <PrescriptionCard title="Father's Prescription" content="" />
            <PrescriptionCard title="Father's Prescription" content="" />
            <PrescriptionCard title="Father's Prescription" content="" />
        </div>
    );
}
