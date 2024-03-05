// const express = require('express')
import express from 'express'
import products from './data.js'

const app = express();

app.use(express.static("./client"));

app.get('/', (req, res) => {
    res.status(200).json({success: true, message: 'JSON response'})
});

app.get('/api/v1/products', (req, res) => {
    res.status(200).json({success: true, data: products})
});

app.get('/api/v1/productdetails', (req, res) => {
    const filteredProducts = products.map(({ id, title, description, price }) => {
        return {id, title, description, price}
    })
    res.status(200).json({success: true, data: filteredProducts })
});

app.get('/api/v1/product/:id', (req, res) => {
    const product = products.find((product) => product.id === Number(req.params.id))
    if(product) {
        res.status(200).json({success: true, data: product })
    }
    else {
        res.status(404).json({success: false, message: "Product not found"})
    };
});

app.listen(5000, () => {
    console.log('Server is running in http://localhost:5000/')
});