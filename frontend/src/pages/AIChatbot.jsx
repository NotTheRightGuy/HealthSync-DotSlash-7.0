import PatientDashboardNavbar from "../components/patientDashboardNavbar"

export default function Diagnosis(props) {
    return (
        <div className="h-full">
            <PatientDashboardNavbar
                links={[
                    {name: "Diagnosis", path: "/patientDashboard/diagnosis"},
                    {name: "Prescriptions", path: "/patientDashboard/prescriptions"},
                    {name: "Your Doctor", path: "/patientDashboard/yourDoctor"},
                    {name: "AI Chatbot", path: "/patientDashboard/chatbot"},
                ]}
                currPage = "AI Chatbot"
            />
        </div>
    )
}