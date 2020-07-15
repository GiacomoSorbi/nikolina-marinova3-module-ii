import React, { Component } from "react";
import { GiBulb, GiFlowerPot, GiFlowerStar, GiBookshelf } from "react-icons/gi";
import "./Services.css";
import Title from "./Title";
import Subtitle from "./Subtitle";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <GiBulb />,
        title: "flower bulbs",
        info:
          "We supply Hyacinth flower bulbs. You will find a large part in our catalog.",
      },
      {
        icon: <GiFlowerPot />,
        title: "Potted flowers",
        info:
          "For the professional growers of pot plants, we offer a wide range of Hyacinth bulbs.",
      },
      {
        icon: <GiFlowerStar />,
        title: "Cut flowers",
        info:
          "For the professional growers of cut flowers, we offer beautiful varieties of Hyacinth.",
      },
      {
        icon: <GiBookshelf />,
        title: "Expert advice",
        info:
          "We can provide professional advice to help our customers during the cultivation.",
      },
    ],
  };

  render() {
    return (
      <section className="services">
        <Title title="services" />
        <Subtitle subtitle="Flower Bulbs grow and supply flower bulbs. For the professional growers of cut and potted flowers, we offer beautiful varieties of Hyacinth. You will find a large part in our catalog." />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
