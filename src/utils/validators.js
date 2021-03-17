const validate = (rules) => (...args) => {
  const error = rules.find((element) => !element.rule(...args));
  if (error && error.message) return ({ error: true, message: error.message })
  return ({ error: false, message: "" });
};

const createValidator = (rules) => ({
  validate: validate(rules),
})

const createRule = (rule, message) => ({ rule, message })

const registerValidator = {
  username: createValidator([
    createRule((value) => value.length >= 1, "Имя должно быть не менее 1 символа"),
    createRule((value) => value.length <= 50, "Имя не может быть длиннее 50 символов"),
    createRule((value) => /^[a-zA-Z0-9]*$/.test(value), "Имя должно содержать только латинские буквы и цифры"),
  ]),
  password: createValidator([
    createRule((value) => value.length >= 6, "Пароль должен быть не менее 6 символа"),
    createRule((value) => value.length <= 128, "Пароль не может быть длиннее 128 символов"),
  ]),
  confirmPassword: createValidator([
    createRule((a, b) => a === b, "Пароли не совпадают")
  ]),
}

export default registerValidator
