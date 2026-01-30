import { AddToStorage, DeleteOneFromStorage, RemoveOneFromStorage } from "../../functions/StorageFunctions";
import bucket from "../../../assets/icons/bucket.svg"

const Cart = ({headphone}) =>{

    const handleBuy = () =>{
        AddToStorage(headphone)
        console.log("Добавлено", headphone.title)
    }

    const priceQuantity = headphone.quantity * headphone.price

    const handleDecrease = () =>{
        RemoveOneFromStorage(headphone.id)
        console.log("1 товар убран из корзины")
    }

    return(
        <li key={headphone.id} className="card-cart">
            <div className="main-info-card-cart">
                <div className="main-pic-cart">
                    <img src={headphone.img} alt={headphone.title} />
                </div>
                <div className="little-info-con-cart">
                    <div className="bucket-container">
                        <img src={bucket} alt="bucket" onClick={() => DeleteOneFromStorage(headphone.id)}/>
                    </div>
                    <div className="price-title-cart">
                        <h2>{headphone.title}</h2>
                        <h3>{headphone.price} ₽</h3>
                    </div>
                </div>
            </div>
            <div className="cart-price-container">
                <div className="little-cart-price-container">
                    <div className="count-container">
                        <div className="circle-cart" onClick={handleDecrease}>
                            <div className="minus"></div>
                        </div>
                        <h3>{headphone.quantity}</h3>
                        <div className="circle-cart" onClick={handleBuy}>
                            <div className="plus"></div>
                        </div>
                    </div>
                    <h3>{priceQuantity} ₽</h3>
                </div>
            </div>
        </li>
    )
}

export default Cart;