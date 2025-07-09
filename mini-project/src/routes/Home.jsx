import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import "../components/HeroStyles.css";
import TravelImage from "../assets/Travel2.jpg";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Hero
        cName="hero"
        heroImg={TravelImage}
        title="Chart Your Journey, Craft Your Story.."
        text="Start Your Adventure"
        btnText="Travel Diary"
        url="/traveldiary"
        btnClass="show"
      ></Hero>
      <Destination></Destination>

      <Footer></Footer>
    </>
  );
}

export default Home;
