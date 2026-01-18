import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Home() {
  const navigate = useNavigate();

  const aboutRef = useRef(null);
  const reviewRef = useRef(null);
  const contactRef = useRef(null);

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);

  const pricePerNight = 3590;

  const getDays = () => {
    if (!checkIn || !checkOut) return 1;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    return Math.max(
      1,
      Math.ceil((end - start) / (1000 * 60 * 60 * 24))
    );
  };

  const total = getDays() * pricePerNight;

  const goToRooms = () => {
    navigate("/rooms", {
      state: {
        checkIn: checkIn || null,
        checkOut: checkOut || null,
        guests: guests || 1,
        days: getDays(),
        total: total || pricePerNight,
      },
    });
  };

  const handleReserve = () => {
    if (!checkIn || !checkOut) {
      alert("Select check-in and check-out dates");
      return;
    }
    goToRooms();
  };

  return (
    <>
      {/* HERO */}
      <div className="hero">
        <div className="hero-box">
          <Navbar
            onBookNow={goToRooms}
            onAboutClick={() =>
              aboutRef.current.scrollIntoView({ behavior: "smooth" })
            }
            onExperienceClick={() =>
              reviewRef.current.scrollIntoView({ behavior: "smooth" })
            }
            onContactClick={() =>
              contactRef.current.scrollIntoView({ behavior: "smooth" })
            }
          />

          {/* HERO TEXT ANIMATION */}
          <motion.div
            className="hero-left"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1>
              Your Perfect <br />
              Stay in Nature
            </h1>

            <p>
              Discover peaceful cabins, mountain views and luxury
              comfort — crafted for unforgettable experiences.
            </p>

            <div
              className="map-preview"
              onClick={() =>
                alert("📍 Map feature coming soon")
              }
            >
              <img
                src="https://cdn.prod.website-files.com/5c29380b1110ec92a203aa84/66e5ce469b48938aa34d8684_Google%20Maps%20-%20Compressed.jpg"
                alt="map"
                className="map-img"
              />
              <div className="map-pin">📍</div>
            </div>
          </motion.div>
          <motion.div
            className="booking-card"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h3>Evergreen Pine Family Lodge</h3>

            <div className="booking-inputs">
              <input
                type="date"
                value={checkIn}
                onChange={(e) =>
                  setCheckIn(e.target.value)
                }
              />

              <input
                type="date"
                value={checkOut}
                onChange={(e) =>
                  setCheckOut(e.target.value)
                }
              />

              <select
                value={guests}
                onChange={(e) =>
                  setGuests(e.target.value)
                }
              >
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="4">4 Guests</option>
                <option value="6">6 Guests</option>
              </select>
            </div>

            <p className="price-text">
              Estimated Price: ₹{total}
            </p>

            <button
              className="reserve-btn"
              onClick={handleReserve}
            >
              Reserve
            </button>
          </motion.div>
        </div>
      </div>

      {/* ABOUT */}
      <motion.section
        ref={aboutRef}
        className="landing-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>About Our Stay</h2>
        <p className="about-text">
          Founded in 2019, Evergreen Pine Lodge was created
          to offer peaceful nature retreats with modern comfort.
        </p>
      </motion.section>

      {/* WHY CHOOSE US */}
      <motion.section
        className="landing-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Why Choose Us</h2>

        <div className="grid-3">
          <div className="glass-card">🌲 Nature View</div>
          <div className="glass-card">🏡 Premium Cabins</div>
          <div className="glass-card">⭐ Trusted Service</div>
        </div>
      </motion.section>

      {/* REVIEWS */}
      <motion.section
        ref={reviewRef}
        className="landing-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>What Our Guests Say</h2>

        <div className="grid-3">
          <div className="glass-card">
            “Peaceful stay and amazing view.”
            <span>— Rahul ⭐ 5.0</span>
          </div>
          <div className="glass-card">
            “Best cabin experience.”
            <span>— Ananya ⭐ 4.8</span>
          </div>
          <div className="glass-card">
            “Perfect weekend getaway.”
            <span>— Arjun ⭐ 4.9</span>
          </div>
        </div>
      </motion.section>

      {/* CONTACT */}
      <motion.section
        ref={contactRef}
        className="landing-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Contact Us</h2>

        <form className="contact-form">
          <input placeholder="Your Name" />
          <input placeholder="Email" />
          <textarea placeholder="Message" />
          <button type="submit">Send Message</button>
        </form>
      </motion.section>
    </>
  );
}
