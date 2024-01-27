import { useEffect,useState } from "react"
import PatientDashboardNavbar from "../components/patientDashboardNavbar"
import DoctorDetails from "../components/doctorDetails"

export default function Diagnosis(props) {

    const [currDoctor, setCurrDoctor] = useState({})

    useEffect(() => {

        // fetch(`http://localhost:5000/doctor/${props.currDoctorId}`)
        // .then(res => res.json())
        // .then(data => {
        //     setCurrDoctor(data)
        // })

    }, [])

    return (
        <div className="h-full">
            <PatientDashboardNavbar
                links={[
                    {name: "Diagnosis", path: "/patientDashboard/diagnosis"},
                    {name: "Prescriptions", path: "/patientDashboard/prescriptions"},
                    {name: "Your Doctor", path: "/patientDashboard/yourDoctor"},
                    {name: "AI Chatbot", path: "/patientDashboard/chatbot"},
                ]}
                currPage = "Your Doctor"
            />
            <DoctorDetails
                currDoctor = {currDoctor}
            />
        </div>
    )
}