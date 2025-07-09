import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import "../components/HeroStyles.css";
import TravelImage from "../assets/Travel3.jpg";
import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";

function Login() {
  return (
    <>
      <Navbar></Navbar>
      <Hero cName="hero-about" heroImg={TravelImage} title="Login"></Hero>
      <LoginForm></LoginForm>
      <Footer></Footer>
    </>
  );
}

export default Login;
