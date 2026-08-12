const obj = {
    name: 'Sandesh',
    age: 21,
    // greet: function() {
    //     console.log("Hello world")
    // },
    work: {
        company: 'Evertz',
        role: 'SDE 2',
        ID: 'IND266'
    }
}
console.log('Obj:',obj);

let shallowObj = {...obj, name : 'Sandesh N'}; // Just changes the shallowCopy as top level primitive types are copied and not pointed to
shallowObj.work.company = 'Evertz India'; // Changes both source object and shallow copy as reference types only copy the reference pointer: MUTATION
console.log('shallowObj:',shallowObj);
console.log('after shallowObj:',obj);


let deepObj1 = structuredClone(obj); // Creates brand new object and all its properties NOTE: Doesn't work on methods, throws an error
deepObj1.work.company = 'Evertz'; // Changes only deep copy as reference types are also created newly
console.log('deepObj1:', deepObj1);
console.log('after deepObj1:', obj);

// let deepObj2 = cloneDeep(obj); // Creates brand new object and all its properties NOTE: Needs lodash library and supports methods as well
let deepObj3 = JSON.parse(JSON.stringify(obj)); // Creates brand new object and all its properties NOTE: Doesn't work on methods, throws an error
console.log('deepObj3:', deepObj3);
console.log('after deepObj3:', obj);

console.log("/////////////////////////   ARRAYS  ///////////////////////")

let arr1 = [1,2,3,4];
let arr2 = new Array('Hi', 2, 'world');
console.log('arr1: ',arr1);
console.log('arr2: ',arr2);
console.log('typeof(arr2): ',typeof(arr2));



console.log("/////////////////////////")


//RIGHTTWARD/END
arr1.push(5)
console.log('push 5 into arr1: ',arr1);

arr1.pop(5)
console.log('pop 5 into arr1: ',arr1);


//LEFTWARD/START
arr1.unshift(0) // Adds from left/start
console.log('unshift 0 into arr1: ',arr1);

arr1.shift(0) // Adds from left/start
console.log('shift 0 into arr1: ',arr1);

console.log("/////////////////////////")

//SLICE : RETURNS SHALLOW COPY
let arr3 = arr1.slice(1,2);
console.log('slicing arr1 from index 1 to 2: ',arr3);

arr3 = arr1.slice(1);
console.log('slicing arr1 from index 1(no end index): ',arr3);



console.log("/////////////////////////")


arr1 = [1,2,3,4];

//SPLICE : SHALLOW COPY: Returns deleted values
let arr4 = arr1.splice(1,3,5);
console.log('splicing arr1 from index 1, delete 3 from start index, and add 5(deleted array): ',arr4);
console.log('arr1 after splicing: ',arr1);

arr4 = arr1.splice(1);
console.log('splicing arr1 from index 1(deleted array): ',arr4);
console.log('arr1 after splicing: ',arr1);



console.log("/////////////////////////");

let arr5 = [10,20,30,40,50,51];
let ans1 = arr5.map((value, index) => {
    return (value%2 == 0);
})
console.log('ans1 after map: ',ans1);
console.log('arr5 after map: ',arr5);

console.log("/////////////////////////");

let arr6 = [10,20,30,40,50,51];
let ans2 = arr6.filter((value, index) => {
    if(value%2 == 0) return value;
})
console.log('ans2 after filter: ',ans2);
console.log('arr5 after filter: ',arr6);

console.log("/////////////////////////");

let arr7 = [10,20,30,40,50];
let ans3 = arr7.reduce((acc, curr) => {
    console.log(acc,curr)
    return acc + curr;
}, 20) //acc = 20, but starts from index 0
console.log('ans3 after reduce: ',ans3);
console.log('arr7 after reduce: ',arr7);

console.log("/////////////////////////");

let arr8 = [10,2,320,0,51];
let ans4 = arr8.sort((a, b) =>  (b-a)) //returns in descending order // MUTATION OCCURS(SHALLOW COPY)
console.log('ans4 after DESC sort: ',ans4);
console.log('arr8 after DESC sort: ',arr8);
let ans5 = arr8.sort((a, b) =>  (a-b)) //returns in ascending order // MUTATION OCCURS(SHALLOW COPY)
console.log('ans5 after ASC sort: ',ans5);
console.log('arr8 after ASC sort: ',arr8);

let arr9 = ["ab","bc","cd","de"];
let ans6 = arr9.sort((a, b) =>  (b.localeCompare(a))) //returns in descending order // MUTATION OCCURS(SHALLOW COPY)
console.log('ans6 after DESC sort: ',ans6);
console.log('arr9 after DESC sort: ',arr9);

let arr10 = [10,2,320,0,51];
let ans7 = arr10.toSorted((a,b)=> b-a); // RETURNS SHALLOW COPY OF THE ANSWER WITHOUT ANY MUTATION
console.log('ans7 after DESC toSorted: ',ans7);
console.log('arr10 after DESC toSorted: ',arr10);

console.log("/////////////////////////");

console.log('arr10: ',arr10);
let index = arr10.indexOf(320);
console.log('index of 320: ',index)

console.log("/////////////////////////");

const users = [
    {id: 1, name: 'Sandesh'},
    {id: 2, name: 'Virat'},
    {id: 3, name: 'AB'},
]
console.log('users: ',users)
const targetUser1 = users.find(user => user.id == 2)?.name
const targetUser2 = users.find(user => user.id == 2)
console.log("user with id 2 using find() with optional chaining: ", targetUser1);
console.log("user with id 4 using find(): ", targetUser2);

console.log("/////////////////////////   LOOPS  ///////////////////////")
console.log("/////////////////////////   forEach - ARRAYS Only - cant use break or continue  ///////////////////////")

let newArray = [10,20,30,40,50];
newArray.forEach((value, index)=> {
    console.log("value in index ", index, " is: ", value);
});

console.log("/////////////////////////   forIn - Objects Only - async await friendly  ///////////////////////")

let newObject = {id: 1, name: 'Sandesh'};
for(key in newObject){
    console.log("value in key '", key, "' is: ", newObject[key]);
};

console.log("/////////////////////////   for of - ANy iterable object - async await friendly  ///////////////////////")

newObject = {id: 1, name: 'Sandesh'};
newArray = [10,20,30,40,50];

for(let value in newObject){
    console.log(value);
};

for(let value in newArray){
    console.log(value);
};
