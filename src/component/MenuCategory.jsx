import { DEMO_DATA } from "../utils/constants";

const MenuCategory = ({ itemCard }) => {
    const cardItem  = itemCard.card;
    return <div className="menu-category rounded-t-lg border-b-8" >
        <div className="flex justify-between bg-slate-200">
            <h2 className="font-bold ">{cardItem.title} ({cardItem.itemCards.length})</h2>
            <div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-6 w-6">
                    <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
        </div>
        {cardItem.itemCards.map(({ card } ) => { 
            { console.log("info map",card.info)}
            return <div className="flex justify-between py-2 my-2 mb-4 border-b-4 border-gray-200">
                <div className="mx-2 p-2">  
                <div className="font-semibold mb-2">{card.info.name}</div>
                <div className="font-normal">₹{card.info.price ? card.info.price / 100 : card.info.defaultPrice}</div>
                    <p className="text-xs my-4 mb-8">{card.info.description}</p>
                </div>
                <img scr={""+card.info.imageId} />
            </div>  
        })
        } 
       
    </div>
}

export default MenuCategory;