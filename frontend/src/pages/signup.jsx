import SignUpImage from '../assets/Signup.png'
import { Textarea } from '@chakra-ui/react'
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import {useRef} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
    function completeSignup(){
        const firstName = firstNameRef.current.value;
        const lastName = lastNameRef.current.value;
        const age = parseInt(ageRef.current.value);
        const bloodGroup = bloodGroupRef.current.value;
        const address = addressRef.current.value;
        const phone = parseInt(phoneRef.current.value);
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const toSend = {firstName, lastName,age,bloodGroup,address,phone,email,password};
        axios.post('http://localhost:3000/api/v1/patient/sign-up', toSend).then(res=>{
            console.log(res);
            toast.success("Patient created. Redirecting you to Log in");
            setTimeout(()=>{
                navigate('/auth/login');
            },3000)
        }).catch(err => {
            console.log(err);
            toast.error("Error creating Patient. Validation failed");
        })
    }

    return (
        <section className="grid grid-cols-2 h-screen font-inter">
            <main className="p-16">
                <h1 className="font-bricolage text-4xl font-bold">Sign Up</h1>
                <p className="text-sm opacity-40 mt-1">Already have an account? <span
                    className="underline cursor-pointer" onClick={() => {
                    navigate('/auth/login');
                }}>Sign in</span></p>
                <div className="mt-4 flex gap-10">
                    <div>
                        <label htmlFor="" className="opacity-70">First Name</label>
                        <br/>
                        <input type="text" className="p-2 bg-secondary rounded-md mt-2" ref={firstNameRef}/>
                    </div>
                    <div>
                        <label htmlFor="" className="opacity-70">Last Name</label>
                        <br/>
                        <input type="text" className="p-2 bg-secondary rounded-md mt-2" ref={lastNameRef}/>
                    </div>
                </div>
                <div className="mt-8 flex gap-10">
                    <div>
                        <label htmlFor="" className="opacity-70">Email</label>
                        <br/>
                        <input type="text" className="p-2 bg-secondary rounded-md mt-2" ref={emailRef}/>
                    </div>
                    <div>
                        <label htmlFor="" className="opacity-70">Phone</label>
                        <br/>
                        <input type="number" className="p-2 bg-secondary rounded-md mt-2" ref={phoneRef}/>
                    </div>
                </div>
                <div className="mt-8 flex gap-10">
                    <div>
                        <label htmlFor="" className="opacity-70">Blood Group</label>
                        <br/>
                        <input type="text" className="p-2 bg-secondary rounded-md mt-2" ref={bloodGroupRef}/>
                    </div>
                    <div>
                        <label htmlFor="" className="opacity-70">Age</label>
                        <br/>
                        <input type="number" className="p-2 w-1/2 bg-secondary rounded-md mt-2" ref={ageRef}/>
                    </div>
                </div>
                <div className="mt-8 flex gap-10">
                    <div>
                        <label htmlFor="" className="opacity-70">Password</label>
                        <br/>
                        <input type="password" className="p-2 bg-secondary rounded-md mt-2" ref={passwordRef}/>
                    </div>
                </div>
                <Textarea placeholder='Address' style={{
                    resize: 'none',
                    border: '2px gray solid',
                    marginTop: "2rem",
                    width: "75%"
                }} ref={addressRef}/>
                <br/>
                <button onClick={completeSignup}
                        className="mt-10 text-center bg-secondary w-2/3 font-bricolage p-4 rounded-2xl text-xl opacity-80 hover:opacity-100 transition-opacity">Sign
                    Up
                </button>
            </main>
            <img src={SignUpImage} alt="Sign Up Image" className="h-[95vh] w=[95vw]"/>
            <ToastContainer />
        </section>
    )
}