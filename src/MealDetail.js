//final
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// function MealDetail() {
//   const [meal, setMeal] = useState(null);
//   const { id } = useParams();

//   useEffect(() => {
//     // Fetch detailed information about the meal using the meal ID
//     fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
//       .then((res) => res.json())
//       .then((res) => {
//         setMeal(res.meals[0]);
//       })
//       .catch((error) => {
//         console.error("Fetch error:", error);
//       });
//   }, [id]);

//   if (!meal) {
//     return <div>Loading...</div>;
//   }

//   return (
//     // <div className="row1">
//     //   <div className="column1">
//     //     <h2>{meal.strArea}</h2>
//     //   </div>
//     //   <div className="column2">
//     //     <img src={meal.strMealThumb} alt={meal.strMeal}/>

//     //   </div>


//     // </div>
//     <div>
//       <h2>{meal.strArea}</h2>

//       <h2>{meal.strMeal}</h2>
//       <img src={meal.strMealThumb} alt={meal.strMeal} />
//       {/* Display other information about the meal */}
//     </div>
//   );
// }

// export default MealDetail;




import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MealDetail() {
  const [meal, setMeal] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    // Fetch detailed information about the meal using the meal ID
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((res) => {
        setMeal(res.meals[0]);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, [id]);

  if (!meal) {
    return <div>Loading...</div>;
  }

  return (
    <div className="row1">
      <div className="column1">
      <img src={meal.strMealThumb} alt={meal.strMeal}/>
      </div>
      <div className="column2">
        <h2>{meal.strArea}</h2>
        <h2>{meal.strCategory}</h2>
        <h2>{meal.strInstructions}</h2>
        

      </div>


    </div>
    // <div>
    //   <h2>{meal.strArea}</h2>

    //   <h2>{meal.strMeal}</h2>
    //   <img src={meal.strMealThumb} alt={meal.strMeal} />
    // </div>
  );
}

export default MealDetail;






























