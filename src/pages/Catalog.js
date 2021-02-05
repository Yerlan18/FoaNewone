import React from 'react'
import one from '../img/p1.png'
import two from '../img/p2.png'
import three from '../img/p3.png'
import four from '../img/p4.png'
import five from '../img/p5.png'
import six from '../img/p6.png'
import seven from '../img/p7.png'
import eight from '../img/p7.png'
import '../App.css'
import {Link} from 'react-router-dom'

const Catalog = () => {
    return <section>
        <div className="wrapper">
            <h1 className="catalog_h1">Товары</h1>
            <div className="catalog__container">
                <div className="catalog__card"><Link to="/catalog/Humasis_COVID-19" className="catalog__link">
                    <div className="catalog__img_container"><img src={one} alt=""/></div>
                    <div><p>Humasis COVID-19 IgG/IgM Тест на антитела</p></div>
                    <Link to="/catalog/Humasis_COVID-19" rel="stylesheet">Подробнее</Link>
                </Link>
                </div>
                <div className="catalog__card"><Link to="/catalog/Humasis_COVID-19" className="catalog__link">
                    <div className="catalog__img_container"><img src={two} alt=""/></div>
                    <div><p>Humasis COVID-19 Ag Тест на антиген</p></div>
                    <Link to="/catalog/Humasis_COVID-19" rel="stylesheet">Подробнее</Link>
                </Link>
                </div>
                <div className="catalog__card"><Link to="/catalog/Humasis_COVID-19" className="catalog__link">
                    <div className="catalog__img_container"><img src={three} alt=""/></div>
                    <div><p>HB BestPlex ™ COVID-19 Набор ОТ-ПЦР</p></div>
                    <Link to="/catalog/Humasis_COVID-19" rel="stylesheet">Подробнее</Link>
                </Link>
                </div>
                <div className="catalog__card"><Link to="/catalog/Humasis_COVID-19" className="catalog__link">
                    <div className="catalog__img_container"><img src={four} alt=""/></div>
                    <div><p>All Check COVID-19 IgG/IgM Тест на антитела</p></div>
                    <Link to="/catalog/Humasis_COVID-19" rel="stylesheet">Подробнее</Link>
                </Link>
                </div>
                <div className="catalog__card"><Link to="/catalog/Humasis_COVID-19" className="catalog__link">
                    <div className="catalog__img_container"><img src={five} alt=""/></div>
                    <div><p>Noble Bio UTNFS-3B-2 Транспортная среда для ПЦР</p></div>
                    <Link to="/catalog/Humasis_COVID-19" rel="stylesheet">Подробнее</Link></Link>
                </div>
                <div className="catalog__card"><Link to="/catalog/Humasis_COVID-19" className="catalog__link">
                    <div className="catalog__img_container"><img src={six} alt=""/></div>
                    <div><p>AnyLAB COVID-19 IgG/IgM Тест на антитела</p></div>
                    <Link to="/catalog/Humasis_COVID-19" rel="stylesheet">Подробнее</Link></Link>
                </div>
                <div className="catalog__card"><Link to="/catalog/Humasis_COVID-19" className="catalog__link">
                    <div className="catalog__img_container"><img src={seven} alt=""/></div>
                    <div><p>AnyLAB COVID-19 Ag Test Kit Тест на антиген</p></div>
                    <Link to="/catalog/Humasis_COVID-19" rel="stylesheet">Подробнее</Link></Link>
                </div>
                <div className="catalog__card"><Link to="/catalog/Humasis_COVID-19" className="catalog__link">
                    <div className="catalog__img_container"><img src={eight} alt=""/></div>
                    <div><p>Molecu Tech Real-Time Набор для ПЦР теста</p></div>
                    <Link to="/catalog/Humasis_COVID-19" rel="stylesheet">Подробнее</Link></Link>
                </div>
            </div>
        </div>
    </section>
}


export default Catalog