import Debug from 'debug';

const debug = Debug('mydillConnect:controller:index');

export default class CoreController {
  constructor() {
    debug('indexController constructor');
  }

  async getAll(_, res) {
    const result = await this.constructor.dataMapper.getAll();
    res.json(result);
  }

  async getById(req, res) {
    const { id } = req.params;
    const result = await this.constructor.dataMapper.getById(id);
    res.json(result);
  }

  async create(req, res) {
    const result = await this.constructor.dataMapper.create(req.body);
    res.json(result);
  }

  async update(req, res) {
    const { id } = req.params;
    const result = await this.constructor.dataMapper.update(id, req.body);
    res.json(result);
  }

  async delete(req, res) {
    const { id } = req.params;
    const result = await this.constructor.dataMapper.delete(id);
    res.json(result);
  }

  async getByIdWithLiaisonTable(req, res) {
    const { id } = req.params;
    const result = await this.constructor.dataMapper.getByIdWithLiaisonTable(id);
    res.json(result);
  }

  async getAllWithLiaisonTable(req, res) {
    const result = await this.constructor.dataMapper.getAllWithLiaisonTable();
    res.json(result);
  }

  async createLiaisonTable(req, res) {
    const data = req.body;
    let { data1 } = this.constructor;
    const { data2 } = this.constructor;
    let element = this.constructor.dataMapper.createLiaisonTable(data[data1], data[data2]);
    const keys = Object.keys(data);

    keys.forEach((key) => {
      if (key === 'huile_id') {
        data1 = this.constructor.data3;
        element = this.constructor.dataMapper.createLiaisonTableForOil(data[data1], data[data2]);
      }
    });
    await element;
    res.json('liaison table created');
  }
}
