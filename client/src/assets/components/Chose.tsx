import React from "react";
import people from "../../../public/people.png"
import star from "../../../public/star.png"
import click from "../../../public/click.png"
export default function Chose(){
    return    (
        <section className="chose-container">
            <h5>Why choose us</h5>
            <h2>Enjoyable & Rewarding Experience!</h2>
            <div className="chose-steps-container">
                <section>
                        <section className="section">
                            <img className="star-icon" src={star} alt="star icon" />
                            <h6>Comprehensive & Customizable Learning</h6>
                            <p>Our platform accommodates learners of all proficiency levels. Choose your preferred dialect, set your pace, and personalize your learning path.</p>
                        </section>
                        <section className="section">
                            <img className="click-icon" src={click} alt="click icon" />
                            <h6>Comprehensive & Customizable Learning</h6>
                            <p>Our platform accommodates learners of all proficiency levels. Choose your preferred dialect, set your pace, and personalize your learning path.</p>
                        </section>
                </section>
                <section className="align-section section">
                        <img className="people-icon" src={people} alt="people icon" />
                        <h6>Comprehensive & Customizable Learning</h6>
                        <p>Our platform accommodates learners of all proficiency levels. Choose your preferred dialect, set your pace, and personalize your learning path.</p>
                </section>
                
            </div>
            
</section>
    )
    
}