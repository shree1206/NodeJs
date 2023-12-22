//1. forEach
const arr1 = [1, 2, 3, 4, 5, 6];
arr1.forEach((item) => {
    console.log(item);
});

//2. includes
const arr2 = [1, 2, 3, 4, 5, 6, 7];
let res2 = arr2.includes(43);
console.log(res2);

//3. filter
const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let res3 = arr3.filter(item => {
    return item > 4;
});
console.log(res3);

//4. map
const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let res4 = arr4.map(item => {
    return item * 4;
});
console.log(res4);

//5. some
const arr5 = [1, 2, 3, 4, 5, 6, 7, 8];
let res5 = arr5.some(item => {
    return item > 6
});
console.log(res5);

//6. every
const arr6 = [1, 2, 3, 4, 5, 6, 7, 8];
let res6 = arr6.every(item => {
    return item > 6
});
console.log(res6);

//7. sort
const arr7 = [1, 2, 3, 4, 5, 6, 7, 8];
const arr7a = [1, 2, 3, 4, 5, 6, 7, 8];
let res7 = arr7.sort((a, b) => a > b ? -1 : 1);
let res7a = arr7a.sort((a, b) => a > b ? 1 : -1);
console.log(res7);
console.log(res7a);

//8. from
let str = "Vaibhav";
let res8 = Array.from(str);
console.log(res8);

//9. of
let res9 = Array.of(1, 'e', 6, 8, 90, 'r', 'tt', 6);
console.log(res9);

//10. reduce
const arr10 = [1, 2, 3, 4, 5];
var sum = arr10.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
}, 0);
console.log(sum);


//11. indexOf()
//returns the position of the first occurrence of a value in a string
let text = "Hello world, welcome to the universe.";
let res11 = text.indexOf("world");
console.log(res11);

//12. charAt() 
//returns the character at a specified index (position) in a string.
let text2 = "HELLO WORLD";
let anyPos = text2.charAt(1);
let lastPos = text2.charAt(text2.length-1);
console.log(anyPos);
console.log(lastPos);