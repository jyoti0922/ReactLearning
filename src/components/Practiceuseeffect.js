import React, { useEffect, useState } from "react";

const Practiceuseeffect = () => {
  const [num, setNum] = useState(0);
  useEffect(() => {
    console.log("i am clicked");
  });
  return (
    <>
      <div className="container">
        <button
          onClick={() => {
            setNum(num + 1);
          }}
        >
          Click Me {num}
        </button>
      </div>
    </>
  );
};

export default Practiceuseeffect;
