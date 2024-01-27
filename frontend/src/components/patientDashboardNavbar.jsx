import { useState } from "react"
import Diagnosis from "../pages/diagnosis"
import MenuVertical from "../assets/Menu Vertical.png";
import { useNavigate } from "react-router-dom";
// import Gears from '../assets/Gears.png';

export default function PatientDashboardNavbar(props){

    const [currComponent,setCurrComponent] = useState("Diagnosis")
    const navigate = useNavigate();
    console.log(currComponent,"curr")
    console.log(props.currPage,"page")

    const changeComponent = (e) => {

        console.log(e.target.attributes.name)
        navigate(e.target.attributes.name.value)
    }

    return (
        <div className="">
            <div className="flex justify-between px-8 py-3 font-normal items-center">
                <div className="font-bricolage text-2xl ">
                    Health
                    <span className="font-medium">Sync </span>
                </div>
                
                <div className="flex gap-8 text-base">
                    {
                        props.links.map((link) => {
                            return(
                                <div key={link.path} className={props.currPage === link.name ? "font-medium text-white h-fit " : "text-gray-400 hover:text-white h-fit cursor-pointer "} onClick={changeComponent} name={link.path}>
                                    {link.name}
                                </div>
                            )
                        })
                    }
                </div>
                <div className="user">
                    {/* <div className="flex gap-2 items-center">
                        <div className="w-10 h-10 rounded-full bg-gray-300">
                            <img src={props.userImage} alt="userImage" />
                            </div>
                        <div className="font-medium">
                        {props.userName}
                        </div>
                    </div> */}
                    <div className="flex p-3 rounded-2xl border-2 border-[#0f0f11]">
                        <div className="flex gap-2 items-center">
                            <div className="rounded-2xl bg-gray-300">
                                {
                                    props.userImage === true ?
                                    <img src={props.userImage} alt="userImage" /> 
                                    : <div className=" h-10 w-10 bg-gradient-to-[#D9D9D9] from-[#D13636] "></div>
                                }
                            </div>
                            <div className="font-medium opacity-65">
                                Janmejay Chatterjee
                            </div>
                            <div className="flex flex-col h-min">
                                ...
                                {/* <img src={MenuVertical} alt="" /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="border-0 border-t-2 border-[#0f0f11]" />

        </div>
    )   
}