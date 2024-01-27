import DiagnosisWithContent from "../components/diagnosisWithContent";
import PatientDashboardNavbar from "../components/patientDashboardNavbar";
import Gears from "../assets/Gears.svg";
import medDoc from "../assets/Medical Doctor.svg";
import axios from "axios";
import currentUser from "../recoil/currentUser";
import { useRecoilState } from "recoil";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

export default function Diagnosis(props) {
    const [user, _] = useRecoilState(currentUser);
    const [diagnosis, setDiagnosis] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`http://localhost:3000/api/v1/diagnosis/get-all/${user._id}`)
            .then((res) => {
                setDiagnosis(res.data.diagnosis);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className="h-full ">
            <PatientDashboardNavbar
                links={[
                    { name: "Diagnosis", path: "/patientDashboard/diagnosis" },
                    {
                        name: "Prescriptions",
                        path: "/patientDashboard/prescriptions",
                    },
                    {
                        name: "Your Doctor",
                        path: "/patientDashboard/yourDoctor",
                    },
                    { name: "AI Chatbot", path: "/patientDashboard/chatbot" },
                ]}
                currPage="Diagnosis"
            />

            {diagnosis.length != 0 ? (
                <div className="">
                    <DiagnosisWithContent diagnosis={diagnosis} />
                </div>
            ) : (
                <div className="flex flex-col gap-12 justify-center items-center text-xs h-5/6 font-medium">
                    <div className="flex w-full gap-10 justify-center">
                        <div className="flex flex-col gap-4 items-center w-1/6">
                            <div>
                                <img className="h-24" src={Gears} alt="" />
                            </div>
                            <div className="opacity-50 text-center">
                                List your symptoms, and we'll help predict your
                                potential condition.
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 items-center w-1/6">
                            <div>
                                <img className="h-24" src={medDoc} alt="" />
                            </div>
                            <div className="opacity-50 text-center">
                                List your symptoms, and we'll help predict your
                                potential condition.
                            </div>
                        </div>
                    </div>
                    <div
                        onClick={() => {
                            navigate("/patientDashboard/diagnosis-form");
                        }}
                        className="border-2 border-gray-800 rounded-2xl px-12 p-2 text-xs text-white opacity-80 hover:cursor-pointer hover:opacity-100 "
                    >
                        Make Diagnosis
                    </div>
                </div>
            )}
        </div>
    );
}
