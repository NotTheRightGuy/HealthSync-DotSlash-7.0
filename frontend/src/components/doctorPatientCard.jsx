import { useEffect, useState } from "react";
import Identicon from "../assets/identicon.svg";
import Age from "../assets/Age.svg";
import Blood from "../assets/Drop of Blood.svg";

export default function DiagnosisCard(props) {
    return (
        <div
            className="bg-[#0f0f11] rounded-3xl border-[1px] border-[#52525c] p-5 pr-10 flex flex-col gap-3 w-full hover:cursor-pointer"
            onClick={() => {
                window.location.href = "/doctorDashboard/patients/" + props.id;
            }}
        >
            <div className="flex gap-6">
                <div className="w-fit h-fit flex justify-center items-center rounded-full p-4 bg-black border-2 border-[#52525c]">
                    <img src={Identicon} alt="" />
                </div>
                <div className="patientInfo flex flex-col gap-2 justify-center">
                    <div className="name text-2xl">{props.name}</div>
                    <div className="flex gap-2">
                        <div className="age flex gap-2 items-center justify-center border-2 border-[#52525c] w-fit px-[5px] py-[1px] rounded-full text-xs ">
                            <div>
                                <img src={Age} className="h-3" alt="" />
                            </div>
                            <div className="opacity-65">{props.age}</div>
                        </div>
                        <div className="age flex gap-2 items-center justify-center border-2 border-[#52525c] w-fit px-[5px] py-[1px] rounded-full text-xs ">
                            <div>
                                <img src={Blood} className="h-3" alt="" />
                            </div>
                            <div className="opacity-65">{props.bloodGroup}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
