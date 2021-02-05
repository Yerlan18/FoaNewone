import React from 'react';
import {YMaps, Map, Clusterer, Placemark} from 'react-yandex-maps';
import '../App.css'


export default function ContactUs() {


    return (
        <div className="contact__wrapper">
            <div className="contact__h1"><h1>Контакты</h1></div>
            <div className="wrapper__contact">
                <YMaps>
                    <div>
                        <Map defaultState={{center: [43.22683560, 76.88920018], zoom: 16}} width="100%" height={500}>
                            <Placemark geometry={[43.22683560, 76.88920018]}/>
                        </Map>
                    </div>
                </YMaps>
            </div>
        </div>
    );
}
