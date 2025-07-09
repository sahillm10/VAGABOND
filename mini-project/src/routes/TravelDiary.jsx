import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import "../components/HeroStyles.css";
import TravelImage from "../assets/Travel7.jpg";
import Footer from "../components/Footer";
import TravelDiaryData from "../components/TravelDiaryData";

function TravelDiary() {
  return (
    <>
      <Navbar></Navbar>
      <Hero
        cName="hero-about"
        heroImg={TravelImage}
        title="Travel Diary"
      ></Hero>
      <TravelDiaryData />
      <Footer></Footer>
    </>
  );
}

export default TravelDiary;
