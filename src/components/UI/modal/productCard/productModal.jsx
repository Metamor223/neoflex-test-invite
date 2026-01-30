import { AddToStorage } from "../../../functions/StorageFunctions";
import "./productModal.css"

const ProductModal = ({setActive,headphone,body}) =>{
    
    const closeModal = () =>{
        setActive(false)
        body.classList.remove('no-scroll')
    }

    return(
        <div className="modal-blur" onClick={(e) => e.stopPropagation}>
            <div className="modal-container">   
                <div className="modal-container-inside">
                    <img src={headphone.img} alt={headphone.title}/>
                    <div className="text-container">
                        <div className="title-button">
                            <h2>{headphone.title}</h2> 
                            <button onClick={closeModal}>Закрыть</button>                            
                        </div>
                        <h3>{headphone.description}</h3>
                        <div className="price-button">
                            <div className="price-con"> 
                                <h2>{headphone.price} ₽</h2>
                                {headphone.oldprice ? (<h4>{headphone.oldprice} ₽</h4>) : null}
                            </div>
                            <button onClick={()=>AddToStorage(headphone)}>Добавить в корзину</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default ProductModal;