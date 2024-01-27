import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
    return(
        <div className="flex justify-between w-screen px-12 py-10 bg-black text-white">
            <div>Health
                <span className="font-bold">Sync</span>
            </div>
            <div className="flex gap-2 ">
                <Link to={"/"}>Home</Link>
                <Link to={"/features"}>Features</Link>
                <Link to={"/mission"}>Mission</Link>
                <Link to={"/faqs"}>FAQs</Link>
                <Link to={"/github"}>Github</Link>
            </div>
            <div className="flex items-center gap-2">
                <div > <FaGithub
                        size={30}
                    /> </div>
                <div className="px-5 py-2 rounded-md font-medium border-white border-2 border-solid">
                    Get Started
                </div>
            </div>
        </div>
    )
}