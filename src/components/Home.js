import React, { useState , useEffect } from "react";
import Search from "./Search";
import ListRecipes from "./ListRecipes";
import { Container, Col, Row, Jumbotron } from 'react-bootstrap';
import Categorie from "./Categorie";
const Home = (props) => {
   
    return  (
      <div className="App">
      <div className='row'>
      <div>
          <Col>
      <Categorie setRecipes={props.setRecipes} data={props.data} />
            </Col>
      </div>

      <div>
          <Col>
      <Search setRecipes={props.setRecipes} data={props.data} />
            </Col>
      </div>
      
      <div className="recipes">
          <Col>
      <ListRecipes recipes={props.recipes} />
      </Col>
      </div>
     
      </div>
      <br></br>
      
    </div>
        
  );


}

export default Home;
