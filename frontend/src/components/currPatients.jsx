import PatientDiagnosisCard from "./diagnosisCard"
import React, {useState} from 'react'
import DoctorPatientCard from "./doctorPatientCard"
export default function DiagnosisWithContent(props){
    const [allPatients, setAllPatients] = useState(props.allPatients)

    return(
        <div className="grid grid-cols-3 p-10 justify-items-center gap-10 bg-black ">
            {/* {
                allPatients.map(
                    (patient) => {
                        <DoctorPatientCard
                            name = {patient.name}
                            age = {patient.age}
                            bloodGroup = {patient.bloodGroup}
                            priorIllnesses = {patient.priorIllnesses}
                            status = {patient.status}
                        />
                    }
                )
            } */}
            <DoctorPatientCard
                name = "John Doe"
                age = "21"
                bloodGroup = "A+"
                priorIllnesses = {["Dengue", "Malaria"]}
                status = "Awaiting Diagnosis"
            />
            <DoctorPatientCard
                name = "John Doe"
                age = "21"
                bloodGroup = "A+"
                priorIllnesses = {["Dengue", "Malaria"]}
                status = "Awaiting Diagnosis"
            />
            <DoctorPatientCard
                name = "John Doe"
                age = "21"
                bloodGroup = "A+"
                priorIllnesses = {["Dengue", "Malaria"]}
                status = "Awaiting Diagnosis"
            />
            <DoctorPatientCard
                name = "John Doe"
                age = "21"
                bloodGroup = "A+"
                priorIllnesses = {["Dengue", "Malaria"]}
                status = "Awaiting Diagnosis"
            />
            <DoctorPatientCard
                name = "John Doe"
                age = "21"
                bloodGroup = "A+"
                priorIllnesses = {["Dengue", "Malaria"]}
                status = "Awaiting Diagnosis"
            />
            <DoctorPatientCard
                name = "John Doe"
                age = "21"
                bloodGroup = "A+"
                priorIllnesses = {["Dengue", "Malaria"]}
                status = "Awaiting Diagnosis"
            />

            

        </div>
    )
}