import React from "react"
import "./style.scss"
const PageNovosti = () => {
    return (
        <div className="main">
            <div>
                <h2 className="zagolovok">Полезные упражнения для занятия в бассейне</h2>
            </div>
        <article>
            <div className = "spisok_metod">
                <div className="metod">
                    <a href="/metod1" className="a_spisok_met">
                        <img src="../../../images/met1.jpg" alt="" className = "img_metod" />
                        <div className="opis_metod">
                            <h2 className="nazv_metod">Упражнения в бассейне для похудения груди и рук</h2>
                            <p className = "metod_opisanie">1. Зайдите в бассейн по плечи (кстати, все занятия проводятся примерно
                            на такой глубине). Отведите руки в стороны ладонями вниз...
                            </p>
                            <a href="/metod1">Подробнее</a>
                        </div>
                    </a>
                </div>
                <div className="metod">
                    <a href="/metod2" className="a_spisok_met">
                        <img src="../../../images/met2.jpg" alt="" className = "img_metod" />
                        <div className="opis_metod">
                            <h2 className="nazv_metod">Упражнения для похудения живота, спины, боков</h2>
                            <p className = "metod_opisanie">1. Возьмите нудлс под каждую руку. Подтяните к груди 
                            коленки, выпрямив голень параллельно дну бассейна (пальцы ног выглядывают из воды). ...
                            </p>
                            <a href="/metod2">Подробнее</a>
                        </div>
                    </a>
                </div>
            </div>
        </article>

        <article>
            <div className = "spisok_metod">
                <div className="metod">
                    <a href="/" className="a_spisok_met">
                        <img src="../../../images/met3.jpg" alt="" className = "img_metod" />
                        <div className="opis_metod">
                            <h2 className="nazv_metod">Упражнение “Человек-паук”</h2>
                            <p className = "metod_opisanie">Это также одно из наиболее эффективных водных упражнений для
                             сжигания жира. При его выполнении человек может побыть в роли известного героя комикса и
                              благодаря силе воды...
                            </p>
                            <a href="/">Подробнее</a>
                        </div>
                    </a>
                </div>
                <div className="metod">
                    <a href="/" className="a_spisok_met">
                        <img src="../../../images/met4.jpg" alt="" className = "img_metod" />
                        <div className="opis_metod">
                            <h2 className="nazv_metod">Бег и ходьба</h2>
                            <p className = "metod_opisanie">Это одно из доступных и несложных движений 
                            в воде, которое максимально эффективно сжигает жир. ...
                            </p>
                            <a href="/">Подробнее</a>
                        </div>
                    </a>
                </div>
            </div>
        </article>

        <article>
            <div className = "spisok_metod">
                <div className="metod">
                    <a href="/" className="a_spisok_met">
                        <img src="../../../images/met5.jpg" alt="" className = "img_metod" />
                        <div className="opis_metod">
                            <h2 className="nazv_metod">Выпады</h2>
                            <p className = "metod_opisanie">Выпады — прекрасные упражнения, которые
                             помогают не только эффективно сбросить лишний вес, но 
                             и существенно укрепить мышцы спины, бедер и груди, и таким образом улучшить осанку. ...
                            </p>
                            <a href="/">Подробнее</a>
                        </div>
                    </a>
                </div>
                <div className="metod">
                    <a href="/" className="a_spisok_met">
                        <img src="../../../images/met6.jpg" alt="" className = "img_metod" />
                        <div className="opis_metod">
                            <h2 className="nazv_metod">Планка в бассейне</h2>
                            <p className = "metod_opisanie">Планка — довольно популярное упражнение, которое в 
                            кратчайшее время может вернуть тонус мышцам всего тела. Но мало кто знает, что планку можно выполнять ...
                            </p>
                            <a href="/">Подробнее</a>
                        </div>
                    </a>
                </div>
            </div>
        </article>
       
        </div>
    )
}
export default PageNovosti



