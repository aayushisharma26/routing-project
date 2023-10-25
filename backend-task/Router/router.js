const { signup } = require("../Controller/controller");
const express=require('express')

var router=express.Router();

router.post('/registerpost',signup)

router.post('/loginpost',login)

router.get('/getdata',get_data)


// const passport = require('passport');

// // Example protected route
// router.get('/protected-route', passport.authenticate('jwt', { session: false }), (req, res) => {
//   // This route is protected and only accessible with a valid JWT token
//   res.json({ message: 'Protected route' });
// });

module.exports=router