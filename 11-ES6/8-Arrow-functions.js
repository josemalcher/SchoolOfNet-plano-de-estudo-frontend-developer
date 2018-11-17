let array = [1,2,3,4,5];

// let array1 = array.map(function(value){
//     return value * 10;
// })

let array2 = array.map(value => value * 10);

let array3 = array.map((value1, value2) => value1 * 10);

let array4 = array.map(value1 => {
    value1 * 10;
});

array.map(value => value > 10 ? 0 : 2);

let funcaoSoma = (param1, param2) => param1 + param2;

//setTimeout(()=> execucao, 100);
setTimeout(()=>{
    //execucao
}, 100);

console.log(array2);