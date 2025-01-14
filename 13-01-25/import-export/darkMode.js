export function darkMode(){
    const html = document.querySelector("html");
    if(html.getAttribute('data-bs-theme') == 'light'){
        html.setAttribute('data-bs-theme', 'dark');
    } else {
        html.setAttribute('data-bs-theme', 'light');
    }
}