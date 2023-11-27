// // import React, { useState } from 'react';
// // import FormLabel from '@mui/material/FormLabel';
// // or
// // import { FormLabel } from '@mui/material';
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// const MealForm = () => {
//     // const[form,setForm]=useState({Address:" ",online:" "});
//     // const storedetail=()=>{

//     // }

//     return (
//         <>
//             <div className="mealform">
//                 <Box
//                     component="form"
//                     sx={{
//                         '& .MuiTextField-root': { m: 1, width: '25ch' },
//                     }}
//                     noValidate
//                     autoComplete="off"
//                 >
//                     <div>
//                         <TextField
//                             label="Address"
//                             id="outlined-size-small"
//                             defaultValue="Small"
//                             size="small"
//                         />
//                         <TextField label="Size" id="outlined-size-normal" defaultValue="Normal" />
//                     </div>
//                     <div>
//                         <TextField
//                             label="Pythem"
//                             id="filled-size-small"
//                             defaultValue="Small"
//                             variant="filled"
//                             size="small"
//                         />
//                         <TextField
//                             label="Googlepay"
//                             id="filled-size-normal"
//                             defaultValue="Normal"
//                             variant="filled"
//                         />
//                     </div>
//                     <div>

//                     </div>
//                 </Box>

//             </div>

//         </>
//     )
// }


// export default MealForm;











// import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import React from 'react';
import { Grid, Paper, TextField, Button } from '@mui/material';

const MealForm = () => {
    const paperStyle = { padding: '30px 20px', width: 300, margin: '20px auto' };



    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <h1>Fill User Details</h1>
                <form >
                    <TextField
                        fullWidth
                        label="Name"
                        variant="outlined"
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        label="Address"
                        variant="outlined"
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        label="Phone Number"
                        variant="outlined"
                        margin="normal"
                    />


                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">Payment</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="Googlepay" control={<Radio />} label="Googlepay" />
                            <FormControlLabel value="Patem" control={<Radio />} label="Patum" />
                            
                        </RadioGroup>
                    </FormControl>
                    <Button type="submit" variant="contained" color="primary">
                        Submit
                    </Button>

                </form>
            </Paper>
        </Grid>
    );
};

export default MealForm;

