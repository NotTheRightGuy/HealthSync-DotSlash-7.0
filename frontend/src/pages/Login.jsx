import { useState } from "react";
import Eye from "../assets/eye.svg";
import LifeSavers from "../assets/Lifesavers.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);

    const formSubmit = (e) => {
        e.preventDefault();
        if (email === "" || password === "") {
            toast.error("Please fill all the fields", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return;
        }
        const toSend = {
            email,
            password,
        };
        fetch("http://localhost:3000/api/v1/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(toSend),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.err) {
                    toast.error(data.err, {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                } else {
                    localStorage.setItem("token", data.token);
                    toast.success("Logged in successfully", {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    setTimeout(() => {
                        navigate("/");
                    }, 2000);
                }
            });
    };

    return (
        <div>
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
                                    onChange={(e) => setEmail(e.target.value)}
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
                        </form>
                        <div className="flex justify-between text-xs ">
                            <a href="/auth/signup">
                                <div className="opacity-60">
                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                    Don't have an account?{" "}
                                    <span className="opacity-60 underline underline-offset-4 cursor-pointer hover:opacity-100">
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
                            "This website has been a valuable resource for my
                            husband and me, eliminating the need for us to
                            travel long distances for our daily checkups"
                        </div>
                        <div className="opacity-90 mt-3"> - Sophia Danis</div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}
