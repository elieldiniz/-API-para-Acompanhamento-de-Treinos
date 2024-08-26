import express from 'express';
import { PrismaClient, User } from '../../Acompanhamento-de-Treinos/node_modules/@prisma/client/index'; // Import Prisma and User model
import UserController from './user/controller/UserControler'; // Import UserController

const app = express();

const port = process.env.PORT || 3000;

// ... (error handling middleware if needed)

app.post('/users', async (req, res) => {
  try {
    const {name ,email, password} = req.body;

    const userController = new UserController();
    const createdUser = await userController.create({
      name,
      email,
      password,
    });



    res.status(201).json(createdUser);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error});
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});