import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
import React,{useEffect, useState} from "react";
function Counter(props){
	const [count,setCount] = useState(0);
  useEffect(()=> {
    document.title=`총 ${count}번 클릭했습니다`
  },[])  // 빈배열을 넣음으로써 컴포넌트가 마운트 될떄만 실행한다
    return(
    	<div>
        	<p> 총 {count}번 클릭 </p>
            <button onClick = {() => setCount(count+1)}>클릭</button>
        </div>
    )
}
export default Counter;
