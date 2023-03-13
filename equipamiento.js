const {Pool} = require('pg')

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'postgres',
    database: 'plan_de_viajes',
    allowExitOnIdle: true
})

const agregarEquipamiento = (nombre) =>{
    //Definir la query. El uso de DEFAULT es prque el ID es secuencial 
    const consulta = "INSERT INTO equipamiento VALUES (DEFAULT, $1)"

    //Guardar el arreglo en una constante
    const valor = [nombre]

    //Usar Pool Query
    const result = pool.query(consulta, valor)

    //Impimir en la consola el mensaje de equipamiento agregado
    console.log('equipamiento agregado')
}

module.exports = { agregarEquipamiento, obtenerEquipamiento }

//agregarEquipamiento('Selfie Stick')

const obtenerEquipamiento = async () =>{
    const {rows} = await pool.query('SELECT * from equipamiento')
    console.log(rows)
    return rows
}

obtenerEquipamiento()