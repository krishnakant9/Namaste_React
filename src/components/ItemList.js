import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem,removeItem,clearCart } from "../utils/cartSlice";

const ItemList = ({items,useIndexAsKey = false}) =>{
    // console.log(items);
    const dispatch = useDispatch();
    const handleAddItem = (item) =>{
        dispatch(addItem(item));
    }


    return(
        <div>
           {items.map((item,index) =>(
            <div key={useIndexAsKey ? index : item.card.info.id} className="p-2 m-2 border-b border-gray-300 flex">
                <div className="w-9/12">
                    <div className="font-bold text-[rgba(2,6,12,0.75)]">{item.card.info.name} </div>
                    <div className=" py-1 font-medium text-base text-black">₹ {(item.card.info.defaultPrice ? (item.card.info.defaultPrice/100) : (item.card.info.price/100))}</div>
                    <div className="text-xs">{item.card.info.description}</div>
                </div>
                <div className="w-3/12 ">
                    <div className="absolute">
                        <button className="px-2 py-1 mx-14 my-24 rounded-lg bg-green-500 text-white shadow-lg cursor-pointer"
                            onClick={() => handleAddItem(item)}>
                            Add +
                        </button>
                    </div>
                    <img className="rounded-lg" src={CDN_URL + item.card.info.imageId}/>
                </div>
            </div>
           ))}
        </div>
    );
};

export default ItemList;