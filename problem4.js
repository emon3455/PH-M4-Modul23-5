function bestFriend(friends){

    let max = friends[0];

    for(let i =0; i<friends.length; i++){

        if(max.length < friends[i].length){
            max = friends[i];
        }

    }

    return max;

}

const friends = ["Emoni","Ridul","rohan","Noushin","Minhaz","sabbir"]

let bigName  = bestFriend(friends);
console.log(bigName);