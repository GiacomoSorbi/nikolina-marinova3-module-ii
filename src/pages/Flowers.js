import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import FlowerContainer from "../components/FlowerContainer";
const Flowers = () => {
  return (
    <>
      <Hero hero="flowersHero">
        <Banner title="our flowers">
          <Link to="/" className="btn-primary" aria-label="return home">
            return home
          </Link>
        </Banner>
      </Hero>
      <FlowerContainer />
    </>
  );
};

export default Flowers;
