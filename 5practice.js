// multiple condition:

let x = 10;
let y = 25;

if(x%2 === 0 && y%2==0){
    console.log(x,"and",y,"both are even number");
}

else if(x%2 === 0 || y%2==0){
    console.log("either",x,"or",y,"is even number");
}

else{
    console.log("None of them are even number");
}

