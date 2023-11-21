import React from "react";
import { useLocation } from "react-router-dom";

function MealDetail() {
  const location = useLocation();
  const { meal } = location.state || {};

  return (
    <div>
      
        <div className="row1">
          <div className="column1">
          <img src={meal.strCategoryThumb} alt={meal.strCategory} />

            <h2>Meal Detail</h2>
            <p>{meal.strCategory}</p>
            {/* Add more details about the meal */}
          </div>
        </div>
      
    </div>
  );
}
export default MealDetail;
