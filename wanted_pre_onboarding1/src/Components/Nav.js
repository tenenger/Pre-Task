import React from "react";
import "./Nav.css";
import { SvgBell, SvgSearch, SvgBadge, SvgNew, SvgDots } from "./SvgIcon";

function NavLeft() {
  const NavLeft_menu_button = {
    width: "17px",
    height: "14px",
    objectFit: " contain",
  };
  return (
    <div className="Mainbar__main__NavLeft">
      <div className="NavLeft__Top">
        <button className="NavLeft__Top__menu">
          <img style={NavLeft_menu_button} src="./img/icon-menu.png" alt="" />
        </button>
        <a className="NavLeft__Top__logo" href="/">
          <i className="icon-logo_new"></i>
        </a>
      </div>
      <button className="NavLeft__SignUP"></button>
    </div>
  );
}

function NavCenter() {
  return (
    <ul className="Mainbar__main__NavCenter">
      <li className="NavCenter__Homebtn NavCenter__btn">
        <a href="/">홈</a>
      </li>
      <li className="NavCenter__jobbtn NavCenter__btn">
        <a href="/">채용</a>
      </li>
      <li className="NavCenter__eventbtn NavCenter__btn">
        <a href="/">이벤트</a>
      </li>
      <li className="NavCenter__salarybtn NavCenter__btn smMoreVisible">
        <a href="/">직군별 연봉</a>
      </li>
      <li className="NavCenter__resumebtn NavCenter__btn smMoreVisible">
        <a href="/">이력서</a>
      </li>
      <li className="NavCenter__conmmunitybtn NavCenter__btn smMoreVisible">
        <a href="/">
          커뮤니티{" "}
          <em>
            <SvgNew text="New"></SvgNew>
          </em>
        </a>
      </li>
      <li className="NavCenter__freelancerbtn NavCenter__btn smMoreVisible">
        <a href="/">프리랜서</a>
      </li>
      <li className="NavCenter__AIscorebtn NavCenter__btn smMoreVisible">
        <a href="/">
          AI 합격예측{" "}
          <em>
            <SvgNew text="Beta"></SvgNew>
          </em>
        </a>
      </li>
    </ul>
  );
}

function NavRight() {
  const badge = {
    backgroundColor: "rgb(51, 102, 255)",
    width: "13px",
    height: "13px",
  };
  return (
    <aside className="Mainbar__main__NavRight">
      <ul className="NavRight__Main">
        <li>
          <button className="NavRight__searchbtn">
            <SvgSearch></SvgSearch>
          </button>
        </li>
        <li className="NavRight__Main__Alramwrap">
          <button className="Main__Alramwrap__alram">
            <SvgBell></SvgBell>
          </button>
          <span style={badge} className="Main__Alram__badge">
            <SvgBadge></SvgBadge>
          </span>
        </li>
        <li className="NavRight__Main__profilewrap">
          <button className="NavRight__Main__profile">
            <div className="avatarBorder">
              <div className="avatarImage"></div>
            </div>
          </button>
          <span style={badge} className="Main__Alram__badge">
            <SvgBadge></SvgBadge>
          </span>
        </li>
        <li className="NavRight__Main__Right">
          <a href="/" className="Main__Right__dashboardbtn">
            기업 서비스
          </a>
        </li>
        <li className="NavRight__Main__sub">
          <button className="NavRight__sub__menubtn">
            <SvgDots></SvgDots>
          </button>
        </li>
      </ul>
      <div className="NavRight__Sub"></div>
    </aside>
  );
}

function Nav() {
  return (
    <div className="Navbar">
      <div className="Mainbar">
        <nav className="Mainbar__main">
          <NavLeft></NavLeft>
          <NavCenter></NavCenter>
          <NavRight></NavRight>
        </nav>
      </div>
    </div>
  );
}
export default Nav;
