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
function main(Name) {
    setTimeout(function () {
        secound(Name);
    }, 4000);
}
function secound(Name) {
    console.log(Name);
}
main("GYANVENDRA SINGH");
