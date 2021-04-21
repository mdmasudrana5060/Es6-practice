function add(num1,num2){
    return num1+num2;
}
const total=add(10,15);
console.log(total);
// if the value is not declared then what it happen

// function add(num1,num2){
//     return num1+num2;
// }
// const total=add(10);
// console.log(total);
// // result is NaN
// // how can we avoid this problem there are various solution there some of them are given below
// function add(num1,num2){
//     if(num2==undefined)
//     num2=0;
//     return num1+num2;
// }
// const total=add(10);
// console.log(total)
// // result is 10
// // another way
// function add(num1,num2){
//    num2=num2||0;
//     return num1+num2;
// }
// const total=add(15);
// console.log(total)
// // result is 15
// // another way
// function add(num1,num2=1){
   
//      return num1+num2;
//  }
//  const total=add(15);
//  console.log(total)
// //  result is 16

