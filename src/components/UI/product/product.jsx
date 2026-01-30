import { useState } from "react"
import star from "../../../assets/icons/star.png"
import { AddToStorage } from "../../functions/StorageFunctions"
import ProductModal from "../modal/productCard/productModal"

const Product = ({headphone}) =>{

    const [active,setActive] = useState(false)
    const [selectedHeadphone, setSelectedHeadphone] = useState(null)
    const body = document.body

    const handleBuy = () => {
        AddToStorage(headphone)
        console.log("Добавлено", headphone.title)
    }

    const handleItemClick = () => {
        setSelectedHeadphone(headphone)
        body.classList.add('no-scroll')
        console.log(setSelectedHeadphone(headphone))
        setActive(true);
    }

    const closeModal = () => {
        setActive(false)
    }

    return(
        <li className="card" key={headphone.id}>
            {active && headphone && <ProductModal headphone={selectedHeadphone} body={body} setActive={closeModal}/>}
            <div className="img-container">
                <img src={headphone.img} alt={headphone.title} />
            </div>
            <div className="title-price-container">
                <h3>{headphone.title}</h3>
                <div className="price-container">
                    <h3>{headphone.price} ₽</h3>
                    {headphone.oldprice ? (<h4>{headphone.oldprice} ₽</h4>) : null}
                </div>
            </div>
            <div className="rate-container">
                <h3><img src={star} alt="star"/>{headphone.rate}</h3>
                <div className="btn-circle-con">
                    <div className="circle" onClick={handleItemClick}>i</div>
                    <button onClick={handleBuy}>Купить</button>
                </div>
            </div>
        </li>
    )
}

export default Product;