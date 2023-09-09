import RestaurantCard from "./RestaurantCard";
import restaurantData from "./api/exampleData";

const BodyComponent = () => {
  return (
    <div id="body-container" className="body">
      <div className="search">search</div>
      <div className="restaurant-container">
        {restaurantData.map((resData) => (
          <RestaurantCard key={resData.info.id} resData={resData} />
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;
