import React, { Component } from "react";
import defaultBcg from "../images/flower-1.jpg";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { FlowerContext } from "../context";
import StyledHero from "../components/StyledHero";
import "./SingleFlower.css";

export default class SingleFlower extends Component {
  constructor(props) {
    super(props);

    this.state = {
      specific: this.props.match.params.specific,
      defaultBcg,
    };
  }
  static contextType = FlowerContext;

  render() {
    const { getFlower } = this.context;
    const flower = getFlower(this.state.specific);
    if (!flower) {
      return (
        <div className="error">
          <h3>no such flower bulbs could be found...</h3>
          <Link
            to="/flowers"
            className="btn-primary"
            aria-label="back to flowers"
          >
            back to flowers
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      quantity,
      size,
      price,
      guidance,
      cut,
      potted,
      images,
    } = flower;
    const [mainImg, ...defaultImg] = images;

    return (
      <>
        <section className="container">
          <div>
            <StyledHero img={mainImg || this.state.defaultBcg}>
              <Banner title={`${name} flower bulb`}>
                <Link to="/flowers" className="btn-primary">
                  back to flowers
                </Link>
              </Banner>
            </StyledHero>
          </div>
          <div className="single-flower">
            <div className="single-flower-images">
              {defaultImg.map((item, index) => {
                return <img key={index} src={item} alt={name} />;
              })}
            </div>
          </div>

          <div className="main">
            <div className="main-unit">
              <h6>info</h6>
              <p>price : £{price}</p>
              <p>size : {size}</p>
              <p>
                max quantity :{" "}
                {quantity > 200
                  ? `${quantity} free packing available`
                  : `${quantity} packing charges may apply `}
              </p>
              <p>
                {potted ? "pot bulbs available" : "pot bulbs not available"}
              </p>
              <p>{cut && "cut flower bulbs available"}</p>
            </div>

            <div className="main-unit">
              <h6>details</h6>
              <p>{description}</p>
            </div>

            <div className="main-unit">
              <h6>guidance</h6>
              <ul className="extras">
                {guidance.map((item, index) => {
                  return <li key={index}>-{item}</li>;
                })}
              </ul>
            </div>
          </div>
        </section>
      </>
    );
  }
}
