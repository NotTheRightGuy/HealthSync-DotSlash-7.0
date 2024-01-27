import { useEffect } from "react";

export default function heroNavbar(){

    const [currUser,setCurrUser] = useState({})
    const [loggedIn,setLoggedIn] = useState(false)

    useEffect(() => {
        fetch("http://localhost:5000/api/v1/users/1")
        .then((res) => res.json())
        .then((data) => {
            setCurrUser(data)
            document.cookie = "LOGIN_INFO=" + data.token + ";max-age=60*60;path=/"
            setLoggedIn(true)
        })
        .catch((err) => console.log(err))
    }, [])

    const scrollToComponent = (e) => {
        e.preventDefault();
        console.log("scroll To component ")
    }

    return(
        <div className="">
            <div className="flex justify-between px-8 py-3 font-normal items-center">
                <a href="/">
                    <div className="font-bricolage text-2xl cursor-pointer">
                        Health
                        <span className="font-medium">Sync </span>
                    </div>
                </a>
                
                <div className="flex gap-8 text-base">
                        <div className={"font-medium text-white opacity-65 hover:opacity-100 h-fit cursor-pointer "} onClick={scrollToComponent} >
                            Home
                        </div>
                        <div className={"font-medium text-white opacity-65 hover:opacity-100 h-fit cursor-pointer "} onClick={scrollToComponent} >
                            Features
                        </div>
                        <div className={"font-medium text-white opacity-65 hover:opacity-100 h-fit cursor-pointer "} onClick={scrollToComponent} >
                            Mission
                        </div>
                        <div className={"font-medium text-white opacity-65 hover:opacity-100 h-fit cursor-pointer "} onClick={scrollToComponent} >
                            FAQs
                        </div>
                        <div className={"font-medium text-white opacity-65 hover:opacity-100 h-fit cursor-pointer "} onClick={scrollToComponent} >
                            <Github></Github>
                        </div>
                </div>
                <div className="user">
                    {/* <div className="flex gap-2 items-center">
                        <div className="w-10 h-10 rounded-full bg-gray-300">
                            <img src={props.userImage} alt="userImage" />
                            </div>
                        <div className="font-medium">
                        {props.userName}
                        </div>
                    </div> */}
                    <div className="flex p-3 rounded-2xl border-2 border-[#0f0f11]">
                        {
                            loggedIn &&
                            <div className="flex gap-5 items-center">
                                <div className="rounded-2xl bg-gray-300">
                                    <div className="h-10 w-10 bg-gradient-to-b from-[#d13636] to-[#d9d9d9] rounded-xl"></div>
                                </div>
                                    
                                <div className="font-medium opacity-65">
                                    {/* {currUser.fullName} */}
                                    Janmejay Chatterjee
                                </div>
                                <div className="flex flex-col gap-1 -translate-y-7 opacity-50 hover:opacity-100 hover:cursor-pointer">
                                    <div className="h-[4px] text-4xl">.</div>
                                    <div className="h-[4px] text-4xl">.</div>
                                    <div className="h-[4px] text-4xl">.</div>
                                    {/* <div>.</div> */}
                                    {/* <div>.</div> */}
                                    {/* <img src={MenuVertical} alt="" /> */}
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
            <hr className="border-0 border-t-2 border-[#0f0f11]" />

        </div>
    )
}