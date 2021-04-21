const person = {name:"masud-rana",gfName:"emma watson",phone:"01731030119",bg:"b+"};
const{gfName}=person;
const name=person.name;
const{phone,bg}=person;
console.log(phone,bg);
console.log(name);
console.log(gfName);
// nested object
const complexObject={
    name:"atul",
    info:{
        address:"nandipara",
        road:"bhuter goli",
    }
};
const {road}=complexObject.info;
console.log(road);//to find the value u have to exact location where the value was
// how to do the same thing in an array
const friends=["abul","jasim","arif"];
const [buraF,...others]=friends;
console.log(buraF,others);
