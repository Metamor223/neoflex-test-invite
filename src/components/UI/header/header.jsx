import "./header.css"
import cart from "../../../assets/icons/cart.svg"
import heart from "../../../assets/icons/heart.svg"
import { Link } from "react-router"
import { CART_ROUTE, CATALOG_ROUTE } from "../../utils/consts"
import { getCartCount } from "../../functions/StorageFunctions"
import { useUpdateFunction } from "../../functions/useUpdateFunction"

const Header = () => {      
    const cartItems = useUpdateFunction(getCartCount)
    
    return(
        <div className="header">
            <Link to={CATALOG_ROUTE}><h2>QPICK</h2></Link>
            <div className="header-images"> 
                <div className={cartItems > 0 ? "circle1" : "circle-none"}>{cartItems}</div>
                <Link><img src={heart} alt="" ></img></Link>
                <div className={cartItems > 0 ? "circle2" : "circle-none"}>{cartItems}</div>
                <Link to={CART_ROUTE}><img src={cart} alt=""></img></Link>
            </div>
        </div>
    )
}

export default Header;