import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";
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
                            <Route path="/auth/signin" element={<Login />} />
                            <Route path="/auth/signup" element={<SignUp />} />
                        </Routes>
                    </Router>
                </div>
            </ChakraProvider>
        </RecoilRoot>
    );
}

export default App;
