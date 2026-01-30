import "./footer.css"
import whatsapp from "../../../assets/icons/Whatsapp.svg";
import Telegram from "../../../assets/icons/Telegram.svg";
import VK from "../../../assets/icons/VK.svg";
import planet from "../../../assets/icons/planet.svg"
import { CART_ROUTE } from "../../utils/consts";
import { Link } from "react-router";

const Footer = () => {    
    return(
        <div className="footer">
            <div className="footer-container">
                <h2>QPICK</h2>
                <div className="footer-inside-links">
                    <h3>Избранное</h3>
                    <Link to={CART_ROUTE}>Корзина</Link>
                    <h3>Контакты</h3>
                </div>
                <div className="language-container">
                    <h3>Условия сервиса</h3>
                    <div className="little-language-container">
                        <img src={planet} alt="planet"/>
                        <h4>Рус</h4>
                        <h4>Eng</h4>
                    </div>
                </div>
                <div className="footer-images"> 
                    <a href="https://vk.com/dmitrypanov223"><img src={VK} alt="VK"/></a>
                    <a href="https://t.me/tumb0chka1"><img src={Telegram} alt="Telegram"/></a>
                    <a href="https://api.whatsapp.com/send?phone=79119387037"><img src={whatsapp} alt="whatsapp"/></a>
                </div>
            </div>
        </div>
    )
}

export default Footer;