import PatientDashboardNavbar from "../components/patientDashboardNavbar";
import Diagnosis from "../components/Diagnosis";
import { useState } from "react";

export default function PatientDashboard() {
    const [currentSection, setCurrentSection] = useState("diagnosis");
    return (
        <div className="h-full">
            <PatientDashboardNavbar
                currentSection={currentSection}
                setCurrentSection={setCurrentSection}
            />
            <Diagnosis />
            <div className="absolute bottom-0 w-screen h-4 border-t-2 border-secondary border-opacity-50"></div>
        </div>
    );
}
