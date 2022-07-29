"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _NotificationAllOf = _interopRequireDefault(require("./NotificationAllOf"));

var _NotificationEditable = _interopRequireDefault(require("./NotificationEditable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The Notification model module.
 * @module model/Notification
 * @version 1.0.0
 */
var Notification = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Notification</code>.
   * Represents a notification definition.
   * @alias module:model/Notification
   * @implements module:model/NotificationAllOf
   * @implements module:model/NotificationEditable
   */
  function Notification() {
    _classCallCheck(this, Notification);

    _NotificationAllOf["default"].initialize(this);

    _NotificationEditable["default"].initialize(this);

    Notification.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Notification, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Notification</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Notification} obj Optional instance to populate.
     * @return {module:model/Notification} The populated <code>Notification</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Notification();

        _NotificationAllOf["default"].constructFromObject(data, obj);

        _NotificationEditable["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('read_at')) {
          obj['read_at'] = _ApiClient["default"].convertToType(data['read_at'], 'Date');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'Date');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('notifiable_type')) {
          obj['notifiable_type'] = _ApiClient["default"].convertToType(data['notifiable_type'], 'String');
        }

        if (data.hasOwnProperty('notifiable_id')) {
          obj['notifiable_id'] = _ApiClient["default"].convertToType(data['notifiable_id'], 'Number');
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }

        if (data.hasOwnProperty('processName')) {
          obj['processName'] = _ApiClient["default"].convertToType(data['processName'], 'String');
        }

        if (data.hasOwnProperty('userName')) {
          obj['userName'] = _ApiClient["default"].convertToType(data['userName'], 'String');
        }

        if (data.hasOwnProperty('request_id')) {
          obj['request_id'] = _ApiClient["default"].convertToType(data['request_id'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Notification;
}();
/**
 * @member {String} id
 */


Notification.prototype['id'] = undefined;
/**
 * @member {Date} read_at
 */

Notification.prototype['read_at'] = undefined;
/**
 * @member {Date} created_at
 */

Notification.prototype['created_at'] = undefined;
/**
 * @member {Date} updated_at
 */

Notification.prototype['updated_at'] = undefined;
/**
 * @member {String} type
 */

Notification.prototype['type'] = undefined;
/**
 * @member {String} notifiable_type
 */

Notification.prototype['notifiable_type'] = undefined;
/**
 * @member {Number} notifiable_id
 */

Notification.prototype['notifiable_id'] = undefined;
/**
 * @member {String} data
 */

Notification.prototype['data'] = undefined;
/**
 * @member {String} name
 */

Notification.prototype['name'] = undefined;
/**
 * @member {String} message
 */

Notification.prototype['message'] = undefined;
/**
 * @member {String} processName
 */

Notification.prototype['processName'] = undefined;
/**
 * @member {String} userName
 */

Notification.prototype['userName'] = undefined;
/**
 * @member {String} request_id
 */

Notification.prototype['request_id'] = undefined; // Implement NotificationAllOf interface:

/**
 * @member {String} id
 */

_NotificationAllOf["default"].prototype['id'] = undefined;
/**
 * @member {Date} read_at
 */

_NotificationAllOf["default"].prototype['read_at'] = undefined;
/**
 * @member {Date} created_at
 */

_NotificationAllOf["default"].prototype['created_at'] = undefined;
/**
 * @member {Date} updated_at
 */

_NotificationAllOf["default"].prototype['updated_at'] = undefined; // Implement NotificationEditable interface:

/**
 * @member {String} type
 */

_NotificationEditable["default"].prototype['type'] = undefined;
/**
 * @member {String} notifiable_type
 */

_NotificationEditable["default"].prototype['notifiable_type'] = undefined;
/**
 * @member {Number} notifiable_id
 */

_NotificationEditable["default"].prototype['notifiable_id'] = undefined;
/**
 * @member {String} data
 */

_NotificationEditable["default"].prototype['data'] = undefined;
/**
 * @member {String} name
 */

_NotificationEditable["default"].prototype['name'] = undefined;
/**
 * @member {String} message
 */

_NotificationEditable["default"].prototype['message'] = undefined;
/**
 * @member {String} processName
 */

_NotificationEditable["default"].prototype['processName'] = undefined;
/**
 * @member {String} userName
 */

_NotificationEditable["default"].prototype['userName'] = undefined;
/**
 * @member {String} request_id
 */

_NotificationEditable["default"].prototype['request_id'] = undefined;
var _default = Notification;
exports["default"] = _default;