import express from "express"; //Busca o express para dentro do arquivo

const app = express() //Coloca em uma constante
const PORT = 3000;

app.listen(PORT, () -> console.log(`Servidor está rodando na porta ${PORT}`));