const textarea = document.querySelector("#testText");
const div2 = document.querySelector("#div2");

console.log(textarea);
textarea.value = localStorage.getItem("text");
div2.innerHTML = textarea.value;

textarea.addEventListener('keyup', function(event){
    console.log(textarea.value);
    addText(textarea.value);
});

function addText(value){
    // div2.textContent = value; Version sans marked()
    localStorage.setItem("text", value);
    div2.innerHTML = marked(value);
}
