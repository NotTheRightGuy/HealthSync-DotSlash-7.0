import { useEffect, useState, useRef } from "react";
import { FaGithub } from "react-icons/fa6";
import PatientDashboardImg from "../assets/patientDashboard.svg";
import Grad from "../assets/Hero Shape.svg";
import Graph from "../assets/Graph.svg";
import Gears2 from "../assets/Gears2.svg";
import Robot from "../assets/Robot.svg";
import { useNavigate } from "react-router";
import { CiMenuKebab } from "react-icons/ci";

export default function Home() {
    const [currUser, setCurrUser] = useState({});
    const [loggedIn, setLoggedIn] = useState(false);

    const ft = useRef(null);
    const handleClick = () => {
        ft.current?.scrollIntoView({ behavior: "smooth" });
    };

    const navigate = useNavigate();

    useEffect(() => {
        // fetch("http://localhost:5000/api/v1/users/1")
        // .then((res) => res.json())
        // .then((data) => {
        //     setCurrUser(data)
        //     document.cookie = "LOGIN_INFO=" + data.token + ";max-age=60*60;path=/"
        //     setLoggedIn(true)
        // })
        // .catch((err) => console.log(err))
    }, []);

    const scrollToComponent = (e) => {
        // e.preventDefault();
        console.log("scroll To component ");
    };

    return (
        <div className="font-bricolage bg-black">
            <div className="flex justify-between px-10 py-3 font-normal items-center font-bricolage">
                <a href="/">
                    <div className="font-bricolage text-2xl cursor-pointer">
                        Health
                        <span className="font-medium">Sync </span>
                    </div>
                </a>

                <div className="flex gap-8 text-base">
                    <a href="/patientDashboard/diagnosis">
                        <div
                            className={
                                "font-medium text-white opacity-65 hover:opacity-100 h-fit cursor-pointer "
                            }
                            onClick={scrollToComponent}
                        >
                            Home
                        </div>
                    </a>
                    <div
                        className={
                            "font-medium text-white opacity-65 hover:opacity-100 h-fit cursor-pointer "
                        }
                        onClick={handleClick}
                    >
                        Features
                    </div>
                    <div
                        className={
                            "font-medium text-white opacity-65 hover:opacity-100 h-fit cursor-pointer "
                        }
                        onClick={scrollToComponent}
                        >
                        Mission
                    </div>
                    <div
                        className={
                            "font-medium text-white opacity-65 hover:opacity-100 h-fit cursor-pointer "
                        }
                        onClick={scrollToComponent}
                        >
                        FAQs
                    </div>
                    <a href="https://www.github.com/NotTheRightGuy/HealthSync-DotSlash-7.0">
                        <div
                            className={
                                "font-medium text-white opacity-65 hover:opacity-100 h-fit cursor-pointer "
                            }
                        >
                            Github
                        </div>
                    </a>
                </div>
                <div className="user">
                    <div className="flex p-3 rounded-2xl border-2 border-[#0f0f11]">
                        {loggedIn && (
                            <div className="flex gap-5 items-center">
                                <div className="rounded-2xl bg-gray-300">
                                    <div className="h-10 w-10 bg-gradient-to-b from-[#d13636] to-[#d9d9d9] rounded-xl"></div>
                                </div>

                                <div className="font-medium opacity-65">
                                    {currUser.fullName}
                                    {/* Janmejay Chatterjee */}
                                </div>
                                <CiMenuKebab className="text-secondary" />

                            </div>
                        )}
                        {!loggedIn && (
                            <div className="flex gap-2 justify-between items-center">
                                <a
                                    href="https://www.github.com/NotTheRightGuy/HealthSync-DotSlash-7.0"
                                    className="cursor-pointer"
                                >
                                    <FaGithub size={30}></FaGithub>
                                </a>    
                                <a href="/auth/login">
                                    <div className="border-2 border-white p-2 rounded-xl"> Get Started </div>
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <hr className="border-0 border-t-2 border-[#0f0f11]" />
            <div className="flex flex-col items-center gap-7 mt-16">
                <div className="bg-[#27272a] flex text-xs w-fit px-5 py-2 rounded-full items-center gap-2 border-2 border-[#3f3f46] cursor-pointer hover:border-[#a8a8a8]">
                    DotSlash 7.0
                    <FaGithub></FaGithub>
                </div>
                <div className="text-6xl font-medium">
                    Rethinking Medical Productivity
                </div>
                <div className="font-inter">
                    Welcome to the Future of Personalized Healthcare with our Integrated Patient Management System!
                </div>
                <div className="font-inter flex gap-10 z-10   ">
                    <div className="bg-[#27272a] text-xl w-fit px-8 py-3 rounded-md border-2 border-[#3f3f46] cursor-pointer hover:border-[#a8a8a8] " onClick={handleClick}>  
                        Features    
                    </div>
                    <a href="/auth/login">
                        <div className="bg-[#166fd8] text-xl w-fit px-8 py-3 rounded-md cursor-pointer hover:bg-blue-500">
                            Let's Begin
                        </div>
                    </a>
                </div>
            </div>
            <div className="flex justify-center items-center mt-20">
                <img
                    src={Grad}
                    className="absolute z-0 w-screen translate-y-16"
                    alt=""
                />
                <img src={PatientDashboardImg} className="z-10" />
            </div>
            <div
                className="flex flex-col items-center justify-center mt-44 gap-7"
                ref={ft}
            >
                <div>
                    <div className="text-6xl font-medium ">
                        {" "}
                        A New era of productivity{" "}
                    </div>
                    <div className="text-6xl font-medium text-center">
                        {" "}
                        begins
                    </div>
                </div>
                <div className="text-base font-inter">
                    {" "}
                    Harnessing the Power of Machine Learning for Predictive
                    Diagnosis and Personalized Prescriptions!
                </div>
            </div>
            <div className="flex mt-24 pr-12 pb-52">
                <div className="flex flex-col gap-12">
                    <div className="flex px-10 gap-10">
                        <div className="bg-[#0f0f11] flex flex-col gap-6 rounded-xl p-5 pr-10 w-5/12 border-2 border-[#52525c]">
                            <div className="w-fit">
                                <img src={Graph} className="h-12" alt="" />
                            </div>
                            <div className="text-3xl font-semibold">
                                Insights and Analytics
                            </div>
                            <div className="font-inter text-base font-light opacity-80">
                                Indulged in the art of procrastination all week?
                                Brace yourself for the truth: zero
                                accomplishments. Prepare to be awestruck
                            </div>
                        </div>
                        <div className="bg-[#0f0f11] flex flex-col gap-6 rounded-xl p-5 pb-14 pr-10 w-7/12 border-2 border-[#52525c]">
                            <div className="w-fit">
                                <img src={Gears2} className="h-12" alt="" />
                            </div>
                            <div>
                                <div className="text-3xl font-semibold">
                                    Powerful Machine Learning
                                </div>
                                <div className="text-3xl font-semibold">
                                    Models
                                </div>
                            </div>
                            <div className="font-inter text-base font-light opacity-80">
                                Our system leverages state-of-the-art machine
                                learning to analyze patient data, predict
                                diseases, and generate precise prescriptions,
                                ensuring a personalized and proactive approach
                                to your well-being.
                            </div>
                        </div>
                    </div>

                    <div className="flex px-10 gap-10">
                        <div className="bg-[#0f0f11] flex flex-col gap-6 rounded-xl p-5 pr-10 w-7/12 border-2 border-[#52525c]">
                            <div className="w-fit">
                                <img src={Graph} className="h-10" alt="" />
                            </div>
                            <div className="text-3xl font-semibold">
                                Appointment Management
                            </div>
                            <div className="font-inter text-base font-light opacity-80">
                                Our appointment management system ensures timely
                                and efficient healthcare access. Seamlessly
                                schedule appointments, whether virtual or
                                in-person, with the guidance of our integrated
                                platform. Experience the convenience of
                                personalized healthcare, optimized for your
                                well-being
                            </div>
                        </div>
                        <div className="bg-[#0f0f11] flex flex-col gap-6 rounded-xl p-5 pr-10 w-5/12 border-2 border-[#52525c]">
                            <div className="w-fit">
                                <img src={Graph} className="h-10" alt="" />
                            </div>
                            <div className="text-3xl font-semibold">
                                Privacy and Security
                            </div>
                            <div className="font-inter text-base font-light opacity-80">
                                Your health data is our top priority. We
                                implement robust measures to ensure
                                confidentiality, providing you with a trusted
                                and secure healthcare experience
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-[#0f0f11] w-4/6 flex flex-col gap-6 rounded-xl p-5 pr-10 border-2 border-[#52525c]">
                    <div className="w-fit">
                        <img src={Robot} alt="" />
                    </div>
                    <div className="text-3xl font-semibold">
                        Chatbot you can rely on
                    </div>
                    <div className="font-inter text-base font-light opacity-80">
                        This chatbot is your round-the-clock health companion,
                        equipped with cutting-edge diagnostic algorithms. Engage
                        in natural and informative conversations to receive
                        preliminary diagnoses and even personalized
                        prescriptions. Rest assured, every prescription
                        generated is meticulously verified by our expert
                        doctors, ensuring the highest standard of care. Take
                        charge of your well-being with instant and reliable
                        healthcare guidance, all from the comfort of your device
                    </div>
                </div>
            </div>
        </div>
    );
}
