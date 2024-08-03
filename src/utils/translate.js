const axios = require('axios');

async function translate(description) {
  // Implementação da chamada à API
  const response = await axios.post('https://api.openai.com/v1/engines/text-davinci-002/completions', {
    prompt: `Translate the following to English: ${description}`,
    max_tokens: 60
  }, {
    headers: {
      'Authorization': `Bearer YOUR_API_KEY`
    }
  });
  return response.data.choices[0].text.trim();
}

module.exports = translate;
