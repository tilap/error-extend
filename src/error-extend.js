module.exports = ({ name, code = 500, defaultMessage = '', init = false} = {}) => {
  function CustomError(message) {
    if (!Error.captureStackTrace) {
      this.stack = (new Error()).stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }

    this.message = message || defaultMessage;

    this.code = code;
    this.statusCode = code;

    if (init) {
      init.apply(this, arguments);
    }
  }

  CustomError.prototype.name = name;

  CustomError.prototype.constructor = CustomError;

  return CustomError;
};
