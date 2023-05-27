import React from "react";
import Banner from "../Banner/Banner";
import Categories from "../Category/Categories";
import PopularMenu from "../PopularMenu/PopularMenu";
import Featured from "../../Featured/Featured";
import Testimonials from "../Testimonials/Testimonials";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro | Menu </title>
      </Helmet>
      <Banner></Banner>
      <Categories></Categories>
      <PopularMenu></PopularMenu>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
