import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { useState } from "react";

const RestaurantMenu = () => {

    const {resId} = useParams();

    const [showIndex,setShowIndex] = useState(null);
    
    const resInfo = useRestaurantMenu(resId);
    //console.log(resInfo);
    if(resInfo === null)
        return (<Shimmer/>);
    
    const {name,cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
    //const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;
    //console.log(itemCards); 
    //console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    //console.log(categories);
    return (
        <div className="text-center">
            <h1 className="m-3 pt-2 font-bold text-3xl">{name}</h1>
            <p>{cuisines.join(",") } - {costForTwoMessage}</p>

            {categories.map((category,index) => (
                <RestaurantCategory 
                    key={category?.card?.card?.categoryId} 
                    data = {category?.card?.card}
                    showMenu = {index === showIndex ? true : false}
                    setShowIndex = {() => setShowIndex(index)}
                />
                
            ))}

        </div>
    )

}

export default RestaurantMenu;