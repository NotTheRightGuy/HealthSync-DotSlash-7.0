import SignUpImage from '../assets/Signup.png'
import { Textarea } from '@chakra-ui/react'
export default function SignUp() {
    return (
        <section className="grid grid-cols-2 h-screen font-inter">
            <main className="p-16">
                <h1 className="font-bricolage text-4xl font-bold">Sign Up</h1>
                <p className="text-sm opacity-40 mt-1">Already have an account? <span className="underline cursor-pointer">Sign in</span></p>
                <div className="mt-16 flex gap-10">
                    <div>
                        <label htmlFor="" className="opacity-70">First Name</label>
                        <br/>
                        <input type="text" className="p-2 bg-secondary rounded-md mt-2"/>
                    </div>
                    <div>
                        <label htmlFor="" className="opacity-70">Last Name</label>
                        <br/>
                        <input type="text" className="p-2 bg-secondary rounded-md mt-2"/>
                    </div>
                </div>
                <div className="mt-8 flex gap-10">
                    <div>
                        <label htmlFor="" className="opacity-70">Email</label>
                        <br/>
                        <input type="text" className="p-2 bg-secondary rounded-md mt-2"/>
                    </div>
                    <div>
                        <label htmlFor="" className="opacity-70">Phone</label>
                        <br/>
                        <input type="number" className="p-2 bg-secondary rounded-md mt-2"/>
                    </div>
                </div>
                <div className="mt-8 flex gap-10">
                    <div>
                        <label htmlFor="" className="opacity-70">Blood Group</label>
                        <br/>
                        <input type="text" className="p-2 bg-secondary rounded-md mt-2"/>
                    </div>
                    <div>
                        <label htmlFor="" className="opacity-70">Age</label>
                        <br/>
                        <input type="number" className="p-2 w-1/2 bg-secondary rounded-md mt-2"/>
                    </div>
                </div>
                <Textarea placeholder='Address' style={{
                    resize: 'none',
                    border: '2px gray solid',
                    marginTop: "2rem",
                    width: "75%"
                }}/>
                <br/>
                <button className="mt-10 text-center bg-secondary w-2/3 font-bricolage p-4 rounded-2xl text-xl opacity-80 hover:opacity-100 transition-opacity">Sign Up</button>
            </main>
            <img src={SignUpImage} alt="Sign up image helper" className="h-[95vh] w=[95vw]"/>
        </section>
    )
}