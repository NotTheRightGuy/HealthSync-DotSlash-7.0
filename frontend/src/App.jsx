import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import Features from "./pages/features"
import PatientDashboard from "./pages/patientDashboard"
function App() {

  return (
    <div>
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}  ></Route>
                <Route path="/features" element={<Features/>}  ></Route>
                <Route path="/patientDashboard" element={<PatientDashboard/>} ></Route>
            </Routes>
        </Router>   
    </div>
    )
}

export default App
