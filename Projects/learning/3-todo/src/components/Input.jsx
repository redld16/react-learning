import style from "./Input.module.css";
const Input = ({ type, placeholder }) => {
  return (
    <input
      className={style["input"] + " form-control"}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
