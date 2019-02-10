import React, { Fragment, Component } from 'react';
import * as yup from 'yup';
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
        value: "", title: "E-mail cím", name: "email", type: "text", error: null, required: true
    },
    password: {
        value: "", title: "Jelszó", name: "password", type: "password", error: null, required: true
    },
    confirmPassword: {
        value: "", title: "Jelszó megerősítése", name: "confirmPassword", type: "password", 
        error: null, required: true
    },
    messages: [],
    form: forms.login
  };

  handleChange = event => {
    const target = event.target.name;
    this.setState({ [target]: { ...this.state[target], value: event.target.value } });
  };

  validateFields = (formData, formType) => {
    const emailInvalid = 'Adj meg egy valós e-mailt!';
    const passwordTooShort = 'Adj meg legalább 8 karakteres jelszót!';
    const passwordDiffers = 'A jelszónak egyeznie kell!';

    const shape = {
      email: yup.string().email(emailInvalid),
      password: yup.string().min(8, passwordTooShort)
    }

    if (formType === 'register') {
      shape.confirmPassword = yup.string().oneOf([yup.ref('password')], passwordDiffers);
    }

    const schema = yup.object().shape(shape);

    return schema.validate(formData, { abortEarly: false });
  };

  getFormData = formType => {
    const [ email, password, confirmPassword ] = [
      this.state.email.value, 
      this.state.password.value, 
      this.state.confirmPassword.value
    ];

    return formType === "login" 
      ? { email, password } 
      : { email, password, confirmPassword };
  };

  resetErrors = () => {
    ['email', 'password', 'confirmPassword'].forEach(field => {
      this.setState({ [field]: { ...this.state[field], error: null } });
    });
  };
  
  handleSubmit = event => {
    event.preventDefault();

    const formType = this.state.form.type;
    const formData = this.getFormData(formType);
    const { registerUser, validateUser } = this.props;

    this.validateFields(formData, formType).then(() => {
      this.resetErrors();
      formType === "login" ? validateUser(formData) : registerUser(formData);
    }).catch(reason => {
      this.resetErrors();
      reason.inner.forEach(field => {
        this.setState({ [field.path]: { ...this.state[field.path], error: field.message } });
      });
    });
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