"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ProcessEditable = _interopRequireDefault(require("./ProcessEditable"));

var _ProcessImportAllOf = _interopRequireDefault(require("./ProcessImportAllOf"));

var _ProcessStartEvents = _interopRequireDefault(require("./ProcessStartEvents"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ProcessImport model module.
 * @module model/ProcessImport
 * @version 1.0.0
 */
var ProcessImport = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ProcessImport</code>.
   * @alias module:model/ProcessImport
   * @implements module:model/ProcessImportAllOf
   * @implements module:model/ProcessEditable
   */
  function ProcessImport() {
    _classCallCheck(this, ProcessImport);

    _ProcessImportAllOf["default"].initialize(this);

    _ProcessEditable["default"].initialize(this);

    ProcessImport.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ProcessImport, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ProcessImport</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProcessImport} obj Optional instance to populate.
     * @return {module:model/ProcessImport} The populated <code>ProcessImport</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProcessImport();

        _ProcessImportAllOf["default"].constructFromObject(data, obj);

        _ProcessEditable["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('assignable')) {
          obj['assignable'] = _ApiClient["default"].convertToType(data['assignable'], [Object]);
        }

        if (data.hasOwnProperty('process')) {
          obj['process'] = _ApiClient["default"].convertToType(data['process'], Object);
        }

        if (data.hasOwnProperty('process_category_id')) {
          obj['process_category_id'] = _ApiClient["default"].convertToType(data['process_category_id'], 'Number');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
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

  return ProcessImport;
}();
/**
 * @member {module:model/ProcessImport.StatusEnum} status
 */


ProcessImport.prototype['status'] = undefined;
/**
 * @member {Array.<Object>} assignable
 */

ProcessImport.prototype['assignable'] = undefined;
/**
 * @member {Object} process
 */

ProcessImport.prototype['process'] = undefined;
/**
 * @member {Number} process_category_id
 */

ProcessImport.prototype['process_category_id'] = undefined;
/**
 * @member {String} name
 */

ProcessImport.prototype['name'] = undefined;
/**
 * @member {String} description
 */

ProcessImport.prototype['description'] = undefined;
/**
 * @member {Number} pause_timer_start
 */

ProcessImport.prototype['pause_timer_start'] = undefined;
/**
 * @member {Number} cancel_screen_id
 */

ProcessImport.prototype['cancel_screen_id'] = undefined;
/**
 * @member {Boolean} has_timer_start_events
 */

ProcessImport.prototype['has_timer_start_events'] = undefined;
/**
 * @member {Number} request_detail_screen_id
 */

ProcessImport.prototype['request_detail_screen_id'] = undefined;
/**
 * @member {Number} is_valid
 */

ProcessImport.prototype['is_valid'] = undefined;
/**
 * @member {String} package_key
 */

ProcessImport.prototype['package_key'] = undefined;
/**
 * @member {Array.<module:model/ProcessStartEvents>} start_events
 */

ProcessImport.prototype['start_events'] = undefined;
/**
 * @member {String} warnings
 */

ProcessImport.prototype['warnings'] = undefined;
/**
 * @member {Object} self_service_tasks
 */

ProcessImport.prototype['self_service_tasks'] = undefined;
/**
 * @member {Array.<Object>} signal_events
 */

ProcessImport.prototype['signal_events'] = undefined;
/**
 * @member {Object} category
 */

ProcessImport.prototype['category'] = undefined;
/**
 * @member {Number} manager_id
 */

ProcessImport.prototype['manager_id'] = undefined; // Implement ProcessImportAllOf interface:

/**
 * @member {Array.<Object>} status
 */

_ProcessImportAllOf["default"].prototype['status'] = undefined;
/**
 * @member {Array.<Object>} assignable
 */

_ProcessImportAllOf["default"].prototype['assignable'] = undefined;
/**
 * @member {Object} process
 */

_ProcessImportAllOf["default"].prototype['process'] = undefined; // Implement ProcessEditable interface:

/**
 * @member {Number} process_category_id
 */

_ProcessEditable["default"].prototype['process_category_id'] = undefined;
/**
 * @member {String} name
 */

_ProcessEditable["default"].prototype['name'] = undefined;
/**
 * @member {String} description
 */

_ProcessEditable["default"].prototype['description'] = undefined;
/**
 * @member {module:model/ProcessEditable.StatusEnum} status
 */

_ProcessEditable["default"].prototype['status'] = undefined;
/**
 * @member {Number} pause_timer_start
 */

_ProcessEditable["default"].prototype['pause_timer_start'] = undefined;
/**
 * @member {Number} cancel_screen_id
 */

_ProcessEditable["default"].prototype['cancel_screen_id'] = undefined;
/**
 * @member {Boolean} has_timer_start_events
 */

_ProcessEditable["default"].prototype['has_timer_start_events'] = undefined;
/**
 * @member {Number} request_detail_screen_id
 */

_ProcessEditable["default"].prototype['request_detail_screen_id'] = undefined;
/**
 * @member {Number} is_valid
 */

_ProcessEditable["default"].prototype['is_valid'] = undefined;
/**
 * @member {String} package_key
 */

_ProcessEditable["default"].prototype['package_key'] = undefined;
/**
 * @member {Array.<module:model/ProcessStartEvents>} start_events
 */

_ProcessEditable["default"].prototype['start_events'] = undefined;
/**
 * @member {String} warnings
 */

_ProcessEditable["default"].prototype['warnings'] = undefined;
/**
 * @member {Object} self_service_tasks
 */

_ProcessEditable["default"].prototype['self_service_tasks'] = undefined;
/**
 * @member {Array.<Object>} signal_events
 */

_ProcessEditable["default"].prototype['signal_events'] = undefined;
/**
 * @member {Object} category
 */

_ProcessEditable["default"].prototype['category'] = undefined;
/**
 * @member {Number} manager_id
 */

_ProcessEditable["default"].prototype['manager_id'] = undefined;
/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */

ProcessImport['StatusEnum'] = {
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
var _default = ProcessImport;
exports["default"] = _default;