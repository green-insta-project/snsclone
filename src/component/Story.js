import React, {Component} from "react";
import Slider from "react-slick";
import "../style/slick.css";
import "../style/slick-theme.css";
import "../style/Img.scss";
import storyimg from "./img/story.jpg";
import storysvg from "./img/story.svg";

export default class SimpleSlider extends Component {

    render(){
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 8,
            slidesToScroll: 1,
        };
        return (
        <div className="story-item">
            <Slider {...settings}>
                <li>
                    <div>
                      <img src={storysvg} className="story-svg"/>
                      <img src={storyimg} className="story-img"/>
                      <p>yoons_93</p>
                    </div>
                </li>
                <li>
                    <div>
                      <img src={storysvg} className="story-svg"/>
                      <img src={storyimg} className="story-img"/>
                      <p>yoons_93</p>
                    </div>
                </li>
                <li>
                    <div>
                      <img src={storysvg} className="story-svg"/>
                      <img src={storyimg} className="story-img"/>
                      <p>yoons_93</p>
                    </div>
                </li>
                <li>
                    <div>
                      <img src={storysvg} className="story-svg"/>
                      <img src={storyimg} className="story-img"/>
                      <p>yoons_93</p>
                    </div>
                </li>
                <li>
                    <div>
                      <img src={storysvg} className="story-svg"/>
                      <img src={storyimg} className="story-img"/>
                      <p>yoons_93</p>
                    </div>
                </li>
                <li>
                    <div>
                      <img src={storysvg} className="story-svg"/>
                      <img src={storyimg} className="story-img"/>
                      <p>yoons_93</p>
                    </div>
                </li>
                <li>
                    <div>
                      <img src={storysvg} className="story-svg"/>
                      <img src={storyimg} className="story-img"/>
                      <p>yoons_93</p>
                    </div>
                </li>
                <li>
                    <div>
                      <img src={storysvg} className="story-svg"/>
                      <img src={storyimg} className="story-img"/>
                      <p>yoons_93</p>
                    </div>
                </li>
                <li>
                    <div>
                      <img src={storysvg} className="story-svg"/>
                      <img src={storyimg} className="story-img"/>
                      <p>yoons_93</p>
                    </div>
                </li>
                <li>
                    <div>
                      <img src={storysvg} className="story-svg"/>
                      <img src={storyimg} className="story-img"/>
                      <p>yoons_93</p>
                    </div>
                </li>
                  
            </Slider>
        </div>
        );
    }

}