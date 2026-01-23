import {getGroupedCart} from "../../functions/StorageFunctions";
import Cart from "./Cart";
import {useUpdateFunction } from "../../functions/useUpdateFunction";


const CartList = () =>{

    const cartItems = useUpdateFunction(getGroupedCart);
    
    return(
        <ul className="cart-list-container">
            {cartItems.map(item => 
                <Cart key={item.id} headphone={item}/>
            )}
        </ul>
    )
}

export default CartList;