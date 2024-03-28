// eslint-disable
import { useState } from "react";
import "./App.css";

function App() {
  const [tabNum, setTabNum] = useState(0);
  const [content, setContent] = useState([
    "1. Lorem ipsum dolor sit amet.",
    "2. Lorem ipsum dolor sit amet.",
    "3. Lorem ipsum dolor sit amet.",
  ]);

  const [modalView, setModalView] = useState(false);
  const modalViewClick = () => {
    setModalView(!modalView);
  };
  return (
    <>
      <ul className="tabmenu">
        <li
          className={`${tabNum == 0 ? "active" : null}`}
          onClick={() => {
            setTabNum(0);
          }}
        >
          tab1
        </li>
        <li
          className={`${tabNum == 1 ? "active" : null}`}
          onClick={() => {
            setTabNum(1);
          }}
        >
          tab2
        </li>
        <li
          className={`${tabNum == 2 ? "active" : null}`}
          onClick={() => {
            setTabNum(2);
          }}
        >
          tab3
        </li>
      </ul>
      <div>{content[tabNum]}</div>

      <button onClick={modalViewClick}>클릭</button>

      {modalView == true ? (
        <div className="modals">
          <h3>modal_test😎</h3>
        </div>
      ) : null}

      {/* <div className="modals">
        <h3>test modal</h3>
      </div> */}
    </>
  );
}

export default App;
