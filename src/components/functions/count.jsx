

export function handleCount (){

    const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);
    
    return 1
}