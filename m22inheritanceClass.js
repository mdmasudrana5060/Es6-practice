class fatherName{
    constructor(){
        this.fname="HARUN SAHEB";

    }
}
// const fname=new fatherName();
// console.log(fname);
class child extends fatherName{
   

    constructor(name,age){
        super();

        this.name=name;
        this.age=age;

    }
}
const childInfo1=new child('abul',30);
const childInfo2=new child('mokbul',20);
console.log(childInfo1,childInfo2);