document.addEventListener("DOMContentLoaded", function () {
    let botón = document.querySelector("input")
    let div = document.querySelector("div");

    function saludarDiv() {
        alert("Hola!Soy el div");
    };

    botón.addEventListener("click",(event)=> {
        alert("Hola!");
        event.stopPropagation();
    });
    
    div.addEventListener("click",saludarDiv);


});