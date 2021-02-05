import React, {useState, useEffect} from 'react'
import Logo from '../img/logo.svg'
import Clock from '../img/clock.svg'
import Phone from '../img/phone.svg'
import Map from '../img/map.svg'
import './Navbar.css'
import {Link} from 'react-router-dom';
import Arrow from '../img/arrow__bottom.svg'


const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="wrapper">
                <header>
                    <Link to="/"><img src={Logo} alt="logo" className="logo"/></Link>
                    <div className="header__group">
                        <div className="clock__group">
                            <img src={Clock} alt="clock" className="clock__img"/>
                            <div><p>ПН-ПТ: 09:00 - 18:00</p> <p>СБ-ВС: Выходной</p></div>
                        </div>
                        <div className="phone__group">
                            <a href="tel:+7 708 343 6281"><img src={Phone} alt="phone" className="phone__img"/></a>
                            <div><p>+7 708 343 6281</p> <p>+7 708 983 4353</p></div>
                        </div>
                        <div className="map__group">
                            <Link to="/contact"><img src={Map} alt="map" className="map__img"/></Link>
                            <div><p>Алматы, Бостандыкский район, 22-линия, 45,</p> <p>БЦ "Ambassador Towers", офис
                                204</p></div>
                        </div>
                    </div>
                </header>
            </div>
            <header>
                <div className="bg_header">
                    <div className="wrapper">
                        <div className="nav__group1">
                            <ul className="nav__menu">
                                <li className='nav-item'>
                                    <Link to='/' className='nav-links'>
                                        О КОМПАНИИ
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to='/catalog' className='nav-links'>
                                        ТОВАРЫ
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to='/cert' className='nav-links'>
                                        СЕРТИФИКАТЫ
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to='/contact' className='nav-links'>
                                        КОНТАКТЫ
                                    </Link>
                                </li>
                            </ul>
                            <div className="nav__group2">
                                <div className="lng__change">RU</div>
                                <img src={Arrow} alt="logo" className="arrow__bottom"/>
                                <button className="btn__header" type="button">ОБРАТНЫЙ ЗВОНОК</button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </nav>
    )
}


export default Navbar