import React, { useRef, useState } from 'react'
import Eye from "../assets/eye.svg"
import Google from "../assets/Google.svg"
import Facebook from "../assets/Facebook.svg"
import LifeSavers from "../assets/LifeSavers.png"
import EllipseBlue from "../assets/EllipseBlue.svg"
export default function Login(){

    const [errorMessage, setErrorMessage] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [show,setShow] = useState(true)

    const formSubmit= (e) => {
        e.preventDefault()
        if(username === "" || password === ""){
            setErrorMessage("Please fill all the fields")
            return
        }

        fetch("http://localhost:5000/api/v1/users/login",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username:username,
                password:password
            })
        })
        .then((res) => res.json())
        .then((data) => {
            if(data.error){
                setErrorMessage(data.error)
            }
            else{
                setErrorMessage("")
                document.cookie = "LOGIN_INFO=" + data.token + ";max-age=60*60;path=/"
                window.location.href = "/patientDashboard/diagnosis"
            }
        })
        .catch((err) => console.log(err))
        console.log(username,password)
    }

    return(
        <div className=''>
            <div className='flex w-screen h-screen'>
                <div className="w-full p-12 pb-0 ">

                    <div className='w-4/6'>
                        <div>
                            <div className="text-6xl">
                                Welcome Back
                            </div>
                            <div className="font-inter opacity-80 text-base">
                                We hope your are doing well
                            </div>
                        </div>
                        <form action="" className='mt-16 flex flex-col gap-5 '>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="username">Username</label>
                                <input type="text" className='bg-transparent border-2 border-[#52525c] rounded-md p-2 hover:border-white' onChange={(e)=>setUsername(e.target.value)}/>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="password">Password</label>
                                <div className='flex'>
                                    <input type={show === true ? "text" : "password"} className='bg-transparent w-full border-2 border-[#52525c] rounded-md p-2 hover:border-white' onChange={(e)=>setPassword(e.target.value)}/>
                                    <div className='w-fit fixed left-[31%] mt-3 hover:cursor-pointer' onClick={()=>setShow(!show)}>
                                        <img src={Eye} className='h-5 w-fit' alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className='text-lg bg-[#1569cb] font-inter py-3 rounded-full text-center cursor-pointer' onClick={formSubmit}>
                                Sign in
                            </div>
                            <div className='message text-red-600'>
                                {errorMessage}
                            </div>
                        </form>
                        <div className='flex justify-between text-xs '>
                            <a href="/signup">
                                <div className='opacity-60 hover:opacity-100'>
                                    Don't have an account ? <span className='underline underline-offset-4 cursor-pointer'>Sign up</span>
                                </div>
                            </a>
                            <div className='underline underline-offset-4 opacity-60 hover:opacity-100'>
                                Forgot Password ?
                            </div>
                        </div>
                        <hr className='opacity-20 mt-6'  />
                        <div className='flex flex-col gap-4'>
                            <div className='flex bg-white gap-2 text-black font-inter items-center justify-center rounded-full py-4 '>
                                <div> <img src={Google} className='h-6 ' alt="" /></div>
                                <div className='text-sm font-semibold h-fit '>
                                    Sign In With Google
                                </div>
                            </div>
                            <div className='flex bg-white text-black gap-2   font-inter items-center justify-center rounded-full py-4 '>
                                <div> <img src={Facebook} className='h-6 ' alt="" /></div>
                                <div className='text-sm font-semibold h-fit '>
                                    Sign In With Facebook
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-11/12 bg-[#1a1a1d] h-screen p-12 flex flex-col justify-between">
                    <a href="/">
                        <div className='text-3xl cursor-pointer'>Health
                            <span className='font-semibold'>Sync</span>
                        </div>
                    </a>
                            <img src={LifeSavers} className='h-4/6 w-4/6 m-auto' alt="" />
                    <div>
                        <div className='opacity-60'>
                            “This website has helped me and my husband so much. Now we no longer have to drive for long distance just to get a daily checkup“
                        </div>
                        <div className='opacity-90 mt-3'>
                            - Sophia Danis
                        </div>
                    </div>

                </div>
            </div>
            {/* <div className='w-1/2 -translate-y-32 absolute'>
                <img src={EllipseBlue} className='' alt="" />
            </div> */}
        </div>
    )
}