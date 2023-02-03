function paperRequirements(fst,scnd,trd){
    
    const book1Page = 100;
    const book2Page = 200;
    const book3Page = 300;

    const totalPage = (book1Page * fst) + (book2Page * scnd) + (book3Page * trd);

    return totalPage;
}

let totallPageNumber = paperRequirements(1,1,1);
console.log(totallPageNumber);