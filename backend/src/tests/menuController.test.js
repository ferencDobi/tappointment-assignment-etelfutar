const sinon = require('sinon');
const DataTypes = require('sequelize');
require('should');

const connection = require('../utilities/testDb');
const MenuItem = require('../models/MenuItem')(connection, DataTypes);
const controller = require('../controllers/menuController')(MenuItem);
const matchers = require('../utilities/matchers');
const MenuToDTO = require('../models/MenuToDTO');
const testData = require('../utilities/testData');

const testDataDTO = MenuToDTO.convertMany(testData);

describe('Menu Controller Tests:', () => {
  before(() => MenuItem.bulkCreate(testData));

  after(() => MenuItem.destroy({ truncate: true }));

  describe('Get', () => {
    let response;

    beforeEach(() => {
      response = {
        json: sinon.spy()
      };
    });

    it('should return all items when called without a category', async () => {
      await controller.get({ query: {} }, response);

      response.json.calledWithMatch(
        sinon.match(items => matchers.equalsInAnyOrder(items, testDataDTO, 'id'))
      ).should.equal(true);
    });

    it('should return filtered items when provided with a category', async () => {
      const request = {
        query: {
          category: 'starter'
        }
      };

      await controller.get(request, response);

      const filteredData = testDataDTO.filter(data => data.category === 'starter');

      response.json.calledWithMatch(
        sinon.match(items => matchers.equalsInAnyOrder(items, filteredData, 'id'))
      ).should.equal(true);
    });
  });
});
