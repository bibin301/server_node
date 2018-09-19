const express = require ('express');


const app = express();


app.get('/auth/google',passport.authenticate('google',{
    scope:['profile','email']
})
);

app.get('auth/google/callback',passport.authenticate('google'));
//client id 711054291343-mnk8hhbdt0p3ud5tp46l5v6qtpg0se72.apps.googleusercontent.com
//client secret 4cazO9RtPsZvNFSpzNQXQPr1
// app.get('/', (req,res)=>{
//     res.send({hi:'bibin'});
// });

const PORT = process.env.PORT || 5000


app.listen(PORT);