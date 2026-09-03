let src1 = {
    age: 25,
    ht: '165cm',
    wt: '63kg'
}

let src2 = {
    age: 22,
    ht: '165cm',
    wt: '70kg'
}

let complexObj = {
    age: 25,
    ht: '165cm',
    wt: '63kg',
    // walk: function(){ // Structure clone fails here
    //     console.log("Walking")
    // },
    education: {
        '10th': 'CV',
        '12th': 'LPUC',
        'BE': 'NMIT'
    }
}

console.log("///////////////////////// SPREAD OPERATOR - SHALLOW COPY /////////////////////////");
let dest1 = {...complexObj};
console.log("dest1 before: ", dest1.education['10th']);
console.log("complexObj: ", complexObj);
complexObj.education['10th'] = 'CV, Mandya';
console.log("dest1 after: ", dest1.education['10th']);
console.log("")
console.log("///////////////////////// Object.assign() - SHALLOW COPY /////////////////////////");

let dest2 = Object.assign({}, src1);
console.log('dest2: ', dest2);
let dest3 = Object.assign({}, src1, src2);
console.log('dest3: ', dest3); //Same keys are overwritten
console.log("")
console.log("///////////////////////// for in iteration - SHALLOW COPY /////////////////////////");

let dest4 = {};
for(let key in src1){
    dest4[key] = src1[key];
}
console.log('dest4: ', dest4);
console.log("")
console.log("///////////////////////// structuredCloned() - DEEP COPY /////////////////////////");

console.log("complexObj: ", complexObj);
let dest5 = structuredClone(complexObj);
complexObj.education['10th'] = 'CV';
console.log('dest5: ', dest5);