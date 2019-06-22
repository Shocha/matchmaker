import React,{Component} from 'react';
import StarRatings from 'react-star-ratings';
import Titlebar from './Components/Titlebar/Titlebar';
import Board from './Components/Board/Board';
import 'tachyons';
import './App.css';

class App extends Component {
  render(){
  return (
    <div className="App">
     <Titlebar/>
   <StarRatings
        rating={2.403}
        starDimension="10px"
        starSpacing="5px"
      />
   
     
      <Board/>
    {/*<NewGame/>
    <Rating/>
    <Timer/>
    <Counter/>*/}
    </div> 
  );
}
}
export default App;
