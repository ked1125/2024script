import { useState } from "react";
import "./App.css";
// import Button from "@mui/material/Button";

function App() {
  const styleText = { fontSize: "2em" };
  const btnClick = function () {
    console.log("test");
  };

  const [title, setTitle] = useState(["seoul", "busan", "daegu"]);

  // const [modal, setModal] = useState(1);

  const changData = () => {
    const newArray = [...title]; // ["seoul","busan","daugu"]
    //deepcopy,
    newArray[0] = "incheon"; // ["incheon","busan","daegu"]
    setTitle(newArray);
  };
  const [num, setNum] = useState(0);
  const changeNum = () => {
    setNum(1);
  };
  const zeroNum = () => {
    setNum(0);
  };

  const [myNum, setMyNum] = useState(0);
  return (
    <>
      {num}
      <div className="text" style={styleText}>
        <button onClick={changData}>클릭</button>
      </div>

      <button onClick={changeNum}>클릭넘</button>
      <button onClick={zeroNum}>원래값</button>

      <div>
        {title[0]}
        {myNum}
        <span
          onClick={() => {
            setMyNum(myNum + 1);
          }}
          style={{ cursor: "pointer" }}
        >
          😽
        </span>
      </div>
    </>
  );
}

export default App;
