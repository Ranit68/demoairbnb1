import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* LEFT */}
        <div className="footer-brand">
          <h2>🌲 DemoBnb</h2>
          <p>
            Experience peaceful stays surrounded by nature,
            comfort and unforgettable memories.
          </p>
        </div>

        {/* LINKS */}
        <div className="footer-links">
          <div>
            <h4>Quick Links</h4>
            <Link to="/">Home</Link>
            <Link to="/rooms">Rooms</Link>
            <Link to="/">About</Link>
          </div>

          <div>
            <h4>Support</h4>
            <a href="#">Help Center</a>
            <a href="#">Contact</a>
            <a href="#">Privacy Policy</a>
          </div>

          <div>
            <h4>Social</h4>
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
            <a href="#">Facebook</a>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} DemoBnb. All rights reserved.
      </div>
    </footer>
  );
}
