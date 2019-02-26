const sinon = require('sinon');
const should = require('should');
const DataTypes = require('sequelize');

const connection = require('../utilities/testDb');
const MenuItem = require('../models/MenuItem')(connection, DataTypes);
const controller = require('../controllers/menuController')(MenuItem);
const matchers = require('../utilities/matchers');
const MenuToDTO = require('../models/MenuToDTO');
const testData = require('../utilities/testData');

const testDataDTO = MenuToDTO.convertMany(testData);

beforeEach(() => MenuItem.bulkCreate(testData));

afterEach(() => MenuItem.destroy({ truncate: true }));

describe('Menu Controller Tests:', () => {
  describe('Get', () => {
    let response;

    before(() => {
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
