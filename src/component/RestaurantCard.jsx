 import React from "react"

 const RestaurantCard = ({ resData }) => {
    // const { resName, cuisine } = props;
    const {
      id,
      name,
      cloudinaryImageId,
      cuisines,
      avgRating,
      feeDetails,
      costForTwo,
      sla,
    } = resData?.info;
  
    return (
      <div className="restaurant-card">
        <img
          alt="rest-image"
          className="res-logo"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{feeDetails.totalFee}</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla.slaString}</h4>
      </div>
    );
  };

  export default RestaurantCard;