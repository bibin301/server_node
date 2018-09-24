// module.exports ={
//         googleClientID:'711054291343-mnk8hhbdt0p3ud5tp46l5v6qtpg0se72.apps.googleusercontent.com',
//         googleClientSecret:'4cazO9RtPsZvNFSpzNQXQPr1',
//         mongoURI:'mongodb://bibin:password@ds039010.mlab.com:39010/bibin',
//         cookieKey:'sdhvshdvshdvbshdshdvbshdsydjshjsnvbcujs'
// }


if(process.env.NODE_ENV === 'production'){
//we are in production  - return the prod set of keys

module.exports = require('./prod');
}else {
//we are in development - return the dev keys !

module.exports = require('./dev');
}