import {useState} from "react"
import {Link} from "react-router"
import "./PaymentPage.css"
import { CART_ROUTE } from "../../components/utils/consts"
import { cardDateFormat, cardNumberFormat, phoneNumberFormat, validateAddress, validateCVV, validateCardDate, validateCardNumber, validatePaymentForm, validatePhone } from "../../components/functions/Validation"
import { getGroupedCart } from "../../components/functions/StorageFunctions"

const PaymentPage = () =>{		

	const [address, setAddress] = useState(JSON.parse(sessionStorage.getItem("address")) || "")
	const [phoneNumber, setPhoneNumber] = useState(JSON.parse(sessionStorage.getItem("phoneNumber")) || "")
	const [cardNumber, setCardNumber] = useState(JSON.parse(sessionStorage.getItem("cardNumber")) || "")
	const [cardDate, setCardDate] = useState(JSON.parse(sessionStorage.getItem("cardDate")) || "")
	const [cardCVV, setCardCVV] = useState(JSON.parse(sessionStorage.getItem("cardCVV")) || "")
	const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [cart] = useState(getGroupedCart)

	const finalSum = cart.reduce((sum, item) => {
        return sum + (item.price * item.quantity);
    }, 0);

	const cartItems = []
	for(let i = 0; i < cart.length; i++){
		cartItems.push(" id: " + cart[i].id + " Название: " + cart[i].title + " Количество: " + cart[i].quantity)
	}

	const handleBlur = (field) => {
        setTouched(prev => ({ ...prev, [field]: true }));
        let validation;
        switch (field) {
            case 'address':
                validation = validateAddress(address);
                break;
            case 'phoneNumber':
                validation = validatePhone(phoneNumber);
                break;
            case 'cardNumber':
                validation = validateCardNumber(cardNumber);
                break;
            case 'cardDate':
                validation = validateCardDate(cardDate);
                break;
            case 'cardCVV':
                validation = validateCVV(cardCVV);
                break;
            default:
                return;
        }
        setErrors(prev => ({
            ...prev,
            [field]: validation.isValid ? '' : validation.error
        }));
    };

	const handlePay = () =>{
		setTouched({
			address: true,
			phoneNumber: true,
			cardNumber: true,
			cardDate: true,
			cardCVV: true
		});
        const formData = { address, phoneNumber, cardNumber, cardDate, cardCVV };
        const validation = validatePaymentForm(formData);
        if (!validation.isValid) {
            setErrors(validation.errors);
            return;
        }
        if (cart.length === 0) {
            alert('Корзина пуста!');
            return;
        }
        setIsSubmitting(true);
		try{
			const formData = new FormData()
			formData.append("address",address)
			formData.append("phoneNumber",phoneNumber)
			formData.append("cardNumber",cardNumber)
			formData.append("cardDate",cardDate)
			formData.append("cardCVV",cardCVV)
			formData.append("cart",cartItems)
			formData.append("finalSum",finalSum)
			const formDataObject = {}
			for (const [key, value] of formData.entries()) {
            	formDataObject[key] = value;
        	}
			console.log(formDataObject);
			sessionStorage.setItem('Данные пользователя',JSON.stringify(formDataObject))
			alert("успешно отправлено")
		} catch (e){
			console.log(e);
		} finally {
			setIsSubmitting(false)
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
						<h3>Адресс доставки *
							<input 
								onBlur={() => handleBlur('address')}
								placeholder="г.Санкт-Петербург, Невский проспект, 40-42"
								value={address}
								className={touched.address && errors.address ? 'input-error' : ''}
								onChange={(e) => setAddress(e.target.value)} />
							{touched.address && errors.address && (
                                <span className="error-message">{errors.address}</span>
                            )}
						</h3>
						<h3>Номер телефона *
							<input
								placeholder="+7 (999) 453-32-54"
								type="tel" 
								value={phoneNumber} 
								className={touched.phoneNumber && errors.phoneNumber ? 'input-error' : ''}
								onBlur={() => handleBlur('phoneNumber')}
								onChange={(e) => setPhoneNumber(phoneNumberFormat(e.target.value))}/>
							{touched.phoneNumber && errors.phoneNumber && (
                                <span className="error-message">{errors.phoneNumber}</span>
                            )}
						</h3>
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
					<h2>Данные карты для оплаты *</h2>
					<form>
						<div className="form-group">
							<input 
								id="card-number"
								placeholder="0000 0000 0000 0000" 
								className={touched.cardNumber && errors.cardNumber ? 'input-error' : ''}
								value={cardNumber} 
								onBlur={() => handleBlur('cardNumber')}
								onChange={(e) => setCardNumber(cardNumberFormat(e.target.value))}/>
							{touched.cardNumber && errors.cardNumber && (
								<span className="error-message">{errors.cardNumber}</span>
							)}
						</div>
						<div className="form-group">
							<input 
								id="card-date" 
								placeholder="00/00" 
								value={cardDate} 
								className={touched.cardDate && errors.cardDate ? 'input-error' : ''}
								onBlur={() => handleBlur('cardDate')}
								onChange={(e) => setCardDate(cardDateFormat(e.target.value))}/>
							{touched.cardDate && errors.cardDate && (
								<span className="error-message">{errors.cardDate}</span>
							)}
						</div>	
						<div className="form-group">
							<input 
								id="card-cvv" 
								placeholder="000" 
								maxLength={3} 
								value={cardCVV} 
								className={touched.cardCVV && errors.cardCVV ? 'input-error' : ''}
								onBlur={() => handleBlur('cardCVV')}
								onChange={(e) => setCardCVV(e.target.value)}/>
							{touched.cardCVV && errors.cardCVV && (
								<span className="error-message">{errors.cardCVV}</span>
							)}
						</div>
					</form>
				</div>
				{errors.submit && (
                    <div className="submit-error">{errors.submit}</div>
                )}
				<button onClick={handlePay} disabled={isSubmitting || cart.length === 0}>Оформить заказ</button>
			</div>
		</div>
	)
}

export default PaymentPage;