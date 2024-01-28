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
        },
    ];

    const [selectedPatient, setSelectedPatient] = useState("");
    const [getPatient, setGetPatient] = useState(false);

    useEffect(() => {
        console.log(selectedPatient);
    }, [selectedPatient]);

    return (
        <div className="p-10">
            {!getPatient &&
                allPatients.map((patient) => {
                    return (
                        <div key={patient._id}>
                            <DiagnosisCard
                                key={patient._id}
                                id={patient._id}
                                name={
                                    patient.firstName + " " + patient.lastName
                                }
                                age={patient.age}
                                bloodGroup={patient.bloodGroup}
                            />
                        </div>
                    );
                })}
            {getPatient && (
                <div>
                    <PatientDetails _id={selectedPatient} />
                </div>
            )}
        </div>
    );
}
