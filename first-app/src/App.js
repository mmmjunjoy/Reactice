import './App.css';
import React ,{Component} from 'react';

// import Header from './components/header';
// import Hello2 from './components/Hello2';


class App extends Component{
  constructor(props){
    super(props);
    console.log('constructor');
  }
  componentDidMount(){
    console.log('componentDidMount');


  }

  componentDidUpdate(){
    console.log("componentDidUpdate");

  }
  componentWillUnmount(){
    console.log('componentWillUnmount');

  }

  render(){
    console.log('render');

    return (
      <div className='App'> 
        Life cycle test
        <Child/>
      </div>
    );
  }
}
class Child extends Component {
  constructor(props) {
    super(props);
    console.log('Child: constructor');
  }
  componentDidMount() {
    console.log('Child: componentDidMount');
  }
  componentDidUpdate() {
    console.log('Child: componentDidUpdate');
  }
  componentWillUnmount() {
    console.log('Child: componentWillUnmount');
  }
  render() {
    console.log('Child: render');

    return <div className="App">Life cycle test</div>;
  }
}


export default App;

  // state, 현재 컴포턴트의 데이터
//   state = {
//     headerMessage: "영화 소개 프로젝트"
//   };

  
//   render(){
//     return(
//       <div className="App">

//         <Header headerMessage={this.state.headerMessage}/>
//         <div>Main content</div>
       
//       </div>
//     );
//   }
// }


// class PropTestClass extends Component{
//   render(){
//     return (
//       <div>
//         <div>
//           <span>Hello i am testclass</span>
//         </div>
//         <div>받은 props의 데이터는 {this.props.count} 입니다.</div>
//       </div>
//     );
//   }
// }



