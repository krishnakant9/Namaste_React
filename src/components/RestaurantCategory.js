import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data,showMenu,setShowIndex}) => {
    //console.log(data);
    //const [showMenu , setShowMenu] = useState(false);

    const handleClick = () => {
        // setShowMenu(!showMenu);
        setShowIndex();
    }
    return(

        <div className="w-6/12 my-4 p-4 bg-gray-50 flex flex-col mx-auto drop-shadow-lg ">
            <div className="flex w-full justify-between cursor-pointer " onClick={handleClick} >
                <span className="pb-2 font-bold text-lg">
                        {data.title} ({data.itemCards.length})
                </span>
            
                 <span>{showMenu ? "▲" : "▼"}</span> 
            </div>
            <div className="text-left ">
                {showMenu && <ItemList items={data.itemCards}/> }
            </div>
        </div>
    );   
};

export default RestaurantCategory ;