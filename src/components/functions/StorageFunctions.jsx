export function AddToStorage(headphone) {
    const cart = JSON.parse(sessionStorage.getItem('cart')) || []
    cart.push(headphone)
    sessionStorage.setItem('cart',JSON.stringify(cart))
    window.dispatchEvent(new Event("cartUpdated"));
}

export function DeleteOneFromStorage(id) {
    const cart = JSON.parse(sessionStorage.getItem('cart'))
    const newCart = cart.filter(item => item.id !== id)
    sessionStorage.setItem('cart',JSON.stringify(newCart))
    window.dispatchEvent(new Event("cartUpdated"));
    return newCart || []
}

export function getGroupedCart() {
    const cart = JSON.parse(sessionStorage.getItem('cart'));
    const grouped = cart.reduce((acc, item) => {
        const existingItem = acc.find(i => i.id === item.id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            acc.push({ ...item, quantity: 1 });
        }
        return acc;
    }, []);
    return grouped || [];
}

export function getOneFromStorage(id) {
    const cart = JSON.parse(sessionStorage.getItem('cart'));
    const item = cart.find(item => item.id === id);
    return item || null;
}

export function getAllFromStorage() {
    const result = JSON.parse(sessionStorage.getItem('cart'));
    return result || []
}

export function getCartCount() {
    const cart = JSON.parse(sessionStorage.getItem('cart')) || [];
    return cart.length;
}