import { useParams } from "react-router";
import { useQuery } from "react-query";
import { useEffect, useRef } from "react";
import { useState } from "react";
import { Textarea } from "@chakra-ui/react";
import axios from "axios";
const CheckModelDiagnosis = () => {
    const { id } = useParams();

    const correctDisease = useRef(null);
    const notes = useRef(null);

    const [creatingPres, setCreatingPres] = useState(false);
    const [pres, setPres] = useState("");
    const [diag, setDiag] = useState({
        _id: "",
        patientID: "",
        disease: "",
        probability: "",
        modelFeedback: "",
        notes: "",
        symptoms: [],
    });
    useEffect(() => {
        axios
            .get(`http://localhost:3000/api/v1/diagnosis/get/${id}`)
            .then((res) => {
                console.log(res.data.diagnosis);
                setDiag(res.data.diagnosis);
            });
    }, []);

    function submitDiag() {
        if (correctDisease.current.value === "") {
            correctDisease.current.value = diag.disease;
        }

        axios
            .put(`http://localhost:3000/api/v1/diagnosis/update/${id}`, {
                correctDisease: correctDisease.current.value,
                doctorNotes: notes.current.value,
                doctorPrescription: pres,
            })
            .then((res) => {
                console.log(res.data);
                window.location.href = "/doctorDashboard/patients";
            });
    }

    function generatePrescription() {
        setCreatingPres(true);
        if (correctDisease.current.value != "") {
            diag.disease = correctDisease.current.value;
        }
        const messageToSend = `My patient is suffering from ${diag.disease}. Your task is to give the medicines used to cure it and the precautions one need to take Dont give any other reply apart from this.Be specific with the medicine names\nStrictly follow the format as such\nMedcines\n(all the medicines)\n\nPrecautions\n(all the precautions one need to take)`;
        axios
            .post("http://localhost:3000/api/v1/diagnosis/chat", {
                message: messageToSend,
            })
            .then((res) => {
                setCreatingPres(false);
                setPres(res.data.response);
            });
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <main className="w-[90vw] h-[90vh] bg-[#0F0F11] border-secondary border-2 rounded-lg  grid grid-cols-2 gap-4 relative">
                <section className="p-10 relative">
                    <main>
                        <p className="font-inter opacity-55 text-xs">
                            Based on the symptoms provided by patient, we think
                            they may have
                        </p>
                        <h1 className="text-5xl font-bricolage mt-1">
                            {diag.disease}
                        </h1>
                        <p className="mt-6 text-xs opacity-55 font-inter">
                            Our model can say this with a certanity of
                        </p>
                        <h1 className="text-4xl font-bricolage mt-1 opacity-90">
                            {Math.round(diag.probability)}%
                        </h1>

                        <h1 className="text-4xl font-bricolage mt-3 opacity-90">
                            Symptoms Provided
                        </h1>

                        <div className="mt-2">
                            {diag.symptoms.map((sym, index) => {
                                return (
                                    <p
                                        className="font-inter opacity-50"
                                        key={index}
                                    >
                                        {sym}
                                    </p>
                                );
                            })}
                        </div>

                        <h1 className="font-bricolage mt-6 text-5xl font-semibold opacity-85">
                            Model Feedback
                        </h1>
                        <p className="mt-4 text-xs font-inter opacity-70">
                            {diag.modelFeedback}
                        </p>

                        <button
                            onClick={submitDiag}
                            className="self-end absolute bottom-4 font-bricolage bg-secondary px-8 py-2 rounded-full opacity-70 hover:opacity-90 transition-opacity"
                        >
                            Complete Diagnosis
                        </button>
                    </main>
                </section>
                <div className="border-l-2 border-secondary p-10">
                    <p className="font-inter text-sm opacity-45">
                        Fill anything you want to edit and the diagnosis will be
                        updated
                    </p>
                    <input
                        type="text"
                        ref={correctDisease}
                        className="bg-secondary rounded-lg w-full text-sm p-4 mt-2 font-inter focus:outline-none"
                        placeholder="Correct Diagnosis (Leave blank if correct)"
                    />
                    <Textarea
                        ref={notes}
                        placeholder="Anything you want to add?"
                        style={{
                            marginTop: "10px",
                            fontFamily: "Inter",
                            fontSize: "15px",
                        }}
                    />
                    <button
                        onClick={generatePrescription}
                        className="font-bricolage w-full bg-secondary px-8 py-2 mt-4 rounded-md opacity-70 hover:opacity-90 transition-opacity"
                    >
                        Generate Prescription
                    </button>
                    <div>
                        {creatingPres ? (
                            <div className="font-inter mt-4 text-center text-sm animate-pulse">
                                Sit back and relax while we create your
                                prescription
                            </div>
                        ) : (
                            <div className="text-sm font-inter mt-4">
                                {pres}
                            </div>
                        )}
                    </div>
                </div>
                <div className="absolute w-fit h-fit text-sm text-center right-[15%] top-[45%] font-bricolage opacity-65"></div>
            </main>
        </div>
    );
};

export default CheckModelDiagnosis;
