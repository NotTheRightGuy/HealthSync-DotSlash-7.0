import PatientDiagnosisCard from "./diagnosisCard"
import React, {useState} from 'react'
import DoctorPatientCard from "./doctorPatientCard"
import PatientDetails from "./patientDetails"
export default function DiagnosisWithContent(props){
    const [allPatients, setAllPatients] = useState(props.allPatients)

    const [goToPatientDetails, setGoToPatientDetails] = useState(false)
    const [selectedPatient, setSelectedPatient] = useState({})

    const patientDetails = (e) => {
        console.log(e.target,"child")
        setGoToPatientDetails(true)
    }

    return(
        <div>
            {
                goToPatientDetails ? <PatientDetails /> : 

                <div className="grid grid-cols-3 p-10 justify-items-center gap-10 bg-black ">
                    {/* {
                        allPatients.map(
                            (patient) => {
                                <div >
                                    <div className="hidden">
                                        {patient}
                                    </div>
                                    <DoctorPatientCard
                                        name = {patient.name}
                                        age = {patient.age}
                                        bloodGroup = {patient.bloodGroup}
                                        priorIllnesses = {patient.priorIllnesses}
                                        status = {patient.status}
                                    />
                                <div>
                            }
                            )
                        } */}
                    <div onClick = {patientDetails} className="w-10/12">
                        <DoctorPatientCard
                            name = "John Doe"
                            age = "21"
                            bloodGroup = "A+"
                            priorIllnesses = {["Dengue", "Malaria"]}
                            status = "Awaiting Diagnosis"
                            />
                    </div>
                    <div onClick = {patientDetails} className="w-10/12">

                        <DoctorPatientCard
                            name = "Not John Doe"
                            age = "22"
                            bloodGroup = "A+"
                            priorIllnesses = {["Dengue", "Malaria"]}
                            status = "Awaiting Diagnosis"
                            />
                    </div>
                    <div onClick = {patientDetails} className="w-10/12">
                        <DoctorPatientCard
                            name = "Maybe John Doe"
                            age = "6969"
                            bloodGroup = "A+"
                            priorIllnesses = {["Dengue", "Malaria"]}
                            status = "Awaiting Diagnosis"
                            />
                    </div>

                </div>
            }
        </div>
    )
}