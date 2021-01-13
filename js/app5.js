let arr = [3,5,6,8,11];

function output(arr){
    let max =0,min=0,sum=0;
    min = arr[0]; // just to give any value so we can start
    for(let i=0;i<arr.length;i++){
        if(max<arr[i]){
            max = arr[i] // get max 
        }
        if(min>arr[i]){
            max = arr[i] // get min
        }
    }
    sum = max + min;
    console.log(`OUTPUT: Max ${max} Min ${min} Sum ${sum}`)

}

output(arr);

