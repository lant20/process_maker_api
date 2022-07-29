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
 * The ProcessRequestTokenAllOf model module.
 * @module model/ProcessRequestTokenAllOf
 * @version 1.0.0
 */
var ProcessRequestTokenAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ProcessRequestTokenAllOf</code>.
   * @alias module:model/ProcessRequestTokenAllOf
   */
  function ProcessRequestTokenAllOf() {
    _classCallCheck(this, ProcessRequestTokenAllOf);

    ProcessRequestTokenAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ProcessRequestTokenAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ProcessRequestTokenAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProcessRequestTokenAllOf} obj Optional instance to populate.
     * @return {module:model/ProcessRequestTokenAllOf} The populated <code>ProcessRequestTokenAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProcessRequestTokenAllOf();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('process_id')) {
          obj['process_id'] = _ApiClient["default"].convertToType(data['process_id'], 'String');
        }

        if (data.hasOwnProperty('process_request_id')) {
          obj['process_request_id'] = _ApiClient["default"].convertToType(data['process_request_id'], 'String');
        }

        if (data.hasOwnProperty('element_id')) {
          obj['element_id'] = _ApiClient["default"].convertToType(data['element_id'], 'String');
        }

        if (data.hasOwnProperty('element_type')) {
          obj['element_type'] = _ApiClient["default"].convertToType(data['element_type'], 'String');
        }

        if (data.hasOwnProperty('element_index')) {
          obj['element_index'] = _ApiClient["default"].convertToType(data['element_index'], 'String');
        }

        if (data.hasOwnProperty('element_name')) {
          obj['element_name'] = _ApiClient["default"].convertToType(data['element_name'], 'String');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'Date');
        }

        if (data.hasOwnProperty('initiated_at')) {
          obj['initiated_at'] = _ApiClient["default"].convertToType(data['initiated_at'], 'Date');
        }

        if (data.hasOwnProperty('advanceStatus')) {
          obj['advanceStatus'] = _ApiClient["default"].convertToType(data['advanceStatus'], 'String');
        }

        if (data.hasOwnProperty('due_notified')) {
          obj['due_notified'] = _ApiClient["default"].convertToType(data['due_notified'], 'Number');
        }

        if (data.hasOwnProperty('user')) {
          obj['user'] = _ApiClient["default"].convertToType(data['user'], Object);
        }

        if (data.hasOwnProperty('process')) {
          obj['process'] = _ApiClient["default"].convertToType(data['process'], Object);
        }

        if (data.hasOwnProperty('process_request')) {
          obj['process_request'] = _ApiClient["default"].convertToType(data['process_request'], Object);
        }
      }

      return obj;
    }
  }]);

  return ProcessRequestTokenAllOf;
}();
/**
 * @member {String} id
 */


ProcessRequestTokenAllOf.prototype['id'] = undefined;
/**
 * @member {String} process_id
 */

ProcessRequestTokenAllOf.prototype['process_id'] = undefined;
/**
 * @member {String} process_request_id
 */

ProcessRequestTokenAllOf.prototype['process_request_id'] = undefined;
/**
 * @member {String} element_id
 */

ProcessRequestTokenAllOf.prototype['element_id'] = undefined;
/**
 * @member {String} element_type
 */

ProcessRequestTokenAllOf.prototype['element_type'] = undefined;
/**
 * @member {String} element_index
 */

ProcessRequestTokenAllOf.prototype['element_index'] = undefined;
/**
 * @member {String} element_name
 */

ProcessRequestTokenAllOf.prototype['element_name'] = undefined;
/**
 * @member {Date} created_at
 */

ProcessRequestTokenAllOf.prototype['created_at'] = undefined;
/**
 * @member {Date} updated_at
 */

ProcessRequestTokenAllOf.prototype['updated_at'] = undefined;
/**
 * @member {Date} initiated_at
 */

ProcessRequestTokenAllOf.prototype['initiated_at'] = undefined;
/**
 * @member {String} advanceStatus
 */

ProcessRequestTokenAllOf.prototype['advanceStatus'] = undefined;
/**
 * @member {Number} due_notified
 */

ProcessRequestTokenAllOf.prototype['due_notified'] = undefined;
/**
 * @member {Object} user
 */

ProcessRequestTokenAllOf.prototype['user'] = undefined;
/**
 * @member {Object} process
 */

ProcessRequestTokenAllOf.prototype['process'] = undefined;
/**
 * @member {Object} process_request
 */

ProcessRequestTokenAllOf.prototype['process_request'] = undefined;
var _default = ProcessRequestTokenAllOf;
exports["default"] = _default;