"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Process = _interopRequireDefault(require("./Process"));

var _ProcessStartEvents = _interopRequireDefault(require("./ProcessStartEvents"));

var _ProcessWithStartEventsAllOf = _interopRequireDefault(require("./ProcessWithStartEventsAllOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ProcessWithStartEvents model module.
 * @module model/ProcessWithStartEvents
 * @version 1.0.0
 */
var ProcessWithStartEvents = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ProcessWithStartEvents</code>.
   * @alias module:model/ProcessWithStartEvents
   * @implements module:model/ProcessWithStartEventsAllOf
   * @implements module:model/Process
   */
  function ProcessWithStartEvents() {
    _classCallCheck(this, ProcessWithStartEvents);

    _ProcessWithStartEventsAllOf["default"].initialize(this);

    _Process["default"].initialize(this);

    ProcessWithStartEvents.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ProcessWithStartEvents, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ProcessWithStartEvents</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProcessWithStartEvents} obj Optional instance to populate.
     * @return {module:model/ProcessWithStartEvents} The populated <code>ProcessWithStartEvents</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProcessWithStartEvents();

        _ProcessWithStartEventsAllOf["default"].constructFromObject(data, obj);

        _Process["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('events')) {
          obj['events'] = _ApiClient["default"].convertToType(data['events'], [_ProcessStartEvents["default"]]);
        }

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

  return ProcessWithStartEvents;
}();
/**
 * @member {Array.<module:model/ProcessStartEvents>} events
 */


ProcessWithStartEvents.prototype['events'] = undefined;
/**
 * @member {Number} user_id
 */

ProcessWithStartEvents.prototype['user_id'] = undefined;
/**
 * @member {String} id
 */

ProcessWithStartEvents.prototype['id'] = undefined;
/**
 * @member {Date} deleted_at
 */

ProcessWithStartEvents.prototype['deleted_at'] = undefined;
/**
 * @member {Date} created_at
 */

ProcessWithStartEvents.prototype['created_at'] = undefined;
/**
 * @member {Date} updated_at
 */

ProcessWithStartEvents.prototype['updated_at'] = undefined;
/**
 * @member {Object} notifications
 */

ProcessWithStartEvents.prototype['notifications'] = undefined;
/**
 * @member {Object} task_notifications
 */

ProcessWithStartEvents.prototype['task_notifications'] = undefined;
/**
 * @member {Number} process_category_id
 */

ProcessWithStartEvents.prototype['process_category_id'] = undefined;
/**
 * @member {String} name
 */

ProcessWithStartEvents.prototype['name'] = undefined;
/**
 * @member {String} description
 */

ProcessWithStartEvents.prototype['description'] = undefined;
/**
 * @member {module:model/ProcessWithStartEvents.StatusEnum} status
 */

ProcessWithStartEvents.prototype['status'] = undefined;
/**
 * @member {Number} pause_timer_start
 */

ProcessWithStartEvents.prototype['pause_timer_start'] = undefined;
/**
 * @member {Number} cancel_screen_id
 */

ProcessWithStartEvents.prototype['cancel_screen_id'] = undefined;
/**
 * @member {Boolean} has_timer_start_events
 */

ProcessWithStartEvents.prototype['has_timer_start_events'] = undefined;
/**
 * @member {Number} request_detail_screen_id
 */

ProcessWithStartEvents.prototype['request_detail_screen_id'] = undefined;
/**
 * @member {Number} is_valid
 */

ProcessWithStartEvents.prototype['is_valid'] = undefined;
/**
 * @member {String} package_key
 */

ProcessWithStartEvents.prototype['package_key'] = undefined;
/**
 * @member {Array.<module:model/ProcessStartEvents>} start_events
 */

ProcessWithStartEvents.prototype['start_events'] = undefined;
/**
 * @member {String} warnings
 */

ProcessWithStartEvents.prototype['warnings'] = undefined;
/**
 * @member {Object} self_service_tasks
 */

ProcessWithStartEvents.prototype['self_service_tasks'] = undefined;
/**
 * @member {Array.<Object>} signal_events
 */

ProcessWithStartEvents.prototype['signal_events'] = undefined;
/**
 * @member {Object} category
 */

ProcessWithStartEvents.prototype['category'] = undefined;
/**
 * @member {Number} manager_id
 */

ProcessWithStartEvents.prototype['manager_id'] = undefined; // Implement ProcessWithStartEventsAllOf interface:

/**
 * @member {Array.<module:model/ProcessStartEvents>} events
 */

_ProcessWithStartEventsAllOf["default"].prototype['events'] = undefined; // Implement Process interface:

/**
 * @member {Number} user_id
 */

_Process["default"].prototype['user_id'] = undefined;
/**
 * @member {String} id
 */

_Process["default"].prototype['id'] = undefined;
/**
 * @member {Date} deleted_at
 */

_Process["default"].prototype['deleted_at'] = undefined;
/**
 * @member {Date} created_at
 */

_Process["default"].prototype['created_at'] = undefined;
/**
 * @member {Date} updated_at
 */

_Process["default"].prototype['updated_at'] = undefined;
/**
 * @member {Object} notifications
 */

_Process["default"].prototype['notifications'] = undefined;
/**
 * @member {Object} task_notifications
 */

_Process["default"].prototype['task_notifications'] = undefined;
/**
 * @member {Number} process_category_id
 */

_Process["default"].prototype['process_category_id'] = undefined;
/**
 * @member {String} name
 */

_Process["default"].prototype['name'] = undefined;
/**
 * @member {String} description
 */

_Process["default"].prototype['description'] = undefined;
/**
 * @member {module:model/Process.StatusEnum} status
 */

_Process["default"].prototype['status'] = undefined;
/**
 * @member {Number} pause_timer_start
 */

_Process["default"].prototype['pause_timer_start'] = undefined;
/**
 * @member {Number} cancel_screen_id
 */

_Process["default"].prototype['cancel_screen_id'] = undefined;
/**
 * @member {Boolean} has_timer_start_events
 */

_Process["default"].prototype['has_timer_start_events'] = undefined;
/**
 * @member {Number} request_detail_screen_id
 */

_Process["default"].prototype['request_detail_screen_id'] = undefined;
/**
 * @member {Number} is_valid
 */

_Process["default"].prototype['is_valid'] = undefined;
/**
 * @member {String} package_key
 */

_Process["default"].prototype['package_key'] = undefined;
/**
 * @member {Array.<module:model/ProcessStartEvents>} start_events
 */

_Process["default"].prototype['start_events'] = undefined;
/**
 * @member {String} warnings
 */

_Process["default"].prototype['warnings'] = undefined;
/**
 * @member {Object} self_service_tasks
 */

_Process["default"].prototype['self_service_tasks'] = undefined;
/**
 * @member {Array.<Object>} signal_events
 */

_Process["default"].prototype['signal_events'] = undefined;
/**
 * @member {Object} category
 */

_Process["default"].prototype['category'] = undefined;
/**
 * @member {Number} manager_id
 */

_Process["default"].prototype['manager_id'] = undefined;
/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */

ProcessWithStartEvents['StatusEnum'] = {
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
var _default = ProcessWithStartEvents;
exports["default"] = _default;