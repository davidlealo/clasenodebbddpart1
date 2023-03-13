const { agregarViaje, obtenerViajes } = require('./consultas')

const express = require('express');

const app = express();
app.listen(3000, console.log("SERVIDOR ENCENDIDO"))
app.get("/viajes", async (req, res) => {
    const viajes = await obtenerViajes()
    res.json(viajes)
})