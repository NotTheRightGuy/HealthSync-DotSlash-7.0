export default function SignUp() {
    const inputClassname = "mt-2 rounded-md border-2 border-secondary bg-secondary focus:outline-none px-2 py-1 w-2/3";
    return (
        <section className="flex justify-center items-center h-screen font-inter">
            <div className="h-[90vh] w-[90vw] border-secondary border-2 rounded-md bg-[#1d1d21] p-10">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <h1 className="font-bricolage text-3xl font-bold">Let's Get you Started</h1>
                <form className="mt-10 grid grid-cols-2">
                    <div>
                        <div>
                            <label htmlFor="firstName" className="font-bricolage font-medium text-xl">First Name</label>
                            <br/>
                            <input type="text" name="firstName" className={inputClassname}/>
                        </div>
                        <div className="mt-4">
                            <label htmlFor="firstName" className="font-bricolage font-medium text-xl">Last Name</label>
                            <br/>
                            <input type="text" name="firstName" className={inputClassname}/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label htmlFor="firstName" className="font-bricolage font-medium text-xl">Age</label>
                            <br/>
                            <input type="number" name="firstName" className="mt-2 rounded-md border-2 border-secondary bg-secondary focus:outline-none px-2 py-1 w-[3vw]"/>
                        </div>
                        <div className="mt-4">
                            <label htmlFor="firstName" className="font-bricolage font-medium text-xl">Blood Group</label>
                            <br/>
                            <input type="text" name="firstName" className="mt-2 rounded-md border-2 border-secondary bg-secondary focus:outline-none px-2 py-1 w-[4vw]"/>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}