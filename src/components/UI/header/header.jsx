import "./header.css"
import cart from "../../media/cart.svg"
import heart from "../../media/heart.svg"
import { Link } from "react-router"
import { CART_ROUTE, CATALOG_ROUTE } from "../../utils/consts"

const Header = () => {      
    return(
        <div className="header">
            <Link to={CATALOG_ROUTE}><h2>QPICK</h2></Link>
            <div className="header-images"> 
                <Link><img src={heart} alt="" ></img></Link>
                <Link to={CART_ROUTE}><img src={cart} alt=""></img></Link>
            </div>
        </div>
    )
}

export default Header;