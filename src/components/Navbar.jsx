import { useState } from "react";

export default function Navbar({
  onBookNow,
  onAboutClick,
  onExperienceClick,
  onContactClick,
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="logo">🌲 WoodNest</div>

      <div className={`nav-links ${open ? "show" : ""}`}>
        <button onClick={onAboutClick}>Locations</button>
        <button onClick={onExperienceClick}>Experiences</button>
        <button onClick={onContactClick}>Contact</button>
      </div>

      <div style={{ display: "flex", gap: "16px" }}>
        <button className="book-btn" onClick={onBookNow}>
          Book Now
        </button>

        <div className="menu-icon" onClick={() => setOpen(!open)}>
          ☰
        </div>
      </div>
    </div>
  );
}
