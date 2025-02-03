import React, { Component } from 'react'
import "../../../style.css"
import menu from '../../assets/data'
import FoodItem from './FoodItem';
import foodStyle from '../FoodItems/foodItems.module.css'

class AllFoodItems extends Component {
  render() {
    return (
  
        <div className = {foodStyle['foods-container']}>
          {menu.map(function (obj, index){
              /* console.log (obj); */
            {
          
          }
          return <FoodItem key= {index} foodList= {obj}/>
        })} 

      </div>
    );
  }

  } 
  
export default AllFoodItems;
     
      

