import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db, createUserWithEmailAndPassword, doc, setDoc } from "./firebase";
import "./Auth.css";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // Kullanıcı bilgilerini Firestore'a kaydet
      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        createdAt: new Date()
      });

      console.log("Kullanıcı başarıyla kaydedildi:", user);
      navigate("/profile"); // Kullanıcı başarıyla kayıt olduktan sonra yönlendirme
    } catch (error) {
      console.error("Kayıt hatası:", error.message);
    }
  };

  return (
    <div className="auth-container">
      <h2>Kayıt Ol</h2>
      <form onSubmit={handleSignUp}>
        <input type="email" placeholder="E-posta" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Şifre" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Kayıt Ol</button>
      </form>
    </div>
  );
}

export default SignUp;
