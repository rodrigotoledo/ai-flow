require('dotenv').config(); // Assegura que as variáveis de ambiente do .env estão disponíveis

function getApiKey() {
  return process.env.API_KEY; // Retorna a chave API do arquivo .env
}

function setApiKey(key) {
  const fs = require('fs');
  const path = require('path');
  const envPath = path.join(__dirname, '../../.env'); // Caminho para o arquivo .env
  const envContents = fs.readFileSync(envPath, 'utf8');
  let lines = envContents.split('\n');
  let found = false;

  // Procura por API_KEY existente e atualiza
  lines = lines.map(line => {
    if (line.startsWith('API_KEY=')) {
      found = true;
      return `API_KEY=${key}`;
    }
    return line;
  });

  // Adiciona API_KEY se não foi encontrada
  if (!found) {
    lines.push(`API_KEY=${key}`);
  }

  // Escreve de volta no arquivo .env
  fs.writeFileSync(envPath, lines.join('\n'));
}

module.exports = {
  getApiKey,
  setApiKey
};
