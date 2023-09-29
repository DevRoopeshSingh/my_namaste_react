import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import MenuCard from "./MenuCard";
import MenuCategory from "./MenuCategory";

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

  const ItemCategory = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(({ card }) => { return card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"});

  console.log("Categories info", ItemCategory);

  return (
    <div className="menu flex justify-center flex-col items-center ">
      {/* <div className="card-container w-1/2 bg-slate-50">
        <div className="restaurant-header-wrapper pt-1">
          <h1>{name}</h1>
        </div>
        <p className="mb-2 mx-5">{cuisines.join(", ")}</p>

        <div className="menu-list mb-5">
          <div className="m-2 mx-5">
            <h3>Recommended{"(" + itemsCards.length + ")"}</h3>
          </div>
          <ul>
            {itemsCards.map(({ card }) => {
              return <MenuCard card={card} />;
            })}
          </ul>
        </div>
      </div> */}
      <div className="bg-gray-100 w-9/12 m-5 p-2 text-center">
        <div>
          <h1>{name}</h1>
        </div>
        <div>
          { (`${cuisines.join(", ")} - ${costForTwoMessage}`) }
        </div>  
      </div>
      <div className=" w-9/12">
        {
          ItemCategory.map(({ card }, index) => { 
            return <MenuCategory itemCard={ card} />
          })
        }
      </div>
    </div>
  );
};

export default RestaurantMenu;
