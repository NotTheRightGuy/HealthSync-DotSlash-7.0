import { useState } from "react";
import axios from "axios";
import Eye from "../assets/eye.svg";
import LifeSavers from "../assets/Lifesavers.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);

    const formSubmit = (e) => {
        e.preventDefault();
        if (username === "" || password === "") {
            setErrorMessage("Please fill all the fields");
            return;
        }

        axios
            .post("http://localhost:3000/api/v1/auth/login", {
                email: username,
                password: password,
            })
            .then((res) => {
                if (res.status == 200) {
                    localStorage.setItem("token", "Bearer " + res.data.token);
                    if (res.data.data.role == "doctor") {
                        toast.success("Log in Successful, Redirecting!");
                        setTimeout(()=>{
                            navigate("/doctorDashboard/patients");
                        },2000);
                    } else {
                        toast.success("Log in Successful, Redirecting!");
                        setTimeout(()=>{
                            navigate("/patientDashboard/diagnosis");
                        },2000);
                    }
                } else {
                    toast.error("Something went wrong on our side. We are looking into it");
                }
            }).catch(err =>{
                toast.error("Invalid Credentials, Please try again");
                console.log(err);
        })
    };

    return (
        <div className="">
            <div className="flex w-screen h-screen">
                <div className="w-full p-12 pb-0 ">
                    <div className="w-4/6">
                        <div>
                            <div className="text-6xl font-bricolage font-bold">
                                Welcome Back
                            </div>
                            <div className="font-inter opacity-60 text-base">
                                We hope your are doing well
                            </div>
                        </div>
                        <form action="" className="mt-16 flex flex-col gap-5 ">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="username">Email</label>
                                <input
                                    type="text"
                                    className="bg-transparent border-2 border-[#52525c] rounded-md p-2 hover:border-white font-inter"
                                    onChange={(e) =>
                                        setUsername(e.target.value)
                                    }
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="password">Password</label>
                                <div className="flex">
                                    <input
                                        type={
                                            show === true ? "text" : "password"
                                        }
                                        className="bg-transparent w-full border-2 border-[#52525c] rounded-md p-2 hover:border-white font-inter"
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                    />
                                    <div
                                        className="w-fit fixed left-[31%] mt-3 hover:cursor-pointer"
                                        onClick={() => setShow(!show)}
                                    >
                                        <img
                                            src={Eye}
                                            className="h-5 w-fit"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                            <button
                                className="text-lg bg-[#1569cb] font-inter py-3 rounded-full text-center cursor-pointer hover:opacity-80 transition-opacity"
                                onClick={formSubmit}
                            >
                                Sign in
                            </button>
                            <div className="message text-red-600">
                                {errorMessage}
                            </div>
                        </form>
                        <div className='flex justify-between text-xs '>
                            <a href="/auth/signup">
                                <div className='opacity-60'>
                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                    Don't have an account?{" "}
                                    <span className='opacity-60 underline underline-offset-4 cursor-pointer hover:opacity-100'>
                                        Sign up
                                    </span>
                                </div>
                            </a>
                            <div className="underline underline-offset-4 opacity-60 hover:opacity-100">
                                Forgot Password?
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-11/12 bg-[#1a1a1d] h-screen p-12 flex flex-col justify-between">
                    <a href="/">
                        <div className="text-3xl cursor-pointer">
                            Health
                            <span className="font-semibold">Sync</span>
                        </div>
                    </a>
                    <img
                        src={LifeSavers}
                        className="h-4/6 w-4/6 m-auto"
                        alt=""
                    />
                    <div>
                        <div className="opacity-60">
                            "This website has been a valuable resource for my husband and me, eliminating the need for us to travel long distances for our daily checkups"
                        </div>
                        <div className="opacity-90 mt-3">- Sophia Danis</div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}
