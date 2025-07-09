import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import "../components/HeroStyles.css";
import TravelImage from "../assets/Travel6.jpg";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

function Service() {
  return (
    <>
      <Navbar></Navbar>
      <Hero cName="hero-about" heroImg={TravelImage} title="Service"></Hero>
      <Trip></Trip>
      <Footer></Footer>
    </>
  );
}

export default Service;
