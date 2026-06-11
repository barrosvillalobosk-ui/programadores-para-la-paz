const express = require('express');
const app = express();

app.use(express.json());

let reportes = [
  {
    id: 1,
    tipo: "Seguridad",
    descripcion: "Falta de señalización en un cruce peatonal cercano a una escuela"
  },
  {
    id: 2,
    tipo: "Servicios Públicos",
    descripcion: "Interrupción frecuente del suministro de agua en el barrio"
  }
];

app.get('/reportes', (req, res) => {
  res.json(reportes);
});

app.post('/reportes', (req, res) => {

  const reporte = {
    id: reportes.length + 1,
    tipo: req.body.tipo,
    descripcion: req.body.descripcion
  };

  reportes.push(reporte);

  res.json({
    mensaje: "Reporte registrado",
    reporte: reporte
  });

});

app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});