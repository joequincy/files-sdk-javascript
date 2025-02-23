"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
exports.__esModule = true;
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _Api = _interopRequireDefault(require("../Api"));
var errors = _interopRequireWildcard(require("../Errors"));
var _Logger = _interopRequireDefault(require("../Logger"));
var _utils = require("../utils");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2.default)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * Class RemoteServerConfigurationFile
 */
var RemoteServerConfigurationFile = /*#__PURE__*/(0, _createClass2.default)(function RemoteServerConfigurationFile() {
  var _this = this;
  var attributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  (0, _classCallCheck2.default)(this, RemoteServerConfigurationFile);
  (0, _defineProperty2.default)(this, "attributes", {});
  (0, _defineProperty2.default)(this, "options", {});
  (0, _defineProperty2.default)(this, "isLoaded", function () {
    return !!_this.attributes.id;
  });
  // int64 # Agent ID
  (0, _defineProperty2.default)(this, "getId", function () {
    return _this.attributes.id;
  });
  // string #
  (0, _defineProperty2.default)(this, "getPermissionSet", function () {
    return _this.attributes.permission_set;
  });
  // string # Files Agent API Token
  (0, _defineProperty2.default)(this, "getApiToken", function () {
    return _this.attributes.api_token;
  });
  // string # Agent local root path
  (0, _defineProperty2.default)(this, "getRoot", function () {
    return _this.attributes.root;
  });
  // int64 # Incoming port for files agent connections
  (0, _defineProperty2.default)(this, "getPort", function () {
    return _this.attributes.port;
  });
  // string
  (0, _defineProperty2.default)(this, "getHostname", function () {
    return _this.attributes.hostname;
  });
  // string # public key
  (0, _defineProperty2.default)(this, "getPublicKey", function () {
    return _this.attributes.public_key;
  });
  // string # private key
  (0, _defineProperty2.default)(this, "getPrivateKey", function () {
    return _this.attributes.private_key;
  });
  // string # either running or shutdown
  (0, _defineProperty2.default)(this, "getStatus", function () {
    return _this.attributes.status;
  });
  // string # agent config version
  (0, _defineProperty2.default)(this, "getConfigVersion", function () {
    return _this.attributes.config_version;
  });
  // string
  (0, _defineProperty2.default)(this, "getServerHostKey", function () {
    return _this.attributes.server_host_key;
  });
  // string
  (0, _defineProperty2.default)(this, "getSubdomain", function () {
    return _this.attributes.subdomain;
  });
  Object.entries(attributes).forEach(function (_ref) {
    var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
      key = _ref2[0],
      value = _ref2[1];
    var normalizedKey = key.replace('?', '');
    _this.attributes[normalizedKey] = value;
    Object.defineProperty(_this, normalizedKey, {
      value: value,
      writable: false
    });
  });
  this.options = _objectSpread({}, options);
});
var _default = RemoteServerConfigurationFile;
exports.default = _default;
module.exports = RemoteServerConfigurationFile;
module.exports.default = RemoteServerConfigurationFile;