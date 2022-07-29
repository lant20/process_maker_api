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
 * The ProcessStartEvents model module.
 * @module model/ProcessStartEvents
 * @version 1.0.0
 */
var ProcessStartEvents = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ProcessStartEvents</code>.
   * @alias module:model/ProcessStartEvents
   */
  function ProcessStartEvents() {
    _classCallCheck(this, ProcessStartEvents);

    ProcessStartEvents.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ProcessStartEvents, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ProcessStartEvents</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProcessStartEvents} obj Optional instance to populate.
     * @return {module:model/ProcessStartEvents} The populated <code>ProcessStartEvents</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProcessStartEvents();

        if (data.hasOwnProperty('eventDefinitions')) {
          obj['eventDefinitions'] = _ApiClient["default"].convertToType(data['eventDefinitions'], Object);
        }

        if (data.hasOwnProperty('parallelMultiple')) {
          obj['parallelMultiple'] = _ApiClient["default"].convertToType(data['parallelMultiple'], 'Boolean');
        }

        if (data.hasOwnProperty('outgoing')) {
          obj['outgoing'] = _ApiClient["default"].convertToType(data['outgoing'], Object);
        }

        if (data.hasOwnProperty('incoming')) {
          obj['incoming'] = _ApiClient["default"].convertToType(data['incoming'], Object);
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ProcessStartEvents;
}();
/**
 * @member {Object} eventDefinitions
 */


ProcessStartEvents.prototype['eventDefinitions'] = undefined;
/**
 * @member {Boolean} parallelMultiple
 */

ProcessStartEvents.prototype['parallelMultiple'] = undefined;
/**
 * @member {Object} outgoing
 */

ProcessStartEvents.prototype['outgoing'] = undefined;
/**
 * @member {Object} incoming
 */

ProcessStartEvents.prototype['incoming'] = undefined;
/**
 * @member {String} id
 */

ProcessStartEvents.prototype['id'] = undefined;
/**
 * @member {String} name
 */

ProcessStartEvents.prototype['name'] = undefined;
var _default = ProcessStartEvents;
exports["default"] = _default;