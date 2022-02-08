var buttonsLenght = document.getElementsByClassName("btn");
for (var i = 0; i < buttonsLenght.length; i++) {
    buttonsLenght[i].setAttribute("title", buttonsLenght[i].textContent);
}
