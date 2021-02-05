import React from 'react'
import '../App.css'
import bg from '../img/main__bg.png'
import s1 from '../img/adv3.png'
import s2 from '../img/adv2.png'
import s3 from '../img/adv1.png'
import Catalog from "./Catalog";
import Cert from "./Cert";
import ContactUs from "./Contact";
import Footer from "../components/Footer";


const Main = () => {
    return (
        <>
            <section id="main__page">
                <div className="wrapper">
                    <div className="main__group">
                        <div className="bg__img">
                            <img src={bg} alt="image"/>
                            <div className="text__main">
                                <div className="main__h1">
                                    <h1>Тесты к коронавирусу</h1>
                                    <h1>COVID-19</h1>
                                </div>
                                <div
                                    className="main__p">
                                    <p>Экспресс тест на антитела, антигены, универсальная транспортная
                                        среда, ПЦР тест - производство Южная Корея</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="section__about_us">
                <div className="about__us_center">
                    <div className="about__us_h1"><h1>О Компании</h1></div>
                    <div className="about__us_p"><p>Наша компания активно развивающаяся в Казахстане Южно-Корейская
                        компания, основной деятельностью является реализация изделий медицинского назначения, расходных
                        материалов. Мы всегда готовы оказать содействие в любых вопросах, возникающих у наших клиентов и
                        партнеров.</p></div>
                </div>
            </section>
            <section id="section__our_advantages">
                <div className="wrapper">
                    <h1 class="advantages_h1">Наши преимущества</h1>
                    <div className="advantages__img_container">
                        <div className="container1"><img src={s3} alt="s1" className="img_people"/><p>Опыт работы с
                            международными компаниями</p></div>
                        <div className="container2"><img src={s2} alt="s2" className="img_cert"/><p>Предоставление
                            сертификатов соответствия</p></div>
                        <div className="container3"><img src={s1} alt="s3" className="img_hand"/><p>Индивидуальный
                            подход к заказчику</p></div>
                    </div>
                </div>
            </section>
            <Catalog/>
            <Cert/>
            <ContactUs/>
        </>
    )
}


export default Main