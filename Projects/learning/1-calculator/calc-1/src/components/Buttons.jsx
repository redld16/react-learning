import style from "./Buttons.module.css";
const Buttons = ({ value }) => {
  return (
    <>
      <button className={`${style.btn} col-3`}>{value}</button>
    </>
  );
};

export default Buttons;
