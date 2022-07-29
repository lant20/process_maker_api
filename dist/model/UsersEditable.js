"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Media = _interopRequireDefault(require("./Media"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The UsersEditable model module.
 * @module model/UsersEditable
 * @version 1.0.0
 */
var UsersEditable = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UsersEditable</code>.
   * @alias module:model/UsersEditable
   */
  function UsersEditable() {
    _classCallCheck(this, UsersEditable);

    UsersEditable.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UsersEditable, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>UsersEditable</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UsersEditable} obj Optional instance to populate.
     * @return {module:model/UsersEditable} The populated <code>UsersEditable</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UsersEditable();

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('firstname')) {
          obj['firstname'] = _ApiClient["default"].convertToType(data['firstname'], 'String');
        }

        if (data.hasOwnProperty('lastname')) {
          obj['lastname'] = _ApiClient["default"].convertToType(data['lastname'], 'String');
        }

        if (data.hasOwnProperty('username')) {
          obj['username'] = _ApiClient["default"].convertToType(data['username'], 'String');
        }

        if (data.hasOwnProperty('password')) {
          obj['password'] = _ApiClient["default"].convertToType(data['password'], 'String');
        }

        if (data.hasOwnProperty('address')) {
          obj['address'] = _ApiClient["default"].convertToType(data['address'], 'String');
        }

        if (data.hasOwnProperty('city')) {
          obj['city'] = _ApiClient["default"].convertToType(data['city'], 'String');
        }

        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], 'String');
        }

        if (data.hasOwnProperty('postal')) {
          obj['postal'] = _ApiClient["default"].convertToType(data['postal'], 'String');
        }

        if (data.hasOwnProperty('country')) {
          obj['country'] = _ApiClient["default"].convertToType(data['country'], 'String');
        }

        if (data.hasOwnProperty('phone')) {
          obj['phone'] = _ApiClient["default"].convertToType(data['phone'], 'String');
        }

        if (data.hasOwnProperty('fax')) {
          obj['fax'] = _ApiClient["default"].convertToType(data['fax'], 'String');
        }

        if (data.hasOwnProperty('cell')) {
          obj['cell'] = _ApiClient["default"].convertToType(data['cell'], 'String');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('timezone')) {
          obj['timezone'] = _ApiClient["default"].convertToType(data['timezone'], 'String');
        }

        if (data.hasOwnProperty('datetime_format')) {
          obj['datetime_format'] = _ApiClient["default"].convertToType(data['datetime_format'], 'String');
        }

        if (data.hasOwnProperty('language')) {
          obj['language'] = _ApiClient["default"].convertToType(data['language'], 'String');
        }

        if (data.hasOwnProperty('is_administrator')) {
          obj['is_administrator'] = _ApiClient["default"].convertToType(data['is_administrator'], 'Boolean');
        }

        if (data.hasOwnProperty('expires_at')) {
          obj['expires_at'] = _ApiClient["default"].convertToType(data['expires_at'], 'String');
        }

        if (data.hasOwnProperty('loggedin_at')) {
          obj['loggedin_at'] = _ApiClient["default"].convertToType(data['loggedin_at'], 'String');
        }

        if (data.hasOwnProperty('remember_token')) {
          obj['remember_token'] = _ApiClient["default"].convertToType(data['remember_token'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('fullname')) {
          obj['fullname'] = _ApiClient["default"].convertToType(data['fullname'], 'String');
        }

        if (data.hasOwnProperty('avatar')) {
          obj['avatar'] = _ApiClient["default"].convertToType(data['avatar'], 'String');
        }

        if (data.hasOwnProperty('media')) {
          obj['media'] = _ApiClient["default"].convertToType(data['media'], [_Media["default"]]);
        }

        if (data.hasOwnProperty('birthdate')) {
          obj['birthdate'] = _ApiClient["default"].convertToType(data['birthdate'], 'Date');
        }

        if (data.hasOwnProperty('delegation_user_id')) {
          obj['delegation_user_id'] = _ApiClient["default"].convertToType(data['delegation_user_id'], 'String');
        }

        if (data.hasOwnProperty('manager_id')) {
          obj['manager_id'] = _ApiClient["default"].convertToType(data['manager_id'], 'String');
        }

        if (data.hasOwnProperty('meta')) {
          obj['meta'] = _ApiClient["default"].convertToType(data['meta'], {
            'String': Object
          });
        }

        if (data.hasOwnProperty('force_change_password')) {
          obj['force_change_password'] = _ApiClient["default"].convertToType(data['force_change_password'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return UsersEditable;
}();
/**
 * @member {String} email
 */


UsersEditable.prototype['email'] = undefined;
/**
 * @member {String} firstname
 */

UsersEditable.prototype['firstname'] = undefined;
/**
 * @member {String} lastname
 */

UsersEditable.prototype['lastname'] = undefined;
/**
 * @member {String} username
 */

UsersEditable.prototype['username'] = undefined;
/**
 * @member {String} password
 */

UsersEditable.prototype['password'] = undefined;
/**
 * @member {String} address
 */

UsersEditable.prototype['address'] = undefined;
/**
 * @member {String} city
 */

UsersEditable.prototype['city'] = undefined;
/**
 * @member {String} state
 */

UsersEditable.prototype['state'] = undefined;
/**
 * @member {String} postal
 */

UsersEditable.prototype['postal'] = undefined;
/**
 * @member {String} country
 */

UsersEditable.prototype['country'] = undefined;
/**
 * @member {String} phone
 */

UsersEditable.prototype['phone'] = undefined;
/**
 * @member {String} fax
 */

UsersEditable.prototype['fax'] = undefined;
/**
 * @member {String} cell
 */

UsersEditable.prototype['cell'] = undefined;
/**
 * @member {String} title
 */

UsersEditable.prototype['title'] = undefined;
/**
 * @member {String} timezone
 */

UsersEditable.prototype['timezone'] = undefined;
/**
 * @member {String} datetime_format
 */

UsersEditable.prototype['datetime_format'] = undefined;
/**
 * @member {String} language
 */

UsersEditable.prototype['language'] = undefined;
/**
 * @member {Boolean} is_administrator
 */

UsersEditable.prototype['is_administrator'] = undefined;
/**
 * @member {String} expires_at
 */

UsersEditable.prototype['expires_at'] = undefined;
/**
 * @member {String} loggedin_at
 */

UsersEditable.prototype['loggedin_at'] = undefined;
/**
 * @member {String} remember_token
 */

UsersEditable.prototype['remember_token'] = undefined;
/**
 * @member {module:model/UsersEditable.StatusEnum} status
 */

UsersEditable.prototype['status'] = undefined;
/**
 * @member {String} fullname
 */

UsersEditable.prototype['fullname'] = undefined;
/**
 * @member {String} avatar
 */

UsersEditable.prototype['avatar'] = undefined;
/**
 * @member {Array.<module:model/Media>} media
 */

UsersEditable.prototype['media'] = undefined;
/**
 * @member {Date} birthdate
 */

UsersEditable.prototype['birthdate'] = undefined;
/**
 * @member {String} delegation_user_id
 */

UsersEditable.prototype['delegation_user_id'] = undefined;
/**
 * @member {String} manager_id
 */

UsersEditable.prototype['manager_id'] = undefined;
/**
 * @member {Object.<String, Object>} meta
 */

UsersEditable.prototype['meta'] = undefined;
/**
 * @member {Boolean} force_change_password
 */

UsersEditable.prototype['force_change_password'] = undefined;
/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */

UsersEditable['StatusEnum'] = {
  /**
   * value: "ACTIVE"
   * @const
   */
  "ACTIVE": "ACTIVE",

  /**
   * value: "INACTIVE"
   * @const
   */
  "INACTIVE": "INACTIVE",

  /**
   * value: "SCHEDULED"
   * @const
   */
  "SCHEDULED": "SCHEDULED",

  /**
   * value: "OUT_OF_OFFICE"
   * @const
   */
  "OUT_OF_OFFICE": "OUT_OF_OFFICE"
};
var _default = UsersEditable;
exports["default"] = _default;