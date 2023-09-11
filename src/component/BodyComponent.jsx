import RestaurantCard from "./RestaurantCard";
import restaurantData from "../utils/mockData";

const BodyComponent = () => {
  return (
    <div id="body-container" className="body">
      <div className="search">Search</div>
      <div className="restaurant-container">
        {restaurantData.map((resData) => (
          <RestaurantCard key={resData.info.id} resData={resData} />
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;
