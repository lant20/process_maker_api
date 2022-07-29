"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Users = _interopRequireDefault(require("./Users"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ProcessRequestAllOf model module.
 * @module model/ProcessRequestAllOf
 * @version 1.0.0
 */
var ProcessRequestAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ProcessRequestAllOf</code>.
   * @alias module:model/ProcessRequestAllOf
   */
  function ProcessRequestAllOf() {
    _classCallCheck(this, ProcessRequestAllOf);

    ProcessRequestAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ProcessRequestAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ProcessRequestAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProcessRequestAllOf} obj Optional instance to populate.
     * @return {module:model/ProcessRequestAllOf} The populated <code>ProcessRequestAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProcessRequestAllOf();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('process_id')) {
          obj['process_id'] = _ApiClient["default"].convertToType(data['process_id'], 'String');
        }

        if (data.hasOwnProperty('process_collaboration_id')) {
          obj['process_collaboration_id'] = _ApiClient["default"].convertToType(data['process_collaboration_id'], 'String');
        }

        if (data.hasOwnProperty('participant_id')) {
          obj['participant_id'] = _ApiClient["default"].convertToType(data['participant_id'], 'String');
        }

        if (data.hasOwnProperty('process_category_id')) {
          obj['process_category_id'] = _ApiClient["default"].convertToType(data['process_category_id'], 'String');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'Date');
        }

        if (data.hasOwnProperty('user')) {
          obj['user'] = _ApiClient["default"].convertToType(data['user'], Object);
        }

        if (data.hasOwnProperty('participants')) {
          obj['participants'] = _ApiClient["default"].convertToType(data['participants'], [_Users["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ProcessRequestAllOf;
}();
/**
 * @member {String} id
 */


ProcessRequestAllOf.prototype['id'] = undefined;
/**
 * @member {String} process_id
 */

ProcessRequestAllOf.prototype['process_id'] = undefined;
/**
 * @member {String} process_collaboration_id
 */

ProcessRequestAllOf.prototype['process_collaboration_id'] = undefined;
/**
 * @member {String} participant_id
 */

ProcessRequestAllOf.prototype['participant_id'] = undefined;
/**
 * @member {String} process_category_id
 */

ProcessRequestAllOf.prototype['process_category_id'] = undefined;
/**
 * @member {Date} created_at
 */

ProcessRequestAllOf.prototype['created_at'] = undefined;
/**
 * @member {Date} updated_at
 */

ProcessRequestAllOf.prototype['updated_at'] = undefined;
/**
 * @member {Object} user
 */

ProcessRequestAllOf.prototype['user'] = undefined;
/**
 * @member {Array.<module:model/Users>} participants
 */

ProcessRequestAllOf.prototype['participants'] = undefined;
var _default = ProcessRequestAllOf;
exports["default"] = _default;