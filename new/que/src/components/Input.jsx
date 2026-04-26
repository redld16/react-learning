const Input = ({ inp, handleClick, saveInp, handleReset }) => {
  return (
    <>
      <input
        type="text"
        onChange={handleClick}
        value={inp}
        placeholder="Input"
        onKeyDown={(e) => {
          (e.key === 'Enter' && saveInp(), e.key === 'Escape' && handleReset());
        }}
      />
    </>
  );
};

export default Input;
