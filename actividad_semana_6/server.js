const express = require('express');
const app = express();

app.use(express.json());

app.post('/registro', (req, res) => {

  const nombre = req.body.nombre;
  const mensaje = req.body.mensaje;

  res.json({
    estado: "Datos recibidos",
    nombre: "katiuska",
    mensaje: "hola comunidad"
  });

});

app.post('/incidencia', (req, res) => {

  const tipo = req.body.tipo;
  const descripcion = req.body.descripcion;

  res.json({
    mensaje: "Incidencia registrada",
    tipo: "Iluminación pública",
    descripcion:"La comunidad reporta que una lámpara del parque principal no funciona desde hace varios días y requiere mantenimiento."
  });

});

app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});