import { useEffect, useState } from "react"
import Check from "../assets/Instagram Check Mark.svg" 
import Hospital from "../assets/Hospital.svg" 
import School from "../assets/School.svg" 
import Phone from "../assets/Phone.svg" 
import Mail from "../assets/Mail.svg" 
import Chat from "../assets/Chat.svg" 
import Profile from "../assets/profile.svg"
export default function DoctorDetails(props){

    // const [currDoctor, setCurrDoctor] = useState({name : props.currDoctor.name, healthSyncVerified : props.currDoctor.healthSyncVerified, job : props.currDoctor.job, education : props.currDoctor.education, about : props.currDoctor.about, number : props.currDoctor.number, email : props.currDoctor.email, patientsEnrolled : props.currDoctor.patientsEnrolled, expertIn : props.currDoctor.ExpertIn, responseTime : props.currDoctor.responseTime})


    return(
        <div className="p-10  flex gap-10 ">
            {/* <div className="w-3/4 flex flex-col gap-8">
                <div className="w-full bg-[#0f0f11] p-7 border-2 border-[#27272a] rounded-2xl">
                    <div className="flex items-center gap-4">
                        <div className="text-4xl font-semibold">{currDoctor.name}</div>
                        <div className="rounded-full h-4 w-4 bg-[#8ee886] opacity-80 mt-3"></div>
                    </div>
                    <div className="flex gap-3">
                        {
                            (props.healthSyncVerified === true) && 
                            <div className="text-xs bg-[#4d9af5] border-2 border-[#aeaeff] w-fit px-3 flex rounded-full py-1 gap-2 mt-3">
                                HealthSync Verified
                                    <img src={Check} alt="" />
                            </div>
                        }
                            <div className="text-xs border-2 border-[#52525c] w-fit px-3 flex items-center rounded-full py-1 gap-2 mt-3">
                                    <img src={Hospital} alt="" />
                                {currDoctor.job}
                            </div>
                            <div className="text-xs border-2 border-[#52525c] w-fit px-3 flex items-center rounded-full py-1 gap-2 mt-3">
                                <img src={School} alt="" />
                                {currDoctor.education}
                            </div>
                    </div>
                    <div className="text-xs opacity-75 mt-10 w-3/4">
                        {currDoctor.about}
                    </div>
                    <div>
                        <div className="py-4 text-3xl font-semibold mt-2">Contact</div>
                        <div className="flex gap-3">
                            <img src={Phone} alt="" name="number" />
                            <img src={Mail} alt="" name="email" />
                            <img src={Chat} alt="" name="chat" />
                        </div>
                    </div>
                </div>  
                <div className="flex gap-8">
                    <div className="w-1/3 bg-[#0f0f11] p-5 pb-10 border-2 border-[#27272a] rounded-2xl h-full">
                        <div className="text-3xl font-semibold">Total Patient Enrolled</div>
                        <div className="text-5xl mt-5 font-bold">{currDoctor.patientsEnrolled}</div>
                        <div className="opacity-50 text-sm ml-3 mt-2">with mostly positive reviews</div>
                    </div>
                    <div className="w-1/3 bg-[#0f0f11] p-5 border-2 border-[#27272a] rounded-2xl ">
                        <ul className="text-3xl font-semibold">Experts In</ul>
                        {
                            currDoctor.expertIn.map((expertise) => {
                                return(
                                    <li className="opacity-50 text-sm font-medium ml-3 mt-5">{expertise}</li>
                                )
                            })
                        }
                    </div>
                    <div className="w-1/3 bg-[#0f0f11] p-5 border-2 border-[#27272a] rounded-2xl ">
                        <div className="text-3xl font-semibold">Response Time</div>
                        <div className="opacity-50 text-xl font-medium mt-8">{currDoctor.responseTime}</div>
                    </div>
                </div>

            </div>
            <div className=" bg-[#0f0f11] h-[300px] w-[300px] rounded-full p-10 flex justify-center items-center">
                <img src={Profile} className="" alt="" />
            </div> */}
            <div className="w-3/4 flex flex-col gap-8">
                <div className="w-full bg-[#0f0f11] p-7 border-2 border-[#27272a] rounded-2xl">
                    <div className="flex items-center gap-4">
                        <div className="text-4xl font-semibold">Amelia Anderson</div>
                        <div className="rounded-full h-4 w-4 bg-[#8ee886] opacity-80 mt-3"></div>
                    </div>
                    <div className="flex gap-3">
                        {
                            // (props.healthSyncVerified === true) && 
                            <div className="text-xs bg-[#4d9af5] border-2 border-[#aeaeff] w-fit px-3 flex rounded-full py-1 gap-2 mt-3">
                                HealthSync Verified
                                    <img src={Check} alt="" />
                            </div>
                        }
                            <div className="text-xs border-2 border-[#52525c] w-fit px-3 flex items-center rounded-full py-1 gap-2 mt-3">
                                    <img src={Hospital} alt="" />
                                AIIMS Delhi
                            </div>
                            <div className="text-xs border-2 border-[#52525c] w-fit px-3 flex items-center rounded-full py-1 gap-2 mt-3">
                                <img src={School} alt="" />
                                Manipal Institute of Medical
                            </div>
                    </div>
                    <div className="text-xs opacity-75 mt-10 w-3/4 font-inter">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In elementum congue blandit. Sed ac tellus fringilla, tincidunt metus id, luctus nisi. Vivamus pharetra quis nulla non aliquet. Vestibulum blandit ex non lorem euismod, et luctus urna porttitor. Fusce posuere, dolor sed feugiat volutpat, nunc sem lobortis leo, non blandit tortor arcu quis ex. Sed consequat blandit consequat. Proin sit amet tellus sit amet sem eleifend vestibulum. Vestibulum cursus sem id nisl elementum auctor. Suspendisse lectus tellus, luctus suscipit ante at, efficitur sodales purus. Morbi et magna id urna efficitur fermentum non a nibh. Donec vulputate tortor vel ultricies viverra.
                             
                    </div>
                    <div>
                        <div className="py-4 text-3xl font-semibold mt-2">Contact</div>
                        <div className="flex gap-3">
                            <img src={Phone} alt="" />
                            <img src={Mail} alt="" />
                            <img src={Chat} alt="" />
                        </div>
                    </div>
                </div>  
                <div className="flex gap-8">
                    <div className="w-1/3 bg-[#0f0f11] p-5 pb-10 border-2 border-[#27272a] rounded-2xl h-full">
                        <div className="text-3xl font-semibold">Total Patient Enrolled</div>
                        <div className="text-5xl mt-5 font-bold">145</div>
                        <div className="opacity-50 text-sm ml-3 mt-2">with mostly positive reviews</div>
                    </div>
                    <div className="w-1/3 bg-[#0f0f11] p-5 border-2 border-[#27272a] rounded-2xl ">
                        <ul className="text-3xl font-semibold">Experts In</ul>
                        <li className="opacity-50 text-sm font-medium ml-3 mt-5">Gastrology</li>
                        <li className="opacity-50 text-sm ml-3 font-medium mt-2">Diabetology</li>
                        <li className="opacity-50 text-sm ml-3 font-medium mt-2">Neurology</li>
                    </div>
                    <div className="w-1/3 bg-[#0f0f11] p-5 border-2 border-[#27272a] rounded-2xl ">
                        <div className="text-3xl font-semibold">Experts In</div>
                        <div className="opacity-50 text-xl font-medium mt-8">1 hours 15 min</div>
                    </div>
                </div>

            </div>
            <div className=" bg-[#0f0f11] h-[300px] w-[300px] rounded-full p-10 flex justify-center items-center">
                <img src={Profile} className="" alt="" />
            </div>
        </div>
    )
}