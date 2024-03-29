import { useState, useRef } from "react";
import SelectedSymptom from "../components/SelectedSymptom";
import symptomsArrays from "../utils/symptomWithId";
import { Textarea } from "@chakra-ui/react";
import currentDiagnosis from "../recoil/currentDiagnosis";
import { useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";

const DiagnosisForm = () => {
    const notesRef = useRef(null);
    const setDiagnosis = useSetRecoilState(currentDiagnosis);
    const navigate = useNavigate();

    function handleSearch(e) {
        const searchQuery = e.target.value.toLowerCase();
        const results = symptomsArrays.filter((symptom) =>
            symptom.name.toLowerCase().includes(searchQuery)
        );
        setSearchResults(results);
    }

    function handleSubmit() {
        const symptomsId = symptoms.map((symptom) => symptom.id);
        const diagnosis = {
            symptoms: symptomsId,
            additionalNotes: notesRef.current.value,
        };
        setDiagnosis(diagnosis);
        navigate("/patient/diagnosis/result");
    }

    const [symptoms, setSymptoms] = useState([]);
    const [searchResults, setSearchResults] = useState(symptomsArrays);

    return (
        <div className="flex justify-center items-center h-screen">
            <main className="w-[90vw] h-[90vh] bg-[#0F0F11] border-secondary border-2 rounded-lg  grid grid-cols-2 gap-4">
                <div className="p-5">
                    <section>
                        <h1 className="font-white text-3xl font-bricolage font-bold">
                            Describe your symptoms
                        </h1>
                        <p className="font-inter opacity-50 text-sm">
                            Select symptoms that best describes your current
                            condition.
                        </p>
                    </section>
                    <input
                        type="text"
                        placeholder="Search your symptoms"
                        onInput={handleSearch}
                        className="bg-[#0F0F11] border-secondary border-2 rounded-lg mt-5 px-2 py-2 font-inter text-sm w-full focus:outline-none"
                    />
                    <section
                        id="current-symptons"
                        className=" bg-[#1C1C1E] rounded-lg mt-5 border-secondary border-2 py-2"
                    >
                        <div className="gap-2 items-center h-full px-2 flex">
                            {symptoms.map((symptom, index) => (
                                <SelectedSymptom
                                    key={index}
                                    name={symptom.name}
                                    setSymptoms={setSymptoms}
                                />
                            ))}
                        </div>
                    </section>

                    <section className="mt-12">
                        <h1 className="font-white text-3xl font-bricolage font-bold">
                            Additional Notes
                        </h1>
                        <p className="font-inter opacity-50 text-sm mb-4">
                            Anything else you want to add?
                        </p>
                        <Textarea
                            ref={notesRef}
                            placeholder="Type here..."
                            variant="filled"
                            bg="#1C1C1E"
                            _hover={{ bg: "#2d2d30" }}
                            style={{
                                height: "200px",
                                resize: "none",
                            }}
                            className="font-bricolage"
                        />
                    </section>

                    <button
                        onClick={handleSubmit}
                        className="bg-secondary  font-bricolage opacity-65 font-bold text-lg px-5 py-3 rounded-lg mt-12 w-full hover:bg-[#5f5f6c] transition-colors"
                    >
                        Submit
                    </button>
                </div>
                <main className="border-1 border-l-2 border-secondary p-5 overflow-y-scroll">
                    {
                        // Search results
                        searchResults.length > 0 && (
                            <section className="mb-5">
                                <div className="flex flex-col gap-2">
                                    {searchResults.map((result, index) => (
                                        <div
                                            key={index}
                                            className="flex justify-between items-center bg-[#1C1C1E] rounded-lg px-2 py-1"
                                        >
                                            <p className="font-bricolage opacity-70  text-white pl-2">
                                                {result.name}
                                            </p>
                                            <button
                                                className="px-2 py-1 rounded-lg text-sm font-inter text-white opacity-50"
                                                onClick={() => {
                                                    setSymptoms([
                                                        ...symptoms,
                                                        result,
                                                    ]);
                                                }}
                                            >
                                                Add
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )
                    }
                </main>
            </main>
        </div>
    );
};

export default DiagnosisForm;
