const express = require("express");
const cors = require ('cors');
const db = require('./utils/database')
const Todo = require('./models/todos.model')
const todosRoutes = require('./routes/todo.routes')

Todo;

const PORT = 7887;

db.authenticate()
    .then(() => {
       console.log('Conexión a base de datos OK') 
    })
    .catch(
        (error) => {
            console.log(error)
        }
    )

db.sync()
    .then(() => {
        console.log('Base de datos sincronizada');
    })
    .catch((error) => {
        console.log(error);
    })

const app = express();

app.use(cors());

app.use(express.json())

app.use(todosRoutes)

app.get("/", (req, res) => {
    res.send('Bienvenido a mi servidor');
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
