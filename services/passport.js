const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const Keys = require('../config/keys');
require('../services/passport')

const User = mongoose.model('users');

passport.serializeUser((user,done)=>{
    done(null,user.id)

});

passport.deserializeUser((id,done)=>{
    User.findById(id).then(user =>{
        done(null , user)
    })

});

passport.use(new GoogleStrategy({
    clientID: Keys.googleClientID,
    clientSecret: Keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshtoken, profile, done) => {

    console.log("accessToken ", accessToken);
    console.log("profile" ,profile)
    console.log("refreshtoken ", refreshtoken);
    User.findOne({
        googleId: profile.id
    }).then((existingUser) => {
        if (existingUser) {
            //we already have a record 
            done(null,existingUser)
        }else {
            //we don't have user
            new User({
                googleId: profile.id
            }).save().
            then(user => done(null,user))
        
        }

    })

}));


//localhost:5000/auth/google