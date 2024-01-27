import PatientDashboardNavbar from "../components/patientDashboardNavbar"
import PatientsInBed from "../assets/patient in bed.svg"
import { useEffect, useState } from "react"
export default function doctorDashboard() {
    const [currPatients, setCurrPatients] = useState([])
    console.log(currPatients)
    console.log(currPatients.length)
    useEffect(() => {
        // fetch("http://localhost:5000/doctor/1")
        // .then(res => res.json())
        // .then(data => {
        //     console.log(data)
        //     setCurrPatients(data.patients)
        // })
        // .catch(err =>{ 
        //     console.log(err)
        // })
    }, [])
    return (
        <div>
            <PatientDashboardNavbar
                links={[
                    {name: "Patients", path: "/doctorDashboard/patients"},
                    {name: "Articles", path: "/doctorDashboard/articles"},
                ]}
                currPage = "Patients"
            />
            {
                (currPatients.length > 0) && <CurrPatients/>
                // console.log(currPatients)
            }
            {
                !currPatients && 
                <div>
                    <img src={PatientsInBed} alt="" />
                </div>

            }
        </div>
    )
}   