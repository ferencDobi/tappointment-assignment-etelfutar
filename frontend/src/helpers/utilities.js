const formToUser = formData => {
  return {
    email: formData.email.value,
    password: formData.password.value
  };
};

export { formToUser };
