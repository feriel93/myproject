import React from "react";
import { Col, Row } from "react-bootstrap";
import Recipe from './Recipe'

const ListRecipes = (props) => {

    return (
      <>
         {props.recipes.map((recipe,index) =>
            <div>
            <Recipe 
            recipes={recipe}
              />
            </div>  
          )}
      
      
    
       
      </>
);
}

export default ListRecipes;