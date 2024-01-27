import PatientDashboardNavbar from "../components/patientDashboardNavbar"
export default function PatientDashboard(){
    return(
        <div className="bg-black h-screen">
            <PatientDashboardNavbar
                links={[
                    {name: "Diagnosis", path: "/patientDashboard/diagnosis"},
                    {name: "Prescriptions", path: "/patientDashboard/prescriptions"},
                    {name: "Your Doctor", path: "/patientDashboard/yourDoctor"},
                    {name: "AI Chatbot", path: "/patientDashboard/chatbot"},
                ]}
            />
        </div>
    )
}