import React, { Component } from "react";
import { GiPhone, GiEnvelope } from "react-icons/gi";
import "./ContactManagers.css";
import Title from "./Title";

export default class ContactManagers extends Component {
  state = {
    contacts: [
      {
        title: "Chief Executive Officer",
        iconphone: <GiPhone />,
        phone: "(+44) 781234567",
        iconemail: <GiEnvelope />,
        email: "ceo@flowerbulbs.co.uk",
      },
      {
        title: "R&D manager",
        iconphone: <GiPhone />,
        phone: "(+44) 787654321",
        iconemail: <GiEnvelope />,
        email: "rd@flowerbulbs.co.uk",
      },
    ],
  };

  render() {
    return (
      <section className="contacts">
        <Title title="Contact" />
        <div className="contacts-center">
          {this.state.contacts.map((item, index) => {
            return (
              <article key={index} className="contact">
                <h6>{item.title}</h6>
                <span>{item.iconphone}</span>
                <p>{item.phone}</p>
                <span>{item.iconemail}</span>
                <p>{item.email}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
