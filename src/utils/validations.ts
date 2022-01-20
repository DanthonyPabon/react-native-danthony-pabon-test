const validations = {
  basicField: {
    required: { message: 'The field cannot be empty', value: true },
  },
  email: {
    pattern: {
      message: 'Must be formatted: john.doe@email.com',
      value: /\b[\w+.\\-]+@[\w.\\-]+\.\w{2,4}\b/,
    },
    required: 'Email is required!',
  },
};

export default validations;
