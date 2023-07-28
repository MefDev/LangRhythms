import React from "react";
import pattern1 from "../../../public/pattern1.png"
import pattern2 from "../../../public/pattern2.png"
import circle from "../../../public/circle.png"
import ellipse from "../../../public/elipses-background.png"
import signupBtn from "../../../public/singupBtn.png"
import instructionBtn from "../../../public/instruction-btn.png"
import choseLang from "../../../public/choseLang.png"
import arrow from "../../../public/arrow.png"

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
                <img className="ellipse" src={ellipse} alt="ellipses' background" />
            </section>
            <section className="instruction-container">
                <h5>How it works</h5>
                <h2>We make learning simple and straightforward</h2>

                <div className="arrows-container">
                <img className="firstArrow" src={arrow} alt="arrow image" />
                <img className="secondArrow" src={arrow} alt="arrow image" />
                </div>
                <div className="main-instruction-container">
                    <div>
                        <img src={signupBtn} alt="singup icon" />
                        <h6>Sign Up</h6>
                        <p>Start by creating your account. It's quick, easy, and free! All you need is an email address,</p>
                    </div>
                    
                    <div>
                        <img src={choseLang} alt="Chose Language icon" />
                        <h6>Choose Your Language</h6>
                        <p>Decide  what to learn. You can always change your selection  in your account settings.</p>
                    </div>
                    <div>
                        <img src={instructionBtn} alt="instruction icon" />
                        <h6>Start Learning</h6>
                        <p>Now the real fun begins! You'll start with a series of interactive lessons designed for your skill level.</p>
                    </div>
                </div>
            </section>
           
        </main>
    )
}