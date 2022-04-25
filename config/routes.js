const express = require('express');
const routes = express.Router();

let db = [
    {
        "id": 1,
        "name": "Farinha de Trigo",
        "quantity": 1,
        "user": "Fulano"
    },
    {
        "id": 2,
        "name": "Leite",
        "quantity": 1,
        "user": "Fulano"
    }
]

routes.get('/rawMaterials', (req, res) => {
    return res.json (db) 
})

routes.post('/add', (req, res) => {
    const body = req.body
    const lastId = db[db.length - 1].id

    if(!body)
        return res.status(400).end()
    
    db.push({
        id: lastId + 1,
        name: req.body.name,
        quantity: req.body.quantity,
        user: req.body.user
    })
    return res.json('Saved')
    
})


routes.route('/rawMaterials/:id').put((req, res) => {
    const userId = req.params.id;
    const user = db.find(user => Number(user.id) === Number(userId))

    if(!user){
        return res.json("Usuário não encontrado")
    }

    const updateUser = {
        ...user,
        name: req.body.name,
        quantity: req.body.quantity,
        user:req.body.user
    }

    db = db.map(user => {
        if(Number(user.id) === Number(userId)){
            user = updateUser
        }
        return user
    })
    res.json("Usuário atualizado")
})

module.exports = routes