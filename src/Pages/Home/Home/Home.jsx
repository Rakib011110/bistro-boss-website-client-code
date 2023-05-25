import React from "react";
import Banner from "../Banner/Banner";
import Categories from "../Category/Categories";
import PopularMenu from "../PopularMenu/PopularMenu";
import Featured from "../../Featured/Featured";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Categories></Categories>
      <PopularMenu></PopularMenu>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
