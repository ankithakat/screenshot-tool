const express = require('express');
const cors = require('cors');

const app = express();

const PORT = 3001;

app.use(express.json());
app.use(cors());


app.get('/api/ping', (req,res) => {
    console.log('pong');
    res.json({"message": "pong"})

});


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});

