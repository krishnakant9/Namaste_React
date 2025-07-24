import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () =>{
    const [btn,setbtn] = useState("LOGIN");

    const onlineStatus = useOnlineStatus();
    const User = useContext(UserContext);

    //Reading Data form redux -subscribing to store using selector
    const cartItems = useSelector((store) => store.cart.items)
    console.log(cartItems);
    
    return(
        <div className="flex justify-between shadow-lg">
            <div className="logo">
                <img className="w-18" src={LOGO_URL}/>
            </div>
            <div className="nav-items flex self-center">
                <ul className="flex" >
                    <li className="px-1 text-xs self-center">
                        {onlineStatus ?"🟢":"🔴"}
                    </li>
                    <li className="px-1.5">
                        <Link to="/" >Home</Link>
                    </li>
                    <li className="px-1.5">
                        <Link to="/about">About US</Link>
                    </li>
                    <li className="px-1.5">
                        < Link to="/contact">contact Us</Link>
                    </li>
                    <li className="px-1.5">
                    < Link to="/cart">Cart ({cartItems.length})</Link>
                    </li>
                    <button className="login-btn px-2" onClick={
                        ()=>(btn === "LOGIN")?(setbtn("LOGOUT")):(setbtn ("LOGIN"))
                    }>{btn}</button>
                    <li className="px-1.5 font-bold">
                        {User.loggedInUser}
                    </li>
                </ul>
                
            </div>
        </div>
    )
}

export default Header;