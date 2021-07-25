import React, { useState , useEffect } from "react";
import Search from "./Search";
import ListRecipes from "./ListRecipes";
import { Container, Col, Row, Jumbotron } from 'react-bootstrap';
import Categorie from "./Categorie";
const Home = (props) => {
   
    return  (
      <>
      <div className="App">
        <div className="container">
      
      <div>
          
      <Categorie setRecipes={props.setRecipes} data={props.data} />
         
      </div>
    
      
      <div>
     
      <Search setRecipes={props.setRecipes} data={props.data} />
            
      </div>
    
      
      <div className="recipes">
         
      <ListRecipes recipes={props.recipes} />
          
      </div>
    
      
      <br></br>
      </div>
      </div>
    </>
        
  );


}

export default Home;