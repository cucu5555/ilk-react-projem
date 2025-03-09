import { useState, useEffect } from "react";
import "./UserProfile.css"; // CSS dosyası

function UserProfile() {
  // LocalStorage'dan veriyi al, yoksa varsayılan değerleri kullan
  const getInitialState = (key, defaultValue) => {
    return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : defaultValue;
  };

  const [name, setName] = useState(getInitialState("name", "Mustafa"));
  const [email, setEmail] = useState(getInitialState("email", "mustafa@example.com"));
  const [editing, setEditing] = useState(false); // Düzenleme modunu kontrol eder

  // Değişiklikleri localStorage'a kaydet
  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(name));
    localStorage.setItem("email", JSON.stringify(email));
  }, [name, email]);

  return (
    <div className="profile-container">
      <h1>Kullanıcı Profili</h1>
      {!editing ? (
        <>
          <p><strong>Ad:</strong> {name}</p>
          <p><strong>Email:</strong> {email}</p>
          <button onClick={() => setEditing(true)}>Düzenle</button>
        </>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setEditing(false);
          }}
        >
          <label>
            Ad: <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </label>
          <label>
            Email: <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>
          <button type="submit">Kaydet</button>
        </form>
      )}
    </div>
  );
}

export default UserProfile;
