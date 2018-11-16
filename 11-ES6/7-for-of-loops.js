let array = [22,11,23,34];

let obj = {
    first_name: "Jose",
    last_name: "Malcher"
};

/*
for(let i in array){
    console.log(i, array[i]);
}

for (let i in obj) {
    console.log(i, obj[i]);
}
*/

/*for(let value of array){
    console.log(value);
}

let keys = Object.keys(obj);
console.log(keys);

for (let key of keys){
    console.log(obj[key]);
}*/

for (let obj of array){
    console.log(obj);
}
console.log(array.entries());
for(let[index, value] of array.entries()){
    console.log(index, value);
}
