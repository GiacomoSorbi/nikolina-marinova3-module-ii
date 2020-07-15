import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Testimonial from "../components/Testimonial";
const Contact = () => {
  return (
    <>
      <Hero hero="testimonialsHero">
        <Banner title="Testimonials">
          <Link to="/" className="btn-primary" aria-label="return home">
            return home
          </Link>
        </Banner>
      </Hero>
      <Testimonial />
    </>
  );
};

export default Contact;
