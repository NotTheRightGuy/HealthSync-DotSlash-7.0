import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import PatientDashboard from "./pages/patientDashboard"
import Diagnosis from "./pages/diagnosis"
import Prescriptions from "./pages/prescriptions"
import YourDoctor from "./pages/yourDoctor"
import AIChatbot from "./pages/AIChatbot"
import { ChakraProvider } from '@chakra-ui/react'

function App() {

  return (
    <ChakraProvider>
        <div className="bg-black text-white h-screen">
            <Router>
                <Routes>
                    {/* <Route path="/" element={<Home/>}  ></Route> */}
                    {/* <Route path="/features" element={<Features/>}  ></Route> */}
                    <Route path="/patientDashboard" element={<PatientDashboard/>} ></Route>
                    <Route path="/patientDashboard/diagnosis" element={<Diagnosis/>} ></Route>
                    <Route path="/patientDashboard/prescriptions" element={<Prescriptions/>} ></Route>
                    <Route path="/patientDashboard/yourDoctor" element={<YourDoctor/>} ></Route>
                    <Route path="/patientDashboard/chatbot" element={<AIChatbot/>} ></Route>
                </Routes>
            </Router>   
        </div>
    </ChakraProvider>

    )
}

export default App
