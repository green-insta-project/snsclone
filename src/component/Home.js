import React from "react";
import "../style/Home.scss";
import { IoEllipsisHorizontal } from "react-icons/io5";
import storyimg from "./img/story.jpg";
import logo from "../logo.svg";
import Img from "./Img";
import "../style/Home.scss";
import storysvg from "./img/story.svg";
import Heart from "./Heart";
import Bubble from "./Bubble";
import Plane from "./Plane";
import Storage from "./Storage";
import Smile from "./Smile"
import user from "./img/user.jpg"
import Story from "./Story";


export default function Home() {
  
  return (
    <>
    
    <div className="top">
      <div className="header-wrap">
        <header>
          <img src="./img/instalogo.png" className="logo" />

          <input placeholder="검색" type="search"  className="search"/>
            
          <div clssName="searchicon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="gray" width="10" height="10" viewBox="0 0 24 24">
              <path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z"></path></svg>
          </div>
          
          <div className="icon">
            <svg aria-label="홈" class="nav-icon " color="#262626" fill="#262626" height="22" role="img" viewBox="0 0 48 48" width="22">
              <path d="M45.5 48H30.1c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2.1-4.6-4.6-4.6s-4.6 2.1-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 
              0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.6-.6 2.1 0l21.5 21.5c.3.3.4.7.4 1.1v23.5c.1.8-.6 1.5-1.4 1.5z">
              </path>
            </svg>
            <svg aria-label="Direct" class="nav-icon " color="#262626" fill="#262626" height="22" role="img" viewBox="0 0 48 48" width="22"><path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path></svg>
            <svg aria-label="새로운 게시물" class="nav-icon " color="#262626" fill="#262626" height="22" role="img" viewBox="0 0 48 48" width="22">
              <path d="M31.8 48H16.2c-6.6 0-9.6-1.6-12.1-4C1.6 41.4 0 38.4 0 31.8V16.2C0 9.6 1.6 6.6 4 4.1 6.6 1.6 9.6 0 16.2 0h15.6c6.6 0 9.6 1.6 
              12.1 4C46.4 6.6 48 9.6 48 16.2v15.6c0 6.6-1.6 9.6-4 12.1-2.6 2.5-5.6 4.1-12.2 4.1zM16.2 3C10 3 7.8 4.6 6.1 6.2 4.6 7.8 3 10 3 16.2v15.6c0 
              6.2 1.6 8.4 3.2 10.1 1.6 1.6 3.8 3.1 10 3.1h15.6c6.2 0 8.4-1.6 10.1-3.2 1.6-1.6 3.1-3.8 3.1-10V16.2c0-6.2-1.6-8.4-3.2-10.1C40.2 4.6 38 3 31.8 3H16.2z">
              </path>
              <path d="M36.3 25.5H11.7c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h24.6c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5z">
              </path>
              <path d="M24 37.8c-.8 0-1.5-.7-1.5-1.5V11.7c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v24.6c0 .8-.7 1.5-1.5 1.5z">
              </path>
            </svg>
            <svg aria-label="사람 찾기" class="nav-icon " color="#262626" fill="#262626" height="22" role="img" viewBox="0 0 48 48" width="22"><path clip-rule="evenodd" d="M24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0zm0 45C12.4 45 3 35.6 3 24S12.4 3 24 3s21 9.4 21 21-9.4 21-21 21zm10.2-33.2l-14.8 7c-.3.1-.6.4-.7.7l-7 14.8c-.3.6-.2 1.3.3 1.7.3.3.7.4 1.1.4.2 0 .4 0 .6-.1l14.8-7c.3-.1.6-.4.7-.7l7-14.8c.3-.6.2-1.3-.3-1.7-.4-.5-1.1-.6-1.7-.3zm-7.4 15l-5.5-5.5 10.5-5-5 10.5z" fill-rule="evenodd"></path></svg>
            <svg aria-label="활동 피드" class="nav-icon " color="#262626" fill="#262626" height="22" role="img" viewBox="0 0 48 48" width="22"><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
            <img alt="" class="profile" crossorigin="anonymous" data-testid="user-avatar" draggable="false" src="./img/HappyNewYear_2018.png"></img>
          </div>
        </header>
      </div>
    </div>
    {/* 윤서님 */}
      <div className="main">
        <div className="main-left">
          <div className="story">
            <div className="story-contents">
              <Story className="story-slider">
                {/* <ul className="story-item">
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
                </ul> */}
                </Story>
            </div>
          </div>

          
          {/* 지연님 */}
          <div className="post-wrap">
            <section>
              <article>
                <div className="header">
                  <div className="left">
                    <figure>
                      <img src={storysvg} />
                      <div>
                        <img src={storyimg}/>
                      </div>
                    </figure>
                    <span>xltmvkdls</span>
                  </div>
                  <div className="right">
                    <IoEllipsisHorizontal />
                  </div>
                </div>
                <div className="img-content">
                  <Img />
                </div>
                <div className="info">
                  <div className="details">
                    <div className="det1">
                      <div className="l-icon">
                        <ul>
                          <li>
                            <Heart />
                          </li>
                          <li>
                            <Bubble />
                          </li>
                          <li>
                            <Plane />
                          </li>
                        </ul>
                      </div>
                      <div className="r-icon">
                        <Storage />
                      </div>
                    </div>
                    <div className="det2">
                      <div className="another-user">
                        <span>
                          <img src={user}/>
                        </span>
                      </div>
                      <p className="text">
                        <a>naeun____8360</a>
                        님
                        &nbsp;
                        <strong>여러 명</strong>이 좋아합니다.
                      </p>
                    </div>
                    <div className="bulletin">
                      <div className=" det3">
                        <span className="l-con">xltmvkdls</span>
                        &nbsp;
                        <span classNamer="r-con">
                          헤이마마 최강창민&효진초이 ver.
                          <span className="more">
                            ..&nbsp;
                            <button className="btn" type="button">
                              더보기
                            </button>
                          </span>
                        </span>
                      </div>

                      <div className="det4">
                        <a className="comment">
                          댓글&nbsp;
                          <span>22</span>개 모두 보기
                        </a>
                      </div>

                      <div className="det5">
                        <div className="comment-1">
                          <span className="nick-name">faiz_21guns</span>
                          &nbsp;
                          <span className="record">
                            <span>
                              <a>@soovely_716</a>
                              Beautiful style 🖤🖤🖤
                            </span>
                          </span>
                        </div>
                        <span className="h-icon">
                          <Heart className="small-heart"/>
                        </span>
                      </div>

                      <div className="det5">
                        <div className="comment-1">
                          <span className="nick-name">faiz_21guns</span>
                          &nbsp;
                          <span className="record">
                            <span>
                              <a>@bro_joon</a>
                              알게쑤😞
                            </span>
                          </span>
                        </div>
                        <span className="h-icon">
                          <Heart className="small-heart" />
                        </span>
                      </div>
                    </div>

                    <div className="det6">
                      <a> 4시간 전</a>
                    </div>

                    <div className="det7">
                      <div className="leave-comment">
                        <form>
                          <div className="smile">
                              <Smile />
                            </div>
                            <textarea
                              rows="1"
                              cols="45"
                              placeholder="댓글 달기..."
                            ></textarea>

                          <button type="button">게시</button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </section>
          </div>
        </div>

        <div className="main-right">
          <div className="profile-card">
            <div className="profile-img">
              <img src={logo} />
            </div>
            <div className="profile-info">
              <div className="profile-id txt">green_project</div>
              <div className="profile-msg txt">그린</div>
            </div>
            <button className="btn-trans">
              <div className="trans">전환</div>
            </button>
          </div>
          <div className="suggestion">
            <div className="sugg-tit">
              <p className="suggestion-text aside-text">회원님을 위한 추천</p>
              <p className="suggestion-more-text aside-text">모두 보기</p>
            </div>
            <div className="profile-card sugg-card">
              <div className="profile-img-wrap">
                <div className="profile-img">
                  <img src={logo} />
                </div>
              </div>
              <div className="profile-info">
                <div className="profile-id txt">sohee</div>
                <div className="profile-msg txt">김소희</div>
              </div>
              <button className="btn-trans">
                <div className="trans">팔로우</div>
              </button>
            </div>
            <div className="profile-card sugg-card">
              <div className="profile-img-wrap">
                <div className="profile-img">
                  <img src={logo} />
                </div>
              </div>
              <div className="profile-info">
                <div className="profile-id txt">jiyeon</div>
                <div className="profile-msg txt">박지연</div>
              </div>
              <button className="btn-trans">
                <div className="trans">팔로우</div>
              </button>
            </div>
            <div className="profile-card sugg-card">
              <div className="profile-img-wrap">
                <div className="profile-img">
                  <img src={logo} />
                </div>
              </div>
              <div className="profile-info">
                <div className="profile-id txt">jihwa</div>
                <div className="profile-msg txt">윤지화</div>
              </div>
              <button className="btn-trans">
                <div className="trans">팔로우</div>
              </button>
            </div>
            <div className="profile-card sugg-card">
              <div className="profile-img-wrap">
                <div className="profile-img">
                  <img src={logo} />
                </div>
              </div>
              <div className="profile-info">
                <div className="profile-id txt">yoonseo</div>
                <div className="profile-msg txt">최윤서</div>
              </div>
              <button className="btn-trans">
                <div className="trans">팔로우</div>
              </button>
            </div>
            <div className="profile-card sugg-card">
              <div className="profile-img-wrap">
                <div className="profile-img">
                  <img src={logo} />
                </div>
              </div>
              <div className="profile-info">
                <div className="profile-id txt">jooeun</div>
                <div className="profile-msg txt">최주은</div>
              </div>
              <button className="btn-trans">
                <div className="trans">팔로우</div>
              </button>
            </div>
          </div>
          <div className="footer-nav">
            <ul>
              <li>
                <a className="footer-li-text" href="https://about.instagram.com/" rel="nofollow noopener noreferrer" target="_blank">소개</a>
              </li>
              <li>
                <a className="footer-li-text" href="https://help.instagram.com/">도움말</a>
              </li>
              <li>
                <a className="footer-li-text" href="https://about.instagram.com/blog/">홍보 센터</a>
              </li>
              <li>
                <a className="footer-li-text" href="https://developers.facebook.com/docs/instagram" rel="nofollow noopener noreferrer" target="_blank">API</a>
              </li>
              <li>
                <a className="footer-li-text" href="/about/jobs/">채용 정보</a>
              </li>
              <li>
                <a className="footer-li-text" href="/legal/privacy/">개인정보처리방침</a>
              </li>
              <li>
                <a className="footer-li-text _vfM2" href="/legal/terms/">약관</a>
              </li>
              <li>
                <a className="footer-li-text" href="/explore/locations/">위치</a>
              </li>
              <li>
                <a className="footer-li-text" href="/directory/profiles/">인기 계정</a>
              </li>
              <li>
                <a className="footer-li-text" href="/directory/hashtags/">해시태그</a>
              </li>
              <li>
                <span className="btn-lang">언어
                  <select aria-label="표시 언어 변경" className="lang">
                    <option value="af">Afrikaans</option>
                    <option value="cs">Čeština</option>
                    <option value="da">Dansk</option>
                    <option value="de">Deutsch</option>
                    <option value="el">Ελληνικά</option>
                    <option value="en">English</option>
                    <option value="en-gb">English (UK)</option>
                    <option value="es">Español (España)</option>
                    <option value="es-la">Español</option>
                    <option value="fi">Suomi</option>
                    <option value="fr">Français</option>
                    <option value="id">Bahasa Indonesia</option>
                    <option value="it">Italiano</option>
                    <option value="ja">日本語</option>
                    <option value="ko">한국어</option>
                    <option value="ms">Bahasa Melayu</option>
                    <option value="nb">Norsk</option>
                    <option value="nl">Nederlands</option>
                    <option value="pl">Polski</option>
                    <option value="pt-br">Português (Brasil)</option>
                    <option value="pt">Português (Portugal)</option>
                    <option value="ru">Русский</option>
                    <option value="sv">Svenska</option>
                    <option value="th">ภาษาไทย</option>
                    <option value="tl">Filipino</option>
                    <option value="tr">Türkçe</option>
                    <option value="zh-cn">中文(简体)</option>
                    <option value="zh-tw">中文(台灣)</option>
                    <option value="bn">বাংলা</option>
                    <option value="gu">ગુજરાતી</option>
                    <option value="hi">हिन्दी</option>
                    <option value="hr">Hrvatski</option>
                    <option value="hu">Magyar</option>
                    <option value="kn">ಕನ್ನಡ</option>
                    <option value="ml">മലയാളം</option>
                    <option value="mr">मराठी</option>
                    <option value="ne">नेपाली</option>
                    <option value="pa">ਪੰਜਾਬੀ</option>
                    <option value="si">සිංහල</option>
                    <option value="sk">Slovenčina</option>
                    <option value="ta">தமிழ்</option>
                    <option value="te">తెలుగు</option>
                    <option value="vi">Tiếng Việt</option>
                    <option value="zh-hk">中文(香港)</option>
                    <option value="bg">Български</option>
                    <option value="fr-ca">Français (Canada)</option>
                    <option value="ro">Română</option>
                    <option value="sr">Српски</option>
                    <option value="uk">Українська</option>
                  </select>
                </span>
              </li>
            </ul>

            <span class="copyright">© 2021 Instagram from Facebook</span>
          </div>

        </div>
      </div>
    </>
  );

}
