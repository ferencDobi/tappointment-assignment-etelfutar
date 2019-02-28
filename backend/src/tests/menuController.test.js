const sinon = require('sinon');
const DataTypes = require('sequelize');
require('chai').should();

const connection = require('./utils/testDb');
const MenuItem = require('../models/MenuItem')(connection, DataTypes);
const controller = require('../controllers/menuController')(MenuItem);
const MenuToDTO = require('../models/MenuToDTO');
const testData = require('./utils/testData');

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

      response.json.calledOnce.should.be.true;
      response.json.calledWithMatch(
        sinon.match.array.deepEquals(testDataDTO)
      ).should.be.true;
    });

    it('should return filtered items when provided with a category', async () => {
      const request = {
        query: {
          category: 'starter'
        }
      };

      await controller.get(request, response);

      const filteredData = testDataDTO.filter(data => data.category === 'starter');

      response.json.calledOnce.should.be.true;
      response.json.calledWithMatch(
        sinon.match.array.deepEquals(filteredData)
      ).should.be.true;
    });
  });
});
