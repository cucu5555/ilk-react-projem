import { useState } from "react";
import "./UserProfile.css"; // Stil dosyası

function UserProfile() {
  const [name, setName] = useState("Mustafa");
  const [email, setEmail] = useState("mustafa@example.com");

  return (
    <div className="profile-container">
      <h1>Kullanıcı Profili</h1>
      <p><strong>Ad:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <button onClick={() => setName("Yeni İsim")}>Adı Değiştir</button>
    </div>
  );
}

export default UserProfile;
