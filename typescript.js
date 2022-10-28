function returnts(text, num1, num2) {
    return text.slice(num1, num2);
}
var text = "Learning Typescript is different than Javascript";
var num1 = 9;
var num2 = 19;
console.log(returnts(text, num1, num2));
