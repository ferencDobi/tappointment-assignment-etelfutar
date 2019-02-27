const sinon = require('sinon');
const DataTypes = require('sequelize');
require('chai').should();

const connection = require('../utilities/testDb');
const User = require('../models/User')(connection, DataTypes);
const controller = require('../controllers/authController')(User);

const testUser = { id: 1, email: 'email@host.com', password: 'password' };

describe('Auth Controller Tests:', () => {
  let response;

  beforeEach(() => User.create(testUser));

  afterEach(() => User.destroy({ truncate: true }));

  describe('Login', () => {
    beforeEach(() => {
      response = {
        json: sinon.spy()
      };
    });

    it('should return the id of the user when user is authenticated', async () => {
      const request = {
        user: testUser
      };

      await controller.login(request, response);

      response.json.calledOnce.should.be.true;
      response.json.calledWithMatch(
        sinon.match({ id: 1 })
      ).should.be.true;
    });
  });

  describe('Logout', () => {
    let request;

    beforeEach(() => {
      response = {
        json: sinon.spy(),
        status: sinon.spy(),
        clearCookie: sinon.spy()
      };

      request = {
        logout: sinon.spy(),
        session: { destroy: sinon.spy() }
      };
    });

    it('should call logout on the request', async () => {
      await controller.logout(request, response);

      request.logout.calledOnce.should.be.true;
    });

    it('should destroy the session', async () => {
      await controller.logout(request, response);

      request.session.destroy.calledOnce.should.be.true;
    });

    it('should clear the client\'s session cookie', async () => {
      await controller.logout(request, response);

      request.session.destroy.args[0][0]();
      response.status.calledWith(200);
      response.clearCookie.calledWithMatch(
        sinon.match('connect.sid'),
        sinon.match({ path: '/' })
      ).should.be.true;
      response.json.calledOnce.should.be.true;
    });
  });

  describe('Register', () => {
    it('should create a new user when given a unique email');
    it('should log any newly created user in');
    it('should return an error message when given an already used email');
  });
});
