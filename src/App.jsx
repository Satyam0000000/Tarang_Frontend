import './index.css'
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import AllSessions from "./pages/AllSessions";
import About from "./pages/About";
import WinnerProfile from "./pages/WinnerProfile";
import PreviousEvents from "./pages/PreviousEvents";
import GroupMeeting from "./pages/GroupMeeting";
import UpcomingEvents from "./pages/UpcomingEvents";
import PaymentGateway from "./pages/PaymentGateway";
import Collaboration from "./pages/Collaboration";
import RewardedFellow from "./pages/RewardedFellow";
import RegisterEvent from "./pages/Registerevent";
import NotFound from "./pages/NotFound";
import PaymentSuccess from "./pages/PaymentSuccess";
import RegistrationSuccess from "./pages/RegistrationSuccess"

// Auth
import Login from "./auth/Login";
import Register from "./auth/Register";
import Account from "./auth/Account";
import PrivateProfile from "./auth/PrivateProfile";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = JSON.parse(localStorage.getItem("user"));
    if (token && userData) {
      setUser(userData);
    }
  }, []);
  return (
    <Router>
      <Header user={user} setUser={setUser}  />
      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/sessions" element={<AllSessions />} />
        <Route path="/about" element={<About />} />
        <Route path="/winners" element={<WinnerProfile />} />
        <Route path="/previous-events" element={<PreviousEvents />} />
        <Route path="/group-meeting" element={<GroupMeeting />} />
        <Route path="/UpcomingEvents" element={<UpcomingEvents />} />
        <Route path="/collaboration" element={<Collaboration />} />
        <Route path="/rewards" element={<RewardedFellow />} />
        <Route path="/payment" element={<PaymentGateway />} />
        <Route path="/registerevent" element={<RegisterEvent />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/registration-success" element={< RegistrationSuccess/>} />


        {/* Auth Pages */}
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/account" element={<Account />} />
        <Route path="/profile" element={<PrivateProfile />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;