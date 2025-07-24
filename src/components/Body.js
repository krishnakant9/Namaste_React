import ResturantCards from "./ResturantCards";
import Shimmer from "./Shimmer";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body =() => {

    const [listofResturants, setListOfResturants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchTxt,setSearchTxt] = useState("");

    useEffect(()=>{
       fetchData();
    },[])

    const fetchData= async()=>{
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.6739334&lng=86.9523856&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();
        //console.log(json);
        //setListOfResturants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
        //This is not a good way to handle Data , so we will use optional chaining 
        
        const restaurantCard = json?.data?.cards?.find(
            (card) =>
              card.card?.card?.gridElements?.infoWithStyle?.restaurants !== undefined
        );
        if (restaurantCard) {
            const restaurants = restaurantCard.card.card.gridElements.infoWithStyle.restaurants;
            setListOfResturants(restaurants);
            setFilteredRestaurant(restaurants);
            console.log(restaurantCard);
        }else{
            console.error("Restaurant data not found in API response.");
            setListOfResturants([]);
            setFilteredRestaurant([]);
        }

    }

    //conditional rendering
    // if(listofResturants.length === 0){
    //     return <Shimmer/>;
    // }
    //Using ternerary operator

    const onlineStatus = useOnlineStatus();
    //console.log(onlineStatus);
    if(onlineStatus === false){
        return(
            <div>
            <h1>Looks like you are offline !</h1>
            <h3>Check your internet connection and try again later.</h3>
            </div>
        );
    }


    return (listofResturants.length === 0) ? (<Shimmer/>) : (
        <div className="body">
            <div className="filter flex">
                <div className="search">
                    <input type="text" className=" m-4 border-[1px] rounded-lg border-solid border-black" placeholder="what's your craving"
                    value = {searchTxt}
                    onChange={(e) =>{
                        setSearchTxt(e.target.value);
                    }}
                    />
                    <button className="searchBtn m-5 border border-black border-solid cursor-pointer px-2 rounded-md"
                    onClick={()=>{
                        //console.log(searchTxt);
                        const filteredRestaurant = listofResturants.filter(
                           (res)=> res.info.name.toLowerCase().includes(searchTxt.toLowerCase())
                        );
                        
                        //console.log(filteredRestaurant);
                        setFilteredRestaurant(filteredRestaurant);
                    }}
                    >Search</button>
                </div>
                <button 
                    className="filter-btn" onClick={()=>{
                    const filteredList = listofResturants.filter(
                        (res)=> res.info.avgRating>4
                    );
                        // console.log(filteredList);
                        setFilteredRestaurant(filteredList);
                    }}>
                    Top Rated Resturant
                </button>
            </div>
            <div className="res-container flex flex-wrap justify-evenly">
                { (filteredRestaurant.length === 0) ? (<h2>NO Matches Found !!</h2>) :
                    (
                        filteredRestaurant.map((resturant) => (
                            <Link to={"/restaurant/" +resturant.info.id} key={resturant.info.id}>
                                <ResturantCards  resData={resturant}/>
                            </Link>
                        ))
                    )
                }
                

            </div>
        </div>
    )
}

export default Body