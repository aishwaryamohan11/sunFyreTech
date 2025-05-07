import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CallIcon from "@mui/icons-material/Call";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import products from "../asset/products.png";
import ev from "../../src/asset/ev.png"
export const iconData = [
  {
    id: 1,
    icon: <WhatsAppIcon style={{ fontSize: "40px" }} />,
    link: "https://wa.me/9361266030?text=Hi",
  },
  {
    id: 2,
    icon: <CallIcon style={{ fontSize: "40px" }} />,
    link: "tel:+9361266030",
  },
  {
    id: 3,
    icon: <FacebookIcon style={{ fontSize: "40px" }} />,
    link: "",
  },
  {
    id: 4,
    icon: <EmailIcon style={{ fontSize: "40px" }} />,
    link: "mailto:sunfyretech@gmail.com",
  },
  {
    id: 5,
    icon: <InstagramIcon style={{ fontSize: "40px" }} />,
    link: "https://www.instagram.com/p/DJHU4QlTejf/?igsh=bXZsMnp1cGFycG9q",
  },
  {
    id: 6,
    icon: <YouTubeIcon style={{ fontSize: "40px" }} />,
    link: "",
  },
];
export const menuData = [
  {
    id: 1,
    list: "Home",
    // link: "https://wa.me/7339102942?text=Hi",
  },
  {
    id: 2,
    list: "About Us",
    link: "#aboutUs",
  },
  {
    id: 3,
    list: "Products",
    link: "#products",
  },
  {
    id: 4,
    list: "Contact Us",
    link: "#contactUs",
  },
];

export const productsData = [
  {
    id: 1,
    img: ev,
    link: "",
    title: "EV",
  },
  {
    id: 2,
    img: products,
    link: "",
    title: "SOLAR",
  },
  {
    id: 3,
    img: products,
    link: "",
    title: "CCTV",
  },
];
