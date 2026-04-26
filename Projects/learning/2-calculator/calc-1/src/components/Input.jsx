import style from "./Input.module.css";

const Input = ({ input }) => {
  return <input type="text" readOnly value={input} className={style.display} />;
};

export default Input;
