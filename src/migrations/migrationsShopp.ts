import pool from '../config/database';

const createShoppingTable = async () => {
  const client = await pool.connect();
  try {
    const queryText = `
      CREATE TABLE IF NOT EXISTS shopping (
        id SERIAL PRIMARY KEY,
        descrition VARCHAR(100) NOT NULL,
        price DECIMAL(100) UNIQUE NOT NULL,
        quantity DECIMAL(100) UNIQUE NOT NULL,
        id_Book int,
        id_User int,
        
        FOREIGN KEY (id_Book) REFERENCES book(id),
        FOREIGN KEY (id_User) REFERENCES users(id)

      );
    `;
    await client.query(queryText);
    console.log('Tabela "shopping" criada com sucesso!');
  } catch (err) {
    console.error('Erro ao criar tabela:', err);
  } finally {
    client.release();
  }
};

    createShoppingTable().then(() => process.exit(0));