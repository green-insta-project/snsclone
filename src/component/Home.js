import React from "react";
import "../style/Home.scss";
import { FaEllipsisH } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { FiBookmark } from "react-icons/fi";
import { BiSmile } from "react-icons/bi";
import story from "./img/story.jpg";
// import { IoIosArrowDropleftCircle } from "react-icons/io";
// import { IoIosArrowDroprightCircle } from "react-icons/io";

export default function Home() {
  return (
    <main>
      <section>
        <article>
          <div className="header">
            <div className="left">
              <figure>
                <img src />
              </figure>
              <span>xltmvkdls</span>
            </div>
            <div className="right">
              <FaEllipsisH />
            </div>
          </div>
          <div className="content">
            <div className="img-content">
              <img src />
            </div>
          </div>
          <div className="info">
            <div className="details">
              <div className="det1">
                <div className="l-icon">
                  <ul>
                    <li>
                      <FaRegHeart />
                    </li>
                    <li>
                      <FaRegComment />
                    </li>
                    <li>
                      <IoPaperPlaneOutline />
                    </li>
                  </ul>
                </div>
                <div className="r-icon">
                  <FiBookmark />
                </div>
              </div>
              <div className="det2">
                <div className="another-user">
                  <span></span>
                </div>
                <p className="text">
                  <a>naeun____8360님</a>
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
                    <FaRegHeart />
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
                    <FaRegHeart />
                  </span>
                </div>
              </div>

              <div className="det6">
                <a> 4시간 전</a>
              </div>

              <div className="det7">
                <div className="leave-comment">
                  <form>
                    <div className="box1">
                      <div className="smile">
                        <BiSmile />
                      </div>
                      <textarea
                        rows="1"
                        cols="45"
                        placeholder="댓글달기..."
                      ></textarea>
                    </div>
                    <button type="button">게시</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
