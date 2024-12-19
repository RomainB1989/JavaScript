addEventListener("click", function(event){
    const myImg = this.document.createElement("img");

    myImg.setAttribute("src", "https://loremflickr.com/100/100");
    myImg.style.position = "absolute";
    myImg.style.left = (event.clientX - (myImg.width / 2)) + "px";
    myImg.style.top = (event.clientY - (myImg.height / 2)) + "px";

    document.body.appendChild(myImg);
});