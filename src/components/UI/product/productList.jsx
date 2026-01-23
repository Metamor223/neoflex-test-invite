import { headphones } from "../../state/headphones";
import Product from "./product";


const ProductList = () =>{
    return(
        <div className="product-list-container">
            <p>Наушники</p>
            <ul>
                {headphones.filter(headphone => headphone.categoryId === 1).map(headphone => 
                    <Product key={headphone.id} headphone={headphone}/>
                )}
            </ul>
            <p>Беспроводные наушники</p>
            <ul>
                {headphones.filter(headphone => headphone.categoryId === 2).map(headphone => 
                    <Product key={headphone.id} headphone={headphone}/>
                )}
            </ul>
        </div>
    )
}

export default ProductList;