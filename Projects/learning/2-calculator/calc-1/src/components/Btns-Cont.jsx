import style from "./Btns-Const.module.css";
import Buttons from "./Buttons";

const BtnsCont = ({ handleBtn }) => {
  const value = [
    "1",
    "2",
    "C",
    "3",
    "4",
    "+",
    "5",
    "6",
    "-",
    "7",
    "8",
    "*",
    ".",
    "9",
    "/",
    "0",
    "=",
  ];
  return (
    <div className={style.btns_cont}>
      {value.map((item, index) => {
        return <Buttons key={index} handleBtn={handleBtn} value={item} />;
      })}
    </div>
  );
};

export default BtnsCont;
