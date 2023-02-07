import './App.css';
import React ,{Component} from 'react';
import styled from 'styled-components';

// import Header from './components/header';
// import Hello2 from './components/Hello2';


// ' 와 ` 의 차이는 매우 다르니 조심할 것 

const Button = styled.button`
  background: ${props => (props.primary ? 'red':'black')};
  color: ${props => (props.primary ? 'black' : 'palevioletred' )};

`;

class App extends Component{
  render(){
    console.log('App: render');


    return(
      <div className='App'>
        Life cycle test
        <Button> not primary</Button>
        <Button primary> primary </Button>
      </div>
    );
  }
}






export default App;


// console.log 체험하기 (componentDidMount,componentDidUpdate 등등)
//   constructor(props){
//     super(props);
//     console.log('constructor');
//   }
//   componentDidMount(){
//     console.log('componentDidMount');


//   }

//   componentDidUpdate(){
//     console.log("componentDidUpdate");

//   }
//   componentWillUnmount(){
//     console.log('componentWillUnmount');

//   }

//   render(){
//     console.log('render');

//     return (
//       <div className='App'> 
//         Life cycle test
//         <Child/>
//       </div>
//     );
//   }
// }
// class Child extends Component {
//   constructor(props) {
//     super(props);
//     console.log('Child: constructor');
//   }
//   componentDidMount() {
//     console.log('Child: componentDidMount');
//   }
//   componentDidUpdate() {
//     console.log('Child: componentDidUpdate');
//   }
//   componentWillUnmount() {
//     console.log('Child: componentWillUnmount');
//   }
//   render() {
//     console.log('Child: render');

//     return <div className="App">Life cycle test</div>;
//   }
// }



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



