import React from 'react'
import {useState} from 'react'

export default function Hello() {
const [count,setCount] = useState(0)
const onCount = ()=>{
   setCount(count+1)
}
// function onCount2(){
//     console.log("onCount2")
// }
  return (
    <>
        <div>{count}</div>
        <button onClick={onCount}>버튼</button>
    </>
  )
}
