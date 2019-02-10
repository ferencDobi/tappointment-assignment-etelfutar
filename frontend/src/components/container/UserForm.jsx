import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { Note } from '../presentational/Note';
import { FormField } from '../presentational/FormField';
import { registerUser, validateUser } from '../../actions/userActions';

const forms = {
  login: { type: "login", title: "Belépés", other: "Regisztráció" },
  register: { type: "register", title: "Regisztráció", other: "Belépés" }
}

class UserForm extends Component {
  state = {
    email: {
        value: "", title: "E-mail cím", name: "email", type: "email", required: true
    },
    password: {
        value: "", title: "Jelszó", name: "password", type: "password", required: true
    },
    confirmPassword: {
        value: "", title: "Jelszó megerősítése", name: "confirmPassword", type: "password", required: true
    },
    messages: [],
    form: forms.login
  };

  handleChange = event => {
    let target = event.target.name;
    this.setState({ [target]: { ...this.state[target], value: event.target.value } });
  };
  
  handleSubmit = event => {
    event.preventDefault();

    const { email, password, confirmPassword, form } = this.state;
    const { registerUser, validateUser } = this.props;

    if (form.type === "login") {
      validateUser({ email, password });
    } else {
      registerUser({ email, password, confirmPassword });
    }
  };

  toggleForm = () => {
    if (this.state.form === forms.login) {
      this.setState({ form: forms.register });
    } else {
      this.setState({ form: forms.login });
    }
  }

  render() {
    const { email, password, confirmPassword, form, messages } = this.state;
    
    let fields = [email, password];
    form.type === "register" && fields.push(confirmPassword);

    return (
      <Fragment>
        <Note title={form.title}>
          <form onSubmit={this.handleSubmit}>
            {fields.map(field => 
              <FormField key={field.name} field={field} changeHandler={this.handleChange}/>)}
            {messages.map(message => 
              <p className={`${message.type}-message`}>{message.message}</p>)}
            <div className="form-buttons">
              <button type="submit">Elküldés</button>
              <button type="button" onClick={this.toggleForm}>{form.other}</button>
            </div>
          </form>
        </Note>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ cart }) => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
    registerUser: user => {
      dispatch(registerUser(user));
    },

    validateUser: user => {
      dispatch(validateUser(user));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);