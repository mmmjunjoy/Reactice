import './App.css';
import React ,{Component} from 'react';
// import Hello from './components/Hello'


class App extends Component{
  render(){
    return(
      <div className="App">
        <div>
          <span>hello junjoy</span>
        </div>
        <SecondComponent/>

      </div>
    );
  }
}


class SecondComponent extends Component{
  render(){
    return(
      <div>
        <span> i am second component </span>
      </div>
    );
  }
}
// function App() {
//   return (
//     <div className="App">
//       <Hello/>
//     </div>
//   );
// }

export default App;
