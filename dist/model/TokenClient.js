"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The TokenClient model module.
 * @module model/TokenClient
 * @version 1.0.0
 */
var TokenClient = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TokenClient</code>.
   * @alias module:model/TokenClient
   */
  function TokenClient() {
    _classCallCheck(this, TokenClient);

    TokenClient.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TokenClient, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TokenClient</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TokenClient} obj Optional instance to populate.
     * @return {module:model/TokenClient} The populated <code>TokenClient</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TokenClient();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('user_id')) {
          obj['user_id'] = _ApiClient["default"].convertToType(data['user_id'], 'Number');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('provider')) {
          obj['provider'] = _ApiClient["default"].convertToType(data['provider'], 'String');
        }

        if (data.hasOwnProperty('redirect')) {
          obj['redirect'] = _ApiClient["default"].convertToType(data['redirect'], 'String');
        }

        if (data.hasOwnProperty('personal_access_client')) {
          obj['personal_access_client'] = _ApiClient["default"].convertToType(data['personal_access_client'], 'Boolean');
        }

        if (data.hasOwnProperty('password_client')) {
          obj['password_client'] = _ApiClient["default"].convertToType(data['password_client'], 'Boolean');
        }

        if (data.hasOwnProperty('revoked')) {
          obj['revoked'] = _ApiClient["default"].convertToType(data['revoked'], 'Boolean');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'Date');
        }
      }

      return obj;
    }
  }]);

  return TokenClient;
}();
/**
 * @member {Number} id
 */


TokenClient.prototype['id'] = undefined;
/**
 * @member {Number} user_id
 */

TokenClient.prototype['user_id'] = undefined;
/**
 * @member {String} name
 */

TokenClient.prototype['name'] = undefined;
/**
 * @member {String} provider
 */

TokenClient.prototype['provider'] = undefined;
/**
 * @member {String} redirect
 */

TokenClient.prototype['redirect'] = undefined;
/**
 * @member {Boolean} personal_access_client
 */

TokenClient.prototype['personal_access_client'] = undefined;
/**
 * @member {Boolean} password_client
 */

TokenClient.prototype['password_client'] = undefined;
/**
 * @member {Boolean} revoked
 */

TokenClient.prototype['revoked'] = undefined;
/**
 * @member {Date} created_at
 */

TokenClient.prototype['created_at'] = undefined;
/**
 * @member {Date} updated_at
 */

TokenClient.prototype['updated_at'] = undefined;
var _default = TokenClient;
exports["default"] = _default;