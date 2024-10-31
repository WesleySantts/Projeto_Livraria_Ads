import pool from '../config/database';

const createBookTable = async () => {
  const client = await pool.connect();
  try {
    const queryText = `
      CREATE TABLE IF NOT EXISTS book (
        id SERIAL PRIMARY KEY,
        title VARCHAR(100) NOT NULL,
        author VARCHAR(100) UNIQUE NOT NULL,
        price DECIMAL(100) UNIQUE NOT NULL

      );
    `;
    await client.query(queryText);
    console.log('Tabela "book" criada com sucesso!');
  } catch (err) {
    console.error('Erro ao criar tabela:', err);
  } finally {
    client.release();
  }
};

  createBookTable().then(() => process.exit(0));