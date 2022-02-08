var buttonsLenght = document.getElementsByClassName("btn");
for (var i = 0; i < buttonsLenght.length; i++) {
    buttonsLenght[i].setAttribute("title", buttonsLenght[i].textContent);
}

function cerrarModal() {
    var modal = document.getElementsByClassName("modal");
    modal[0].classList.add("left");
}

function downloadButtons() {
    window.open("https://github.com/Andres715/buttons-public.git")
}