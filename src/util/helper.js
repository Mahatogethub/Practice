const num=new Date()

let d= function(){
    console.log("prints the current date",num)
}

// let m=function () {
//     console.log("prints the current month",month);
// }


// let b=function(){
//     console.log("Plutonium,Week 3,Day 5,the topic for today is Nodejs module system");
// } 

module.exports.a=num
module.exports.printDate=d;
// module.exports.printMonth=m;
// module.exports.getBatchInfo=b;
