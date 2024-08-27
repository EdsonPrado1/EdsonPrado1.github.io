body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
}

header {
    background-color: #004080;
    color: #fff;
    padding: 20px;
    text-align: center;
}

.logo img {
    max-width: 50px;
    vertical-align: middle;
}

.logo h1 {
    display: inline;
    font-size: 24px;
    margin-left: 10px;
}

.container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin: 100px;
    padding: 100px; /* Ajustei o padding para não ser tão grande */
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.multimidia img {
    max-width: 80%; /* Aumenta o tamanho da imagem */
    border-radius: 10px;
    margin-right: 20px; /* Reduz a margem direita para mais espaço para o formulário */
}

.right-align {
    max-width: 300px;
}

.login form,
.busca-agencia form {
    width: 100%;
}

.login form label,
.busca-agencia label {
    margin-bottom: 5px;
}

.login form input,
.busca-agencia input {
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;
}

button {
    padding: 10px;
    background-color: #004080;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 100%;
}

button:hover {
    background-color: #003060;
}

.descricao p {
    text-align: justify;
}

video {
    max-width: 100%;
    border-radius: 8px;
}

footer {
    text-align: center;
    padding: 10px;
    background-color: #004080;
    color: #fff;
    position: relative;
    bottom: 0;
    width: 100%;
}
