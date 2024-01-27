import PatientDashboardNavbar from "../components/patientDashboardNavbar"
import finDocs from '../assets/financial documents.png';
import { useState } from "react";
import PrescriptionContent from "../components/prescriptionContent";

export default function Diagnosis(props) {
    const [prescriptions, setPrescriptions] = useState(true)

    const uploadPrescriptions = () => {
        console.log("prescriptions Called")
    }
    return (
        <div className="h-full">
            <PatientDashboardNavbar
                links={[
                    {name: "Diagnosis", path: "/patientDashboard/diagnosis"},
                    {name: "Prescriptions", path: "/patientDashboard/prescriptions"},
                    {name: "Your Doctor", path: "/patientDashboard/yourDoctor"},
                    {name: "AI Chatbot", path: "/patientDashboard/chatbot"},
                ]}
                currPage = "Prescriptions"
            />
            {
                prescriptions === true ?
                <PrescriptionContent 
                    currPage = "prescriptions"
                /> : 
                <div className="flex flex-col gap-7 justify-center items-center text-xs h-5/6 font-medium">
                    
                    <div className='flex w-full gap-10 justify-center'>
                        <div className="flex flex-col items-center w-1/6">
                            <div>
                                <img className='h-64' src={finDocs}  alt="" />
                            </div>
                            <div className='opacity-50'>
                                Keep all your prescriptions at one place
                            </div>
                        </div>
                    </div>
                    <div className='border-2 border-gray-800 rounded-2xl px-12 p-2 text-xs text-white opacity-80 hover:cursor-pointer hover:opacity-100 ' onClick={uploadPrescriptions}>
                        Upload Prescriptions
                    </div>
                </div>
            }
        </div>
    )
}