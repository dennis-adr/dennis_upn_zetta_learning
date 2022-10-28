function returnts(text : string,num1:number,num2:number):string{
    return text.slice(num1,num2);
}
const text = "Learning Typescript is different than Javascript";
const num1 = 9;
const num2 = 19;

console.log(returnts(text,num1,num2))