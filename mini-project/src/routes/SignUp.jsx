import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import "../components/HeroStyles.css";
import TravelImage from "../assets/Travel3.jpg";
import Footer from "../components/Footer";
import SignUpForm from "../components/SignUpForm";

function SignUp() {
  return (
    <>
      <Navbar></Navbar>
      <Hero cName="hero-about" heroImg={TravelImage} title="Sign Up"></Hero>
      <SignUpForm></SignUpForm>
      <Footer></Footer>
    </>
  );
}

export default SignUp;
