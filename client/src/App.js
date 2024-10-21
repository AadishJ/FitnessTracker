import Navbar from "./Pages/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import { Route, Routes, BrowserRouter as Router, Navigate } from "react-router-dom";
import Signup from "./Pages/Signup/Signup";
import Login from "./Pages/Login/Login";
import Faq from "./Pages/Faq/Faq";
import Dashboard from "./Pages/Dashboard/Dashboard";
import RefreshHandler from "./RefreshHandler";
import Workout from "./Pages/Workout/Workout";
import Gym from "./Pages/Gym/Gym";
import { DateProvider } from "./Context/DateContext";
import { AuthProvider, useAuth } from "./Context/AuthContext"; 

function App() {
  const PrivateRoute = ({ element }) => {
    const { isAuthenticated } = useAuth(); 
    return isAuthenticated ? element : <Navigate to="/" />;
  };

  return (
    <div className="bg-customBeige h-screen">
    <AuthProvider>
      <DateProvider>
        <Router>
          <RefreshHandler />
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
            <Route path="/workout" element={<PrivateRoute element={<Workout />} />} />
            <Route path="/gym" element={<PrivateRoute element={<Gym />} />} />
          </Routes>
        </Router>
      </DateProvider>
      </AuthProvider>
      </div>
  );
}

export default App;
