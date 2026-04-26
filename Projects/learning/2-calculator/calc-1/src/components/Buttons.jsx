import style from "./Buttons.module.css";
const Buttons = ({ value, handleBtn }) => {
  return (
    <>
      <button
        className={`${style.btn} col-3`}
        value={value}
        onClick={handleBtn}
      >
        {value}
      </button>
    </>
  );
};

export default Buttons;
