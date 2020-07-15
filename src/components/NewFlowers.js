import React, { Component } from "react";
import { FlowerContext } from "../context";
import Loading from "./Loading";
import Flower from "./Flower";
import Title from "./Title";
import Subtitle from "./Subtitle";
import "./NewFlowers.css";

export default class NewFlowers extends Component {
  static contextType = FlowerContext;
  render() {
    let { loading, newFlowers: flowers } = this.context;
    flowers = flowers.map((flower) => {
      return <Flower key={flower.id} flower={flower} />;
    });

    return (
      <section className="new-flowers">
        <Title title="new varieties" />
        <Subtitle subtitle="We are happy to introduce you the new beautiful varieties of Hyacinth. Talk to our experts for professional advice during the cultivation process." />
        <div className="new-flowers-center">
          {loading ? <Loading /> : flowers}
        </div>
      </section>
    );
  }
}
