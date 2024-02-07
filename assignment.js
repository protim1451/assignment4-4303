function calculateMoney(ticketSale){
    if(ticketSale < 0){
        return "Invalid Number";
    }
    const expenses = 500 + 8*50;
    const earning = 120*ticketSale - expenses;
    return earning;
}

