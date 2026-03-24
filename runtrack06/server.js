const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Mon Docker fonctionne !'));
app.listen(3000, () => console.log('Serveur sur le port 3000'));