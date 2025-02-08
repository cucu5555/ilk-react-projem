import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, signInWithEmailAndPassword, sendPasswordResetEmail } from "./firebase"; // Fazla import kaldırıldı
import "./Auth.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("Giriş başarılı:", userCredential.user);
      navigate("/profile");
    } catch (error) {
      console.error("Giriş hatası:", error.message);
    }
  };

  const handlePasswordReset = async () => {
    const email = prompt("Şifreni sıfırlamak için e-posta adresini gir:");
    if (email) {
      try {
        await sendPasswordResetEmail(auth, email);
        alert("Şifre sıfırlama bağlantısı e-postana gönderildi.");
      } catch (error) {
        alert("Hata: " + error.message);
      }
    }
  };

  return (
    <div className="auth-container">
      <h2>Giriş Yap</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="E-posta"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Şifre"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Giriş Yap</button>
      </form>
      <button onClick={handlePasswordReset}>Şifremi Unuttum</button>
    </div>
  );
}

export default Login;
