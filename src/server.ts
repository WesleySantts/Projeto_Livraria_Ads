import express from 'express';
import userRoutes from '../src/routes/authRoutes';
import authRoutes from '../src/routes/bookRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());


// Utilizando as rotas de usuários
app.use(userRoutes);
app.use(authRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});