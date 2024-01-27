import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PatientDashboard from "./pages/patientDashboard";
import Diagnosis from "./pages/diagnosis";
import Prescriptions from "./pages/prescriptions";
import YourDoctor from "./pages/yourDoctor";
import AIChatbot from "./pages/AIChatbot";
import DiagnosisForm from "./pages/DiagnosisForm";
import DiagnosisResult from "./pages/DiagnosisResult";
import DiagnosisResultWithId from "./pages/DiagnosisResultWithId.jsx";
import Home from "./pages/home";
import Login from "./pages/login.jsx";
import Signup from "./pages/signup.jsx";
import DoctorDashboardPatients from "./pages/doctorDashboardPatients.jsx";
import DoctorDashboardArticles from "./pages/doctorDashboardArticles.jsx";

import { RecoilRoot } from "recoil";
import { ChakraProvider } from "@chakra-ui/react";

import { QueryClient, QueryClientProvider } from "react-query";

function App() {
    return (
        <QueryClientProvider
            client={
                new QueryClient({
                    defaultOptions: {
                        queries: {
                            refetchOnWindowFocus: false,
                        },
                    },
                })
            }
        >
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
                                <Route
                                    path="/patientDashboard/diagnosis-result/:id"
                                    element={<DiagnosisResultWithId />}
                                />
                            </Routes>
                        </Router>
                    </div>
                </ChakraProvider>
            </RecoilRoot>
        </QueryClientProvider>
    );
}

export default App;
