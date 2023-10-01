import { CDN_URL } from "../utils/constants";

const MenuItem = ({ cardItem}) => { 
    return cardItem.itemCards.map(({ card } ) => { 
            return <div key={ card.info.id } className="flex justify-between py-2 my-2 mb-4 border-b-4 border-gray-200">
                <div className="mx-2 m-2 p-2 w-full flex justify-between">  
                <div className="m-2 p-2 w-8/12">
                <div className="font-semibold mb-2">{card.info.name}</div>
                <div className="font-normal">₹{card.info.price ? card.info.price / 100 : card.info.defaultPrice}</div>
                    <p className="text-xs my-4 mb-8 text-ellipsis">{card.info.description}</p>        
                </div>
                    <div className="image-container w-1/3 flex justify-center items-center">
                        <div className="w-40">
                        <img className="my-5" src={CDN_URL+card.info.imageId} />
                        </div>
                    <button className="bg-white font-bold absolute rounded-md w-20 mt-20 text-green-500 ">ADD</button>
                </div>
                </div>
            </div>  
        })
}

export default MenuItem