import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import RoomDetails from "./pages/RoomDetails";
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/room-details" element={<RoomDetails />} />
      </Routes>

      {/* ✅ FOOTER ALWAYS VISIBLE */}
      <Footer />
    </BrowserRouter>
  );
}
