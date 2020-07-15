import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import NewFlowers from "../components/NewFlowers";
export default function Home() {
  return (
    <>
      <Hero>
        <Banner title="flower bulbs" subtitle="where passion comes to bloom">
          <Link
            to="/flowers"
            className="btn-primary"
            aria-label="view flower bulbs"
          >
            view flower bulbs
          </Link>
        </Banner>
      </Hero>
      <Services />
      <NewFlowers />
    </>
  );
}
