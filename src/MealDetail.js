import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


function MealDetail() {
  const navigate = useNavigate();

  const location = useLocation();
  const { meal } = location.state || {};

  return (
    <div>
      <div className="row1">
        <div className="column1">
          <img src={meal.strCategoryThumb} alt={meal.strCategory} />
        </div>
        <div className="column2">
          <h2>Meal Detail</h2>
          <Rating/>
          <h4>price: 200</h4>
          <p>{meal.strCategory}</p>
          <p>{meal.strCategoryDescription}</p>
          
          <Button variant="contained"  onClick={()=>navigate("/formdetail")} >Order Now</Button>
          
          
        </div>
      </div>
    </div>
  );
}

export default MealDetail;













