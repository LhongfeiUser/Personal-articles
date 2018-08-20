let express = require('express');
let app = express();

app.get('/a',function (req, res) {
    res.send('hello 你我他')
});

app.listen(3000,()=>{
    console.log('success');
});