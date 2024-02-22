import express from 'express'
import usuarioRoutes from './routes/usuarioRoutes.js'

//crear la app
const app = express();

//Hanilitar pug
app.set('view engine','pug')
app.set('views','./views')

//Usuarios
app.use('/auth',usuarioRoutes)

//

//asignar el puerto
const port = 3000;
app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`)
});