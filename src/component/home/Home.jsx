import CommanNavBar from "../CommanNavBar/CommanNavBar";
import ContactUs from "../contactUs/ContactUs";
import Footer from "../footer/Footer";
import HeroSection from "../heroSection/HeroSection";
import LandingPage from "../landingPage/LandingPage";
import Products from "../products/Products";
import SignUpForm from "../signUpForm/SignUpForm";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const id = location.state.scrollTo.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100); // Small delay to ensure the section is rendered
      }
    }
  }, [location.state]);

  return (
    <>
      <CommanNavBar />

      {/* <Products /> */}

      <section id="home">
        <LandingPage />
      </section>

      <section id="aboutUs">
        <HeroSection />
      </section>

      <section id="products">
        <Products />
      </section>
      <ContactUs />
      <SignUpForm />
      <section id="footer">
        {" "}
        <Footer />
      </section>
    </>
  );
};

export default Home;
