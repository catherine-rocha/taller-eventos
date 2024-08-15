document.addEventListener("DOMContentLoaded", function () {

    let div = document.querySelector("div");

    function saludarDiv() {
        alert("Hola!Soy el div");
    };

    div.addEventListener("click",saludarDiv);

});