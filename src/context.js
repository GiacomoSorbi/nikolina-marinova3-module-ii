import React, { Component } from "react";
import items from "./data";

const FlowerContext = React.createContext();
// <FlowerContext.Provider value={'hello'}
class FlowerProvider extends Component {
  state = {
    flowers: [],
    sortedFlowers: [],
    newFlowers: [],
    loading: true,
    type: "all",
    quantity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    cut: false,
    potted: false,
  };

  componentDidMount() {
    // this.getData();
    let flowers = this.formatData(items);
    let newFlowers = flowers.filter((flower) => flower.new === true);
    let maxPrice = Math.max(...flowers.map((item) => item.price));
    let maxSize = Math.max(...flowers.map((item) => item.size));
    this.setState({
      flowers,
      newFlowers,
      sortedFlowers: flowers,
      loading: false,
      price: maxPrice,
      maxPrice,
      maxSize,
    });
  }

  formatData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);

      let flower = { ...item.fields, images, id };
      return flower;
    });
    return tempItems;
  }
  getFlower = (specific) => {
    let tempFlowers = [...this.state.flowers];
    const flower = tempFlowers.find((flower) => flower.specific === specific);
    return flower;
  };
  handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = event.target.name;

    this.setState(
      {
        [name]: value,
      },
      this.filterFlowers
    );
  };
  filterFlowers = () => {
    let {
      flowers,
      type,
      quantity,
      price,
      minSize,
      maxSize,
      cut,
      potted,
    } = this.state;
    // all the flowers
    let tempFlowers = [...flowers];
    // transform value
    quantity = parseInt(quantity);
    price = parseInt(price);

    // filter by type
    if (type !== "all") {
      tempFlowers = tempFlowers.filter((flower) => flower.type === type);
    }

    // filter by quantity
    if (quantity !== 1) {
      tempFlowers = tempFlowers.filter((flower) => flower.quantity >= quantity);
    }
    // filter by price
    tempFlowers = tempFlowers.filter((flower) => flower.price <= price);
    // filter by size
    tempFlowers = tempFlowers.filter(
      (flower) => flower.size >= minSize && flower.size <= maxSize
    );
    // filter by cut
    if (cut) {
      tempFlowers = tempFlowers.filter((flower) => flower.cut === true);
    }
    // filter by potted
    if (potted) {
      tempFlowers = tempFlowers.filter((flower) => flower.potted === true);
    }
    // change state
    this.setState({
      sortedFlowers: tempFlowers,
    });
  };
  render() {
    return (
      <FlowerContext.Provider
        value={{
          ...this.state,
          getFlower: this.getFlower,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </FlowerContext.Provider>
    );
  }
}

const FlowerConsumer = FlowerContext.Consumer;

export function withFlowerConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <FlowerConsumer>
        {(value) => <Component {...props} context={value} />}
      </FlowerConsumer>
    );
  };
}

export { FlowerProvider, FlowerConsumer, FlowerContext };
