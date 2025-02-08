import { Link } from "react-router-dom";
import "./Sidebar.css"; // CSS dosyamız

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Panel</h2>
      <ul>
        <li><Link to="/">Ana Sayfa</Link></li>
        <li><Link to="/profile">Profil</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
