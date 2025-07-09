import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import "../components/HeroStyles.css";
import TravelImage from "../assets/TravelFest2.jpg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About() {
  return (
    <>
      <Navbar></Navbar>
      <Hero cName="hero-about" heroImg={TravelImage} title="About Us"></Hero>
      <AboutUs></AboutUs>
      <Footer></Footer>
    </>
  );
}

export default About;
