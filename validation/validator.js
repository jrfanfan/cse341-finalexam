const { body, validationResult } = require('express-validator')
const contactValidationRules = () => {
  return [
    body('firstname').isString().not().isEmpty(),
    body('lastname').isString().not().isEmpty(),
    body('email').isEmail().not().isEmpty(),
    body('idnumber').isLength({ min: 4 })
  ]
}

const validate = (req, res, next) => {
  const errors = validationResult(req)
  if (errors.isEmpty()) {
    return next()
  }
  const extractedErrors = []
  errors.array().map(err => extractedErrors.push({ [err.params]: err.msg }))

  return res.status(422).json({
    errors: extractedErrors,
  })
}

module.exports = {
  contactValidationRules,
  validate
}
