import React from 'react'
import '../style/Home.scss'
import story from './img/story.jpg'
// import { IoIosArrowDropleftCircle } from "react-icons/io";
// import { IoIosArrowDroprightCircle } from "react-icons/io";

export default function Home() {
  return (
    <div className="this">
      <div className="story">
        <div className="story-contents">
          <ul>
            <li>
              <div>
                <img src={story}/>
              </div>
              <p>yoons_93</p>
            </li>
            <li>
              <div>
                <img src={story}/>
              </div>
              <p>yoons_93</p>
            </li>
            <li>
              <div>
                <img src={story}/>
              </div>
              <p>yoons_93</p>
            </li>
            <li>
              <div>
                <img src={story}/>
              </div>
              <p>yoons_93</p>
            </li>
            <li>
              <div>
                <img src={story}/>
              </div>
              <p>yoons_93</p>
            </li>
            <li>
              <div>
                <img src={story}/>
              </div>
              <p>yoons_93</p>
            </li>
            <li>
              <div>
                <img src={story}/>
              </div>
              <p>yoons_93</p>
            </li>
          </ul>
        </div>
        <div className="story-arrow">
          {/* <button className="story-leftarrow"><IoIosArrowDropleftCircle size="1.2em"/></button>
          <button className="story-rightarrow"><IoIosArrowDroprightCircle size="1.2em"/></button> */}
        </div>
        
      </div>
    </div>
  )
}
