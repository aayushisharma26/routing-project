import React, { useState } from 'react';
import FormLabel from '@mui/material/FormLabel';
// or
import { FormLabel } from '@mui/material';
const MealForm=()=>{
    const[form,setForm]=useState({Address:" ",online:" "});
    const storedetail=()=>{

    }

    return(
        <>
            <div className="mealform">
               <Form></Form>

            </div>

        </>
    )
}


export default MealForm;