import React from 'react'
import one from '../img/p1.png'
import '../App.css'
import s3 from "../img/item_1.png";
import s2 from "../img/item_2.png";
import s1 from "../img/item_3.png";
import t1 from "../img/test_1.png"
import t2 from "../img/test_2.png"
import t3 from "../img/test_3.png"
import i1 from "../img/interp1.png"
import i2 from "../img/interp2.png"
import i3 from "../img/interp3.png"



const Item = () => {
    return (
        <div className="wrapper">
            <div className="item__wrapper">
                <img src={one} alt="one" className="item__img"/>
                <div className="item__subgroup">
                    <div className="item__h1">
                        <h1>Humasis COVID-19 Ag</h1>
                        <p>Тест на антиген</p>
                    </div>
                    <div className="item__desc">
                        <h1>Состав</h1>
                        <p>Тест-кассета:<span className="item__bold">25 шт.</span><br/> Пипетка для забора крови:<span
                            className="item__bold"> 25 шт.</span><br/> Буфер (реагент):<span className="item__bold"> 1
                        флакон (3 мл)</span><br/> Инструкция: <span className="item__bold">1 шт.</span></p>
                    </div>
                    <div className="item__btn">
                        <p>Только оптом</p>
                        <button type="button" className="item__border_btn">Цену уточняйте</button>
                    </div>
                </div>
            </div>
            <div className="item__wrapper_desc">
                <h1 className="item_h1__">Информация о продукции</h1>
                <div className="item__main-desc"><p>Тест идет в наборе (25 шт). В
                    зависимости от объема заказа предусматривается скидка. Скарификаторы и спиртовые салфетки идут в
                    подарок. По данным производителей вероятность теста составляет 98,7%. Имеется все документы на
                    продажу в Республики Казахстан. Производство - Южная Корея.</p></div>
            </div>
            <div className="item__wrapper_advantages">
                <h1 className="item_h1_">Преимущества</h1>
                <div className="item__img_container">
                    <div className="item__container1"><img src={s3} alt="s1" className="img_people"/><p>Быстрое
                        тестирование на антитела nCov<br/> в течение 15 минут</p></div>
                    <div className="item__container2"><img src={s2} alt="s2" className="img_cert"/><p>Доступно для
                        цельной крови,<br/> сыворотки или плазмы</p></div>
                    <div className="item__container3"><img src={s1} alt="s3" className="img_hand"/><p>Дополнительное
                        оборудование<br/> не требуется</p></div>
                </div>
            </div>
            <div className="item__wrapper_test">
                <h1 className="item_h1__test">Процедура проведения теста</h1>
                <div className="item__main-test"><p>Чтение результата нельзя проводить по истечению 15 минут. В таком
                    случае есть вероятность получить неверный результат. Утилизируйте тестовый прибор в специальную
                    емкость после поведения теста.
                    Тест идет в наборе (25 шт). Срок годности 6 месяцев, условия хранения при температуре 1~30°C.</p>
                </div>
            </div>
            <div className="item__img_test_container">
                <img src={t1} alt="t1"/>
                <img src={t2} alt="t2"/>
                <img src={t3} alt="t3"/>
            </div>
            <h1 className="item__interp">Интерпретация</h1>
            <div className="item__img_test_interp">
                <img src={i1} alt="i1"/>
                <img src={i2} alt="i2"/>
                <img src={i3} alt="i3"/>
            </div>
        </div>
    )
}

export default Item