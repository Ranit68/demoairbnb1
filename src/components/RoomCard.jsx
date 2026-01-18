export default function RoomCard({ room }) {
  return (
    <div className="room-card">
      <img src={room.image} />

      <div className="room-info">
        <div className="room-title">{room.title}</div>
        <div className="room-type">{room.type}</div>

        <div className="room-bottom">
          <span>₹{room.price}/night</span>
          <span>⭐ {room.rating}</span>
        </div>
      </div>
    </div>
  );
}
