let contador = 0;
const valor = document.getElementById("valor");
const botaoMais = document.getElementById("mais");
const botaoMenos = document.getElementById("menos");

botaoMais.addEventListener("click", () => {
    contador++;
    atualizarContador();
});

botaoMenos.addEventListener("click", () => {
    if (contador > 0) {
        contador--;
        atualizarContador();
    }
});

function atualizarContador() {
    valor.textContent = contador;
    botaoMenos.disabled = contador === 0;
}

atualizarContador();


