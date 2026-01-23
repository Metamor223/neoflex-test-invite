import { DeleteOneFromStorage } from "../../functions/StorageFunctions";
import bucket from "../../../assets/icons/bucket.svg"

const Cart = ({headphone}) =>{

    return(
        <li key={headphone.id}>
            <img src={"/" + headphone.img} alt={headphone.title} />
            <div className="bucket-container">
                <img src={bucket} alt="bucket" onClick={() => DeleteOneFromStorage(headphone.id)}/>
            </div>
            <div className="price-title-cart">
                <h3>{headphone.title}</h3>
                <h2>{headphone.price} ₽</h2>
            </div>
            <div className="cart-price-container">
                <div className="count-container">
                    <div className="circle-cart">
                        <div className="minus"></div>
                    </div>
                    <h3>1</h3>
                    <div className="circle-cart">
                        <div className="plus"></div>
                    </div>
                </div>
                <h4>{}</h4>
            </div>
        </li>
    )
}

export default Cart;