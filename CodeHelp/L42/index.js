console.log("String operations");
console.log("--------------------------------------------------");
console.log("");

console.log("CONCATENATION");
console.log("");
const s1 = 'Hello';
const s2 = ' World';
const s3 = 'World';
console.log(s1 + s2 +  " using +");
console.log(`${s1}${s2} using backticks/template literals`);

console.log("--------------------------------------------------");
console.log("");

console.log("LENGTH");
console.log("");
console.log(`Length of string s1 is ${s1.length} using string.length;`);

console.log("--------------------------------------------------");
console.log("");

console.log("UPPERCASE & LOWERCASE");
console.log("");
console.log(`Uppercase of string s1 is ${s1.toUpperCase()} using string.toUpperCase();`);
console.log(`Lowercase of string s1 is ${s1.toLowerCase()} using string.toLowerCase();`);

console.log("--------------------------------------------------");
console.log("");

console.log("SUBSTRING");
console.log("");
console.log(s1);
console.log(`Substring '${s1.substring(2)}' obtained string from ${s1} using string.substring(startIndex)`);
console.log(`Substring '${s1.substring(2,4)}' obtained string from ${s1} using string.substring(startIndex,endIndex) where endIndex char is excluded`);

console.log("--------------------------------------------------");
console.log("");

console.log("SPLIT");
console.log("");
const sentence = 'Hello everybody\\ my name is sandesh.'
const splitValue = sentence.split('\\');
console.log(`typeof(splitValue) is ${typeof(splitValue)}`);
console.log(`Values "${splitValue}" \(values are , seperated \) obtained from string ${sentence} using string.split(seperator)`);
console.log(`Use \\ as special character. I have used 2 \\ but it will print only 1 \\ as. Because, \\ is a special character used to print \" \"  inside \" \"`);

console.log("--------------------------------------------------");
console.log("");

console.log("JOIN");
console.log("");
console.log(`Values "${splitValue}" \(values are , seperated \) joined to form: 
${splitValue.join(" ")} 
using string.join(seperator)`);
console.log(`Default seperator is , if nothing is passed`);