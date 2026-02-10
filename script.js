const form = document.getElementById("pedidoForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const musica = document.getElementById("musica").value;

    // Pega pedidos já salvos ou cria um array vazio
    let pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];

    // Adiciona novo pedido
    pedidos.push({
        nome: nome,
        musica: musica,
        data: new Date().toLocaleString()
    });

    // Salva novamente
    localStorage.setItem("pedidos", JSON.stringify(pedidos));
});
