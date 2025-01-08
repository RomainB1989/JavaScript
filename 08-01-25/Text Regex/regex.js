const regexName = /^[A-Za-z]{1,20}$/;
const regexMail = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;
const charDecimal = /\d/;
const charSpecial = /[$&@!]/;

const form = document.querySelector("#center");
const inputNom = form.querySelector("#name");
const inputEmail = form.querySelector("#email");
const inputPassword = form.querySelector("#password");
const inputSubmit = form.querySelector("#submit");

console.log(form, inputNom, inputEmail, inputPassword, inputSubmit);

inputNom.addEventListener("keyup", function(){
    console.log(inputNom.value);
    if(regexName.test(inputNom.value)){
        inputNom.style.backgroundColor = "green";
    } else {
        inputNom.style.backgroundColor = "red";
    }
});

inputEmail.addEventListener("keyup", function(){
    console.log(inputEmail.value);
    if(regexMail.test(inputEmail.value)){
        inputEmail.style.backgroundColor = "green";
    } else {
        inputEmail.style.backgroundColor = "red";
    }
});


inputPassword.addEventListener("keyup", function(){
    console.log(inputPassword.value);

    if(!inputPassword.value.match(charDecimal) || !inputPassword.value.match(charSpecial)){
        console.log("Message d'Erreur");
       
    }
});