import React from "react";

const CompC = ({ arr }) => {
  const handleSubmit = () => {
    alert("I am Fine ..Thanks for asking");
  };
  return (
    <>
      <h1>how are you?</h1>
      <button onClick={handleSubmit}>Click to know</button>
      {arr.map((element, index) => {
        return (
          <>
            <div key={index}>
              <h1>{element}</h1>
            </div>
          </>
        );
      })}
    </>
  );
};

export default CompC;
