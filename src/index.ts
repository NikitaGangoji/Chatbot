import express from 'express';
import * as chatbot from 'any-chatbot'
//import * as chatbot from './handler'
const data = require('../src/data/updatedChatbot.json');
const app = express();
const port = 3000;

// app.get('/', (req, res) => {
//     const msg = chatbot.init(data);
//     res.send(msg);
// });

// app.get('/:option?/:type?', (req, res) => {
//     const resp = chatbot.readData(data, req.params.option, req.params.type);
//     res.send(resp);
// });

app.get('/:option?', (req, res) => {
    const resp = chatbot.fetchData(data, req.params.option);
    res.send(resp);
});

app.listen(port, () => {

    return console.log(`Express is listening at http://localhost:${port}`);

});