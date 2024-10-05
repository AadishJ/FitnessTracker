import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Singup from "./Signup/Signup";
import Login from "./Login/Login";
import Faq from "./Faq/Faq";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signup" element={<Singup/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/faq" element={<Faq/>} />
      </Routes>
    </Router>
  );
}

export default App;
