"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = exports.LogLevel = void 0;
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _class;
var Logger = /*#__PURE__*/(0, _createClass2.default)(function Logger() {
  (0, _classCallCheck2.default)(this, Logger);
});
_class = Logger;
(0, _defineProperty2.default)(Logger, "LogLevel", {
  NONE: 0,
  ERROR: 1,
  WARN: 2,
  INFO: 3,
  DEBUG: 4
});
(0, _defineProperty2.default)(Logger, "getLogLevelMethod", function (level) {
  switch (level) {
    case _class.LogLevel.ERROR:
      return 'error';
    case _class.LogLevel.WARN:
      return 'warn';
    case _class.LogLevel.INFO:
      return 'info';
    case _class.LogLevel.DEBUG:
      return 'log';
  }
  return 'log';
});
(0, _defineProperty2.default)(Logger, "isPaused", false);
(0, _defineProperty2.default)(Logger, "getLogLevelName", function (level) {
  switch (level) {
    case LogLevel.ERROR:
      return 'error';
    case LogLevel.WARN:
      return 'warn';
    case LogLevel.INFO:
      return 'info';
    case LogLevel.DEBUG:
      return 'debug';
  }
  return level;
});
(0, _defineProperty2.default)(Logger, "error", function () {
  for (var _len = arguments.length, messages = new Array(_len), _key = 0; _key < _len; _key++) {
    messages[_key] = arguments[_key];
  }
  _class.log.apply(_class, [LogLevel.ERROR].concat(messages));
});
(0, _defineProperty2.default)(Logger, "warn", function () {
  for (var _len2 = arguments.length, messages = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    messages[_key2] = arguments[_key2];
  }
  _class.log.apply(_class, [LogLevel.WARN].concat(messages));
});
(0, _defineProperty2.default)(Logger, "info", function () {
  for (var _len3 = arguments.length, messages = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    messages[_key3] = arguments[_key3];
  }
  _class.log.apply(_class, [LogLevel.INFO].concat(messages));
});
(0, _defineProperty2.default)(Logger, "debug", function () {
  for (var _len4 = arguments.length, messages = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    messages[_key4] = arguments[_key4];
  }
  _class.log.apply(_class, [LogLevel.DEBUG].concat(messages));
});
(0, _defineProperty2.default)(Logger, "log", function () {
  var _console;
  var level = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : LogLevel.INFO;
  for (var _len5 = arguments.length, messages = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
    messages[_key5 - 1] = arguments[_key5];
  }
  if (_class.isPaused || messages.length === 0) {
    return;
  }
  var Files = require('./Files').default;
  if (Files.getLogLevel() < level) {
    return;
  }
  var prefix = "[".concat(_class.getLogLevelName(level), "]: ");
  var method = _class.getLogLevelMethod(level);
  (_console = console)[method].apply(_console, [prefix].concat(messages));
});
(0, _defineProperty2.default)(Logger, "pause", function () {
  _class.isPaused = true;
});
(0, _defineProperty2.default)(Logger, "unpause", function () {
  _class.isPaused = false;
});
var LogLevel = Logger.LogLevel;
exports.LogLevel = LogLevel;
var _default = Logger;
exports.default = _default;
module.exports = Logger;
module.exports.default = Logger;