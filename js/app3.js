let ATM_amount = 5000;
let withdraw = prompt(`Enter the amount of money you want to withdraw`);
let acc  = 4000;
if(ATM_amount >= withdraw){
    acc = acc - withdraw;
    console.log(`withdrawn: `,withdraw,` amount in you acc: `,acc);
}else{
    console.log(`Not enough money`);
}

