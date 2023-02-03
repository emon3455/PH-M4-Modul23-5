const aray = [10,20,30,40,50,-60,80,90];

function getPositive(aray){

    let numbrs = [];
    let x = 0;

    for(i=0; i<aray.length; i++){

        if(aray[i]<0){
            break;
        }
        else{
            numbrs[x] = aray[i];
            x++;
        }

    }

    return numbrs;

}

let numbers = getPositive(aray);
console.log(numbers);