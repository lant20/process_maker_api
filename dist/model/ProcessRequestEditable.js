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
 * The ProcessRequestEditable model module.
 * @module model/ProcessRequestEditable
 * @version 1.0.0
 */
var ProcessRequestEditable = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ProcessRequestEditable</code>.
   * @alias module:model/ProcessRequestEditable
   */
  function ProcessRequestEditable() {
    _classCallCheck(this, ProcessRequestEditable);

    ProcessRequestEditable.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ProcessRequestEditable, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ProcessRequestEditable</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProcessRequestEditable} obj Optional instance to populate.
     * @return {module:model/ProcessRequestEditable} The populated <code>ProcessRequestEditable</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProcessRequestEditable();

        if (data.hasOwnProperty('user_id')) {
          obj['user_id'] = _ApiClient["default"].convertToType(data['user_id'], 'String');
        }

        if (data.hasOwnProperty('callable_id')) {
          obj['callable_id'] = _ApiClient["default"].convertToType(data['callable_id'], 'String');
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], Object);
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('process_id')) {
          obj['process_id'] = _ApiClient["default"].convertToType(data['process_id'], 'Number');
        }

        if (data.hasOwnProperty('process')) {
          obj['process'] = _ApiClient["default"].convertToType(data['process'], Object);
        }
      }

      return obj;
    }
  }]);

  return ProcessRequestEditable;
}();
/**
 * @member {String} user_id
 */


ProcessRequestEditable.prototype['user_id'] = undefined;
/**
 * @member {String} callable_id
 */

ProcessRequestEditable.prototype['callable_id'] = undefined;
/**
 * @member {Object} data
 */

ProcessRequestEditable.prototype['data'] = undefined;
/**
 * @member {module:model/ProcessRequestEditable.StatusEnum} status
 */

ProcessRequestEditable.prototype['status'] = undefined;
/**
 * @member {String} name
 */

ProcessRequestEditable.prototype['name'] = undefined;
/**
 * @member {Number} process_id
 */

ProcessRequestEditable.prototype['process_id'] = undefined;
/**
 * @member {Object} process
 */

ProcessRequestEditable.prototype['process'] = undefined;
/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */

ProcessRequestEditable['StatusEnum'] = {
  /**
   * value: "ACTIVE"
   * @const
   */
  "ACTIVE": "ACTIVE",

  /**
   * value: "COMPLETED"
   * @const
   */
  "COMPLETED": "COMPLETED",

  /**
   * value: "ERROR"
   * @const
   */
  "ERROR": "ERROR",

  /**
   * value: "CANCELED"
   * @const
   */
  "CANCELED": "CANCELED"
};
var _default = ProcessRequestEditable;
exports["default"] = _default;