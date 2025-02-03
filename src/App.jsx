
import { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import AllFoodItems from './components/FoodItems/AllFoodItems'

class App extends Component {
  render() {
    return (
      <div className= "all-container">
        <Header/>
        <AllFoodItems/>
        
      </div>
    );
  }
}

export default App;
