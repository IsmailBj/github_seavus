let fName=["Bob","Jill"],lName=["Gregory","Wurtz"];

function fullName(fName,lName){
    for(let i=0;i<fName.length;i++){
        console.log(i+1 + '.' +fName[i] +' '+ lName[i]);
    }
}

fullName(fName,lName);