import { headphones } from "../../state/headphones";
import Product from "./product";


const ProductList = () =>{
    return(
        <div className="product-list-container">
            <h3>Наушники</h3>
            <ul>
                {headphones.filter(headphone => headphone.categoryId === 1).map(headphone => 
                    <Product key={headphone.id} headphone={headphone}/>
                )}
            </ul>
            <h3>Беспроводные наушники</h3>
            <ul>
                {headphones.filter(headphone => headphone.categoryId === 2).map(headphone => 
                    <Product key={headphone.id} headphone={headphone}/>
                )}
            </ul>
        </div>
    )
}

export default ProductList;