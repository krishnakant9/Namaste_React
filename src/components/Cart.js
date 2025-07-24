import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const handlecart =() =>{
        dispatch(clearCart());
    }
    return(
        <div className=" mx-auto my-10 ">
            <div className="text-center font-bold text-3xl">Cart</div>
            <div className=" mx-auto text-center w-24 m-3 p-2 font-semibold rounded-lg hover:bg-red-500 hover:text-white bg-amber-200 text-black">
                <button onClick={handlecart}>Clear Cart</button>
            </div>
            {cartItems.length === 0 && (<h1 className="text-center font-bold text-4xl m-8 p-4">Your Cart is Empty! Please Add Items</h1>)}
            <div className="w-6/12 mx-auto"><ItemList items={cartItems} useIndexAsKey={true} /></div>
        </div>
    )
}

export default Cart