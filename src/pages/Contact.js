import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import ContactManagers from "../components/ContactManagers";
const Contact = () => {
  return (
    <>
      <Hero hero="contactHero">
        <Banner title="Contacts">
          <Link to="/" className="btn-primary" aria-label="return home">
            return home
          </Link>
        </Banner>
      </Hero>
      <ContactManagers />
    </>
  );
};

export default Contact;
