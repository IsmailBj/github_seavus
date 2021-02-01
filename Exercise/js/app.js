// first exercise 
// let array = [0, 2, 5, 4, 6, 8];
// let box = [];
// function mapToEvenNumbersWithDash() {
//     for(let i=0;i<array.length;i++){
//         if((array[i-1]%2==0)&&(array[i]%2==0)){
//             box.push('-',array[i]);
//         }else{
//             box.push(array[i]);
//         }
//     }
  
//     for(let j=0;j<box.length;j++){
//         console.log(box[j]);
//     }
// }
// mapToEvenNumbersWithDash();

// second exercise

// let num = 100;
//  for the benus you can prompt num for bigger number 
// function getNumbers(num) {
//     for(let i=1;i<num;i++){
//         if(i%7==0&&i%3==0){
//             console.log(i);
//         }
//     }
  
// }

// getNumbers(num);

//exercise 3

let input = 376;
let coins = [];

function changeCalculator() {
   
    for(let i=0;input>0;i++){
        if(input>=50){
            coins[i] = 50;
            input -= 50;
        }else if(input>=20&&input<50){
            coins[i] = 20;
            input -= 20;
        }else if(input>=5&&input<20){
            coins[i] = 5;
            input -= 5;
        }else if(input>=1&&input<5){
            coins[i] = 1;
            input -= 1;
        }
        console.log(coins[i]);
    }
  
}

changeCalculator();





