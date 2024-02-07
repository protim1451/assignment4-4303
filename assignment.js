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


function deleteInvalids(array){
    let result = [];
    if (!Array.isArray(array)) {
        return "Invalid Array";
      }
    for (let i = 0; i < array.length ; i++){
        if(typeof array[i] === 'number' && !isNaN(array[i])){
            result.push(array[i]);
        }
    }
    return result;
}


function password(obj){
    
}


function monthlySavings(arr, livingCost){
    if (!Array.isArray(arr) && typeof livingCost !== 'number') {
        return "Invalid Input";
    }
    let payment = 0; 
    for(let i=0; i < arr.length ; i++){
        if(arr[i] >= 3000){
            arr[i] = arr[i] - 0.2*arr[i]; 
        }
        payment = payment + arr[i];
    }
    const savings = payment - livingCost;
    if(savings < 0){
        return "Earn More";
    }
    return savings;
}
