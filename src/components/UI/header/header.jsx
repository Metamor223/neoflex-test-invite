import "./header.css"
import cart from "../../media/cart.svg"
import heart from "../../media/heart.svg"

const Header = () => {    
    return(
        <div className="header">
            <h2>QPICK</h2>
            <div className="header-images"> 
                <img src={heart} alt="" ></img>
                <img src={cart} alt=""></img>
            </div>
        </div>
    )
}

export default Header;