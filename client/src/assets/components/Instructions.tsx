import React from "react";
import signupBtn from "../../../public/singupBtn.png"
import instructionBtn from "../../../public/instruction-btn.png"
import choseLang from "../../../public/choseLang.png"
import arrow from "../../../public/arrow.png"
export default function instruction(){
    return (
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
    )
}