import React from "react"
import "./style.scss"

const PageMenuM = () => {
    return (
        <div className="main">
            <div className = "logo_main"> 
                <p className = "priglashenie">Вода - это сила. Вода - это жизнь. Кто первый в воде, первый везде!</p>
            </div>
            <div className="delphin">
                <p className="delphin">"Дельфин" - это самая большая сеть бассейнов в городе Барнаул.
                 На данный момент мы предоставляем три вида бассейнов с разными тренерами, методиками
                 обучения и тренировками.Ниже предоставлена более подробная информация о каждом бассейне.
                </p>
            </div>
            
            <article>
            <div className = "spisok_card">
                <div className="card">
                    <a href="/metod1" className="a_spisok">
                        <h2>Бассейн "Олимпийский"</h2>
                        <img src="../../../images/bass1.jpg" alt="" className = "img_main" />
                        <p className = "card_opisanie">В бассейне Олимпийский вы можете посещать следующие занятия:
                        <br />• Свободное плавание; 
                        <br />• Обучение плаванию детей и взрослых;
                        <br />• Аквааэробика;
                        <br />• Мать и дитя;
                        <br />• ЛФК.
                        </p>
                    </a>
                </div>
                <div className="card">
                    <a href="/metod1" className="a_spisok">
                    <h2>Бассейн "Ласточка"</h2>
                        <img src="../../../images/bass2.jpg" alt="" className = "img_main" />
                        <p class = "card_opisanie"> Чаша бассейна имеет параметры 15 на 25 м. и глубиной до 4.75 м.
                         В бассейне 6 дорожек, где могут заниматься желающие. Для прыжков в воду есть 3 вышки. Дополнительно вы можете посещать:
                        <br />• Индивидуальные занятия с тренером;
                        <br />• Фитобочку;
                        </p>
                    </a>
                </div>
                <div className="card">
                    <a href="/vensky_coffee" className="a_spisok">
                    <h2>Бассейн "Мир"</h2>
                        <img src="../../../images/bass3.jpg" alt="" className = "img_main" />
                        <p className = "card_opisanie"> Бассейн был открыт в 2013 году. Всего в нем 6 дорожек по 25 метров. Для посещения необходима медицинская справка. В бассейне предоставляются следующие услуги:
                        <br />• Свободное плавание; 
                        <br />• Детские занятия по плаванию; 
                        <br />• Аквааэробика;</p>
                    </a>
                </div>
            </div>
        </article>


        <article>
        <hr />
            <h2>Цены на посещения</h2>
                <div className="price">
                <h3>Бассейн "Олимпийский"</h3>
                <img src="../../../images/priceOlimp.PNG" alt="" className = "img_price" />
                </div>

                <div className="price">
                <h3>Бассейн "Ласточка"</h3>
                <img src="../../../images/priceLast.PNG" alt="" className = "img_price" />
                    
                </div>
                <div className="price">
                <h3>Бассейн "Олимпийский"</h3>
                <img src="../../../images/priceOlimp.PNG" alt="" className = "img_price" />
                </div>

                
          
        </article>
        
       
        </div>
    )
}
export default PageMenuM



