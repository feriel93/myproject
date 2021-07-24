import React from "react";
import Recipe from './Recipe'

const ListRecipes = (props) => {

    return (
    <div className="row">
         {props.recipes.map((recipe,index) =>
            <div className="col-sm-6">
            <Recipe 
            recipes={recipe}
              />
            </div>  
          )}
       </div> 

);
}

export default ListRecipes;
