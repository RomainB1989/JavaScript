const textarea = document.querySelector("#testText");
const div2 = document.querySelector("#div2");

console.log(textarea);
textarea.value = localStorage.getItem("text");
//? div2.innerHTML = marked(localStorage.getItem("text")); Je n'arrive pas à récupérer le local storage pour le mettre dans la deuxième div.

textarea.addEventListener('keyup', function(event){
    console.log(textarea.value);
    addText(textarea.value);
});

function addText(value){
    // div2.textContent = value; Version sans marked()

    div2.innerHTML = marked(value);
    localStorage.setItem("text", value);
}
