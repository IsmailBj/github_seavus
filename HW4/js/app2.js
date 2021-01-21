let arr = [5,4,6,8,9];
let result=0;
function sum(array,result){
    for(let i=0;i<array.length;++i){
        result+=array[i];
    }
    console.log(result);
}

sum(arr,result);
// bonus 
validateNumber(arr); 
function validateNumber(array){
    for(let i=0;i<array.length;i++){
        if(!isNaN(array[i])){
            console.log(array[i]);
        }else {
            console.log("Error Not a number");
            break;
        }
    }
}

// ex 2