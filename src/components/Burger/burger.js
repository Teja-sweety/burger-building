import React from 'react';
import BurgerIngredient from './Bingredients/bingredients';

const burger = (props) => {
    return(
        <div className="Burger">
            <BurgerIngredient type="bread-top"/>
            <BurgerIngredient type="meat"/>
            <BurgerIngredient type="cheese"/>
            <BurgerIngredient type="bread-bottom"/>
         </div>
    );
};

export default burger;