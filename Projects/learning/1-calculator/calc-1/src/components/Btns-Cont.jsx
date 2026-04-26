import style from "./Btns-Const.module.css";
import Buttons from "./Buttons";

const BtnsCont = ({ value }) => {
  return (
    <div className={style.btns_cont}>
      {value.map((item, index) => {
        return <Buttons key={index} value={item} />;
      })}
    </div>
  );
};

export default BtnsCont;
