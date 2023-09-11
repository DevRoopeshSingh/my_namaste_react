import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import restaurantData from "../utils/mockData";

const BodyComponent = () => {
  const [restaurantList, setRestaurantList] = useState(restaurantData);

  return (
    <div id="body-container" className="body">
      {/* <div className="search">Search</div> */}
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterList = restaurantList.filter(
              (rest) => rest.info.avgRating > 4.2
            );
            setRestaurantList(filterList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="restaurant-container">
        {restaurantList.length &&
          restaurantList.map((resData) => (
            <RestaurantCard key={resData.info.id} resData={resData} />
          ))}
      </div>
    </div>
  );
};

export default BodyComponent;
