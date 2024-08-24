import express from 'express';
import User from './user/User';

const app = express();
const port = process.env.PORT || 3000;

app.get('/user', (req, res) => {

    const user = {name: 'leil D1niz', email: 'elieldinoiz@gmail.com', password: '@dakfa'};

    const UserIntance = new User(user.name, user.email, user.password)
    res.json(UserIntance)
  
}); 

app.listen(port, () => {
    console.log('server ativo localhost:3000')
});  

