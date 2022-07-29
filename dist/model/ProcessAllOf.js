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
 * The ProcessAllOf model module.
 * @module model/ProcessAllOf
 * @version 1.0.0
 */
var ProcessAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ProcessAllOf</code>.
   * @alias module:model/ProcessAllOf
   */
  function ProcessAllOf() {
    _classCallCheck(this, ProcessAllOf);

    ProcessAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ProcessAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ProcessAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProcessAllOf} obj Optional instance to populate.
     * @return {module:model/ProcessAllOf} The populated <code>ProcessAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProcessAllOf();

        if (data.hasOwnProperty('user_id')) {
          obj['user_id'] = _ApiClient["default"].convertToType(data['user_id'], 'Number');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('deleted_at')) {
          obj['deleted_at'] = _ApiClient["default"].convertToType(data['deleted_at'], 'Date');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'Date');
        }

        if (data.hasOwnProperty('notifications')) {
          obj['notifications'] = _ApiClient["default"].convertToType(data['notifications'], Object);
        }

        if (data.hasOwnProperty('task_notifications')) {
          obj['task_notifications'] = _ApiClient["default"].convertToType(data['task_notifications'], Object);
        }
      }

      return obj;
    }
  }]);

  return ProcessAllOf;
}();
/**
 * @member {Number} user_id
 */


ProcessAllOf.prototype['user_id'] = undefined;
/**
 * @member {String} id
 */

ProcessAllOf.prototype['id'] = undefined;
/**
 * @member {Date} deleted_at
 */

ProcessAllOf.prototype['deleted_at'] = undefined;
/**
 * @member {Date} created_at
 */

ProcessAllOf.prototype['created_at'] = undefined;
/**
 * @member {Date} updated_at
 */

ProcessAllOf.prototype['updated_at'] = undefined;
/**
 * @member {Object} notifications
 */

ProcessAllOf.prototype['notifications'] = undefined;
/**
 * @member {Object} task_notifications
 */

ProcessAllOf.prototype['task_notifications'] = undefined;
var _default = ProcessAllOf;
exports["default"] = _default;