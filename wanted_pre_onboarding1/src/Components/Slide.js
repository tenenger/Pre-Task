import Images from "./module/Image.module.css";
import Information from "./module/Information.module.css";
export default function Slide({ title, Img_src }) {
  return (
    <div className="mainbanner">
      <div className={Images.Image}>
        <a href="/">
          <img src={Img_src} alt={title} />
        </a>
      </div>
      <div className={Information.Information}></div>
    </div>
  );
}
