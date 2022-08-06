const express = require('express');
const abc = require('../introduction/intro')
const pqr=require("../logger/logger.js")
const xyz=require("../util/helper.js")
const amr=require("../validator/formatter.js")
const router = express.Router();

router.get('/test-u', function (req, res) {
    console.log('Trim :-',amr.a)
    console.log('toUpperCase :-',amr.up)
    console.log('toLowerCase :-',amr.lo)
    amr.b();
    amr.p();
    amr.q();
    res.send('Module 3  Successfully completed')
});

router.get('/test-myself', function (req, res) {
    console.log("Welcome to my application.");
    pqr.mywelcome()
    res.send('Welcome')
});

router.get('/test-i', function (req, res) {
    // console.log("hii");
   xyz.printDate()
   console.log("Plutonium,week 3,Day5 , the topic for today is Nodejs module system");
    res.send('hello')
});

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('My second ever api!')
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason