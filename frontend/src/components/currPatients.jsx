import DiagnosisCard from "./doctorPatientCard";
export default function DiagnosisWithContent({ allPatients }) {
    return (
        <div className="p-10">
            {allPatients.map((patient) => {
                return (
                    <DiagnosisCard
                        key={patient._id}
                        id={patient._id}
                        name={patient.firstName + " " + patient.lastName}
                        age={patient.age}
                        bloodGroup={patient.bloodGroup}
                    />
                );
            })}
        </div>
    );
}
