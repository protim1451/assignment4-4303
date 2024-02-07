function calculateMoney(ticketSale){
    if(ticketSale < 0){
        return "Invalid Number";
    }
    const expenses = 500 + 8*50;
    const earning = 120*ticketSale - expenses;
    return earning;
}

function checkName(name){
    if(typeof name !== "string"){
        return "invalid";
    }
    let last = name.toLowerCase().slice(-1);
    if(last === 'a' ||  last === 'y' || last === 'i' || last === 'e' || last === 'o'
    || last === 'u' || last === 'w'){
        return "Good Name";
    }
    else{
        return "Bad Name";
    }
}
