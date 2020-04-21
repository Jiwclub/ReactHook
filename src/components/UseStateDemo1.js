import React,{useState} from 'react'

export const UseStateDemo1 = () => {
    //สร้าง useState
  const [count, setCount] = useState(0)
  const [title, setTitle] = useState("");
    return (
        <div>
            <button onClick={() => {setCount(count+1);
      setTitle("test")
      }}>คลิก</button>
      useState : {count}
      <br></br>
      title: {title}
        </div>
    )
}
