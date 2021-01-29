let name = prompt("Enter Name!");
let kind = prompt("Enter Kind of dot!");

function dog(name, kind) {
    this.name = name;
    this.kind = kind;
    this.speak = function () { alert('Hey bro!!'); }
}

function checkValidInput(inputs) {
    for (let input of inputs) {
        if (!input) {
            alert('Input invalid');
            return false;
        }
    }
    return true;
}

if (checkValidInput([name, kind])) {
    let newDog = new dog(name, kind);

    alert(` his name is ${newDog.name} and kind of ${newDog.kind}`);
}
