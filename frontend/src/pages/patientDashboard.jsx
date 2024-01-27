import Navbar from "../components/navbar";
export default function patientDashboard(){
    return(
        <div>
            <Navbar
                linksmap={[
                    {name: "Diagnosis", path: "/"},
                    {name: "Prescription", path: "/prescription"},
                    {name: "Your Doctor", path: "/yourDoctor"},
                    {name: "FAQs", path: "/faqs"},
                    {name: "AI Chatbot", path: "/chatbot"},
                ]}
            />
        </div>
    )
}