'use strict';

module.exports = function () {
  var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var name = _ref.name;
  var _ref$code = _ref.code;
  var code = _ref$code === undefined ? 500 : _ref$code;
  var _ref$defaultMessage = _ref.defaultMessage;
  var defaultMessage = _ref$defaultMessage === undefined ? '' : _ref$defaultMessage;
  var _ref$init = _ref.init;
  var init = _ref$init === undefined ? false : _ref$init;

  function CustomError(message) {
    if (!Error.captureStackTrace) {
      this.stack = new Error().stack;
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