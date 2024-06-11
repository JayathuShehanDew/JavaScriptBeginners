const myAge = document.getElementById("myAge");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let age;

mySubmit.onclick = function(){
    age = myAge.value;
    age = Number(age);

    if(age >= 100){
        resultElement.textContent = `You are too old to enter this site.`;
    }
    else if(age == 0){
        resultElement.textContent = `You can't enter, You were just born.`;
    }
    else if(age >= 18){
        resultElement.textContent = `You are old enough to enter this site`;
    }
    else if(age < 0){
        resultElement.textContent = `Your age can't be below 0`;
    }
    else{
        resultElement.textContent = `You must be 18+ to enter this site`;
    }
}

// Good practice
let message = age >= 18 ? "You're adult" : "You're a minor";