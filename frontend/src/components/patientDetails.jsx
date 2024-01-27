import Identicon from "../assets/identicon.svg";
import Age from "../assets/Age.svg";
import Blood from "../assets/Drop of Blood.svg";
import Mail from "../assets/Mail.svg";
import Phone from "../assets/Phone.svg";
import { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";


export default function PatientDetails(props) {

    const [modelCorrection, setModelCorrection] = useState(false)
    const [modelInCorrection, setModelInCorrection] = useState(false)

    console.log(props)
    return(
        <div className="h-5/6 w-screen p-10 flex gap-[72px]">
            <a href="/doctorDashboard/patients">
                <div className="absolute top-24 left-5 opacity-60 hover:opacity-100 cursor-pointer">
                    <FaArrowLeftLong
                        size={50}
                        />
                </div>
            </a>
            <div className="w-3/12 flex flex-col gap-5">

                <div className="h-56 w-56 rounded-full flex justify-center items-center border-2 m-auto border-[#0f0f11]">
                    <img src={Identicon} className="h-32" alt="" />
                </div>
                <div className="text-center p-5 bg-[#0f0f11] border-2 border-[#27272a] flex flex-col gap-4 rounded-xl ">
                    {/* <div className="text-xl font-medium">{props.name}</div> */}
                    <div className="text-xl font-medium">Janmejay Chatterjee</div>
                    <div className="flex gap-2 justify-center">
                        <div className="age flex gap-2 items-center justify-center border-2 border-[#52525c] w-fit px-[5px] py-[1px] rounded-full text-xs ">
                            <div>
                                <img src={Age} className="h-3" alt="" />
                            </div>
                            {/* <div className="opacity-65">{props.patient.age}</div> */}
                            <div className="opacity-65">20</div>
                        </div>
                        <div className="age flex gap-2 items-center justify-center border-2 border-[#52525c] w-fit px-[5px] py-[1px] rounded-full text-xs ">
                            <div>
                                <img src={Blood} className="h-3" alt="" />
                            </div>
                            {/* <div className="opacity-65">{props.patient.bloodGroup}</div> */}
                            <div className="opacity-65">B+</div>
                        </div>
                    </div>
                    {/* <div className="text-xs font-inter opacity-65 ">{props.patient.address}</div> */}
                    <div className="address text-xs font-inter opacity-65 ">
                        C-606, Tirupati Aakruti Greenz,
                        Nr. Nirma University, Charodi, Ahmedabad
                    </div>
                    <div className="flex items-center gap-2 justify-center w-full text-xs">
                            <img src={Mail} className="h-7" alt="" />
                        {/* <div className="pacity-65">{props.patient.email}</div> */}
                            <div className="opacity-65">Janmejay@gmail.com</div>
                    </div>
                    <div className="flex items-center gap-2 justify-center w-full text-xs">
                            <img src={Phone} className="h-7" alt="" />
                            <div className="opacity-65">9191919191</div>
                            {/* <div className="opacity-65">{props.patient.number}</div> */}
                    </div>
                    <div>
                        <div className="font-medium">Prior Chronic Illness</div>
                        <hr className="h-1 mt-1 bg-[#d9d9d9] opacity-50" />
                        <div className="nameOfIll gap-3 mt-2">
                            {/* {
                                props.priorIllnesses.map((illness) => {
                                    return(
                                        <div key={illness} className="font-medium text-xs">{illness}</div>
                                    )
                                })
                            } */}
                            <li className="nameOfIllness font-medium text-xs">Diabetes</li>
                            <li className="nameOfIllness font-medium text-xs">Partial AMnesia </li>
                            <li className="nameOfIllness font-medium text-xs">High Blood Pressure</li>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-3xl opacity-90 font-medium w-3/12">
                Prescription
                <div className="h-4/6 mt-5 w-full bg-[#0c0c0c] border-2 border-[#52525c] rounded-xl">

                </div>
            </div>
            <div className="flex flex-col gap-5">
                <div className="text-3xl opacity-90 font-medium">
                    <div>Model Diagnosis Report</div>
                    <div className="text-2xl mt-6 mb-2">Listed Symptomps </div>
                    {/* {
                        props.diagnosis.symptoms.map((symptom) => {
                            return(
                                <li key={symptom} className="font-inter text-sm opacity-65 ">{symptom}</li>
                            )
                        })
                    } */}
                    <li className="font-inter text-sm opacity-65 mt-2"> Pain Behind Eyes </li>
                    <li className="font-inter text-sm opacity-65 "> Skin Rashes </li>
                    <li className="font-inter text-sm opacity-65 "> Fever  </li>
                </div>
                <div className="text-3xl opacity-90 font-medium">
                    <div>Model Outcome</div>
                    <div className="text-sm opacity-85 mt-2">Diagnosis : 
                        <span> Dengue</span>
                        {/* <span>{props.diagnosis.disease}</span> */}
                    </div>
                    <div className="text-sm opacity-85 ">Confidence Level : 
                        <span>98.3</span>
                        {/* <span>{props.diagnosis.confidenceLevel}</span> */}
                    </div>
                    <div className="text-sm opacity-85 ">Severity : 
                        <span> 5</span>
                        {/* <span>{props.diagnosis.severity}</span> */}
                    </div>
                </div>
                <div className="text-3xl">
                    Does this model look correct to you ?
                    <form className="flex gap-6 items-center mt-5">
                            <input type="radio" id="html" name="fav_language" value="HTML">
                              <label for="html">HTML</label><br>
                            <input type="radio" className="accent-black w-4 h-4"
                                onClick={(e)=>{
                                    setModelCorrection(!modelCorrection)
                                }}/>
                            <span className="text-base ml-2 opacity-65">Yes</span>
                            <input type="radio" className=" w-4 h-4" 
                                onClick={(e)=>{setModelInCorrection(!modelInCorrection)
                                    console.log(e.target.checked)
                                }}/>
                            <span className="text-base ml-2 opacity-65">No</span>
                    </form>
                </div>
                {
                    modelCorrection ?
                    <div className="flex flex-col">
                        Additional Remarks
                        <textarea className="bg-transparent border-2 border-[#52525c] rounded-xl" name="" id="" cols="40" rows="5"></textarea>
                    </div>
                    : null

                }
                <div className="border-2 border-[#52525c] p-2 w-2/6 text-center rounded-full absolute right-10 bottom-10 hover:border-white cursor-pointer ">
                    Send Feedback
                </div>
            </div>
        </div>
    )
}