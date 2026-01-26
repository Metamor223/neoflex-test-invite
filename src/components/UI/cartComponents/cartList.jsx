import Cart from "./Cart";


const CartList = ({cartItems}) =>{
    return(
        <ul className="cart-list-container">
            {cartItems.length > 0 ? 
                cartItems.map(item => 
                    <Cart key={item.id} headphone={item}/>) :
                <p>В данный момент здесь пусто</p>
            }
        </ul>
    )
}

export default CartList;