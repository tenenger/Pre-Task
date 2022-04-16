import SvgIcon from "./module/SvgIcon.module.css";
import Buttons from "./module/Button.module.css";

export default function Button({ btn, d }) {
  return (
    <button className={`${btn} ${Buttons.arrow}`}>
      <span className={SvgIcon.SvgIcon__root}>
        <svg className={SvgIcon.SvgIcon__root__svg} viewBox="0 0 18 18">
          <path d={d}></path>
        </svg>
      </span>
    </button>
  );
}
