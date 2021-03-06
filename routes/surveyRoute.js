
const mongoose = require('mongoose');

const requireLogin = require ('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer =  require ('../services/mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate')

const Survey = mongoose.model('surveys');

module.exports = app =>{
    app.post('/api/surveys' ,requireLogin, requireCredits , async (req,res) => {

       const   {title, subject , body , recipients} = req.body
       const survey = new survey({
           title,
           subject,
           body,
           recipients:recipients.split(',').map(email => {
               email
           }),
           _user: req.user.id,
           dateSent: Date.now()

       })

       //great place to send an email !
  

      const mailer = new Mailer(survey , surveyTemplate(survey));
      try {
        await  mailer.send();
        await survey.save();
        req.user.credits -= 1;
        const user = await req.user.save();
  
        res.send(user);
      }catch (err){
          res.status(422).send(err)
      }
     

    })

}


// const survey = {
//     title: 'hi' , subject : 'test' , recipients :'devemaily@gmail.com' , body :'hello'
// }
//survey

//axios.post('/api/surveys', survey)