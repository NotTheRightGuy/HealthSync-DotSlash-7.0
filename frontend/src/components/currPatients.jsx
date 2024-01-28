import DiagnosisCard from "./doctorPatientCard";
import { useState, useEffect } from "react";
import PatientDetails from "./patientDetails";

export default function DiagnosisWithContent({ allPatients }) {

    const tempPatients = [
        {
            _id: "1",
            firstName: "John",
            lastName: "Doe",
            age: "25",
            bloodGroup: "A+",
        },
        {
            _id: "2",
            firstName: "John",
            lastName: "Doe",
            age: "25",
            bloodGroup: "A+",
        },
        {
            _id: "3",
            firstName: "John",
            lastName: "Doe",
            age: "25",
            bloodGroup: "A+",
        },
        {
            _id: "4",
            firstName: "John",
            lastName: "Doe",
            age: "25",
            bloodGroup: "A+",
        },
        {
            _id: "5",
            firstName: "John",
            lastName: "Doe",
            age: "25",
            bloodGroup: "A+",
        }
    ];

    const [selectedPatient, setSelectedPatient] = useState("");
    const [getPatient, setGetPatient] = useState(false);

    useEffect(() => {
        console.log(selectedPatient);
    }, [selectedPatient]);

    const changeSelectedPatient = (e) => {
        console.log("selected")
        console.log(e.currentTarget.querySelector(".currP").innerHTML);
        setSelectedPatient(e.currentTarget.querySelector(".currP").innerHTML);
        setGetPatient(true);
    }

    return (
        <div className="p-10">
            {!getPatient && tempPatients.map((patient) => {
                return (
                    <div key={patient._id} onClick={changeSelectedPatient}>
                        <div className="currP hidden">{patient._id}</div>
                        <DiagnosisCard
                            key={patient._id}
                            id={patient._id}
                            name={patient.firstName + " " + patient.lastName}
                            age={patient.age}
                            bloodGroup={patient.bloodGroup}
                            />
                    </div>
                );
            })}
            {
                getPatient && <div>
                    <PatientDetails
                        _id={selectedPatient}
                    /> 
                </div>
            }
        </div>
    );
}
