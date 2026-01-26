import "./CartPage.css"
import CartList from "../../components/UI/cartComponents/cartList";
import TotalAmount from "../../components/UI/cartComponents/totalAmountcon";
import { getGroupedCart } from "../../components/functions/StorageFunctions";
import { useUpdateFunction } from "../../components/functions/useUpdateFunction";

const CartPage = () =>{

    const cartItems = useUpdateFunction(getGroupedCart);

    return(
        <div className="cart-container">
            <h2>Корзина</h2>
            <div className="cart-price-amount-container">
                <CartList cartItems={cartItems}/>
                <TotalAmount cartItems={cartItems}/>
            </div>
        </div>
    )
}

export default CartPage;