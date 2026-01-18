import { useLocation, useNavigate } from "react-router-dom";
import "../styles/roomDetails.css";

export default function RoomDetails() {
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="room-details-page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="details-card">
        <img src={state.image} />

        <div className="details-info">
          <h1>{state.name}</h1>

          <p className="price">₹{state.price} / night</p>

          <div className="info-grid">
            <div>
              <strong>Guests</strong>
              <p>{state.guests}</p>
            </div>

            <div>
              <strong>Bed</strong>
              <p>{state.bed}</p>
            </div>

            <div>
              <strong>Balcony</strong>
              <p>{state.balcony ? "Available" : "Not Available"}</p>
            </div>
          </div>

          <div className="facilities">
            <h3>Facilities</h3>
            <div className="facility-list">
              {state.facilities.map((item, i) => (
                <span key={i}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
