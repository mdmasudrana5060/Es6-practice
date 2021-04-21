function doubleIt(num){
    return num*2;
}
const result=doubleIt(10);
console.log(result);
// how to declare a function in variable
const tripleIt=function myFun(num){
    return num*3;
}
const result2=tripleIt(10);
console.log(result2);
// how to declare an arrow function with one parameter
const fourpleIt=num=>num*4;
const result3=fourpleIt(10);
console.log(result3);
// how to declare an arrow function with multiple parameter
const adding=(x,y=0)=>x+y;
const result4=adding(19);
console.log(result4);
// how to declare an arrow function in a large scale
const math=(a,b)=>{
    const add=a+b;
    const diff=a-b;
    const sum=add*diff;
    return sum;

}
const result5=math(12,10);
console.log(result5);
