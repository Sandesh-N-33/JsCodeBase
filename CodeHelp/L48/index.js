console.log("//////////////// Math ////////////////");
console.log(`Math.PI `,Math.PI);
console.log(`Math.max(1,2,3,4,5) `,Math.max(1,2,3,4,5));
console.log(`Math.min(1,2,3,4,5) `,Math.min(1,2,3,4,5));
console.log(`Math.round(1.6) `,Math.round(1.6));
console.log(`Math.round(1.5) `,Math.round(1.5));
console.log(`Math.ceil(1.1) `,Math.ceil(1.1));
console.log(`Math.floor(1.9) `,Math.floor(1.9));
console.log(`Math.abs(-5) `,Math.abs(-5));
console.log(`Math.random() gives random no [0,1) `,Math.random()); // Gives random no [0,1)
console.log(`Math.sqrt(4) `,Math.sqrt(4));
console.log(`Math.pow(2,10) `,Math.pow(2,10));
console.log("//////////////// Date ////////////////");
const now = new Date();
console.log(now) // Gives in UTC ISO string format in code editors and user local in browsers
console.log(now.toISOString()); // Gives universal UTC ISO string format everywhere: NEED TO PASS THIS KIND OF DATE TO BACKEND

const isoDate = new Date();
const cleanDate = new Intl.DateTimeFormat('en-IN',{
    dateStyle: 'medium',
    timeStyle: 'short'
}).format(isoDate); // isoDate needs to be Date instead of string
console.log(cleanDate);

let date2 = new Date('21 December 2001 16:35');
console.log(date2);

let date3 = new Date(2001,11,21,16,35);
console.log(date3);
console.log(date3.getDay());
console.log(date3.getFullYear());
date3.setFullYear(2000);
console.log(date3.getFullYear());

