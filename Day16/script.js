let colors = ["blue","green","pink","black","orange"]

// for(let i=0;i<colors.length;i++){
//     console.log(colors[i])
// }

for(let color of colors){
    console.log(color)
}

// let num = [1,2,3,4,5,6,7,8,9]

// for(let i of num){
//     console.log(i)
// }

// let fruits = ["apple","jack","banana","mango","lime","grapes"]

// for(let fruit of fruits){
//     console.log(fruit)
// }

// let users = ["user1","user2","user3","user4"]

// for(let user of users){
//     console.log(user)
// }



// let person = {
//     name:"vaishnavi",
//     age:21,
//     city:"pune"
// }

// console.log(person["name"])
// console.log(person["age"])


// let person = {
//     name:"vaishnavi",
//     age:21,
//     city:"pune",
//     mobile_no:9123457301
// }

// for(let key in person){
//     console.log(person[key])
// }


// let info = {
//     temp:34,
//     warm:42,
//     humidity:20
// }

// for(let key in info){
//     console.log(info[key])
// }


//function

//  function sayhello(){
//     return "helloeveryone"
//  }

// let result = sayhello()
// console.log(result)


// function sayhello(){
//     console.log("goodmorning")

// }

// let result = sayhello()
// console.log(result)

//this function not writes goodmorning on console bcz it not returns anything.

// function sayhello(){
//     console.log("goodmorning")
//     return("hello")
// }

// let result = sayhello()
// console.log(result)


// function sayhello(){
//     console.log("goodmorning")
//     return("hello")
//     return("hii")
// }

// let result = sayhello()
// console.log(result)

//in this only goodmorning and hello will write bcz the function will go out from the return part i.e it will execute from hello.


// function greetmsg(){
//     console.log("hello")
// }
// greetmsg()


function saygoodmorning(){
    console.log("Good_morning")
}
saygoodmorning()