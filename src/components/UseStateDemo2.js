import React,{useState} from "react";
// ทำฟร์อมและclear ฟร์อม

export const UseStateDemo2 = () => {
    const intialState = {username:"", password:""}
    
    const [account, setAccount] = useState(intialState);
  return (
    <div>
        <p>#DeBug{JSON.stringify(account)}</p>
      <form>
        <input type="text" placeholder="Username" value={account.username} onChange={e=>{
            setAccount({...account,username: e.target.value})
        }}></input>
        <br></br>
        <input type="password" placeholder="Password" value={account.password} onChange={e=>{
            setAccount({...account ,password: e.target.value})
        }}></input>
        <br></br>

        <button
          onClick={(e) => {
            e.preventDefault();
            alert(JSON.stringify(account));
          }}
        >Submit</button>

        <button
          onClick={(e) => {
            e.preventDefault();
            setAccount(intialState)
          }}
        >Clear</button>
      </form>
    </div>
  );
};
