import React, { Component } from "react";
import { IoMdPerson } from "react-icons/io";
import "./Testimonial.css";
import Title from "./Title";

export default class Testimonial extends Component {
  state = {
    testimonials: [
      {
        icon: <IoMdPerson />,
        title: "D. Johnson",
        text:
          "Flower Bulbs helped us to start our own business. Their experts gave us professional advice on cultivating new spring flower varieties. ",
      },
      {
        icon: <IoMdPerson />,
        title: "A. Robertson",
        text:
          "As a professional grower of cut flowers, I was happy to find the best varieties on the market. We were offered high quality Hyicinth bulbs.",
      },
      {
        icon: <IoMdPerson />,
        title: "I. Dimitrov",
        text:
          "It's always easy to communicate with Flower Bulbs. We have been given the best advice on cultivation a wide range of spring varieties.",
      },
    ],
  };

  render() {
    return (
      <section className="testimonials">
        <Title title="Testimonials" />
        <div className="testimonials-center">
          {this.state.testimonials.map((item, index) => {
            return (
              <article key={index} className="testimonial">
                <h6>{item.title}</h6>
                <span>{item.icon}</span>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
