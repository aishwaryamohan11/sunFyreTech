// components/ProductDetail.js
import { useParams } from "react-router-dom";
import { productsData } from "../../data/dataSheet";
import CommanNavBar from "../CommanNavBar/CommanNavBar";
import ContactUs from "../contactUs/ContactUs";
import SignUpForm from "../signUpForm/SignUpForm";
import Footer from "../footer/Footer";
import Specification from "../specification/Specification";

const ProductDetail = () => {
  const { slug } = useParams();
  const product = productsData.find((p) => p.link.toLowerCase() === slug);

  if (!product) return <p>Product not found</p>;

  return (
    <div>
      <CommanNavBar />
      <Specification product={product} />
      <ContactUs />
      <SignUpForm />
      <Footer />

      {/* <h2>{product.title}</h2>
      <img src={product.img} alt={product.title} width="200" />
      <p>This is the detail page for {product.title}.</p> */}
    </div>
  );
};

export default ProductDetail;
