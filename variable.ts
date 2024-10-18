// let gretings: string ="hello gyani"

// console.log(gretings);

// export {}


//  FUCNTION IN TYPESCRIPT 

// function greet(FirtName:String) {
//     console.log("Hello "+FirtName);
    
// }

// greet("GYANVENDRA")

// export{}

// SUM FUNCTION

// function sum(num1:number, num2:number) {
//     console.log("THE SUM OF THE TWO NUMBERS ARE: "+ (num1+num2));
    
// }
// sum(20,10);

// 18+ CHECK

// function Adult(age:number):boolean{
//       if(age>=18){
//         return true;
//       }
//       else{ 
//         return false;
//     }
// }

// let x = Adult(17);
// console.log(x);


//  TAKE A FUNCTION THAT TAKES ANOTHER FUNCTION AS AN INPUT AND RUNS AFTER 1 SEC



// function main(Name:String) {
//     setTimeout(() => {
//         secound(Name);
//     }, 4000);
// }

// function secound(Name:String) {
//     console.log(Name);
// }

// main("GYANVENDRA SINGH");


// INTERFACE 

// interface User {
//     FirstName: String,
//     LastName: String,
//     Age: number,
//     Email?:String  // EMAIL FEILD IS OPTIONAL USER MAY GIVE EMAIL OR NOT
// }

// function isLegal(user:User) {
//     if(user.Age>=18){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// let x =isLegal({
//     FirstName:"Gyanvendra",
//     LastName:"Singh",
//     Age:2,
// })

// console.log(x);

// ENUMS 

//BY TYPES
// type Direction = "UP" | "DOWN" | "LEFT" | "RIGHT" ;

// function move(direction:Direction) { 
//         if(direction == "UP"){
//             console.log("MOVED UP");            
//         }
//         else if(direction == "DOWN"){
//             console.log("MOVED DOWN");
//         }
//         else if(direction == "LEFT") { 
//             console.log("MOVED LEFT");
//         }
//         else if(direction=="RIGHT"){
//             console.log("MOVED RIGHT");
            
//         }
// }

// move("UP");

// ****************************  BY ENUMS

// enum Directions {
//     Up,
//     Down,
//     Left,
//     Right
// }
// function move(direction:Directions){
//     if(direction==Directions.Up){
//         console.log("MOVED UP");
        
//     }
//     else if(direction == Directions.Down){
//         console.log("MOVES DOWN");
        
//     }
//     else if (direction == Directions.Left){
//         console.log("MOVED LEFT");
        
//     }
//     else if (direction == Directions.Right){
//         console.log("MOVED RIGHT");
        
//     }
// }

// move(Directions.Up);


//  ************************* GENERICS

function identity<T>(arg:T){
    return arg;
}
 let output1 = identity<string>("Hello Gyani"); //  the output is a string type
 console.log(output1);

 let output2 = identity("it will also work"); // the output will remain string 
 console.log(output2);

 let output3 = identity(123); // the output will be a number
 console.log(output3);
 
