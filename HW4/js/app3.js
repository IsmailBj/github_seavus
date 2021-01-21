let array = [];
let n;
n=prompt("Enter the amount of string you want to use");
function input(array,n){
    for(let i=0;i<n;i++){   
        array[i] = prompt(`Enter string number ${i+1}`);
    }
    alert(array.join(' '));
}

input(array,n);


// ex 3
