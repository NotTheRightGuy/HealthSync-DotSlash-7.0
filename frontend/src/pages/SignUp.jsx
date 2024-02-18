import SignUpImage from "../assets/Signup.png";
import { Textarea } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function SignUp() {
    const navigate = useNavigate();
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const ageRef = useRef();
    const bloodGroupRef = useRef();
    const addressRef = useRef();
    const phoneRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    function completeSignup() {
        const firstName = firstNameRef.current.value;
        const lastName = lastNameRef.current.value;
        const age = parseInt(ageRef.current.value);
        const bloodGroup = bloodGroupRef.current.value;
        const address = addressRef.current.value;
        const phone = phoneRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const toSend = {
            firstName,
            lastName,
            age,
            bloodGroup,
            address,
            phone,
            email,
            password,
        };

        fetch(
            "http://ec2-52-66-237-98.ap-south-1.compute.amazonaws.com:3000/api/v1/auth/patient/sign-up",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(toSend),
            }
        )
            .then((res) => res.json())
            .then((data) => {
                if (data.err) {
                    toast.error(data.err, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                } else {
                    toast.success(
                        "Account created successfully, Redirecting you to Login",
                        {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        }
                    );
                    setTimeout(() => {
                        navigate("/auth/signin");
                    }, 2000);
                }
            });
    }

    return (
        <section className="grid grid-cols-2 h-screen font-inter">
            <main className="p-16">
                <h1 className="font-bricolage text-4xl font-bold">Sign Up</h1>
                <p className="text-sm opacity-40 mt-1">
                    Already have an account?{" "}
                    <span
                        className="underline cursor-pointer"
                        onClick={() => {
                            navigate("/auth/signin");
                        }}
                    >
                        Sign in
                    </span>
                </p>
                <div className="mt-4 flex gap-10">
                    <div>
                        <label htmlFor="" className="opacity-70">
                            First Name
                        </label>
                        <br />
                        <input
                            type="text"
                            className="bg-transparent border-2 border-[#52525c] rounded-md p-2"
                            ref={firstNameRef}
                        />
                    </div>
                    <div>
                        <label htmlFor="" className="opacity-70">
                            Last Name
                        </label>
                        <br />
                        <input
                            type="text"
                            className="bg-transparent border-2 border-[#52525c] rounded-md p-2 "
                            ref={lastNameRef}
                        />
                    </div>
                </div>
                <div className="mt-8 flex gap-10">
                    <div>
                        <label htmlFor="" className="opacity-70">
                            Email
                        </label>
                        <br />
                        <input
                            type="text"
                            className="bg-transparent border-2 border-[#52525c] rounded-md p-2 "
                            ref={emailRef}
                        />
                    </div>
                    <div>
                        <label htmlFor="" className="opacity-70">
                            Phone
                        </label>
                        <br />
                        <input
                            type="number"
                            className="bg-transparent border-2 border-[#52525c] rounded-md p-2 "
                            ref={phoneRef}
                        />
                    </div>
                </div>
                <div className="mt-8 flex gap-10">
                    <div>
                        <label htmlFor="" className="opacity-70">
                            Blood Group
                        </label>
                        <br />
                        <input
                            type="text"
                            className="bg-transparent border-2 border-[#52525c] rounded-md p-2 "
                            ref={bloodGroupRef}
                        />
                    </div>
                    <div>
                        <label htmlFor="" className="opacity-70">
                            Age
                        </label>
                        <br />
                        <input
                            type="text"
                            className="bg-transparent border-2 border-[#52525c] rounded-md p-2 "
                            ref={ageRef}
                        />
                    </div>
                </div>
                <div className="mt-8 flex gap-10">
                    <div>
                        <label htmlFor="" className="opacity-70">
                            Password
                        </label>
                        <br />
                        <input
                            type="password"
                            className="bg-transparent border-2 border-[#52525c] rounded-md p-2 "
                            ref={passwordRef}
                        />
                    </div>
                </div>
                <div className="mt-4 opacity-70">Address</div>
                <Textarea
                    style={{
                        resize: "none",
                        border: "2px gray solid",

                        width: "75%",
                    }}
                    ref={addressRef}
                />
                <br />
                <button
                    onClick={completeSignup}
                    className="text-lg bg-[#1569cb] font-inter py-3 rounded-full text-center cursor-pointer hover:opacity-80 transition-opacity w-[75%] mt-4"
                >
                    Sign Up
                </button>
            </main>
            <img
                src={SignUpImage}
                alt="Sign Up Image"
                className="h-[95vh] w=[95vw]"
            />
            <ToastContainer />
        </section>
    );
}
