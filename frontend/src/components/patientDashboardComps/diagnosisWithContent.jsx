
import PatientDiagnosisCard from "../diagnosisCard"
import React, {useState} from 'react'
export default function DiagnosisWithContent(){
    const [allDiagnosis, setAllDiagnosis] = useState([])

    return(
        <div className="grid grid-cols-4 p-10">
            {/* {
                allDiagnosis.map(
                    (diagnosis) => {
                        <patientDiagnosisCard
                            disease = {diagnosis.disease}
                            date = {diagnosis.date}
                            symptoms = {diagnosis.symptoms}
                            doctorsRemark = {diagnosis.doctorsRemark}
                            severity = {diagnosis.severity}
                        />
                    }

                )
            } */}

            <PatientDiagnosisCard
                disease = "Dengue"
                date = "21/12/2024"
                symptoms = {["Headache", "Pain Behind the Eye", "Mild fever", "Rash"]}
                remark = "Awaiting Doctor's Check"
                severity = "3"
            />

        </div>
    )
}