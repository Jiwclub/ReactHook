import React, { useState, useEffect } from "react";
import axios from "axios";

export const UseEffectDemo4 = () => {
  const [dataArray, setdataArray] = useState(null);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((result) => {
        const {data} = result
      console.log(data);
     setdataArray(data)
    });
  }, []);

  useEffect(() => {}, []);
  return <div>
      {/* <p>#Debug {JSON.stringify(dataArray)}</p> */}
      <ul>
{dataArray && dataArray.map(item=><li key={item.id}>{item.id} {item.title}</li>)} 
      </ul>
  </div>;
};
