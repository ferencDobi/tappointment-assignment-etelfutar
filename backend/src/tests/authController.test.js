const sinon = require('sinon');
const DataTypes = require('sequelize');
require('should');

const connection = require('../utilities/testDb');
const User = require('../models/User')(connection, DataTypes);
const controller = require('../controllers/authController')(User);
const matchers = require('../utilities/matchers');

const testUser = { id: 1, email: 'email@host.com', password: 'password' };

describe('Auth Controller Tests:', () => {
  let response;

  beforeEach(() => {
    User.create(testUser);

    response = {
      json: sinon.spy(),
      status: sinon.spy()
    };
  });

  afterEach(() => User.destroy({ truncate: true }));

  describe('Login', () => {
    it('should return the id of the user when user is authenticated', async () => {
      const request = {
        user: testUser
      };

      await controller.login(request, response);

      response.json.calledWithMatch(
        sinon.match({ id: 1 })
      ).should.equal(true);
    });
  });

  describe('Logout', () => {
    it('should call the logout on the request');
    it('should destroy the session');
    it('should clear the client\'s session cookie');
  });

  describe('Register', () => {
    it('should create a new user when given a unique email');
    it('should log any newly created user in');
    it('should return an error message when given an already used email');
  });
});
