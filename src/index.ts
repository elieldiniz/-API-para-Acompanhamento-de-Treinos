import express from 'express';
import Cadastar from './user/CadastrarUser';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    const user = {name: 'eliele', email: 'eliel@eliel.com', password: '22222'}

}); 

app.listen(port, () => {
});  

