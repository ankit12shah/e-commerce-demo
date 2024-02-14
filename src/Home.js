import React from "react";
import styled from "styled-components";
// import Editablel from "./jsonData/Editabel";
import HeroSection from "./component/Herosection";
import Services from "./component/Service";
import Trusted from "./component/Trusted";
import Galleary from "./jsonData/daynamicSculptur";
import Props from "./jsonData/Prop";


const Home = () => {
    const data = {
        name: "Doit Store",
        intro:"Welcome to Doit Store your one-stop destination for all things stylish and essential. Explore a curated collection of premium products designed to elevate your lifestyle. From fashion-forward apparel to cutting-edge gadgets, we've got it all. Shop with confidence, knowing that each item is carefully selected for quality and style. Enjoy seamless navigation, secure transactions, and lightning-fast shipping. Elevate your shopping experience with Doit Store where convenience meets style! "
    };
    return(
    <>
        <HeroSection mydata={data} />
        <Services />
        <Trusted />
        <Galleary />
        <Props />
        {/* <Editablel /> */}
    </>
    )
};
const Wrapper = styled.section`
background-color : ${({ theme }) => theme.colors.bg};
width:20rem;
height:100vh;
`;
export default Home;