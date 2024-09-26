import client from './client.js';

export default {

  async registerUser(user) {
    const query = `
      INSERT INTO "admin_user"(firstname,lastname,email,password)
      VALUES($1,$2,$3,$4)
      RETURNING *;
    `;
    const values = [
      user.firstname,
      user.lastname,
      user.email,
      user.password,
    ];
    const results = await client.query(query, values);
    return results.rows[0];
  },

  async getUserById(id) {
    const result = await client.query('SELECT * FROM "admin_user" WHERE id = $1', [
      id,
    ]);
      return result.rows[0];
  },

  async getUserByEmail(email) {
    const result = await client.query('SELECT * FROM "admin_user" WHERE email = $1', [
      email,
    ]);
    return result.rows[0];
  },
};
