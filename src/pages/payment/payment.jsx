import {useState} from "react"
import {Link} from "react-router"

const PaymentForm = () =>{		

	const [address, setAddress] = useState
    (sessionStorage.JSONparse(getItem("address")) || "")
	const [phoneNumber, setPhoneNumber] = useState(sessionStorage.JSONparse(getItem("phoneNumber")) || 0)
	const [cardNumber, setCardNumber] = useState(sessionStorage.JSONparse(getItem("cardNumber")) || 0)
	const [cardDate, setCardDate] = useState(sessionStorage.JSONparse(getItem("cardDate")) || "")
	const [CVV, setCVV] = useState(sessionStorage.JSONparse(getItem("CVV")) || 0)

	const handlePay = () =>{
		try{
			const formData = new formData()
			formData.append("address",address)
			formData.append("phoneNumber",phoneNumber)
			formData.append("cardNumber",cardNumber)
			formData.append("cardDate",cardDate)
			formData.append("CVV",CVV)
			for(const i = 0; i < formData.length; i++){
				sesstionStorage.JSONstrigfy(setItem(formData(i),formData(i)))
			}
			console.log(formData)
		} catch (e){
			console.log(e);
		}
	}

	return(
		<div className="payment-form-container">
			<div className="">
				<Link to={CART_ROUTE}>Назад</Link><h2>Оформление заказа</h2>
			</div>
			<div className="address-container">
				<h2>Куда</h2>
				<form>
					<input value={address} onChange={(e)=>setAddress(e.target.value)}/>
					<input value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}/>
				</form>
			</div>
			<div className="card-container">
				<h2>Данные карты для оплаты</h2>
				<form>
					<input value={cardNumber} onChange={(e)=>setCardNumber(e.target.value)}/>
					<input value={cardDate} onChange={(e)=>setCardDate(e.target.value)}/>
                    <input value={CVV} onChange={(e)=>setCVV(e.target.value)}/>
				</form>
			</div>
			<button onClick={handlePay()}>Оформить заказ</button>
		</div>
	)
}

export default PaymentForm;