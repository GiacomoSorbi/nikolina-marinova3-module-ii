import React from "react";
import "./App.css";
import "./Queries.css";
import Home from "./pages/Home";
import Flowers from "./pages/Flowers";
import Contact from "./pages/Contact";
import SingleFlower from "./pages/SingleFlower";
// import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Testimonials from "./pages/Testimonials";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/flowers/" exact component={Flowers} />
        <Route path="/testimonials/" exact component={Testimonials} />
        <Route path="/contact/" exact component={Contact} />
        <Route path="/flowers/:specific" exact component={SingleFlower} />
        {/* <Route component={Error} /> */}
      </Switch>
      <Footer />
    </>
  );
}

export default App;
