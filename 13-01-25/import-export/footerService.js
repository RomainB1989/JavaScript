export function renderFooter(){
    const footer = document.querySelector("footer");
    const date = new Date();
    const paragh = document.createElement("p");
    footer.setAttribute('class', 'p-3 position-absolute bottom-0 start-0 min-vw-100 bg-light');
    paragh.setAttribute('class', 'text-center text-secondary fs-6');
    paragh.innerText = `© ${date.getFullYear()} by Romain Bergout`;

    footer.append(paragh);
}