require('dotenv').config();
const express = require('express');
const { Server } = require('http');
const https = require('https')
const axios = require("axios");
const  app = express();

app.use(express.json());


app.post('/api/v1/resolve',(req,res)=>{
    const {account,code} = req.body;
 
    const options = {
      hostname: 'api.paystack.co',
      port: 443,
      path: "/bank/resolve?account_number="+ account + "&bank_code=" + code,
      url:"https://api.paystack.co/bank/resolve?account_number="+ account + "&bank_code=" + code,
      method: 'GET',
      headers: {
        
        Authorization: `Bearer ${process.env.YOUR_SECRET_KEY}`
        
    }
      }
      axios.request(options).then(function (response) {
        console.log(response.data);
        res.send(response.data);
    }).catch(function (error) {
        console.error(error);
    });
});

const server=app.listen('5000',()=>{
    console.log('server running...')
})
Server.timeout=10000