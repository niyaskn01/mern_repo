const express=require('express')
const dotenv=require('dotenv').config()
const app=express()

app.get('/',(req,res)=>{
  res.send('hey buddy')
})

const port=process.env.PORT || 9000

app.listen(port,()=>{
  console.log('server is running at port ',port);
})