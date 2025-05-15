import CommanNavBar from "../CommanNavBar/CommanNavBar";
import ContactUs from "../contactUs/ContactUs";
import Footer from "../footer/Footer";
import HeroSection from "../heroSection/HeroSection";
import LandingPage from "../landingPage/LandingPage";
import Products from "../products/Products";
import SignUpForm from "../signUpForm/SignUpForm";

const Home = () => {
  return (
    <>
      <CommanNavBar />
      <LandingPage />
      <HeroSection />
      <Products />
      <ContactUs />
      <SignUpForm />
      <Footer />
    </>
  );
};

export default Home;
