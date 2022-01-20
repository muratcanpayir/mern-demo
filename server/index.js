const express=require('express');
const mongoose=require('mongoose');
const app=express();

mongoose.connect('mongodb+srv://muratcanpayir:Password123@cluster0.h1zs0.mongodb.net/merndemo?retryWrites=true&w=majority')

app.listen(3001,()=>{
    console.log("Server Runs Perfectly!");
});