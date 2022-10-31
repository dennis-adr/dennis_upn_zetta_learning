var obj1 = [1, 'data', 3, 'result']
var obj2 = ['Bejo', 'has', 4, 'sport', 'car']

function combineOutput(array: (string | number)[]): string {
    let result: string = "";
    array.map((array) => {
      result = result + " " + array;
    });
    return result;
  }

console.log(combineOutput(obj1));
console.log(combineOutput(obj2));