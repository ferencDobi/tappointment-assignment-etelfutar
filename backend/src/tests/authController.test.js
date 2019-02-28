const sinon = require('sinon');
const DataTypes = require('sequelize');
require('chai').should();

const connection = require('./utils/testDb');
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
        session: { destroy: sinon.stub() }
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

      request.session.destroy.callArg(0);
      response.status.calledWith(200).should.be.true;
      response.clearCookie.calledWithMatch(
        sinon.match('connect.sid'),
        sinon.match({ path: '/' })
      ).should.be.true;
      response.json.calledOnce.should.be.true;
    });
  });

  describe('Register', () => {
    let request;

    beforeEach(() => {
      response = {
        json: sinon.spy(),
        status: sinon.spy(),
      };

      request = {
        login: sinon.stub()
      };
    });

    it('should create a new user when given a unique email', async () => {
      request.body = { email: 'email2@host.com', password: 'password' };

      await controller.register(request, response);

      const user = request.login.firstCall.args[0];

      user.should.have.property('email').equal('email2@host.com');
    });

    it('should log any newly created user in', async () => {
      request.body = { email: 'email2@host.com', password: 'password' };

      await controller.register(request, response);

      request.login.calledOnce.should.be.true;
      request.login.callArg(1);
      response.status.calledWith(201).should.be.true;
      response.json.calledWithMatch(
        sinon.match.hasOwn('id', sinon.match(id => id !== 1))
      ).should.be.true;
    });

    it('should respond with an error when given an already used email', async () => {
      request.body = { email: testUser.email, password: 'password' };

      await controller.register(request, response);

      response.status.calledWith(400).should.be.true;
      response.json.calledWithMatch(
        sinon.match.hasOwn('error')
      ).should.be.true;
    });
  });
});
