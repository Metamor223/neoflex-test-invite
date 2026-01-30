import {useState} from "react"
import {Link} from "react-router"
import "./PaymentPage.css"
import { CART_ROUTE } from "../../components/utils/consts"
import { cardDateFormat, cardNumberFormat, phoneNumberFormat } from "../../components/functions/Validation"
import { getGroupedCart } from "../../components/functions/StorageFunctions"

const PaymentPage = () =>{		

	const [address, setAddress] = useState(JSON.parse(sessionStorage.getItem("address")) || "")
	const [phoneNumber, setPhoneNumber] = useState(JSON.parse(sessionStorage.getItem("phoneNumber")) || "")
	const [cardNumber, setCardNumber] = useState(JSON.parse(sessionStorage.getItem("cardNumber")) || "")
	const [cardDate, setCardDate] = useState(JSON.parse(sessionStorage.getItem("cardDate")) || "")
	const [CVV, setCVV] = useState(JSON.parse(sessionStorage.getItem("CVV")) || "")
	const [cart, setCart] = useState(getGroupedCart)

	const finalSum = cart.reduce((sum, item) => {
        return sum + (item.price * item.quantity);
    }, 0);

	const cartItems = []
	for(let i = 0; i < cart.length; i++){
		cartItems.push(" id: " + cart[i].id + " Название: " + cart[i].title + " Количество: " + cart[i].quantity)
	}

	const handlePay = () =>{
		try{
			const formData = new FormData()
			formData.append("address",address)
			formData.append("phoneNumber",phoneNumber)
			formData.append("cardNumber",cardNumber)
			formData.append("cardDate",cardDate)
			formData.append("CVV",CVV)
			formData.append("cart",cartItems)
			formData.append("finalSum",finalSum)
			const formDataObject = {}
			for (const [key, value] of formData.entries()) {
            	formDataObject[key] = value;
        	}
			console.log(formDataObject);
			if(JSON.stringify(sessionStorage.setItem('Данные пользователя',formDataObject))){
				console.log("успешно отправлено")
			}
		} catch (e){
			console.log(e);
		}
	}

	return(
		<div className="payment-form-container">
			<div className="payment-back-title">
				<Link to={CART_ROUTE}>Назад</Link>
				<h2>Оформление заказа</h2>
				<p></p>
			</div>
			<div className="payment-forms">
				<div className="address-container">
					<h2>Куда</h2>
					<form>
						<h3>Адресс доставки<input required placeholder="г.Санкт-Петербург, Невский проспект, 40-42" value={address} onChange={(e) => setAddress(e.target.value)} /></h3>
						<h3>Номер телефона<input required placeholder="+7 (999) 453-32-54"  type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(phoneNumberFormat(e.target.value))}/></h3>
					</form>
				</div>
				<div className="cart-quan-price-con">
					<h3>Детали заказа</h3>
					<div className="cart-quan-price">
						<div className="cart-quan-price-bord">
							{cart.map(item=>
								<div className="quan-price" key={item.id}>
									<h4>{item.title}</h4>
									<h4>x{item.quantity}</h4>
								</div>
							)}
						</div>
						<h3>ИТОГО: {finalSum} ₽</h3>
					</div>
				</div>
				<div className="card-container">
					<h2>Данные карты для оплаты</h2>
					<form>
						<input id="card-number" required placeholder="0000 0000 0000 0000" value={cardNumber} onChange={(e) => setCardNumber(cardNumberFormat(e.target.value))}/>
						<input id="card-date" required placeholder="00/00" value={cardDate} onChange={(e) => setCardDate(cardDateFormat(e.target.value))}/>
						<input id="card-cvv" required placeholder="000" maxLength={3} value={CVV} onChange={(e) => setCVV(e.target.value)}/>
					</form>
				</div>
				<button onClick={handlePay}>Оформить заказ</button>
			</div>
		</div>
	)
}

export default PaymentPage;