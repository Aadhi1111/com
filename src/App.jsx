import React from "react";
import CompA from "./Components/CompA/CompA";
import CompB from "./Components/CompB/CompB";
import CompC from "./Components/CompC/CompC";
import CompD from "./Components/CompD/CompD";

const App = () => {
  const a = 10;
  const arr = [1, 2, 3, 4, 5];
  const obj = { name: "Aadhish", age: 23 };
  const arrObj = [
    { id: 1, name: "aswath", age: 23 },
    { id: 2, name: "uday", age: 24 },
    { id: 3, name: "gokul", age: 25 },
  ];
  return (
    <div>
      <h1>App Components</h1>
      <CompA a={a} arr = {arr}/>
      <CompB obj={obj}/>
      <CompC arr={arr}/>
      <CompD arrObj={arrObj}/>
    </div>
  );
};

export default App;
