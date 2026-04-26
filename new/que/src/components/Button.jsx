import { useRef, useState } from 'react';
import '../App.css';

const Button = () => {
  const [count, setCount] = useState(0);
  const buttonRef = useRef(null);
  const intervalRef = useRef(null); // ✅ store interval

  const increaseCount = () => {
    setCount((prev) => prev + 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  function autoClick() {
    if (intervalRef.current) return; // prevent multiple intervals

    intervalRef.current = setInterval(() => {
      const buttonElem = buttonRef.current;
      if (buttonElem) {
        buttonElem.click();
      }
    }, 1000);
  }

  function stopAutoClick() {
    clearInterval(intervalRef.current);
    intervalRef.current = null; // reset
  }

  return (
    <div className="counter-container">
      <button
        onClick={increaseCount}
        ref={buttonRef}
        className="counter-button"
      >
        Clicked {count} {count === 1 ? 'time' : 'times'}
      </button>

      <button onClick={resetCount} className="counter-button">
        Reset
      </button>

      <button onClick={autoClick} className="counter-button">
        Auto Click
      </button>

      <button onClick={stopAutoClick} className="counter-button">
        Stop Auto
      </button>
    </div>
  );
};

export default Button;
