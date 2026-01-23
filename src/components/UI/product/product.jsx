import star from "../../../assets/icons/star.png"
import { AddToStorage } from "../../functions/StorageFunctions"

const Product = ({headphone}) =>{

    const handleBuy = () =>{
        AddToStorage(headphone)
        console.log("Добавлено", headphone.title)
    }

    return(
        <li className="card">
            <img src={headphone.img} alt={headphone.title} />
            <div className="title-price-container">
                <h3>{headphone.title}</h3>
                <div className="price-container">
                    <h3>{headphone.price} ₽</h3>
                    {headphone.oldprice ? (<h4>{headphone.oldprice} ₽</h4>) : null}
                </div>
            </div>
            <div className="rate-container">
                <h3><img src={star} alt="star"/>{headphone.rate}</h3>
                <button onClick={handleBuy}>Купить</button>
            </div>
        </li>
    )
}

export default Product;