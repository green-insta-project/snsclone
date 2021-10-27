import React from 'react'

export default function Login() {
  return (
   <>
    {/* Login페이지 좌측에 있는 반응형 부분 */}

      <div className="mobile">

      </div>



    {/* Login페이지 우측에 있는 로그인 부분 */}

      <div className="login">
        <form name="loginA">
                <h1>Instagram</h1>
                <p>
                    <input label-label="전화번호, 사용자 이름 또는 이메일"  type="text" />
                </p>
                <p>
                    <input aria-label="비밀번호" type="password" />
                </p>
                <p>
                    <input type="submit" value="로그인" />
                </p>
          </form>

          <div className="loginB">
            <tr>
              <td>계정이 없으신가요? </td>
              <a>가입하기</a> 
            </tr>
          </div>
          
          <div className="loginC">
            <p>앱을 다운하세요.</p>
            <img src="../img/4a5c9d62d51b.jpg"></img>

          </div>

        </div>
      
   </>
  )
}
