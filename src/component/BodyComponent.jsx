import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const BodyComponent = () => {
  const [restaurantList, setRestaurantList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9566294&lng=77.70468230000002&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setRestaurantList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //conditional rendering
  // if (restaurantList && restaurantList.length === 0) {
  //   return <Shimmer />;
  // }

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div id="body-container" className="body">
      {/* <div className="search">Search</div> */}
      {console.log("render the UI ")}
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
        {restaurantList.length > 0 &&
          restaurantList.map((resData) => (
            <RestaurantCard key={resData.info.id} resData={resData} />
          ))}
      </div>
    </div>
  );
};

export default BodyComponent;
