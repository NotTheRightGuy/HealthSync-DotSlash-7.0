import { FaGithub } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();
    return (
        <div className="flex justify-between px-10 py-3 font-normal items-center font-bricolage">
            <a href="/">
                <div className="font-bricolage text-2xl cursor-pointer">
                    Health
                    <span className="font-medium">Sync </span>
                </div>
            </a>

            <div className="flex gap-8 text-base">
                <div
                    className={
                        "font-medium text-white opacity-65 hover:opacity-100 h-fit cursor-pointer "
                    }
                >
                    Home
                </div>

                <div
                    className={
                        "font-medium text-white opacity-65 hover:opacity-100 h-fit cursor-pointer "
                    }
                >
                    Features
                </div>
                <div
                    className={
                        "font-medium text-white opacity-65 hover:opacity-100 h-fit cursor-pointer "
                    }
                >
                    Mission
                </div>
                <div
                    className={
                        "font-medium text-white opacity-65 hover:opacity-100 h-fit cursor-pointer "
                    }
                >
                    FAQs
                </div>
            </div>
            <div className="user">
                <div className="flex py-2 rounded-2xl">
                    <div className="flex gap-2 justify-between items-center">
                        <a
                            href="https://www.github.com/NotTheRightGuy/HealthSync-DotSlash-7.0"
                            className="cursor-pointer"
                        >
                            <FaGithub size={30}></FaGithub>
                        </a>
                        <div
                            className="border-2 border-white px-2 py-1 rounded-xl cursor-pointer"
                            onClick={() => navigate("/auth/signin")}
                        >
                            {" "}
                            Get Started{" "}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
