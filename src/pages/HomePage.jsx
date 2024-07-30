import React, { Fragment } from "react";
import Faq from "../components/Home/Faq";
import Home from "../components/Home/Home";
import { TabChange } from "../utils/dynamic-title-function.js";
import Reviews from "../components/Reviews/Reviews.jsx";
import Title from "../components/Title/Title.jsx";
import Services from "./Services.jsx";
import Heading from "../components/Heading/Heading.jsx";
import { chooseData } from "../data/chooseQualities/chooseData.js";

const HomePage = () => {
  TabChange("Sujangarh Pet Care");
  return (
    <Fragment>
      <Title />
      <Home />
      <div className="pt-20 px-4 md:px-24">
        <Heading title="Graduate Packers and Movers: Your Reliable Moving Partner" />
        <div className="text-center">
          Welcome to Graduate Packers and Movers, your trusted partner in
          seamless relocations! Founded by recent graduates passionate about
          logistics and customer service, we offer expert packing, safe and
          timely moving, and comprehensive solutions for both residential and
          commercial needs. Our team of highly trained professionals uses
          high-quality materials and innovative techniques to ensure your
          belongings are well-protected and securely transported. With a focus
          on reliability, affordability, and customer satisfaction, we strive to
          make your moving experience smooth and stress-free. Choose Graduate
          Packers and Movers for a fresh, professional approach to your next
          move.
        </div>
        <div>
          <Heading title="Why Choose Us" />
          <div className="flex flex-col md:flex-row justify-evenly gap-4 md:gap-2">
            {chooseData.map(({id, title, imageLink}) => (
            <div className="flex gap-1 justify-center items-center p-2 shadow-lg md:shadow-xl rounded-md" key={id}>
              <img src={imageLink} alt="logo" width="40" />
              <h2>{title}</h2>
            </div>
            ))}
          </div>
        </div>
      </div>
      <Services />
      <Reviews />
      <Faq />
    </Fragment>
  );
};

export default HomePage;
