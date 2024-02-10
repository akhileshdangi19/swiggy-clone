import React, { useState } from "react";
const Todo = () => {
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  const [result, setResult] = useState(0);
  const onChange = (e) => {
    setValue(e.target.value);
  };

  const secondOnchange = (e) => {
    setValue2(e.target.value);
  };
  const performArithmetic = () => {
    const num1 = parseFloat(value);
    const num2 = parseFloat(value2);
    if (!isNaN(!num1) && !isNaN(!num2)) {
      const result = num1 + num2;
      setResult(result);
    } else {
      setResult(0);
    }
  };
  return (
    <>
      <div className="form">
        <div>
          <input type="text" alt="alt" value={value} onChange={onChange} />
        </div>
        <div>
          <input
            type="text"
            alt="alt"
            value={value2}
            onChange={secondOnchange}
          />
        </div>
        <button onClick={performArithmetic}>Perform Arithmetic</button>
      </div>
      <div>Result:{result}</div>
    </>
  );
};

export default Todo;
