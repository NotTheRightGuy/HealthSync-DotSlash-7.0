import Identicon from "../assets/identicon.svg";
import Age from "../assets/Age.svg";
import Blood from "../assets/Drop of Blood.svg";
import Mail from "../assets/Mail.svg";
import Phone from "../assets/Phone.svg";
import { useEffect, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import PatientDiagnosisCard from "./diagnosisCard";

export default function PatientDetails(props) {
    const [modelCorrection, setModelCorrection] = useState(false);
    const [modelInCorrection, setModelInCorrection] = useState(false);
    const [patientdetails, setPatientDetails] = useState({ 
        firstName : "",
        lastName : "",
        age : "",
        bloodGroup : "",
        address : "",
        number : "",
        email : "",

    });
    const [alldiagnosis, setAllDiagnosis] = useState({
        
    });

    const sendFeedback = () => {
        console.log(props._id,"id")
    }

    useEffect(()=>{
        fetch(`http://localhost:3000/api/v1/patient/get-patient/${props._id}`,{
            method: "GET",
            headers: {
                Authorization: localStorage.getItem("token"),
            },
        })
        .then((res) => res.json())
        .then((data) => {
            setPatientDetails({...patientdetails, firstName : data.patient.firstName})
            setPatientDetails({...patientdetails, lastName : data.patient.lastName})
            setPatientDetails({...patientdetails, age : data.patient.age})
            setPatientDetails({...patientdetails, bloodGroup : data.patient.bloodGroup})
            setPatientDetails({...patientdetails, address : data.patient.address})
            setPatientDetails({...patientdetails, number : data.patient.phone})
            setPatientDetails({...patientdetails, email : data.patient.email})
            console.log(data)
        })
        .catch(
            (err) => console.log(err)
        )
        
        fetch(`http://localhost:3000/api/v1/diagnosis/get-diagnosis/${props._id}`,{
            method: "GET",
            headers: {
                Authorization: localStorage.getItem("token"),
            },
        })
        .then((res) => res.json())
        .then((data) => {
            setAllDiagnosis(data.diagnosis)
            console.log(data)
        })
        .catch(
            (err) => console.log(err)
        )



    },[])

    console.log(props);
    return (
        <div className="h-5/6 flex gap-[72px] bg-black">
            <a href="/doctorDashboard/patients">
                <div className="absolute top-24 left-5 opacity-60 hover:opacity-100 cursor-pointer">
                    <FaArrowLeftLong size={50} />
                </div>
            </a>
            <div className="w-3/12 flex flex-col gap-5">
                <div className="h-56 w-56 rounded-full flex justify-center items-center border-2 m-auto border-[#0f0f11]">
                    <img src={Identicon} className="h-32" alt="" />
                </div>
                <div className="text-center p-5 bg-[#0f0f11] border-2 border-[#27272a] flex flex-col gap-4 rounded-xl ">
                    <div className="text-xl font-medium">{patientDetails.name}</div>
                    {/* <div className="text-xl font-medium">
                        Janmejay Chatterjee
                    </div> */}
                    <div className="flex gap-2 justify-center">
                        <div className="age flex gap-2 items-center justify-center border-2 border-[#52525c] w-fit px-[5px] py-[1px] rounded-full text-xs ">
                            <div>
                                <img src={Age} className="h-3" alt="" />
                            </div>
                            <div className="opacity-65">{patientDetails.age}</div>
                            {/* <div className="opacity-65">20</div> */}
                        </div>
                        <div className="age flex gap-2 items-center justify-center border-2 border-[#52525c] w-fit px-[5px] py-[1px] rounded-full text-xs ">
                            <div>
                                <img src={Blood} className="h-3" alt="" />
                            </div>
                            <div className="opacity-65">{patientDetails.bloodGroup}</div>
                            {/* <div className="opacity-65">B+</div> */}
                        </div>
                    </div>
                    <div className="text-xs font-inter opacity-65 ">{patientDetails.address}</div>
                    {/* <div className="address text-xs font-inter opacity-65 ">
                        C-606, Tirupati Aakruti Greenz, Nr. Nirma University,
                        Charodi, Ahmedabad
                    </div> */}
                    <div className="flex items-center gap-2 justify-center w-full text-xs">
                        <img src={Mail} className="h-7" alt="" />
                        <div className="pacity-65">{patientDetails.email}</div>
                        {/* <div className="opacity-65">Janmejay@gmail.com</div> */}
                    </div>
                    <div className="flex items-center gap-2 justify-center w-full text-xs">
                        <img src={Phone} className="h-7" alt="" />
                        {/* <div className="opacity-65">9191919191</div> */}
                        <div className="opacity-65">{patientDetails.number}</div>
                    </div>
                    {/* <div> */}
                        {/* <div className="font-medium">Prior Chronic Illness</div>
                        <hr className="h-1 mt-1 bg-[#d9d9d9] opacity-50" />
                        <div className="nameOfIll gap-3 mt-2"> */}
                            {/* {
                                patientDetails.priorIllnesses.map((illness) => {
                                    return(
                                        <div key={illness} className="font-medium text-xs">{illness}</div>
                                    )
                                })
                            } */}
                            {/* <li className="nameOfIllness font-medium text-xs">
                                Diabetes
                            </li>
                            <li className="nameOfIllness font-medium text-xs">
                                Partial AMnesia{" "}
                            </li>
                            <li className="nameOfIllness font-medium text-xs">
                                High Blood Pressure
                            </li>
                        </div> */}
                    {/* </div> */}
                </div>
            </div>
            {diagnosis.map((diagnosis, index) => {
                const formattedDate = new Date(diagnosis.date);
                return (
                    <PatientDiagnosisCard
                        id={diagnosis._id}
                        disease={diagnosis.disease}
                        probability={diagnosis.probability}
                        date={`${formattedDate.getDate()}/${
                            formattedDate.getMonth() + 1
                        }/${formattedDate.getFullYear()}`}
                        symptoms={diagnosis.symptoms}
                        remark={diagnosis.doctorRemark}
                        needFeedback={diagnosis.needFeedback}
                        visit={diagnosis.visit}
                        key={index}
                    />
                );
            })}
        </div>
    );
}
