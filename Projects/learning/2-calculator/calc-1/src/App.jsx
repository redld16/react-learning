import "./App.css";
import BtnsCont from "./components/Btns-Cont";
import Input from "./components/Input";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");

  const handleBtn = (e) => {
    if (e.target.value === "C") return setInput("");
    if (e.target.value === "=") return handleEqual(e);

    setInput(input + e.target.value);
  };

  const handleEqual = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
      console.log(error);
    }
  };
  return (
    <>
      <div id="calc">
        <Input input={input} onChange={(e) => setInput(e.target.value)} />
        <BtnsCont handleBtn={handleBtn} onClick={(e) => handleBtn(e)} />
      </div>
    </>
  );
}

export default App;
