import { CDN_URL } from "../utils/constants";

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
    <div
      className="restaurant-card m-5 p-2 w-[200] min-h-[100px] bg-gray-200 rounded-xl drop-shadow-2xl
    hover:bg-gray-300 transition duration-300"
    >
      <img
        alt="rest-image"
        className="res-logo m-2 p-3 w-40 rounded-3xl"
        src={`${CDN_URL + cloudinaryImageId}`}
      />
      <div className="m-3">
        <h3 className="text-3xl">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>✩ {avgRating} stars</h4>
        {/* <h4>{feeDetails.totalFee}</h4> */}
        {/* <h4>{costForTwo}</h4> */}
        <h4>{sla.slaString}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
