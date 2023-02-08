import React , {Component} from 'react';
import './App.css';
import data from "./datadata"


import styled from 'styled-components';
import Header from './header/header';
import MovieList from './movie-list/movie-list';

import  {Route,Routes}  from 'react-router-dom';
import MovieSpecific from './movie-specific/movie-specific';


const MainDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-top: 3rem;
  padding-bottom: 3rem;
  padding-right: 2rem;
  padding-left: 2rem;



`;

class App extends Component{
  state = {
    movieData: data.data,
    headerMessage:'Movie App',
    currentMovieData:null
  }

  getSpecificMovieInfo = () =>{
    console.log(this.props)
    const currentRoute = this.props.location.pathname.split('/');

    const ifExistMovieName = this.state.movieNames.filter(movie => movie.name === currentRoute[1])

    if(ifExistMovieName.length === 1){

      this.setState({
        currentMovieData: this.state.movieData[ifExistMovieName[0].idx]
      })
    }else{

      this.setState({
        currentMovieData:null
      })
    }
  }

  componentDidUpdate(prevProps,nextState){
    if(prevProps.location.pathname !== this.props.location.pathname){
      this.getSpecificMovieInfo()
    }

  }

  componentDidMount(){
    

    this.getSpecificMovieInfo()

  }
  render(){
    return<MainDiv>
      <Header headerMessage={this.state.headerMessage} />
      <Routes>
        <Route path="/" exact={true} render={()=> <MovieList history = {this.props.history} movieData={this.state.movieData}/>}/>
        <Route path="/:movieName" exact ={true} render={()=> <MovieSpecific movieData = {this.state.currentMovieData}/>}/>
      </Routes>
    </MainDiv>
      
  
  }
}

export default App;