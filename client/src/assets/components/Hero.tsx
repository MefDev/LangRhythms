import React from "react";
import pattern1 from "../../../public/pattern1.png"
import pattern2 from "../../../public/pattern2.png"
import circle from "../../../public/circle.png"
import circle1 from "../../../public/Ellipse 2522.png"
import circle2 from "../../../public/Ellipse 2523.png"
import circle3 from "../../../public/Ellipse 2524.png"
import circle4 from "../../../public/Ellipse 2525.png"
import circle5 from "../../../public/Ellipse 2526.png"

export default function Hero(){
    return (
        <main className="main-content">
            <div>
            <img  className="pattern1" src={pattern1} alt="amazigh mosaic" />
            <img  className="pattern2" src={pattern2} alt="amazigh mosaic" />
            </div>
            <section className="hero-text">
                <h1>Unlock Moroccan Culture: Learn Darija and Tamazight with <span className="ease-span">Ease!</span></h1>
                <img className="circle-ease" src={circle} alt="circle emphasising the ease" />
                <p>Dive into the rich tapestry of Moroccan culture through its vibrant languages, Darija and Tamazight. Start your language journey today and open doors to an enchanting new world.</p>
                <button className="btn">
                Get Started
                </button>
                
                   

            </section>
           
        </main>
    )
}