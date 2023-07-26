require('dotenv').config();
const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));

app.post('/generate', async (req, res) => {
    try {
      const prompt = req.body.prompt;
      const response = await axios.post('https://api.openai.com/v1/chat/completions', {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "You are a helpful assistant that writes original tweets. Keep the tweet within 240 chars."
          },
          {
            role: "user",
            content: prompt
          }
        ],
        max_tokens: 200,
      }, {
        headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json'
        }
      });
  
      const gptResponse = response.data.choices[0].message.content;
      res.json({ tweet: gptResponse });
    } catch (error) {
      console.error(error.response.data); // Log the error response from OpenAI API
      res.json({ error: error.message });
    }
  });  
