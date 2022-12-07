const {auth} = require('./lib');

a = new auth("hello",()=>{console.log("hello class");});
a.signUp("user","pwd").then((d)=>{
    console.log(d);
})
