import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const ResturantCards = (props) =>{
    const{resData} = props;

    //optional chaining
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,deliveryTime} = resData?.info


    return(
        <div className="res-card m-4 w-56 cursor-pointer transform scale-100 hover:scale-95 origin-center ease-in duration-100">
            <img
                className="resImage w-56 h-[147] object-cover rounded-[20px] shadow-2xl "
                alt="Resturant Image"
                src={ CDN_URL+ 
                    resData.info.cloudinaryImageId}
            />
            <div className="res-details">
                <div className="resName truncate font-bold text-lg">{name}</div>
                <div>{avgRating}</div>
                <div>{costForTwo}</div>
                <div className="cuisines truncate">{cuisines.join(",")}</div>
                <div>{deliveryTime}</div>
            </div>
        </div>
    )
};

//Higher Order Component

// export const withPromotedLabel = (ResturantCards) =>{
//     return(props) => {
//         return(
//             <div>
//                 <label>Promoted</label>
//                 <ResturantCards {...props}/>
//             </div>
//         )
//     }
// }

export default ResturantCards