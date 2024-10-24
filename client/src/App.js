import React from 'react';
import Navbar from "./Pages/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Faq from "./Pages/Faq/Faq";
import Dashboard from "./Pages/Dashboard/Dashboard";
import RefreshHandler from "./RefreshHandler";
import Workout from "./Pages/Workout/Workout";
import Gym from "./Pages/Gym/Gym";
import PrivateRoute from './PrivateRoute';
import Footer from './Pages/Footer/Footer';
import LoginDark from './Pages/Login/LoginDark';
import SignupDark from './Pages/Signup/SignupDark';
import DashboardLayout from './Layouts/DashboardLayout';

function App() {
  return (
    <Router>
      <RefreshHandler />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signup" element={<SignupDark />} />
        <Route path="/login" element={<LoginDark />} />
        <Route path="/faq" element={ <Faq /> } />
        
        <Route element={<PrivateRoute element={<DashboardLayout />} />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/workout" element={<Workout />} />
          <Route path="/dashboard/gym" element={ <Gym /> } />
        </Route>
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
