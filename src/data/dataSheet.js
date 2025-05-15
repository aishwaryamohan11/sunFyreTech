import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CallIcon from "@mui/icons-material/Call";
// import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
// import YouTubeIcon from "@mui/icons-material/YouTube";
// import products from "../asset/products.png";
import ev from "../../src/asset/ev.png";
import cctv from "../../src/asset/cctvproduct.jpg";
import solar from "../../src/asset/solar.jpg";
import wificamera from "../asset/product/wificamera.jpg";
import nightvesion from "../asset/product/nightvesion.jpg";
import soalrwithcctv from "../asset/product/soalrwithcctv.webp";
import ongridsolar from "../asset/product/ongridsolar.jpg";
import offgridsolar from "../asset/product/offgridsolar.jpg";
import hybridsolar from "../asset/product/hybridsolar.avif";
import agrisolar from "../asset/product/agrisolar.cms";
import bikeev from "../asset/product/bikeev.png";
import rickshaw from "../asset/product/rickshaw.jpg";
import wasteev from "../asset/product/wasteev.jpg";
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
  // {
  //   id: 3,
  //   icon: <FacebookIcon style={{ fontSize: "40px" }} />,
  //   link: "",
  // },
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
  // {
  //   id: 6,
  //   icon: <YouTubeIcon style={{ fontSize: "40px" }} />,
  //   link: "",
  // },
];
export const menuData = [
  {
    id: 1,
    list: "Home",
    link: "#home",
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
    link: "EV",
    title: "EV",
    datas: [
      {
        id: 1,
        heading: (
          <div>
            <span style={{ color: "orange" }}>
              {" "}
              Electric Scooters (EV Bike)
            </span>{" "}
            – Smart, Economical, and Eco-Friendly Mobility
          </div>
        ),
        desc: "Electric scooters, also known as EV bikes, are the future of personal transportation. They offer a smooth, silent, and pollution-free ride, making them perfect for city commuting, short-distance travel, and daily errands. Powered by rechargeable batteries, EV scooties are cost-effective to run, require minimal maintenance, and are easy to charge at home or public charging stations. With features like digital displays, keyless start, and regenerative braking, they provide both convenience and performance. Whether you're looking to save on fuel or reduce your carbon footprint, electric scooters are a smart and sustainable choice for modern living.",
        productImg: bikeev,
      },
      {
        id: 2,
        heading: (
          <div>
            <span style={{ color: "orange" }}>
              {" "}
              Electric Passenger Rickshaws{" "}
            </span>
            – Efficient, Eco-Friendly Urban Transport
          </div>
        ),
        desc: "Electric passenger rickshaws offer a clean, economical, and reliable mode of transportation, ideal for short-distance travel within cities and towns. Powered by electric batteries, these rickshaws reduce pollution and operational costs, providing a quieter and smoother ride compared to traditional fuel-based vehicles. With low maintenance requirements and easy charging options, electric rickshaws are a popular choice for drivers and passengers alike. They help improve urban mobility while contributing to a greener environment—perfect for both commercial transport services and daily commuting.",
        productImg: rickshaw,
      },
      {
        id: 3,
        heading: (
          <div>
            <span style={{ color: "orange" }}>
              Electric Waste Collection Vehicles{" "}
            </span>
            – Sustainable and Efficient Waste Management
          </div>
        ),
        desc: "Electric waste collection vehicles provide an eco-friendly and cost-effective solution for modern waste management. Powered entirely by electric batteries, these vehicles produce zero emissions, helping cities and communities reduce air pollution and noise while managing waste efficiently. With lower operating costs and reduced maintenance compared to conventional diesel trucks, electric waste collectors are ideal for urban and suburban areas focused on sustainability. Equipped with advanced features for easy loading and compacting, these vehicles ensure cleaner streets and a healthier environment for everyone.",
        productImg: wasteev,
      },
    ],
  },
  {
    id: 2,
    img: solar,
    link: "SOLAR",
    title: "SOLAR",
    datas: [
      {
        id: 1,
        heading: (
          <div>
            <span style={{ color: "orange" }}>On-Grid Solar System</span> – Save
            Energy, Reduce Bills
          </div>
        ),
        desc: "An on-grid solar system, also known as a grid-tied system, is directly connected to the main electricity grid. It generates solar power during the day, powering your home or business and sending any excess electricity back to the grid. In return, you earn credits or reduce your electricity bill through net metering. This system is ideal for areas with a reliable power supply and helps significantly lower monthly electricity costs while reducing your carbon footprint. On-grid solar systems are cost-effective, low-maintenance, and perfect for residential, commercial, and industrial use.",
        productImg: ongridsolar,
      },
      {
        id: 2,
        heading: (
          <div>
            <span style={{ color: "orange" }}> Off-Grid Solar System </span>–
            Power Anywhere, Anytime
          </div>
        ),
        desc: "An off-grid solar system operates independently of the main electricity grid, making it ideal for remote or rural areas with little or no access to power. This system generates electricity through solar panels and stores it in batteries for use day and night. It provides complete energy independence and is perfect for farms, cabins, construction sites, and areas prone to frequent power cuts. Off-grid systems are reliable, eco-friendly, and ensure uninterrupted power supply without monthly electricity bills. With the right setup, you can enjoy 24/7 energy—even in the most isolated locations.",
        productImg: offgridsolar,
      },
      {
        id: 3,
        heading: (
          <div>
            <span style={{ color: "orange" }}>Hybrid Solar System </span> –
            Smart Power with Backup and Savings
          </div>
        ),
        desc: "A hybrid solar system combines the best of both worlds: it connects to the main electricity grid and also includes a battery backup. During the day, solar panels power your home or business and charge the batteries. Any extra power can be sent to the grid, helping reduce your electricity bill. At night or during a power outage, the system automatically switches to battery power, ensuring uninterrupted electricity. Hybrid systems are ideal for areas with an unreliable power supply and for those who want both energy independence and the benefits of grid connection. It’s a flexible, efficient, and future-ready solution.",
        productImg: hybridsolar,
      },
      {
        id: 4,
        heading: (
          <div>
            <span style={{ color: "orange" }}>
              {" "}
              Solar Solutions for Agriculture
            </span>{" "}
            – Powering Sustainable Farming
          </div>
        ),
        desc: "Solar energy is transforming agriculture by providing reliable, clean, and affordable power for a variety of farming needs. From solar-powered water pumps and irrigation systems to lighting and electric fences, solar technology helps farmers reduce dependence on costly and polluting diesel generators. With easy installation and minimal maintenance, solar solutions ensure uninterrupted operations even in remote areas without grid access. By harnessing the sun’s energy, farmers can increase productivity, lower energy costs, and promote sustainable farming practices that benefit both the environment and their livelihoods.",
        productImg: agrisolar,
      },
    ],
  },
  {
    id: 3,
    img: cctv,
    link: "CCTV",
    title: "CCTV",

    datas: [
      {
        id: 1,
        heading: (
          <div>
            <span style={{ color: "orange" }}>WiFi CCTV Cameras</span> – Smart,
            Wireless Security
          </div>
        ),
        desc: "WiFi CCTV cameras are a modern security solution that offer convenience, flexibility, and reliable surveillance without the need for heavy wiring. Ideal for homes, offices, shops, and warehouses, these cameras connect directly to your WiFi network, allowing real-time monitoring from your smartphone, tablet, or computer—anytime, anywhere.",
        productImg: wificamera,
      },
      {
        id: 2,
        heading: (
          <div>
            <span style={{ color: "orange" }}>Night Vision CCTV Cameras</span> –
            24/7 Protection, Even in the Dark
          </div>
        ),
        desc: "Night Vision CCTV cameras are designed to keep your property secure around the clock—even in complete darkness. Using infrared (IR) technology, these cameras can capture clear black-and-white footage at night, ensuring you never miss a moment. Ideal for outdoor areas, parking lots, entry gates, warehouses, and low-light indoor spaces, Night Vision cameras provide strong visibility where standard cameras fail. Whether you're installing a new system or upgrading an existing one, our team offers expert solutions to help you monitor your space with confidence—day or night.",
        productImg: nightvesion,
      },
      {
        id: 3,
        heading: (
          <div>
            <span style={{ color: "orange" }}> Solar-Powered CCTV Cameras</span>{" "}
            – Reliable Security Without Electricity
          </div>
        ),
        desc: "Solar CCTV cameras are an eco-friendly, cost-effective solution for securing areas without direct access to power. These cameras use solar panels to charge built-in batteries, providing 24/7 surveillance even in remote locations like farms, construction sites, parking lots, and off-grid properties. With features like HD video, night vision, motion detection, and remote mobile access, solar-powered cameras offer complete security without the hassle of wiring or high electricity bills. Easy to install and maintain, they’re perfect for anyone looking for smart security with zero dependency on the power grid.",
        productImg: soalrwithcctv,
      },
    ],
  },
];
