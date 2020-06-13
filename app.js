const express=require('express')
const app=express()

const sampleRouter = require(`${__dirname}/routes/sampleRoute`);


app.use(express.json());
app.use(express.static(`${__dirname}/public`));



app.use("/api/v1/samepleName", sampleRouter);


module.exports = app;

