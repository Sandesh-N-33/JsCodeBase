console.log("Switch with break;");
console.log(" ");

const value = 10;

switch (value) {
  case 1: {
    console.log(1);
    break;
  }
  case 2: {
    console.log(2);
    break;
  }
  case 3: {
    console.log(3);
    break;
  }
  case 4: {
    console.log(4);
    break;
  }
  case 10: {
    console.log(10);
    break;
  }
  default: {
    console.log('other');
  }
}


console.log(" ");
console.log("Switch without break;");
console.log(" ");



const num = 1;

switch (num) {
  case 1: {
    console.log(1);
  }
  case 2: {
    console.log(2);
  }
  case 3: {
    console.log(3);
  }
  case 4: {
    console.log(4);
  }
  case 10: {
    console.log(10);
  }
  default: {
    console.log('other');
  }
}