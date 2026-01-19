const express = require('express');
const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
  console.log('Requête reçue !'); // Affiche quand on accède à /
  res.send('Backend fonctionne');
});

app.listen(PORT, () => {
  console.log(`🚀 Backend lancé sur http://localhost:${PORT}`);
});
