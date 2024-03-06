// const express = require('express')
import express from 'express'
import products from './data.js'

const app = express();

app.use(express.static("./client"));

const auth = (req, res, next) => {
    console.log("middleware")
    next();
}

app.use(auth);

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

app.get('/api/v1/products/query', (req, res) => {
    const { search, limit } = req.query;

    const filteredProducts = products.filter((product) => {
        return product.title.toLowerCase().startsWith(search)
    });
    console.log(filteredProducts)

    if(filteredProducts.length >= 1) {
        let limitedProducts = filteredProducts.slice(0, limit);
        res.status(200).json({ success: true, data: limitedProducts })
    } else {
        res.status(200).json({ success: true, data: filteredProducts });
    }
})


app.listen(5000, () => {
    console.log('Server is running in http://localhost:5000/')
});