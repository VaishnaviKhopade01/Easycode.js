// let a = "hello"
// console.log(a)


// let a = 5
// while(a<=15){
//     console.log("hello world")
//     a++
// }

// let a = 0
// let name = "vaishnavi"

// while(a<=10){
//     console.log('hello world $(name)')
//     a++
// }


// for(i=0;i<4;i++){
//     console.log(i)
// }


// let students = ["divya","shravani","meera","kajal","kiran"]
// console.log(students)
// console.log(students[1])

// for(let i=0;i<students;i++){
//     console.log(students[i])
// }


// let colors = ["red","green","blue","yellow","pink","blue","orange"];

// for(let i=0 ;i < colors.length ;i++){
//     console.log("current colors is $ {colors[i]}");
// }

// for(i=colors.length - 1; i>=0 ;i--){
//     console.log('current colors is ${colors[i]}')
// }


let num = [1,2,-1,5,-3,-8,5,-1,7,-1,-5]

let minus_num = []
for(let i=0;i<num.length;i++){
    if(num[i]<0){
        minus_num.push(num[i])
    }
}
console.log(minus_num)