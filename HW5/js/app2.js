let numbers=[1,2,3,4,5,6,7,8];
let p = document.querySelector('p');
let string = '';
let sum = 0;
for(let i=0;i<numbers.length-1;i++){
    string += ` ${numbers[i]} + `;
    if(i==6){
        string += ` ${numbers[i+1]} = `;
        sum += numbers[i+1];
    }
    sum += numbers[i];

}
p.innerText = string;
p.innerText += sum 