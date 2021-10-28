import React from 'react';
import '../style/Login.scss';
import Img from './img/4a5c9d62d51b.png'; 
import Img1 from './img/f155b664a93b.png';
import Iphone from './img/IPhone6.png'; 
import Samsung from './img/Samsung1.png';


export default function Login() {
  return (
    <>
   <div className="every">
    {/* Login페이지 좌측에 있는 반응형 부분 */}

      <div className="mobile">
        <img className="samsung" src={Samsung}></img>
         <img className="iphone" src={Iphone}></img> 
         

      </div>



    {/* Login페이지 우측에 있는 로그인 부분 */}

      <div className="login">
        
        <form className="loginA">
                <h1>Instagram</h1>
                <p>
                    <input label-label="전화번호, 사용자 이름 또는 이메일"  type="text" />
                </p>
                <p>
                    <input aria-label="비밀번호" type="password" />
                </p>
                <p className="loginbutton">
                    <input type="submit" value="로그인" />
                </p>
                <p className="or">
                  또는  
                </p>
                <p className="facebook">
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
            <p>앱을 다운하세요.</p>
            <img className="appstore" src={Img} />
            <img className="googleplay" src={Img1} />

          </div>

        </div>
    </div>

        <footer>
          <ul>
            <li>소개</li>
            <li>블로그</li>
            <li>채용 정보</li>
            <li>도움말</li>
            <li>API</li>
            <li>개인정보처리방침</li>
            <li>약관</li>
            <li>인기 계정</li>
            <li>해시태그</li>
            <li>위치</li>
            <li>Instagram Lite</li>
            <li>뷰티</li>
            <li>댄스</li>
            <li>피트니스</li>
            <li>식음료</li>
            <li>집 및 정원</li>
            <li>음악</li>
            <li>시각 예술</li>
          </ul>

          <p>
            <p>한국어▽ </p>
            <p>ⓒ2021 Instagram from Facebook</p>
        </p>
          
          
        </footer>
        
      
   
   </>
  )
}
