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
 * The ProcessRequestTokenEditable model module.
 * @module model/ProcessRequestTokenEditable
 * @version 1.0.0
 */
var ProcessRequestTokenEditable = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ProcessRequestTokenEditable</code>.
   * @alias module:model/ProcessRequestTokenEditable
   */
  function ProcessRequestTokenEditable() {
    _classCallCheck(this, ProcessRequestTokenEditable);

    ProcessRequestTokenEditable.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ProcessRequestTokenEditable, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ProcessRequestTokenEditable</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProcessRequestTokenEditable} obj Optional instance to populate.
     * @return {module:model/ProcessRequestTokenEditable} The populated <code>ProcessRequestTokenEditable</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProcessRequestTokenEditable();

        if (data.hasOwnProperty('user_id')) {
          obj['user_id'] = _ApiClient["default"].convertToType(data['user_id'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('due_at')) {
          obj['due_at'] = _ApiClient["default"].convertToType(data['due_at'], 'Date');
        }

        if (data.hasOwnProperty('initiated_at')) {
          obj['initiated_at'] = _ApiClient["default"].convertToType(data['initiated_at'], 'Date');
        }

        if (data.hasOwnProperty('riskchanges_at')) {
          obj['riskchanges_at'] = _ApiClient["default"].convertToType(data['riskchanges_at'], 'Date');
        }

        if (data.hasOwnProperty('subprocess_start_event_id')) {
          obj['subprocess_start_event_id'] = _ApiClient["default"].convertToType(data['subprocess_start_event_id'], 'String');
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], Object);
        }
      }

      return obj;
    }
  }]);

  return ProcessRequestTokenEditable;
}();
/**
 * @member {String} user_id
 */


ProcessRequestTokenEditable.prototype['user_id'] = undefined;
/**
 * @member {String} status
 */

ProcessRequestTokenEditable.prototype['status'] = undefined;
/**
 * @member {Date} due_at
 */

ProcessRequestTokenEditable.prototype['due_at'] = undefined;
/**
 * @member {Date} initiated_at
 */

ProcessRequestTokenEditable.prototype['initiated_at'] = undefined;
/**
 * @member {Date} riskchanges_at
 */

ProcessRequestTokenEditable.prototype['riskchanges_at'] = undefined;
/**
 * @member {String} subprocess_start_event_id
 */

ProcessRequestTokenEditable.prototype['subprocess_start_event_id'] = undefined;
/**
 * @member {Object} data
 */

ProcessRequestTokenEditable.prototype['data'] = undefined;
var _default = ProcessRequestTokenEditable;
exports["default"] = _default;