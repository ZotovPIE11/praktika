import React from "react"
import "./style.scss"

import { Link } from 'react-router-dom'
import classNames from 'classnames'

const PageKontakty = () => {
    return (
        <div className="main">
            <div className = "logo_kontakty">
                <h3 className = "logo_logo_kontakty">Контакты</h3>
            </div>

            <article className="kontakty_map">
                <div className = "abzac_spisok">
                    <div className = "abzac">
                        <h3 className="h3_abzac">Адрес</h3>
                        <p className = "name_abzac">г.Барнаул, ул. Некрасова, 41</p>
                    </div>
                    <div class = "abzac">
                        <h3 className="h3_abzac">Телефон</h3>
                        <p className = "name_abzac">+7 999 999 99 99</p>
                    </div>
                    <div class = "abzac">
                        <h3 className="h3_abzac">Электронная почта</h3>
                        <p className = "name_abzac">Delphin@mail.ru</p>
                    </div>
                </div>
                
                
                
                <div className = "map">
                    <a className="map_one" href="https://yandex.ru/maps/197/barnaul/?utm_medium=mapframe&utm_source=maps"  
                   ></a>
                    <a className="map_two" href="https://yandex.ru/maps/197/barnaul/house/pereulok_nekrasova_41/bEoYcQ5gS0AOQFtpfX91d39hZg==/?ll=83.790300%2C53.346323&utm_medium=mapframe&utm_source=maps&z=17.09"
                    ></a>
                    <iframe className="map_three" src="https://yandex.ru/map-widget/v1/?ll=83.790300%2C53.346323&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NTk1NzY0MxJi0KDQvtGB0YHQuNGPLCDQkNC70YLQsNC50YHQutC40Lkg0LrRgNCw0LksINCR0LDRgNC90LDRg9C7LCDQv9C10YDQtdGD0LvQvtC6INCd0LXQutGA0LDRgdC-0LLQsCwgNDEiCg2clKdCFaNiVUI%2C&z=17.09" 
                     frameborder="1" allowfullscreen="true"></iframe>
                </div>
            </article>
        </div>
    )
}
export default PageKontakty



