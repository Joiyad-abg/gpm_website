import React from "react";
import { TabChange } from "../utils/dynamic-title-function.js";
import Heading from "../components/Heading/Heading.jsx";

const About = () => {
  TabChange("Graduate Packers and Movers | About us");
  return (
    <div className="py-40 px-4 md:px-24">
      <Heading title="Graduate Packers and Movers: Your Reliable Moving Partner" />
      <div className="text-center">
      Welcome to Graduate Packers and Movers, your trusted partner in seamless relocations! Founded by recent graduates passionate about logistics and customer service, we offer expert packing, safe and timely moving, and comprehensive solutions for both residential and commercial needs. Our team of highly trained professionals uses high-quality materials and innovative techniques to ensure your belongings are well-protected and securely transported. With a focus on reliability, affordability, and customer satisfaction, we strive to make your moving experience smooth and stress-free. Choose Graduate Packers and Movers for a fresh, professional approach to your next move.
      </div>

      <Heading title="Message from owner" />
      <div className="text-center pb-4">
        "Dear Valued Customers,

Welcome to Graduate Packers and Movers! As a founder, I’m excited to offer you a fresh, reliable approach to moving. Our dedicated team of recent graduates is committed to providing expert packing, safe transportation, and personalized service to make your move stress-free.

Thank you for choosing us for your moving needs. We look forward to serving you!"
      </div>
      <h2 className="font-bold">Mohd. Mustafa</h2>
      <p>Graduate Packers & Movers</p>
    </div>
  );
};

export default About;
