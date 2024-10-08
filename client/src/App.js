import Navbar from "./Pages/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import { Route, Routes, BrowserRouter as Router, Navigate } from "react-router-dom";
import Signup from "./Pages/Signup/Signup";
import Login from "./Pages/Login/Login";
import Faq from "./Pages/Faq/Faq";
import Dashboard from "./Pages/Dashboard/Dashboard";
import { useState } from "react";
import RefreshHandler from "./RefreshHandler";

function App ()
{
  const [ isAuthenticated, setIsAuthenticated ] = useState( false );
  const PrivateRoute = ( { element } ) =>
  {
    return isAuthenticated ? element : <Navigate to="/"/>
  }
  return (
    <Router>
      <RefreshHandler setIsAuthenticated={setIsAuthenticated}/>
      <Navbar isAuthenticated={ isAuthenticated } setisAuthenticated={ setIsAuthenticated} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/faq" element={<Faq/>} />
        <Route path="/dashboard" element={<PrivateRoute element=<Dashboard/>/>} />
      </Routes>
    </Router>
  );
}

export default App;
