// let marks = parseInt(prompt("Enter your marks in %:"))

// if(marks>=90){
//     console.log("you have A grade");

// }else if(marks>=80){
//     console.log("You have B grade");

// }else if(marks>=70){
//     console.log("You have C grade");

// }else if(marks>=60){
//     console.log("You have D grade");

// }else{
//     console.log("You are Fail!");
//  }


// let role = "Admin"
//     if(role === "Admin"){
//         console.log("You are admin")
//     }else if (role === "User"){
//         console.log("You are user")
//     }else{
//         console.log("Please login to get you admin")
//     }



// let day = "Tuesday"
// switch(day){
//     case "Monday":
//         console.log("Today is monday")
//         break;

//     case "Tuesday":
//         console.log("Today is tuesday")
//         break;

//     case "Wednesday":
//         console.log("Today is Wednesday")
//         break;

//     case "Thursday":
//         console.log("Today is thursday")
//         break;

//     case "Friday":
//         console.log("Today is friday")
//         break;

//     default:
//         console.log("Don't have this day")
    
// }



// let fruits = "Apple"
// switch(fruits){

//     case "Banana":
//         console.log("My fav is banana")
//         break;

//     case "Mango":
//         console.log("My fav is mango")
//         break;

//     case "Apple":
//         console.log("My fav is apple")
//         break;
    
//     case "Orange":
//         console.log("My fav is orange")
//         break;

//     default:
//         console.log("I Like other fruits")
// }


// let num1 =3
// let num2 =5

// let operation = "*"

// switch(operation){

//     case "+":
//         console.log(num1 + num2)
//         document.writeln(num1 + num2)
//         break;

//     case "-":
//         console.log(num1 - num2)
//         document.writeln(num1 - num2)
//         break;
    
//     case "*":
//         console.log(num1 * num2)
//         document.writeln(num1 * num2)
//         break;

//     case "%":
//         console.log(num1 % num2)
//         document.writeln(num1 % num2)
//         break;
    
//     default:
//         console.log("operation not found")
// }


// number to check palindrome

function checkpalindrome (string){
    if(typeof str !=string){
         return console.log("please enter a string")
    }
    let splitstring = str.split("").reverse.join("")
    
    if(str == splitstring){
        console.log("string is palindrome")
    }else{
        console.log("string is not palindrome")
    }

}
checkpalindrome("madam")