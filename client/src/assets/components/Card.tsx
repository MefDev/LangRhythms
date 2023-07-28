import React from "react";
import stars from "../../../public/stars.png"
import light from "../../../public/light.png"
import roule from "../../../public/roule.png"
export default function Card(){
    return (
        <div className="card-container">
         <div className="card primaryLight">
             <img src={stars} alt="stars icon" />
             <h4>Interactive Lessons</h4>
             <p>Our lessons are designed to make learning an engaging experience.</p>
         </div>
         <div className="card seconday-400">
             <img src={light} alt="light icon" />
             <h4>Personalized Learning </h4>
             <p>Tailor your learning path to your needs and pace</p>
         </div>
         <div className="card seconday-100">
             <img src={roule} alt="roule" />
             <h4>Community Support</h4>
             <p>Connect with fellow learners and native speakers for real-time practice.</p>
         </div>
         </div>
    )
}