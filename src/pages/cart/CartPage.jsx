import "./CartPage.css"
import CartList from "../../components/UI/cartComponents/cartList";
import TotalAmount from "../../components/UI/cartComponents/totalAmountcon";

const CartPage = () =>{
    return(
        <div className="cart-container">
            <p>Корзина</p>
            <div className="">
                <CartList/>
                <TotalAmount/>
            </div>
        </div>
    )
}

export default CartPage;