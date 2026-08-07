function printHello1(name){
    console.log(`Hello ${name} using plain function with no return`);
}

function printHello2(name){
    return (`Hello ${name} using plain function with return`);
}

const printHello3 = function(name){
    return (`Hello ${name} using plain function used as variable`);
}

const printHello4 = () => {
    return ("Hello using arrow function");
}

const printHello5 = (name) => {
    return (`Hello ${name} using arrow function with param`);
}

printHello1('Sandesh');
console.log(printHello2('Sandesh'));
console.log(printHello3('Sandesh'));
console.log(printHello4());
console.log(printHello5('Sandesh'));