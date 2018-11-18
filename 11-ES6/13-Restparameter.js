// function funcao(param1, param2){
//     var args = Array.prototype.slice.call(arguments, funcao.length);
//     console.log(args);
// }

function funcao(param1, param2, ...otherParams) {
    console.log(otherParams);
}

funcao(1,2,3,4,5,6)

let array2 = [6,7,8,9,];
let array1 = [1,2,3,4,5,...array2];
console.log(array1);

let nome = "Jose Malcher";
let stringArray = [...nome];
console.log(stringArray);