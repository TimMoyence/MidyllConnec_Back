import Debug from 'debug';
import client from './client.js';

const debug = Debug('mydillConnect:models:dataMapper');

export default class DataMapper {
  async getAll() {
    const preparedQuery = {
      text: `SELECT * FROM ${this.constructor.tableName}`,
    };
    const result = await client.query(preparedQuery);
    return result.rows;
  }

  async getById(id) {
    const preparedQuery = {
      text: `SELECT * FROM ${this.constructor.tableName} WHERE id = $1`,
      values: [id],
    };
    const result = await client.query(preparedQuery);
    return result.rows[0];
  }

  async create(data) {
    const fields = Object.keys(data);
    const values = fields.map((field) => data[field]);
    const text = `INSERT INTO ${this.constructor.tableName} (${fields.join(
      ', ',
    )}) VALUES (${values.map((_, i) => `$${i + 1}`).join(', ')}) RETURNING *`;
    const query = {
      text,
      values,
    };
    const result = await client.query(query);
    return result.rows[0];
  }

  async update(id, data) {
    if (data.id) {
      delete data.id;
    }
    if (data.benefits) {
      const dataWhitBenefits = data.benefits;
      const allBenefits = await client.query('SELECT * FROM benefit');
      const query = {
        text: `DELETE FROM ${this.constructor.liaisonTable} WHERE massage_id = $1`,
        values: [id],
      };
      await client.query(query);
      dataWhitBenefits.forEach((benefit) => {
        const benefitExist = allBenefits.rows.find((b) => b.name === benefit);
        if (benefitExist) {
          this.updateBenefits(id, benefitExist.id);
        }
      });
      delete data.benefits;
    }
    if (data.stone) {
      dataWhitStone = data.stone;
      delete data.stone;
    }
    const fields = Object.keys(data);
    const values = fields.map((field) => data[field]);
    const setAssignments = fields
      .map((field, i) => `${field} = $${i + 1}`)
      .join(', ');
    const text = `UPDATE ${
      this.constructor.tableName
    } SET ${setAssignments} WHERE id = $${fields.length + 1} RETURNING *`;

    const query = {
      text,
      values: [...values, id],
    };
    const result = await client.query(query);
    return result.rows[0];
  }

  async updateBenefits(id, data) {
    const query2 = {
      text: `INSERT INTO ${this.constructor.liaisonTable} (${this.constructor.liaisonInsertProperty}) VALUES ($1, $2)`,
      values: [id, data],
    };
    const result = await client.query(query2);
    return 'Update Ok';
  }

  async delete(id) {
    const query = {
      text: `DELETE FROM ${this.constructor.tableName} WHERE id = $1`,
      values: [id],
    };
    await client.query(query);
    return 'Deletion Ok';
  }

  async createLiaisonTable(liaisonValue1, laisonValue2) {
    const query = {
      text: `
        INSERT INTO ${this.constructor.liaisonTable} (${this.constructor.liaisonInsertProperty})
        VALUES ($1, $2);
      `,
      values: [liaisonValue1, laisonValue2],
    };
    const result = await client.query(query);
    return result.rows;
  }

  async createLiaisonTableForOil(liaisonValue1, laisonValue2) {
    const query = {
      text: `
        INSERT INTO ${this.constructor.liaisonTableHuile} (${this.constructor.liaisonInsertPropertyHuile})
        VALUES ($1, $2);
      `,
      values: [liaisonValue1, laisonValue2],
    };
    const result = await client.query(query);
    return result.rows;
  }
}
