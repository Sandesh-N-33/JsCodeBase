//code 1 - 0.599999999627471
const t1 = performance.now();
for(let i = 1;i<=100;i++){
    let para = document.createElement('p');
    para.textContent = 'This is para ' + i;
    document.body.appendChild(para);
}
const t2 = performance.now();
console.log('Time taken for code 1 is '+ (t2-t1));

//code 2 - 0.2000000011175871
const t3 = performance.now();
let myDiv = document.createElement('div');
for(let i = 101;i<=200;i++){
    let para = document.createElement('p');
    para.textContent = 'This is para ' + i;
    myDiv.appendChild(para);
}
document.body.appendChild(myDiv);
const t4 = performance.now();
console.log('Time taken for code 2 is '+ (t4-t3));


//code 3 - 0.19999999925494194
const t5 = performance.now();
let fragment = document.createDocumentFragment();
for(let i = 201;i<=300;i++){
    let para = document.createElement('p');
    para.textContent = 'This is para ' + i;
    fragment.appendChild(para);
}
document.body.appendChild(fragment);
const t6 = performance.now();
console.log('Time taken for code 3 is '+ (t6-t5));