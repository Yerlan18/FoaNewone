import React from 'react'
import cert from '../img/cert1.png'
import cert2 from '../img/cert2.png'
import cert3 from '../img/cert3.png'
import cert4 from '../img/cert4.png'
import cert5 from '../img/cert5.png'
import cert6 from '../img/cert6.png'
import '../App.css'


const Cert = () => {
    return <div className="wrapper">
        <h1 className="certificate_h1">Сертификаты</h1>
        <div className="cert__img_container">
            <img src={cert} alt="cert1" className="cert_img"/>
            <img src={cert2} alt="cert2" className="cert_img"/>
            <img src={cert3} alt="cert3" className="cert_img"/>
            <img src={cert4} alt="cert4" className="cert_img"/>
            <img src={cert5} alt="cert5" className="cert_img"/>
            <img src={cert6} alt="cert6" className="cert_img"/>
        </div>
    </div>
}


export default Cert