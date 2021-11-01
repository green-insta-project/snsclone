import React, { Component } from "react";
import Slider from "react-slick";
import "../style/slick.css";
import "../style/slick-theme.css";
import "../style/Img.scss";
import Test1 from "./img/test1.jpg";
import Test2 from "./img/test2.jpg";
import Test3 from "./img/test3.jpg";
import Test4 from "./img/test4.jpg";
import Test5 from "./img/test5.jpg";


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="img-test">
        <Slider {...settings}>
          <div>
            <img className="t-img" src={Test1} />
          </div>
          <div>
            <img className="t-img" src={Test2} />
          </div>
          <div>
            <img className="t-img" src={Test3} />
          </div>
          <div>
            <img className="t-img" src={Test4} />
          </div>
          <div>
            <img className="t-img" src={Test5} />
          </div>
        </Slider>
      </div>
    );
  }
}
