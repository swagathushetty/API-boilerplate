const express=require('express')
const router=express.Router()

const sampleController = require("../controllers/sampleController");


router
    .route('/')
    .get(sampleController.getMessage)
    .post(sampleController.postMessage)


module.exports = router;    