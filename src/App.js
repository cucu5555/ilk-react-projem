import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar"; 
import Login from "./Login"; 
import SignUp from "./SignUp"; 
import "./App.css";
import CoinChart from "./CoinChart";

function HomePage() {
  return (
    <div>
      <h1>Hoş Geldiniz! 🚀</h1>
      <p>Kripto para borsaları, dijital varlıkların alım satımının yapıldığı platformlardır.</p>
      <CoinChart />
    </div>
  );
}

function UserProfile() {
  return (
    <div>
      <h1>Kullanıcı Profili 🧑‍💻</h1>
      <p>Burada cüzdan bakiyenizi, işlem geçmişinizi ve açık emirlerinizi görebilirsiniz.</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>Hakkımızda 📖</h1>
      <p>Kripto para borsaları, 2009 yılında Bitcoin'in ortaya çıkışıyla gelişmeye başladı. 
         Merkezi ve merkeziyetsiz borsalar (CEX ve DEX) gibi farklı türleri bulunmaktadır.</p>
    </div>
  );
}

function News() {
  return (
    <div>
      <h1>Haberler 📰</h1>
      <p>Güncel kripto para haberleri, Bitcoin fiyat dalgalanmaları, regülasyonlar ve yeni çıkan projeler hakkında bilgiler burada yer alır.</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div>
        <Navbar /> 
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
