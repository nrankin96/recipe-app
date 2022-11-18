import React, { useEffect, useState } from 'react'

function Popular() {
    const [popular, SetPopular] = useState([]);

    useEffect(() => {
        getPopular()
    }, [])

const getPopular = async () => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=5`
        );
    const data = await api.json();

   console.log(data);
    SetPopular(data.recipes);
}


  return (
    <div>
        {popular.map((recipe) => {
            return(
                <div>
                    <p>{recipe.title}</p>
                </div>
            )
        })}
    </div>
    
  )
}

export default Popular;