// function sum(){
//     console.log(2 + 3)
// }
// sum()


function sayHello(khuchbhi){
    console.log(khuchbhi)
}
sayHello("riya")


// function greet(){
//     console.log("hello form greet")
// }
// greet()


// function greet(username){                    //parameter
//     console.log("hello" + username)
// }
// greet(" EASYCODE")                           //argument


function sum(a,b,c){
    console.log(a+b+c)
}
sum(2,4)

sum(3,5,8)

sum(-3,1,3)

sum(8,-2)

sum(4,3,1)

// NaN stand for not a number bcz we pass 3 arguments and we give some case 2 parameters so to solve this problem we set default value or default parameter.


function sayGoodEvening(username = 'user'){
    console.log(`GOOD EVENING ${username}`)
}

sayGoodEvening()
sayGoodEvening("vaishnavi")