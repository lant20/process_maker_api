"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TokenClient = _interopRequireDefault(require("./TokenClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The UserToken model module.
 * @module model/UserToken
 * @version 1.0.0
 */
var UserToken = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UserToken</code>.
   * @alias module:model/UserToken
   */
  function UserToken() {
    _classCallCheck(this, UserToken);

    UserToken.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UserToken, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>UserToken</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserToken} obj Optional instance to populate.
     * @return {module:model/UserToken} The populated <code>UserToken</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UserToken();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('user_id')) {
          obj['user_id'] = _ApiClient["default"].convertToType(data['user_id'], 'Number');
        }

        if (data.hasOwnProperty('client_id')) {
          obj['client_id'] = _ApiClient["default"].convertToType(data['client_id'], 'Number');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('scopes')) {
          obj['scopes'] = _ApiClient["default"].convertToType(data['scopes'], Object);
        }

        if (data.hasOwnProperty('revoked')) {
          obj['revoked'] = _ApiClient["default"].convertToType(data['revoked'], 'Boolean');
        }

        if (data.hasOwnProperty('client')) {
          obj['client'] = _TokenClient["default"].constructFromObject(data['client']);
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'Date');
        }

        if (data.hasOwnProperty('expires_at')) {
          obj['expires_at'] = _ApiClient["default"].convertToType(data['expires_at'], 'Date');
        }
      }

      return obj;
    }
  }]);

  return UserToken;
}();
/**
 * @member {String} id
 */


UserToken.prototype['id'] = undefined;
/**
 * @member {Number} user_id
 */

UserToken.prototype['user_id'] = undefined;
/**
 * @member {Number} client_id
 */

UserToken.prototype['client_id'] = undefined;
/**
 * @member {String} name
 */

UserToken.prototype['name'] = undefined;
/**
 * @member {Object} scopes
 */

UserToken.prototype['scopes'] = undefined;
/**
 * @member {Boolean} revoked
 */

UserToken.prototype['revoked'] = undefined;
/**
 * @member {module:model/TokenClient} client
 */

UserToken.prototype['client'] = undefined;
/**
 * @member {Date} created_at
 */

UserToken.prototype['created_at'] = undefined;
/**
 * @member {Date} updated_at
 */

UserToken.prototype['updated_at'] = undefined;
/**
 * @member {Date} expires_at
 */

UserToken.prototype['expires_at'] = undefined;
var _default = UserToken;
exports["default"] = _default;