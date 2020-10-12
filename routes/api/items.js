const express = require('express')
const route = express.Router()
const Item = require('../../models/item')

route.get('/', (req, res) => {
    res.send('Home page ....')
})

route.get('/routes/api', (req, res) => {
    Item.find()
        .then(items => res.json(items))
        .catch(err => console.log(err))
      
})

route.post('/routes/api', (req, res) => {
    console.log(req.body)
    const newItem = new Item({
        name: req.body.name
    })
    newItem.save()
        .then(data => res.json(data))
        .catch(err => console.log(err))
})

route.delete('/routes/api/:id', (req, res) => {
    Item
        .findById(req.params.id)
        .then(data => {
            data.remove()
                .then(deletedData => {
                    res.json({
                        success: true,
                        data: deletedData
                    })
                })
        })
        .catch(err => {
            res.status(404).json({
                success: false,
                message: err
            })
        })
})

module.exports = route