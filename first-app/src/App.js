import './App.css';
import React ,{Component} from 'react';

// import Hello2 from './components/Hello2';


class App extends Component{
  // state, 현재 컴포턴트의 데이터
  state = {
    count: 0
  };

  countUp(){
    this.setState({
      count: this.state.count +1 
    });
  }

  countDown(){
    this.setState({
      count: this.state.count -1
    })
  }
  render(){
    return(
      <div className="App">
        <div>안녕하세요</div>
        <PropTestClass count = {this.state.cont}/>
        <div>
          <span>{this.state.count}</span>
        </div>
        <div>
          <button onClick={this.countUp.bind(this)}>count up!</button>
          <button onClick={this.countDown.bind(this)}>count down!</button>

        </div>
       
      </div>
    );
  }
}


class PropTestClass extends Component{
  render(){
    return (
      <div>
        <div>
          <span>Hello i am testclass</span>
        </div>
        <div>받은 props의 데이터는 {this.props.count} 입니다.</div>
      </div>
    );
  }
}



export default App;