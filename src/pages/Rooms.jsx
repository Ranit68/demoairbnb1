import { useNavigate, useLocation } from "react-router-dom";
import rooms from "../data/rooms";
import "../styles/rooms.css";

export default function Rooms() {
  const navigate = useNavigate();
  const { state } = useLocation();

  return (
    <div className="rooms-page">
      <div className="rooms-header">
        <h1>Select Your Room</h1>
        <p>{state?.days} nights · {state?.guests} guests</p>
      </div>

      <div className="rooms-grid">
        {rooms
          .filter((room) => room.guests >= state.guests)
          .map((room) => (
            <div className="room-card-ui" key={room.id}>
              <img src={room.image} />

              <div className="room-info-ui">
                <h3>{room.name}</h3>
                <p>Up to {room.guests} guests</p>

                <div className="room-bottom-ui">
                  <span>₹{room.price}/night</span>

                  <div className="room-btns">
                    <button
                      onClick={() =>
                        navigate("/room-details", { state: room })
                      }
                    >
                      Details
                    </button>

                    <button className="select-btn">
                      Select
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
