import React from "react";
import FlowersFilter from "./FlowerFilter";
import FlowersList from "./FlowerList";
import { withFlowerConsumer } from "../context";
import Loading from "./Loading";

function FlowerContainer({ context }) {
  const { loading, sortedFlowers, flowers } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <FlowersFilter flowers={flowers} />
      <FlowersList flowers={sortedFlowers} />
    </>
  );
}

export default withFlowerConsumer(FlowerContainer);
