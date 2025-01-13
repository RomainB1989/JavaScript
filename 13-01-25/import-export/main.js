import {getChuck} from "./welcomeService.js";
import {renderFooter} from "./footerService.js";
import {darkMode} from "./darkMode.js";


const title = document.querySelector('#title');
const buttonDark = document.querySelector('#dark');

if (window.location.pathname == "/" || window.location.pathname == "/index.html"){
    getChuck();
}

renderFooter();

buttonDark.addEventListener("click", function(){
    darkMode();
});
