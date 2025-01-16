const mongoose = require('mongoose');
const app = require('./app');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conectado a MongoDB');
    app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
  })
  .catch(err => console.error('Error al conectar a MongoDB:', err));