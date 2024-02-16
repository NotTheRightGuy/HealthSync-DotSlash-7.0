import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import currentUser from "../recoil/currentUser";

export default function PatientDashboardNavbar({
    currentSection,
    setCurrentSection,
}) {
    const navigate = useNavigate();
    const diagnosisClassName = `cursor-pointer ${
        currentSection === "diagnosis" ? "opacity-90" : "opacity-50"
    }`;
    const prescriptionClassName = `cursor-pointer ${
        currentSection === "prescription" ? "opacity-90" : "opacity-50"
    }`;
    const chatbotClassName = `cursor-pointer ${
        currentSection === "chatbot" ? "opacity-90" : "opacity-50"
    }`;

    const [currentUserState, setCurrentUser] = useRecoilState(currentUser);
    const token = localStorage.getItem("token");
    useEffect(() => {
        fetch("http://localhost:3000/api/v1/patient/decode-token", {
            headers: {
                "Content-Type": "application/json",
                Authorization: token,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setCurrentUser(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className="">
            <div className="flex justify-between px-10 py-3 font-normal items-center">
                <div
                    className="font-bricolage text-2xl cursor-pointer"
                    onClick={() => navigate("/")}
                >
                    Health
                    <span className="font-medium">Sync</span>
                </div>

                <div className="flex justify-center gap-8 font-bricolage">
                    <p
                        className={diagnosisClassName}
                        onClick={() => {
                            setCurrentSection("diagnosis");
                            // navigate("/patient/dashboard");
                        }}
                    >
                        Diagnosis
                    </p>
                    <p
                        className={prescriptionClassName}
                        onClick={() => {
                            setCurrentSection("prescription");
                            // navigate("/patient/prescription");
                        }}
                    >
                        Prescription
                    </p>
                    <p
                        className={chatbotClassName}
                        onClick={() => {
                            setCurrentSection("chatbot");
                            // navigate("/patient/chatbot");
                        }}
                    >
                        Mrs. Winnie
                    </p>
                </div>
                <div className="user">
                    <div className="flex p-2 rounded-2xl border-2 border-[#0f0f11]">
                        <div className="flex gap-5 items-center">
                            <img
                                src={currentUserState.avatarUrl}
                                alt="user"
                                className="rounded-2xl h-10 w-10"
                            />

                            <div className="font-medium opacity-65">
                                {currentUserState.firstName +
                                    " " +
                                    currentUserState.lastName}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="border-0 border-t-2 border-[#0f0f11]" />
        </div>
    );
}
