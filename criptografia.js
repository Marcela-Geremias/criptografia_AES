// Função para cifrar uma mensagem
function cifrar() {
    const mensagem = document.getElementById('mensagem').value;
    const chave = "minhaChaveSecreta";  // Chave fixa para fins de demonstração, ajuste conforme necessário
    if (mensagem === "") {
        alert("Por favor, preencha a mensagem.");
        return;
    }
    const mensagemCifrada = CryptoJS.AES.encrypt(mensagem, chave).toString();
    document.getElementById('resultado').innerText = "Mensagem Cifrada: " + mensagemCifrada;
}

// Função para decifrar uma mensagem
function decifrar() {
    const mensagemCifrada = document.getElementById('mensagem').value;
    const chave = "minhaChaveSecreta";  // Chave fixa para fins de demonstração, ajuste conforme necessário
    if (mensagemCifrada === "") {
        alert("Por favor, preencha a mensagem cifrada.");
        return;
    }
    try {
        const bytes = CryptoJS.AES.decrypt(mensagemCifrada, chave);
        const mensagemDecifrada = bytes.toString(CryptoJS.enc.Utf8);
        document.getElementById('resultado').innerText = "Mensagem Decifrada: " + mensagemDecifrada;
    } catch (error) {
        alert("Erro ao decifrar a mensagem. Verifique se a mensagem cifrada e a chave estão corretas.");
        console.error(error);
    }
}
