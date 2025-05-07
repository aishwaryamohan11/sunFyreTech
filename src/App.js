import CommanNavBar from "./component/CommanNavBar/CommanNavBar.jsx";
import ContactUs from "./component/contactUs/ContactUs.jsx";
import Footer from "./component/footer/Footer.jsx";
import HeroSection from "./component/heroSection/HeroSection";
import Products from "./component/products/Products.jsx";
import SignUpForm from "./component/signUpForm/SignUpForm.jsx";

function App() {
  return (
    <div style={{ backgroundColor: "white" }}>
      <CommanNavBar />
      <HeroSection />
      <Products />
      <ContactUs />
      <SignUpForm />
      <Footer />
    </div>
  );
}

export default App;
