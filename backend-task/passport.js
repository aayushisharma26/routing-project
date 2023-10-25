// passport.js

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

// const Register=require('../Model/model.js')
const JWT_SECRET = 'aayushisharma'; // Replace with your secret key

// Local Strategy for username and password login
passport.use(
  new LocalStrategy(
    {
      usernameField: 'email', // Change this to match your form field
      passwordField: 'password', // Change this to match your form field
    },
    async (username, password, done) => {
      try {
        const user = await Register.findOne({ email: username });

        if (!user) {
          return done(null, false, { message: 'User not found' });
        }

        if (user.password !== password) {
          return done(null, false, { message: 'Incorrect password' });
        }

        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )
);

// JWT Strategy for token authentication
passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: JWT_SECRET,
    },
    async (jwt_payload, done) => {
      try {
        const user = await Register.findById(jwt_payload.id);

        if (!user) {
          return done(null, false, { message: 'User not found' });
        }

        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )
);
