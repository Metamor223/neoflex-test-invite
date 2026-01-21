import "./footer.css"
import whatsapp from "../../media/Whatsapp.svg";
import Telegram from "../../media/Telegram.svg";
import VK from "../../media/VK.svg";
import planet from "../../media/planet.svg"

const Footer = () => {    
    return(
        <div className="footer">
            <div className="footer-container">
                <h2>QPICK</h2>
                <div className="footer-inside-links">
                    <h3>Избранное</h3>
                    <h3>Корзина</h3>
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
                    <img src={VK} alt="VK"/>
                    <img src={Telegram} alt="Telegram"/>
                    <img src={whatsapp} alt="whatsapp"/>
                </div>
            </div>
        </div>
    )
}

export default Footer;