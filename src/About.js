import React from "react";
import HeroSection from "./component/Herosection";

const About = () =>{
    const data = {
        name :"Doit E-Commerce",
        intro:"Portable Espresso Maker:Brew your favorite coffee on the go with our Portable Espresso Maker. Compact and easy to use, this device ensures you never have to compromise on your caffeine fix. Elevate your travel experience with the perfect cup of espresso anytime, anywhere."

    };

    return <HeroSection mydata={data} />
};

export default About ;