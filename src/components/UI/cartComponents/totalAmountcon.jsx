import { Link } from "react-router";
import { PAYMENT_ROUTE } from "../../utils/consts";

const TotalAmount = ({cartItems}) =>{
    
    const finalSum = cartItems.reduce((sum, item) => {
        return sum + (item.price * item.quantity);
    }, 0);
    
    return(
        <div className="total-amount-container">
            <div className="little-total-amount-container">
                <h3>ИТОГО</h3>
                <h3>₽ {finalSum}</h3>
            </div>
            <Link to={PAYMENT_ROUTE}>Перейти к оформлению</Link>
        </div>
    )
}

export default TotalAmount;