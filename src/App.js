import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar"; // Navbar bileşeni
import Login from "./Login"; // Giriş sayfası
import SignUp from "./SignUp"; // Kayıt sayfası
import "./App.css";

function HomePage() {
  return <h1>Hoş Geldiniz! 🚀</h1>;
}

function UserProfile() {
  return <h1>Kullanıcı Profili 🧑‍💻</h1>;
}

function App() {
  return (
    <Router>
      <div>
        <Navbar /> {/* Navbar en üste ekleniyor */}
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
