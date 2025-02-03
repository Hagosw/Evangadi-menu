import { Component } from 'react';
import foodStyle from "../FoodItems/foodItems.module.css"

class FoodItem extends Component {
    render() {
        const {img, title, price, desc} = this.props.foodList;
        return (
            <div className= {foodStyle['single-food']}>
                <div className= {foodStyle.img}> 
                    < img src= {img}/>
                </div>
                <div className= {foodStyle['title-price']}>
                   <h3>{title}</h3> 
                   <p> ${price}</p>
                </div>
                <div className= {'food-desc'}> {desc.substring(0, 250)} ... </div>
            </div>
        );
    }
}

export default FoodItem;
