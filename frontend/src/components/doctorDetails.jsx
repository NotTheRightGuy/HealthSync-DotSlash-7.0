import { useState } from "react"
import Check from "../assets/Instagram Check Mark.png" 
export default function DoctorDetails(props){

    // const [currDoctor, setCurrDoctor] = useState({name : props.currDoctor.name, healthSyncVerified : props.currDoctor.healthSyncVerified, job : props.currDoctor.job, education : props.currDoctor.education, about : props.currDoctor.about, number : props.currDoctor.number, email : currDoctor.email})

    return(
        <div className="p-10 h-5/6">
            <div className="w-3/4 border-2 border-[#27272a] rounded-2xl">
                <div className="w-full bg-[#0f0f11]">
                    <div className="p-7 flex items-center gap-4">
                        <div className="text-5xl font-semibold">Amelia Anderson</div>
                        <div className="rounded-full h-4 w-4 bg-[#8ee886] opacity-80 mt-3"></div>
                    </div>
                    <div>
                        {
                            // (props.healthSyncVerified === true) && 
                            <div className="text-xs bg-[#4d9af5] border-2 border-[#aeaeff] w-fit px-5 flex ">
                                HealthSync Verified
                                    <img src={Check} alt="" />
                            </div>

                        }
                    </div>
                </div>
                <div>
                    <div className="w-1/3"></div>
                    <div className="w-1/3"></div>
                    <div className="w-1/3"></div>
                </div>

            </div>
            <div className="w-1/4">

            </div>
        </div>
    )
}