import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Main from "./module/Main.module.css";
import TopBanner from "./module/TopBanner.module.css";
import "./Slider.css";
import Button from "./button";
import Buttons from "./module/Button.module.css";
import SvgIcon from "./module/SvgIcon.module.css";

function Slide({ title, Img_src, subtitle }) {
  return (
    <div className="mainbanner">
      <div className="Images">
        <a href="/">
          <img className="Images__img" src={Img_src} alt={title} />
        </a>
      </div>
      <div className="Informations">
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <hr className="divider" />
        <a href="/" className="Informations__btn">
          <span className="Informations__btn__label">
            바로가기
            <span className="Informations__label__endIcon">
              <span className={SvgIcon.SvgIcon__root}>
                <svg className={SvgIcon.SvgIcon__root__svg} viewBox="0 0 18 18">
                  <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                </svg>
              </span>
            </span>
          </span>
        </a>
      </div>
    </div>
  );
}

function Sliders() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    autoplay: true,
    prevArrow: (
      <button>
        <Button
          btn={`${Buttons.prevbtn}`}
          d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"
        ></Button>
      </button>
    ),
    nextArrow: (
      <button>
        <Button
          btn={`${Buttons.nextbtn}`}
          d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"
        ></Button>
      </button>
    ),
    responsive: [
      // 반응형 웹 구현 옵션
      {
        breakpoint: 1199, //화면 사이즈 960px일 때
        settings: {
          dots: false,
          infinite: true,
          speed: 500,
          arrows: false,
          slidesToScroll: 1,
          centerMode: true,
          variableWidth: true,
        },
      },
    ],
  };
  return (
    <main className={Main.Main}>
      <div className={TopBanner.TopBanner}>
        <Slider {...settings}>
          <Slide
            title="성과를 내는 마케팅"
            subtitle="실제 사례를 공개합니다"
            Img_src="../img/0.jpg"
          />
          <Slide
            title="성장하는 개발자가 되려면?"
            subtitle="OOO 검색하지 말 것!"
            Img_src="../img/1.jpg"
          />
          <Slide
            title="개발자 성장 비결 공개!"
            subtitle="Velog, 글 쓰는 개발자들의 이야기"
            Img_src="../img/2.jpg"
          />
          <Slide
            title="2022년 달라지는 노동법령"
            subtitle="노무관리 쟁점 한 눈에 파악하기"
            Img_src="../img/3.jpg"
          />
          <Slide
            title="해, 커리어 EP 02 공개"
            subtitle="마지막 관문 2라운드의 승자는?"
            Img_src="../img/4.jpg"
          />
          <Slide
            title="포트폴리오를 부탁해!"
            subtitle="디자이너의 포폴 살펴보기"
            Img_src="../img/5.jpg"
          />
          <Slide
            title="개발자 되고싶은 분들!?"
            subtitle="프론트엔드 무료 교육과정 참여하기"
            Img_src="../img/6.jpg"
          />
          <Slide
            title="UX 디자이너의 커리어 설계"
            subtitle="브랜드 가치를 더하는 디자인"
            Img_src="../img/7.jpg"
          />
          <Slide
            title="마케팅 주니어를 찾습니다"
            subtitle="1월 17일(월) 설명회 신청하기"
            Img_src="../img/8.jpg"
          />
        </Slider>
      </div>
    </main>
  );
}

export default Sliders;
