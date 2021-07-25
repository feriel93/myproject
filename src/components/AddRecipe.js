import React, { useState , useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Col, Row, Jumbotron } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import ListRecipes from "./ListRecipes";

const AddRecipe = (props) => {

    const Add = () => {
        
        console.log((document.getElementById('RecipeLabel').value));
        props.setRecipes(recipe => [...recipe,{
            "id":5,
            "label": (document.getElementById('RecipeLabel').value),
            "time":(document.getElementById('RecipeTime').value),
            "desc":"",
            "ingredients":(document.getElementById('RecipeIngredients').value),
            "recipe":(document.getElementById('RecipePrepa').value),
            "categorie":(document.getElementById('RecipeCategorie').value),
            "rating":"",
            "image":(document.getElementById('RecipePicture').value),
            
         }]);


      };

    return(
    <div>
    <Container>
    <Row>
      <Col md={{ span: 7, offset: 3 }}>
        <Jumbotron>
          <h1> New recipe </h1>
          <Form>

            <Form.Group>
              <Form.Label>Name and Email</Form.Label>
              <Form.Row>
                <Col>
                  <Form.Control placeholder="First & last Name"/>
                </Col>
                <Col>
                  <Form.Control placeholder="Email"/>
                </Col>
              </Form.Row>
            </Form.Group>
            
            <Form.Group controlId="formGridAddress1">
              <Form.Label>Recipe</Form.Label>
              <Form.Control placeholder="Label recipe" id='RecipeLabel'/>
            </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Time</Form.Label>
                <Form.Control id="RecipeTime" />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Ingredients</Form.Label>
                <Form.Control id="RecipeIngredients" />
              </Form.Group>

              <Form.Group as={Col} >
                <Form.Label>Preparation</Form.Label>
                <Form.Control id="RecipePrepa"/>
              </Form.Group>
              
                <Row>
              <Form.Group as={Col}>
              <Form.Control
                as="select"
                custom
                id="RecipeCategorie"
                >
                <option>Categorie</option>
                <option value="entree">Entrée</option>
                <option value="plat">Plat</option>
                <option value="patisserie">Patisserie</option>
                </Form.Control>
               </Form.Group>
               </Row>

                <Form.Group as={Col} >
                 <Form.Label>Picture</Form.Label>
                 <Form.Control id="RecipePicture" />
                </Form.Group>

               <Form.Group >
                <Form.Check
                 required
                 label="Agree to terms and conditions"
                 feedback="You must agree before submitting."
                />
              </Form.Group>

              <Form.Group as={Col}> </Form.Group>

            <Button variant="primary" type="submit"  onClick={Add}>
            Submit
            </Button>
            
          </Form>
        </Jumbotron>
      </Col>
    </Row>
    </Container>
    <div className="recipes">
         
         <ListRecipes recipes={props.recipes} />
             
         </div>

  </div>
  
    );

    
}

export default AddRecipe;
