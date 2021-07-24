import React, { useState , useEffect } from "react";

const Categorie = (props) => {
   
    const filtre = (e) =>  {console.log((e.target.value));
    
    
        props.setRecipes(props.data.filter(recipe =>  recipe.categorie == (e.target.value) || recipe.categorie =='ALL' ))}


    return (
<div>
        <div>
            <select onChange={e => filtre(e)} >
                <option value="all">All</option>
                <option value="patisserie">Patisserie</option>
                <option value="plat">Plat</option>
            </select>
        </div>


</div>

    );
}

export default Categorie;
