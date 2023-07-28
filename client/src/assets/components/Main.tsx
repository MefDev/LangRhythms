import React from "react";
import circle from "../../../public/circle.png"
import ellipse from "../../../public/elipses-background.png"
export default function Pattern(){
    return(
        <section className="hero-text">
                <h1>Unlock Moroccan Culture: Learn Darija and Tamazight with <span className="ease-span">Ease!</span></h1>
                <img className="circle-ease" src={circle} alt="circle emphasising the ease" />
                <p>Dive into the rich tapestry of Moroccan culture through its vibrant languages, Darija and Tamazight. Start your language journey today and open doors to an enchanting new world.</p>
                <button className="btn">
                Get Started
                </button>
                <img className="ellipse" src={ellipse} alt="ellipses' background" />
            </section>
    )
}