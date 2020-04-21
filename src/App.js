import React from 'react'
// import {UseStateDemo1} from './components/UseStateDemo1'
// import {UseStateDemo2} from './components/UseStateDemo2'
// import {UseStateDemo3} from './components/UseStateDemo3'
// import {UseEffectDemo1} from './components/UseEffectDemo1'
// import {UseEffectDemo2} from './components/UseEffectDemo2'
import {UseEffectDemo3} from './components/UseEffectDemo3'

export const App = () => {
  
  const [isShow, setisShow] = React.useState(true)
  return (
    <div style={{textAlign:"center"}}>
      {/* <UseStateDemo1></UseStateDemo1> */}
     {/* <UseStateDemo2 /> */}
     {/* <UseStateDemo3 /> */}
     {/* <UseEffectDemo1 /> */}
    {/* {isShow && <UseEffectDemo2 />}
    <button onClick={()=>setisShow(false)}>Hide</button> */}
    <UseEffectDemo3 />
    </div>
  )
}
