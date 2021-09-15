console.log('hi')
const express= require('express')
const app=express()

const PORT=3000

app.use((req,res,next)=>{
    var date=new Date();
    if(date.getDay()==0||date.getDay()==6 ||date.getHours()<9|| date.getHours()>17)
    {
        res.status(403).send("we are only available in working time (Monday to Friday)")
    }
    else{
        return next();
    }
});
app.use(express.static('public'))
app.listen(PORT,(err)=>{
    err ? console.log(err) : console.log('server is running')
})