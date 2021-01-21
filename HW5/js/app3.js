let recipeName = prompt("Enter name of recipe...");
let amountEngredients = prompt("how many ingredients do we need for the recipe");
let nameEngredients = [];
let idRecipe = document.querySelector('#recipeName');
let listInput  = document.getElementById('ul');
idRecipe.innerHTML = recipeName;
for(let i=0;i<amountEngredients;i++){
    nameEngredients[i] = prompt("Enter the name of every ingredient");
    listInput.innerHTML += '<li>' + nameEngredients[i] + '</li>';
    console.log(listInput);
}
