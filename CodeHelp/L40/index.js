/**
 * var allows redeclration and re-assignment of variables
 * var is function and global scoped but not block scope
 */
{
  var test1 = "Hello";
  console.log(test1);
  var test1 = 123;
  console.log(test1);
  test1 = true;
  console.log(test1);

  {
    var test2 = null;
  }
  console.log(test2);
}


console.log("///////////////////////////////////////////////////////////////////");

let test0 = "Checking test0";

{
  let test3 = "Hello";
  console.log(test3);
  //   let test3 = 123; // This throws and error
  //   console.log(test3);
  test3 = true;
  console.log(test3);

  let test0 = "inside block for test0";
  console.log(test0)

  //   {
  //     let test4 = null;
  //   }
  //   console.log(test4);
}
console.log(test0)

console.log("///////////////////////////////////////////////////////////////////");

const value1 = 0;
// value1 = 1; // Re-assignment is not allowed
console.log(value1);

{
    const value1 = 1;
    console.log(value1);
}

console.log("///////////////////////////////////////////////////////////////////");


let checkForCase = "123";
let CHECKFORCASE = "456";

console.log(checkForCase);

//  PRIMITIVE DATATYPES IN JAVA
const eg1 = 123; //number
const eg2 = "Hello"; //string
const eg3 = 'H'; // char treated same as string
let eg4; //There cannot be an undefined const
const eg5 = null; // Treated as object

const eg6 = 999999999999999999999999999999999999999999999999999999999999999999999999999;
//bigint but still treated as number as it is maxed out and considers this as infinity which is a number

//WAYS TO USE BigInt
const eg7 = BigInt(999999999999999999999999999999999999999999999999999999999999999999999999999);
const eg8 = 999999999999999999999999999999999999999999999999999999999999999999999999999n; //Append a n at last

console.log(typeof(eg1));
console.log(typeof(eg2));
console.log(typeof(eg3));
console.log(typeof(eg4));
console.log(typeof(eg5));
console.log(typeof(eg6));
console.log(typeof(eg7));
console.log(typeof(eg8));

console.log("///////////////////////////////////////////////////////////////////");