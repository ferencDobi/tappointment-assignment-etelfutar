class AuthenticationException {
  constructor(message) {
    this.message = message;
    this.name = 'AuthenticationException';
  }

  toString() {
    return `${this.name}: ${this.message}`;
  }
}

module.exports = { AuthenticationException };
