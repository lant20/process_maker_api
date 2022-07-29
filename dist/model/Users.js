"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Media = _interopRequireDefault(require("./Media"));

var _UsersAllOf = _interopRequireDefault(require("./UsersAllOf"));

var _UsersEditable = _interopRequireDefault(require("./UsersEditable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The Users model module.
 * @module model/Users
 * @version 1.0.0
 */
var Users = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Users</code>.
   * The attributes that are mass assignable.
   * @alias module:model/Users
   * @implements module:model/UsersAllOf
   * @implements module:model/UsersEditable
   */
  function Users() {
    _classCallCheck(this, Users);

    _UsersAllOf["default"].initialize(this);

    _UsersEditable["default"].initialize(this);

    Users.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Users, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Users</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Users} obj Optional instance to populate.
     * @return {module:model/Users} The populated <code>Users</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Users();

        _UsersAllOf["default"].constructFromObject(data, obj);

        _UsersEditable["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'Date');
        }

        if (data.hasOwnProperty('deleted_at')) {
          obj['deleted_at'] = _ApiClient["default"].convertToType(data['deleted_at'], 'Date');
        }

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

  return Users;
}();
/**
 * @member {Number} id
 */


Users.prototype['id'] = undefined;
/**
 * @member {Date} created_at
 */

Users.prototype['created_at'] = undefined;
/**
 * @member {Date} updated_at
 */

Users.prototype['updated_at'] = undefined;
/**
 * @member {Date} deleted_at
 */

Users.prototype['deleted_at'] = undefined;
/**
 * @member {String} email
 */

Users.prototype['email'] = undefined;
/**
 * @member {String} firstname
 */

Users.prototype['firstname'] = undefined;
/**
 * @member {String} lastname
 */

Users.prototype['lastname'] = undefined;
/**
 * @member {String} username
 */

Users.prototype['username'] = undefined;
/**
 * @member {String} password
 */

Users.prototype['password'] = undefined;
/**
 * @member {String} address
 */

Users.prototype['address'] = undefined;
/**
 * @member {String} city
 */

Users.prototype['city'] = undefined;
/**
 * @member {String} state
 */

Users.prototype['state'] = undefined;
/**
 * @member {String} postal
 */

Users.prototype['postal'] = undefined;
/**
 * @member {String} country
 */

Users.prototype['country'] = undefined;
/**
 * @member {String} phone
 */

Users.prototype['phone'] = undefined;
/**
 * @member {String} fax
 */

Users.prototype['fax'] = undefined;
/**
 * @member {String} cell
 */

Users.prototype['cell'] = undefined;
/**
 * @member {String} title
 */

Users.prototype['title'] = undefined;
/**
 * @member {String} timezone
 */

Users.prototype['timezone'] = undefined;
/**
 * @member {String} datetime_format
 */

Users.prototype['datetime_format'] = undefined;
/**
 * @member {String} language
 */

Users.prototype['language'] = undefined;
/**
 * @member {Boolean} is_administrator
 */

Users.prototype['is_administrator'] = undefined;
/**
 * @member {String} expires_at
 */

Users.prototype['expires_at'] = undefined;
/**
 * @member {String} loggedin_at
 */

Users.prototype['loggedin_at'] = undefined;
/**
 * @member {String} remember_token
 */

Users.prototype['remember_token'] = undefined;
/**
 * @member {module:model/Users.StatusEnum} status
 */

Users.prototype['status'] = undefined;
/**
 * @member {String} fullname
 */

Users.prototype['fullname'] = undefined;
/**
 * @member {String} avatar
 */

Users.prototype['avatar'] = undefined;
/**
 * @member {Array.<module:model/Media>} media
 */

Users.prototype['media'] = undefined;
/**
 * @member {Date} birthdate
 */

Users.prototype['birthdate'] = undefined;
/**
 * @member {String} delegation_user_id
 */

Users.prototype['delegation_user_id'] = undefined;
/**
 * @member {String} manager_id
 */

Users.prototype['manager_id'] = undefined;
/**
 * @member {Object.<String, Object>} meta
 */

Users.prototype['meta'] = undefined;
/**
 * @member {Boolean} force_change_password
 */

Users.prototype['force_change_password'] = undefined; // Implement UsersAllOf interface:

/**
 * @member {Number} id
 */

_UsersAllOf["default"].prototype['id'] = undefined;
/**
 * @member {Date} created_at
 */

_UsersAllOf["default"].prototype['created_at'] = undefined;
/**
 * @member {Date} updated_at
 */

_UsersAllOf["default"].prototype['updated_at'] = undefined;
/**
 * @member {Date} deleted_at
 */

_UsersAllOf["default"].prototype['deleted_at'] = undefined; // Implement UsersEditable interface:

/**
 * @member {String} email
 */

_UsersEditable["default"].prototype['email'] = undefined;
/**
 * @member {String} firstname
 */

_UsersEditable["default"].prototype['firstname'] = undefined;
/**
 * @member {String} lastname
 */

_UsersEditable["default"].prototype['lastname'] = undefined;
/**
 * @member {String} username
 */

_UsersEditable["default"].prototype['username'] = undefined;
/**
 * @member {String} password
 */

_UsersEditable["default"].prototype['password'] = undefined;
/**
 * @member {String} address
 */

_UsersEditable["default"].prototype['address'] = undefined;
/**
 * @member {String} city
 */

_UsersEditable["default"].prototype['city'] = undefined;
/**
 * @member {String} state
 */

_UsersEditable["default"].prototype['state'] = undefined;
/**
 * @member {String} postal
 */

_UsersEditable["default"].prototype['postal'] = undefined;
/**
 * @member {String} country
 */

_UsersEditable["default"].prototype['country'] = undefined;
/**
 * @member {String} phone
 */

_UsersEditable["default"].prototype['phone'] = undefined;
/**
 * @member {String} fax
 */

_UsersEditable["default"].prototype['fax'] = undefined;
/**
 * @member {String} cell
 */

_UsersEditable["default"].prototype['cell'] = undefined;
/**
 * @member {String} title
 */

_UsersEditable["default"].prototype['title'] = undefined;
/**
 * @member {String} timezone
 */

_UsersEditable["default"].prototype['timezone'] = undefined;
/**
 * @member {String} datetime_format
 */

_UsersEditable["default"].prototype['datetime_format'] = undefined;
/**
 * @member {String} language
 */

_UsersEditable["default"].prototype['language'] = undefined;
/**
 * @member {Boolean} is_administrator
 */

_UsersEditable["default"].prototype['is_administrator'] = undefined;
/**
 * @member {String} expires_at
 */

_UsersEditable["default"].prototype['expires_at'] = undefined;
/**
 * @member {String} loggedin_at
 */

_UsersEditable["default"].prototype['loggedin_at'] = undefined;
/**
 * @member {String} remember_token
 */

_UsersEditable["default"].prototype['remember_token'] = undefined;
/**
 * @member {module:model/UsersEditable.StatusEnum} status
 */

_UsersEditable["default"].prototype['status'] = undefined;
/**
 * @member {String} fullname
 */

_UsersEditable["default"].prototype['fullname'] = undefined;
/**
 * @member {String} avatar
 */

_UsersEditable["default"].prototype['avatar'] = undefined;
/**
 * @member {Array.<module:model/Media>} media
 */

_UsersEditable["default"].prototype['media'] = undefined;
/**
 * @member {Date} birthdate
 */

_UsersEditable["default"].prototype['birthdate'] = undefined;
/**
 * @member {String} delegation_user_id
 */

_UsersEditable["default"].prototype['delegation_user_id'] = undefined;
/**
 * @member {String} manager_id
 */

_UsersEditable["default"].prototype['manager_id'] = undefined;
/**
 * @member {Object.<String, Object>} meta
 */

_UsersEditable["default"].prototype['meta'] = undefined;
/**
 * @member {Boolean} force_change_password
 */

_UsersEditable["default"].prototype['force_change_password'] = undefined;
/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */

Users['StatusEnum'] = {
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
var _default = Users;
exports["default"] = _default;