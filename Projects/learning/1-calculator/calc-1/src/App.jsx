import "./App.css";
import BtnsCont from "./components/Btns-Cont";
import Input from "./components/Input";

function App() {
  const value = [
    "C",
   "1","2","+","3","4","-","5","6","*","7","8","/",".","9","=","0"
  ];

  return (
    <>
      <div id="calc">
        <Input />
        <BtnsCont value={value} />
      </div>
    </>
  );
}

export default App;
