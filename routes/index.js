const express = require('express'); // Llamamos a express
const router = express.Router(); // Creamos un objeto Router
const {getData, deleteData, editData, addData, getAllData} = require("./cache.data");
// Traemos las funciones de cache.data para manejar los datos en memoria (Esto puede cambiar para manejar los datos en una base de datos)

// Agregar un dato por defecto.
addData("1", {
    name: "John",
    age: 25
});

// Definir la ruta de la api.
route = '/api/v1/data';

/* GET Mostrar datos */
router.get(`${route}/all`, (req, res, next) => {
    res.json({
        status: 200,
        message: "Success",
        data: getAllData()
    });
});

/* GET Mostrar datos por id */
router.get(`${route}/:id`, (req, res, next) => {
    const id = req.params.id;
    res.json({
        status: 200,
        message: "Success",
        data: getData(id)
    });
});


/* POST Añadir dato */
router.post(`${route}/add`, (req, res, next) => {
    const data = req.body;
    addData(data.id, data);
    res.json({
        status: 200,
        message: "Success",
        data: data
    });
});

/* PUT Editar dato */
router.put(`${route}/edit/:id`, (req, res, next) => {
    const id = req.params.id;
    const data = req.body;
    editData(id, data);
    res.json({
        status: 200,
        message: "Success",
        data: data
    });
});

/* DELETE Eliminar dato */
router.delete(`${route}/delete/:id`, (req, res, next) => {
    const id = req.params.id;
    deleteData(id);
    res.json({
        status: 200,
        message: "Success",
        data: id
    });
});

// Exportamos el router
module.exports = router;
