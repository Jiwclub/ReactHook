import React, { useState, useEffect } from "react";

export const UseEffectDemo3 = () => {
  const [count, setcount] = useState(0);
  const doSomeThing = () => {
    setcount(previus => previus + 1);
    console.log("do some thing")
  };

  useEffect(() => {
    const intervalId = setInterval(doSomeThing, 1000);

    return () => {
        console.log("Detroyed")
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
};
