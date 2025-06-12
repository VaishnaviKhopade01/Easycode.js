

function greetUser(name){
    console.log(name)
}

greetUser("vaishnavi")


// function greetUser(name,num){
//     console.log(name,num)
// }

// greetUser("vaishnavi",32)


// function add(a,b){
//     console.log(a+b)
// }

// add(3,5)



    //Anonymous function:


// let greetuser = function(name){
//     console.log(name)
// }

// console.log(greetuser("sidhi"))


    //Arrow function:


// let sayHi = ()=>{
//     console.log("hello everyone")
// }

// sayHi()


// let RandomMsg = (name)=>{
//     console.log("hii" + name)
// }

// RandomMsg(" janvi")


// let sum = (a,b)=>{
//     return(a+b)
// }

// let result = sum(5,2)
// console.log(result)

// console.log(sum(5,2))


// let sum = (a,b)=> a+b

// console.log(sum(2,3))


// let sayThankYou = (name)=>{
//     console.log(`Thank You ${name}`)
// }

// sayThankYou("Apurva")


    //IIFE :

// (function(){
//     console.log("welcome")
// }) ()



    //Callback Function :

// let abc = (xyz)=>{
//     console.log(xyz)
// }
// abc("riya")


// let abc = (xyz)=>{
//     xyz()
// }

// abc(()=>{
//     console.log("hii")
// })



// let greet = (cb)=>{
//     console.log("hello")
//     cb()
// }

// greet(()=>{
//     console.log("greet is complete")
// })


    //Higher order function:

let greet = (cb)=>{
    console.log("hii")
    cb()
}

greet(()=>{
    console.log("call back execute")
})

// here greet is higher order funtion bcz it another anonymous function within it.







