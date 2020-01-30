import React from "react";
import { Link } from "react-router-dom";
import Hero from "../component/Hero";
import Banner from "../component/Banner";

const Cars = () =>{
  return (
    <Hero hero="carsHero">
      <Banner title="Our Car Store">
        <Link to="/" className="btn-primary">
          Return Home
        </Link>
      </Banner>
    </Hero>
  );
};

  export default Cars;
  