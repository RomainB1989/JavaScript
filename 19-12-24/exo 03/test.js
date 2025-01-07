const bar = document.querySelector(".bar");

addEventListener("scroll", function(event){
    const scrollMax = this.document.body.scrollHeight - this.innerHeight;
    const where = this.window.scrollY / scrollMax * 100;
    
    bar.style.width = where + "%";
});