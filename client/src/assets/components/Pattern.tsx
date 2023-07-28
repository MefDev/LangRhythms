import React from "react";
import pattern1 from "../../../public/pattern1.png"
import pattern2 from "../../../public/pattern2.png"
export default function Pattern(){
    return(
        <div>
            <img  className="pattern1" src={pattern1} alt="amazigh mosaic" />
            <img  className="pattern2" src={pattern2} alt="amazigh mosaic" />
        </div>
    )
}