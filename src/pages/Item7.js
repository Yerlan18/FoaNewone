import React from 'react'
import one from '../img/item_order8.png'
import '../App.css'
import s3 from "../img/item6_red1.png";
import s2 from "../img/item6_red2.png";
import s1 from "../img/item6_red3.png";
import t1 from "../img/item6_procedure1.png"
import t2 from "../img/item6_procedure2.png"
import t3 from "../img/item6_procedure3.png"
import t4 from "../img/item6_procedure4.png"
import t5 from "../img/item6_procedure5.png"
import t6 from "../img/item6_procedure6.png"
import i1 from "../img/item6_interp1.png"
import i2 from "../img/item6_interp2.png"
import i3 from "../img/item6_interp3.png"
import i4 from "../img/item6_interp4.png"


const Item6 = () => {
    return (
        <div className="wrapper">
            <div>
                <div className="item__wrapper">
                    <img src={one} alt="one" className="item__img"/>
                    <div className="item__subgroup">
                        <div className="item__h1">
                            <h1>Molecu Tech Real-Time</h1>
                            <p>Набор для ПЦР теста</p>
                        </div>
                        <div className="item__desc">
                            <h1>Состав</h1>
                            <p>Пресмесь 2X RT-PCR :<span className="item__bold"> 1000 ㎕</span><br/> Смесь
                                праймера/зонда:<span
                                    className="item__bold"> 1000 ㎕</span><br/>Полож. контроль:<span
                                    className="item__bold"> 50 ㎕</span><br/> Ультрачистая вода: <span
                                    className="item__bold">1500 ㎕</span></p>
                        </div>
                        <div className="item__btn">
                            <p>Только оптом</p>
                            <button type="button" className="item__border_btn">Цену уточняйте</button>
                        </div>
                    </div>
                </div>
                <div className="item__wrapper_desc">
                    <h1 className="item_h1__">Информация о продукции</h1>
                    <div className="item__main-desc"><p>Тест набор MolecuTech Real-Time COVID-19 поможет лабораториям в
                        тестировании пациентов во время пандемии COVID-19. Набор состоит из специфичного праймера/зонда
                        RdRp гена для обнаружения SARS-CoV-2 и специфичного праймера/зонда E гена для обнаружения всех
                        типов коронавируса, а также из респираторных образцов РНК.</p></div>
                </div>
                <div className="item__wrapper_advantages">
                    <h1 className="item_h1_">Преимущества</h1>
                    <div className="item__img_container">
                        <div className="item__container1"><img src={s3} alt="s1" className="img_people"/><p>Быстрые
                            результаты <br/>
                            теста за 2,5 часа</p></div>
                        <div className="item__container2"><img src={s2} alt="s2" className="img_cert"/><p>Специфическая
                            смесь праймера/зонда<br/> для повышения специфичности</p></div>
                        <div className="item__container3"><img src={s1} alt="s3" className="img_hand"/><p>Двойное
                            целевое обнаружение<br/>
                            для RdRp и E-генов</p></div>
                    </div>
                </div>
                <div className="item__wrapper_test">
                    <h1 className="item_h1__test">Процедура проведения теста</h1>
                    <div className="item__main-test"><p>Перед открытием все реагенты следует хранить при температуре -20
                        ℃. Избегайте повторного охлаждения, чтобы предотвратить снижение активности пресмеси RT-PCR.
                        Все реагенты должны быть быстро закручены и их нужно взболтнуть перед использованием. </p>
                    </div>
                </div>
                <div className="item6__img_test_container6">
                    <img src={t1} alt="t1"/>
                    <img src={t2} alt="t2"/>
                    <img src={t3} alt="t3"/>
                    <img src={t4} alt="t4"/>
                    <img src={t5} alt="t5"/>
                    <img src={t6} alt="t6"/>
                </div>
                <h1 className="item__interp">Интерпретация</h1>
                <p>Рекомендуется использовать один из следующих диагностических инструментов: Bio-Rad Система
                    обнаружения ПЦР в реальном времени CFX 96 (CFX 96) или Thermo fisherСистема инструментов для ПЦР в
                    реальном времени (ABI 7500).</p>
                <div className="item6__img_test_interp6">
                    <img src={i1} alt="i1"/>
                    <img src={i2} alt="i2"/>
                    <img src={i3} alt="i3"/>
                    <img src={i4} alt="i4"/>
                </div>
            </div>
        </div>
    )
}

export default Item6