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
 * The ProcessAssignments model module.
 * @module model/ProcessAssignments
 * @version 1.0.0
 */
var ProcessAssignments = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ProcessAssignments</code>.
   * Represents a business process definition.
   * @alias module:model/ProcessAssignments
   */
  function ProcessAssignments() {
    _classCallCheck(this, ProcessAssignments);

    ProcessAssignments.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ProcessAssignments, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ProcessAssignments</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProcessAssignments} obj Optional instance to populate.
     * @return {module:model/ProcessAssignments} The populated <code>ProcessAssignments</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProcessAssignments();

        if (data.hasOwnProperty('assignable')) {
          obj['assignable'] = _ApiClient["default"].convertToType(data['assignable'], [Object]);
        }

        if (data.hasOwnProperty('cancel_request')) {
          obj['cancel_request'] = _ApiClient["default"].convertToType(data['cancel_request'], Object);
        }

        if (data.hasOwnProperty('edit_data')) {
          obj['edit_data'] = _ApiClient["default"].convertToType(data['edit_data'], Object);
        }
      }

      return obj;
    }
  }]);

  return ProcessAssignments;
}();
/**
 * @member {Array.<Object>} assignable
 */


ProcessAssignments.prototype['assignable'] = undefined;
/**
 * @member {Object} cancel_request
 */

ProcessAssignments.prototype['cancel_request'] = undefined;
/**
 * @member {Object} edit_data
 */

ProcessAssignments.prototype['edit_data'] = undefined;
var _default = ProcessAssignments;
exports["default"] = _default;