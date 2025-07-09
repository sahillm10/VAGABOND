import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Service from "./routes/Service";
import About from "./routes/About";
import SignUp from "./routes/SignUp";
import TravelDiary from "./routes/TravelDiary";
import Login from "./routes/Login";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/service" element={<Service></Service>} />
        <Route path="/signup" element={<SignUp></SignUp>} />
        <Route path="/login" element={<Login></Login>} />

        <Route path="/traveldiary" element={<TravelDiary></TravelDiary>} />
      </Routes>
    </div>
  );
}
