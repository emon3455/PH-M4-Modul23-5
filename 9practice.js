const numbers1  = [10,20,30,40,50];
const numbers2  = [60,70,80,90,100];

console.log("array element of numbers1 array:")
for(i=0; i<numbers1.length; i++){
    console.log(numbers1[i]);
}

console.log("array element of numbers2 array:")
for (const i of numbers2) {
    console.log(i);
}