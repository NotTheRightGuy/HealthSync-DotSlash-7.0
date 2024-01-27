import { useState } from "react"

export default function DoctorDetails(props){

    // const [currDoctor, setCurrDoctor] = useState({name : props.currDoctor.name, healthSyncVerified : props.currDoctor.healthSyncVerified, job : props.currDoctor.job, education : props.currDoctor.education, about : props.currDoctor.about, number : props.currDoctor.number, email : currDoctor.email})

    return(
        <div className="p-10 h-5/6">
            <div className="w-3/4">
                <div className="w-full bg-[#27272a]">
                    <div>
                        <h1>Amelia Anderson</h1>
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