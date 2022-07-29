"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ProcessStartEvents = _interopRequireDefault(require("./ProcessStartEvents"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ProcessEditable model module.
 * @module model/ProcessEditable
 * @version 1.0.0
 */
var ProcessEditable = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ProcessEditable</code>.
   * @alias module:model/ProcessEditable
   */
  function ProcessEditable() {
    _classCallCheck(this, ProcessEditable);

    ProcessEditable.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ProcessEditable, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ProcessEditable</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProcessEditable} obj Optional instance to populate.
     * @return {module:model/ProcessEditable} The populated <code>ProcessEditable</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProcessEditable();

        if (data.hasOwnProperty('process_category_id')) {
          obj['process_category_id'] = _ApiClient["default"].convertToType(data['process_category_id'], 'Number');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('pause_timer_start')) {
          obj['pause_timer_start'] = _ApiClient["default"].convertToType(data['pause_timer_start'], 'Number');
        }

        if (data.hasOwnProperty('cancel_screen_id')) {
          obj['cancel_screen_id'] = _ApiClient["default"].convertToType(data['cancel_screen_id'], 'Number');
        }

        if (data.hasOwnProperty('has_timer_start_events')) {
          obj['has_timer_start_events'] = _ApiClient["default"].convertToType(data['has_timer_start_events'], 'Boolean');
        }

        if (data.hasOwnProperty('request_detail_screen_id')) {
          obj['request_detail_screen_id'] = _ApiClient["default"].convertToType(data['request_detail_screen_id'], 'Number');
        }

        if (data.hasOwnProperty('is_valid')) {
          obj['is_valid'] = _ApiClient["default"].convertToType(data['is_valid'], 'Number');
        }

        if (data.hasOwnProperty('package_key')) {
          obj['package_key'] = _ApiClient["default"].convertToType(data['package_key'], 'String');
        }

        if (data.hasOwnProperty('start_events')) {
          obj['start_events'] = _ApiClient["default"].convertToType(data['start_events'], [_ProcessStartEvents["default"]]);
        }

        if (data.hasOwnProperty('warnings')) {
          obj['warnings'] = _ApiClient["default"].convertToType(data['warnings'], 'String');
        }

        if (data.hasOwnProperty('self_service_tasks')) {
          obj['self_service_tasks'] = _ApiClient["default"].convertToType(data['self_service_tasks'], Object);
        }

        if (data.hasOwnProperty('signal_events')) {
          obj['signal_events'] = _ApiClient["default"].convertToType(data['signal_events'], [Object]);
        }

        if (data.hasOwnProperty('category')) {
          obj['category'] = _ApiClient["default"].convertToType(data['category'], Object);
        }

        if (data.hasOwnProperty('manager_id')) {
          obj['manager_id'] = _ApiClient["default"].convertToType(data['manager_id'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ProcessEditable;
}();
/**
 * @member {Number} process_category_id
 */


ProcessEditable.prototype['process_category_id'] = undefined;
/**
 * @member {String} name
 */

ProcessEditable.prototype['name'] = undefined;
/**
 * @member {String} description
 */

ProcessEditable.prototype['description'] = undefined;
/**
 * @member {module:model/ProcessEditable.StatusEnum} status
 */

ProcessEditable.prototype['status'] = undefined;
/**
 * @member {Number} pause_timer_start
 */

ProcessEditable.prototype['pause_timer_start'] = undefined;
/**
 * @member {Number} cancel_screen_id
 */

ProcessEditable.prototype['cancel_screen_id'] = undefined;
/**
 * @member {Boolean} has_timer_start_events
 */

ProcessEditable.prototype['has_timer_start_events'] = undefined;
/**
 * @member {Number} request_detail_screen_id
 */

ProcessEditable.prototype['request_detail_screen_id'] = undefined;
/**
 * @member {Number} is_valid
 */

ProcessEditable.prototype['is_valid'] = undefined;
/**
 * @member {String} package_key
 */

ProcessEditable.prototype['package_key'] = undefined;
/**
 * @member {Array.<module:model/ProcessStartEvents>} start_events
 */

ProcessEditable.prototype['start_events'] = undefined;
/**
 * @member {String} warnings
 */

ProcessEditable.prototype['warnings'] = undefined;
/**
 * @member {Object} self_service_tasks
 */

ProcessEditable.prototype['self_service_tasks'] = undefined;
/**
 * @member {Array.<Object>} signal_events
 */

ProcessEditable.prototype['signal_events'] = undefined;
/**
 * @member {Object} category
 */

ProcessEditable.prototype['category'] = undefined;
/**
 * @member {Number} manager_id
 */

ProcessEditable.prototype['manager_id'] = undefined;
/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */

ProcessEditable['StatusEnum'] = {
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
   * value: "ARCHIVED"
   * @const
   */
  "ARCHIVED": "ARCHIVED"
};
var _default = ProcessEditable;
exports["default"] = _default;