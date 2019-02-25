const sinon = require('sinon');
const should = require('should');
const DataTypes = require('sequelize');

const connection = require('../utilities/testDb');
const MenuItem = require('../models/MenuItem')(connection, DataTypes);
const controller = require('../controllers/menuController')(MenuItem);
const testData = require('../utilities/testData');
const MenuToDTO = require('../models/MenuToDTO');

beforeEach(() => MenuItem.bulkCreate(testData));

afterEach(() => MenuItem.destroy({ truncate: true }));

describe('Menu Controller Tests:', () => {
  describe('Get', () => {
    it('should return all items when called without a category', async () => {
      const response = {
        json: sinon.spy()
      };

      await controller.get({ query: {} }, response);

      response.json.calledWithMatch(
        sinon.match(items => JSON.stringify(
          items.sort((a, b) => a.id - b.id)
        ) === JSON.stringify(
          MenuToDTO.convertMany(testData).sort((a, b) => a.id - b.id)
        ))
      ).should.equal(true);
    });
  });
});
