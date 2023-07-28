import React from "react";

function NavBar(){
    return (
        <nav className="main-nav">
            <div className="logo">
                <h2>LangRhythms</h2>
            </div>
            <div className="main-anchors">
                <ul>
                    <li><a className="home" href="#">Home</a></li>
                    <li><a href="#">Languages</a></li>
                    <li><a href="#">Testimonials</a></li>
                    <li><a href="#">About Us</a></li>
                </ul>
            </div>
            <div className="additional-anchors">
                <ul>
                    <li><a href="#">Contact Us</a></li>
                    <li>|</li>
                    <li><a href="#" className="sign-up">sign up</a></li>
                    <li><a href="#" className="sign-in">Log in</a></li>
                </ul>
            </div>
        </nav>
    )
}
export default NavBar