import React from "react";
import FoodCard from "../../../Components/FoodCard/FoodCard";

const OrderTabs = ({ items }) => {
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4">
      {items.map((item) => (
        <FoodCard item={item} key={item._id}></FoodCard>
      ))}
    </div>
  );
};

export default OrderTabs;
