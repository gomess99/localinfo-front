import React from "react";
import "../Carousel2/carousel2.css";
import Img1 from "../../img/carousel/test1.jpeg";
import Img2 from "../../img/carousel/test2.png";
import Img3 from "../../img/carousel/test3.jpeg";
import Img4 from "../../img/carousel/test4.png";
import Img5 from "../../img/carousel/test5.jpeg";
import Img6 from "../../img/carousel/test6.png";
import Img7 from "../../img/carousel/test7.png";
import Img8 from "../../img/carousel/test8.png";
import Img9 from "../../img/carousel/test9.png";

function Carousel2() {
    return (

        <div className="carousel2">
            <div className="carousel2-slide">
                <img src={Img1} alt="test1" />
                <img src={Img2} alt="test2" />
                <img src={Img3} alt="test3" />
                <img src={Img4} alt="test4" />
                <img src={Img5} alt="test5" />
                <img src={Img6} alt="test6" />
                <img src={Img7} alt="test7" />
                <img src={Img8} alt="test8" />
                <img src={Img9} alt="test9" />
            </div>
            
            <div className="carousel2-slide">
                <img src={Img1} alt="test1" />
                <img src={Img2} alt="test2" />
                <img src={Img3} alt="test3" />
                <img src={Img4} alt="test4" />
                <img src={Img5} alt="test5" />
                <img src={Img6} alt="test6" />
                <img src={Img7} alt="test7" />
                <img src={Img8} alt="test8" />
                <img src={Img9} alt="test9" />
            </div>
        </div>

    )
}

export default Carousel2;