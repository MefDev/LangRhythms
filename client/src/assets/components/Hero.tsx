import React from "react";
import Pattern from "./Pattern";
import Main from "./Main"
import Instructions from "./Instructions";
import Chose from "./Chose";
export default function Hero(){
    return (
        <main className="main-content">
            <Pattern/>
            <Main/>
            <Instructions/>
            <Chose/>
         
        </main>
    )
}