const express = require('express');
const path = require('path')

const app = express();
const views=path.join(__dirname,'views')
app.use(express.static(__dirname + '/public'));

app.get('/',(req,res)=>{
    res.sendFile(path.join(views,'index.html'))
})

app.listen(4060,()=>{
    console.log('Servidor corriendo en el puerto 4060');
})