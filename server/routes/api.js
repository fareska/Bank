const express = require('express')
const router = express.Router()
const axios = require('axios')

const Transaction = require('../model/Transaction')

router.get('/transactions', function(req, res){
    Transaction.find({}, (err, data)=>res.send(data))
})

router.post('/transaction/',async function (req,res){
    let newTransaction = new Transaction(req.body) 
    const saved = await newTransaction.save()
    res.send(saved)
})

router.delete('/transaction/:id', async function(req, res){
    const tran = await Transaction.findByIdAndDelete(req.params.id)
    res.send(tran)
})

module.exports = router