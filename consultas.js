const { Pool } = require('pg')

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'postgres',
    database: 'plan_de_viajes',
    allowExitOnIdle: true
})

const getDate = async () => {
    const result = await pool.query("SELECT NOW()")
    console.log(result)
}
getDate()

const agregarViaje = async (destino, presupuesto) => {
    const consulta = "INSERT INTO viajes values (DEFAULT, $1, $2)"
    const values = [destino, presupuesto]
    const result = await pool.query(consulta, values)
    console.log("Viaje agregado")
}

agregarViaje("Valdivia", 150000)