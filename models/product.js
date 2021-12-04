const mongoose = require('mongoose');
const schema = mongoose.Schema;

const productSchema = new schema({
    tipo: String,
    marca: String,
    nombre: String,
    precio: String,
    img: String,
    caracteristicas: ({
        color: String,
        almacenamiento: String,
        camara: String,
        pantalla: String,
        procesador: String,
        ram: String,
        bateria: String,
        conectividad: String,

    })

})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;