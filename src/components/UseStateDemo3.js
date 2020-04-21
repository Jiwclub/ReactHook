import React, { useState } from "react";

export const UseStateDemo3 = () => {
  const intialState = { username: "", password: "" };
  const [account, setAccount] = useState(intialState);
  const [accountList, setAccountList] = useState([]);
  return (
    <div>
      {/* <p>#DeBug{JSON.stringify(account)}</p> */}
      <p>#DeBug{JSON.stringify(accountList)}</p>
      <form>
        <input
          type="text"
          placeholder="Username"
          value={account.username}
          onChange={(e) => {
            setAccount({ ...account, username: e.target.value });
          }}
        ></input>
        <br></br>
        <input
          type="password"
          placeholder="Password"
          value={account.password}
          onChange={(e) => {
            //   ...account เป็นการ clone array account
            setAccount({ ...account, password: e.target.value });
          }}
        ></input>
        <br></br>

        <button
          onClick={(e) => {
            e.preventDefault();
            setAccountList([...accountList, {...account,index: accountList.length}])
          }}
        >
          Submit
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            setAccount(intialState);
          }}
        >
          Clear
        </button>
      </form>
      <ul>
        {accountList.map(item=> <li key={item.index}>Username: {item.username}, password: {item.password}</li>)}
         
          
      </ul>
    </div>
  );
};
