function validarIdade() {
    var idade = document.getElementById("idade").value;

    if (idade >= 18) {
        alert("Maior de idade");
    } else {
        alert("Menor de idade");
    }
}