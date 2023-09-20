import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import MenuCard from "./MenuCard";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const itemsCards =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards ||
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      .categories[0].itemCards;
  console.log("itemsCards", itemsCards);

  return (
    <div className="menu flex justify-center flex-col items-center ">
      <div className="card-container w-1/2 bg-slate-50">
        <div className="restaurant-header-wrapper pt-1">
          <h1>{name}</h1>
        </div>
        <p className="mb-2">{cuisines.join(", ")}</p>

        <div className="menu-list mb-5">
          <div className="m-2">
            <h3>Recommended{"(" + itemsCards.length + ")"}</h3>
          </div>
          <ul>
            {itemsCards.map(({ card }) => {
              return <MenuCard card={card} />;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
