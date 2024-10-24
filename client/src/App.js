import React from 'react';
import Navbar from "./Pages/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
// import Signup from "./Pages/Signup/Signup";
import Faq from "./Pages/Faq/Faq";
import Dashboard from "./Pages/Dashboard/Dashboard";
import RefreshHandler from "./RefreshHandler";
import Workout from "./Pages/Workout/Workout";
import Gym from "./Pages/Gym/Gym";
import { DateProvider } from "./Context/DateContext";
import { AuthProvider } from "./Context/AuthContext"; 
import PrivateRoute from './PrivateRoute'; // Import the PrivateRoute component
import Footer from './Pages/Footer/Footer';
import LoginDark from './Pages/Login/LoginDark';
import SignupDark from './Pages/Signup/SignupDark';

function App ()
{
  return (
    <div>
      <AuthProvider>
        <DateProvider>
          <Router>
            <RefreshHandler />
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/signup" element={<SignupDark/>} />
              <Route path="/login" element={<LoginDark/>} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
              <Route path="/workout" element={<PrivateRoute element={<Workout />} />} />
              <Route path="/gym" element={<PrivateRoute element={<Gym />} />} />
            </Routes>
            <Footer/>
          </Router>
        </DateProvider>
      </AuthProvider>
    </div>
  );
}

export default App;