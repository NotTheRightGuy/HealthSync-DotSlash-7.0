import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Page Imports
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";
import PatientDashboard from "./pages/PatientDashboard.jsx";
import DiagnosisForm from "./pages/DiagnosisForm.jsx";
import DiagnosisResult from "./pages/DiagnosisResult.jsx";
// Recoil
import { RecoilRoot } from "recoil";
// Chakra UI
import { ChakraProvider } from "@chakra-ui/react";

function App() {
    return (
        <RecoilRoot>
            <ChakraProvider>
                <div className="bg-black text-white h-screen">
                    <Router>
                        <Routes>
                            <Route path="/" element={<Home />}></Route>
                            <Route path="/auth/signin" element={<Login />} />
                            <Route path="/auth/signup" element={<SignUp />} />
                            <Route
                                path="/patient/dashboard"
                                element={<PatientDashboard />}
                            />
                            <Route
                                path="/patient/diagnosis/form"
                                element={<DiagnosisForm />}
                            />
                            <Route
                                path="/patient/diagnosis/result"
                                element={<DiagnosisResult />}
                            />
                        </Routes>
                    </Router>
                </div>
            </ChakraProvider>
        </RecoilRoot>
    );
}

export default App;
