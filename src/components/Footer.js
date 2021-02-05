import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'
import logo from '../img/footer_logo.svg'
import phone from '../img/footer_phone.svg'
import clock from '../img/footer_clock.svg'
import map from '../img/footer_map.svg'
import ins from '../img/instagram.svg'
import wht from '../img/whatsup.svg'


const Footer = () => {
    return (
        <div className="footer_bg">
            <div className="footer_container">
                <img src={logo} alt="logo" className="footer_logo"/>
                <div className="footer__menu__container">
                    <ul className="footer_ul_list">
                        <li className="footer_li_item"><Link className="footer_link" to="/">О компаний</Link></li>
                    </ul>
                    <ul className="footer_ul_list">
                        <li className="footer_li_item"><Link className="footer_link" to="/catalog">Товары</Link></li>
                    </ul>
                    <ul className="footer_ul_list">
                        <li className="footer_li_item"><Link className="footer_link" to="/cert">Сертификаты</Link></li>
                    </ul>
                    <ul className="footer_ul_list">
                        <li className="footer_li_item"><Link className="footer_link" to="/contact">Контакты</Link></li>
                    </ul>
                </div>
                <div className="footer__menu__container">
                    <div className="footer_phone_group"><img src={phone} alt="phone" className="footer_img_bootom"/>
                        <p>+7 708 343 6281, +7 708 983 4353</p></div>
                    <div className="footer_clock_group"><img src={clock} alt="clock" className="footer_img_bootom"/>
                        <p> ПН-ПТ: 09:00 - 18:00 СБ-ВС: Выходной</p></div>
                    <div className="footer_map_group"><img src={map} alt="map" className="footer_img_bootom"/>
                        <p>22-линия, 45, БЦ "Ambassador Towers", офис 204</p></div>
                </div>
                <div className="footer_social_menu">
                    <img src={ins} alt="ins" className="icons"/>
                    <a href="https://api.whatsapp.com/send?phone=77083436281" target="_blank"><img src={wht} alt="wht" className="icons"/></a>
                </div>
            </div>
        </div>
    )
}

export default Footer