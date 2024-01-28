import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CiMenuKebab } from "react-icons/ci";

export default function PatientDashboardNavbar(props) {
    const [currComponent, setCurrComponent] = useState("Diagnosis");
    const navigate = useNavigate();

    const changeComponent = (e) => {
        navigate(e.target.attributes.name.value);
    };

    return (
        <div className="">
            <div className="flex justify-between px-10 py-3 font-normal items-center">
                <a href="/">
                    <div className="font-bricolage text-2xl cursor-pointer">
                        Health
                        <span className="font-medium">Sync </span>
                    </div>
                </a>

                <div className="flex gap-8 text-base">
                    {props.links.map((link) => {
                        return (
                            <div
                                key={link.path}
                                className={
                                    props.currPage === link.name
                                        ? "font-medium text-white h-fit cursor-pointer "
                                        : "text-white opacity-65 hover:opacity-100 h-fit cursor-pointer "
                                }
                                onClick={changeComponent}
                                name={link.path}
                            >
                                {link.name}
                            </div>
                        );
                    })}
                </div>
                <div className="user">
                    <div className="flex p-3 rounded-2xl border-2 border-[#0f0f11]">
                        <div className="flex gap-5 items-center">
                            <div className="rounded-2xl bg-gray-300">
                                <div className="h-10 w-10 bg-gradient-to-b from-[#d13636] to-[#d9d9d9] rounded-xl"></div>
                            </div>
                            <div className="font-medium opacity-65">
                                John Doe
                            </div>
                            <CiMenuKebab className="text-secondary" />
                        </div>
                    </div>
                </div>
            </div>
            <hr className="border-0 border-t-2 border-[#0f0f11]" />
        </div>
    );
}
