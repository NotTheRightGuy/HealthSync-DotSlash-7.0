import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PatientDashboard from "./pages/patientDashboard";
import Diagnosis from "./pages/diagnosis";
import Prescriptions from "./pages/prescriptions";
import YourDoctor from "./pages/yourDoctor";
import AIChatbot from "./pages/AIChatbot";
import DiagnosisForm from "./pages/DiagnosisForm";
import DiagnosisResult from "./pages/DiagnosisResult";
import Home from "./pages/home";

import { RecoilRoot } from "recoil";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
    return (
        <RecoilRoot>
            <ChakraProvider>
                <div className="bg-black text-white h-screen">
                    <Router>
                        <Routes>
                            <Route path="/" element={<Home />}></Route>
                            {/* <Route path="/features" element={<Features/>}  ></Route> */}
                            <Route
                                path="/patientDashboard"
                                element={<PatientDashboard />}
                            ></Route>
                            <Route
                                path="/patientDashboard/diagnosis"
                                element={<Diagnosis />}
                            ></Route>
                            <Route
                                path="/patientDashboard/prescriptions"
                                element={<Prescriptions />}
                            ></Route>
                            <Route
                                path="/patientDashboard/yourDoctor"
                                element={<YourDoctor />}
                            ></Route>
                            <Route
                                path="/patientDashboard/chatbot"
                                element={<AIChatbot />}
                            ></Route>
                            <Route
                                path="/patientDashboard/diagnosis-form"
                                element={<DiagnosisForm />}
                            ></Route>
                            <Route
                                path="/patientDashboard/diagnosis-result"
                                element={<DiagnosisResult />}
                            ></Route>
                        </Routes>
                    </Router>
                </div>
            </ChakraProvider>
        </RecoilRoot>
    );
}

export default App;
