import { useState } from "react";

export default function ProgressBar() {
  const [value, setValue] = useState(0);

  return (
    <>
      <div className="App">
        <h1>Progress bar {value} %</h1>
        {/* <ProgressBar width={val} /> */}
        <div
          style={{
            border: "1px solid black ",
            height: "30px",
            width: "300px",
            backgroundColor: "white",
            borderRadius: "20px",
          }}
        >
          <div
            style={{
              width: `${value}px`,
              backgroundColor: "blue",
              height: "30px",
              borderRadius: "20px",
              border: "1px solid blue",
            }}
          ></div>
        </div>
        <form>
          <label>Input Percentage:</label>
          <input
            type="number"
            max={300}
            value={value}
            onChange={(e) => {
              e.preventDefault();
              setValue(Number(e.target.value));
            }}
          />
        </form>
      </div>
    </>
  );
}
