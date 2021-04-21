const ages=[10,20,30];
const ages2=[40,50,60];
const ages3=[70,80,90];
const allAges=ages.concat(ages2).concat([5]).concat(ages3);
const allAges2=[ages,ages2,5,ages3];
const allAges3=[...ages ,...ages2,5,...ages3];
// console.log(allAges);
// console.log(allAges2);
console.log(allAges3);
// how to find the maximum value of an arrow through spreadout operator
const bus=10;
const cng=50;
const uber=90;
const maximum=Math.max(bus,cng,uber);
console.log(maximum);
const rent=[10,50,800];
const maximum2=Math.max(...rent);
console.log(maximum2);
