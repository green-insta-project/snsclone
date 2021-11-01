import React from 'react';
import '../style/Login.scss';
import Img from './img/4a5c9d62d51b.png'; 
import Img1 from './img/f155b664a93b.png';

import Img2 from './img/ff2c097a681e.jpg';
import Img3 from './img/b27a108592d8.jpg';
import Img4 from './img/177140221987.jpg';
import Img5 from './img/9144d6673849.jpg';
import Img6 from './img/5e04169b9308.jpg';
import Insta from './img/instagram1.png';
import Facebook from './img/facebook.png'







export default function Login() {
  return (
    <>
   <div className="every">
    {/* Login페이지 좌측에 있는 반응형 부분 */}

      <div className="mobile">
      </div>
      <div className="iphone">
        {/* <img src={Img2}/>
        <img src={Img3}/>
        <img src={Img4}/>
        <img src={Img5}/>
        <img src={Img6}/> */}
      </div>



    {/* Login페이지 우측에 있는 로그인 부분 */}

      <div className="login">
        
        <form className="loginA">
        {/* <img src="./img/instalogo.png" className="logo" /> */}
                <img src={Insta}/>
                <p>
                    <input placeholder="전화번호, 사용자 이름 또는 이메일"  type="text" />
                </p>
                <p>
                    <input placeholder="비밀번호" type="password" />
                </p>
                <p className="loginbutton">
                    <input type="submit" value="로그인" />
                </p>
                <div className="line1" />
                <div className="or">
                  또는  
                </div>
                <div className="line2" />
                <p className="facebook">
                  {/* <img src={Facebook}/> */}
                  Facebook으로 로그인
                </p>
                <p className="forgot">
                  비밀번호를 잊으셨나요?
                </p>
          </form>

          <div className="loginB">
            
              <a>계정이 없으신가요? </a>
              <a className="point">가입하기</a> 
            
          </div>
          
          <div className="loginC">
            <p>앱을 다운로드하세요.</p>
            <a href="https://apps.apple.com/app/instagram/id389801252?vt=lo">
              <img className="appstore" src={Img} />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb&utm_campaign=loginPage&ig_mid=5E62D154-D422-44CE-9B1E-CFFB26FA7B19&utm_content=lo&utm_medium=badge">
              <img className="googleplay" src={Img1} />
            </a>
          </div>

        </div>
    </div>

    <footer>
     
      <p>
        <a>Meta</a>
        <a>소개</a>
        <a>블로그</a>
        <a>채용 정보</a>
        <a>도움말</a>
        <a>API</a>
        <a>개인정보처리방침</a>
        <a>약관</a>
        <a>인기 계정</a>
        <a>해시태그</a>
        <a>위치</a>
        <a>Instagram Lite</a>
      </p>
      
      <p>        
        <a>뷰티</a>
        <a>댄스</a>
        <a>피트니스</a>
        <a>식음료</a>
        <a>집 및 정원</a>
        <a>음악</a>
        <a>시각 예술</a>
      </p>

      <p>
        <a>한국어▽ </a>
        <a>ⓒ2021 Instagram from Facebook</a>
      </p>
      
      
    </footer>
        
      
   
   </>
  )
}
