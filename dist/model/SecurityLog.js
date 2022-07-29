"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SecurityLogMeta = _interopRequireDefault(require("./SecurityLogMeta"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The SecurityLog model module.
 * @module model/SecurityLog
 * @version 1.0.0
 */
var SecurityLog = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SecurityLog</code>.
   * Class SecurityLog
   * @alias module:model/SecurityLog
   */
  function SecurityLog() {
    _classCallCheck(this, SecurityLog);

    SecurityLog.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SecurityLog, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SecurityLog</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SecurityLog} obj Optional instance to populate.
     * @return {module:model/SecurityLog} The populated <code>SecurityLog</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SecurityLog();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('event')) {
          obj['event'] = _ApiClient["default"].convertToType(data['event'], 'String');
        }

        if (data.hasOwnProperty('ip')) {
          obj['ip'] = _ApiClient["default"].convertToType(data['ip'], 'String');
        }

        if (data.hasOwnProperty('meta')) {
          obj['meta'] = _ApiClient["default"].convertToType(data['meta'], [_SecurityLogMeta["default"]]);
        }

        if (data.hasOwnProperty('user_id')) {
          obj['user_id'] = _ApiClient["default"].convertToType(data['user_id'], 'Number');
        }

        if (data.hasOwnProperty('occured_at')) {
          obj['occured_at'] = _ApiClient["default"].convertToType(data['occured_at'], 'String');
        }
      }

      return obj;
    }
  }]);

  return SecurityLog;
}();
/**
 * @member {Number} id
 */


SecurityLog.prototype['id'] = undefined;
/**
 * @member {String} event
 */

SecurityLog.prototype['event'] = undefined;
/**
 * @member {String} ip
 */

SecurityLog.prototype['ip'] = undefined;
/**
 * @member {Array.<module:model/SecurityLogMeta>} meta
 */

SecurityLog.prototype['meta'] = undefined;
/**
 * @member {Number} user_id
 */

SecurityLog.prototype['user_id'] = undefined;
/**
 * @member {String} occured_at
 */

SecurityLog.prototype['occured_at'] = undefined;
var _default = SecurityLog;
exports["default"] = _default;