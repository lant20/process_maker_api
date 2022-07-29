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
 * The ProcessPermissionsEditable model module.
 * @module model/ProcessPermissionsEditable
 * @version 1.0.0
 */
var ProcessPermissionsEditable = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ProcessPermissionsEditable</code>.
   * @alias module:model/ProcessPermissionsEditable
   */
  function ProcessPermissionsEditable() {
    _classCallCheck(this, ProcessPermissionsEditable);

    ProcessPermissionsEditable.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ProcessPermissionsEditable, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ProcessPermissionsEditable</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProcessPermissionsEditable} obj Optional instance to populate.
     * @return {module:model/ProcessPermissionsEditable} The populated <code>ProcessPermissionsEditable</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProcessPermissionsEditable();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('process_id')) {
          obj['process_id'] = _ApiClient["default"].convertToType(data['process_id'], 'Number');
        }

        if (data.hasOwnProperty('permission_id')) {
          obj['permission_id'] = _ApiClient["default"].convertToType(data['permission_id'], 'Number');
        }

        if (data.hasOwnProperty('assignable_id')) {
          obj['assignable_id'] = _ApiClient["default"].convertToType(data['assignable_id'], 'Number');
        }

        if (data.hasOwnProperty('assignable_type')) {
          obj['assignable_type'] = _ApiClient["default"].convertToType(data['assignable_type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ProcessPermissionsEditable;
}();
/**
 * @member {Number} id
 */


ProcessPermissionsEditable.prototype['id'] = undefined;
/**
 * @member {Number} process_id
 */

ProcessPermissionsEditable.prototype['process_id'] = undefined;
/**
 * @member {Number} permission_id
 */

ProcessPermissionsEditable.prototype['permission_id'] = undefined;
/**
 * @member {Number} assignable_id
 */

ProcessPermissionsEditable.prototype['assignable_id'] = undefined;
/**
 * @member {String} assignable_type
 */

ProcessPermissionsEditable.prototype['assignable_type'] = undefined;
var _default = ProcessPermissionsEditable;
exports["default"] = _default;