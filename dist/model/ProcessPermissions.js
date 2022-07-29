"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CommentsAllOf = _interopRequireDefault(require("./CommentsAllOf"));

var _ProcessPermissionsEditable = _interopRequireDefault(require("./ProcessPermissionsEditable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ProcessPermissions model module.
 * @module model/ProcessPermissions
 * @version 1.0.0
 */
var ProcessPermissions = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ProcessPermissions</code>.
   * Represents a Process permission.
   * @alias module:model/ProcessPermissions
   * @implements module:model/CommentsAllOf
   * @implements module:model/ProcessPermissionsEditable
   */
  function ProcessPermissions() {
    _classCallCheck(this, ProcessPermissions);

    _CommentsAllOf["default"].initialize(this);

    _ProcessPermissionsEditable["default"].initialize(this);

    ProcessPermissions.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ProcessPermissions, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ProcessPermissions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProcessPermissions} obj Optional instance to populate.
     * @return {module:model/ProcessPermissions} The populated <code>ProcessPermissions</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProcessPermissions();

        _CommentsAllOf["default"].constructFromObject(data, obj);

        _ProcessPermissionsEditable["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'Date');
        }

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

  return ProcessPermissions;
}();
/**
 * @member {Date} created_at
 */


ProcessPermissions.prototype['created_at'] = undefined;
/**
 * @member {Date} updated_at
 */

ProcessPermissions.prototype['updated_at'] = undefined;
/**
 * @member {Number} id
 */

ProcessPermissions.prototype['id'] = undefined;
/**
 * @member {Number} process_id
 */

ProcessPermissions.prototype['process_id'] = undefined;
/**
 * @member {Number} permission_id
 */

ProcessPermissions.prototype['permission_id'] = undefined;
/**
 * @member {Number} assignable_id
 */

ProcessPermissions.prototype['assignable_id'] = undefined;
/**
 * @member {String} assignable_type
 */

ProcessPermissions.prototype['assignable_type'] = undefined; // Implement CommentsAllOf interface:

/**
 * @member {Date} created_at
 */

_CommentsAllOf["default"].prototype['created_at'] = undefined;
/**
 * @member {Date} updated_at
 */

_CommentsAllOf["default"].prototype['updated_at'] = undefined; // Implement ProcessPermissionsEditable interface:

/**
 * @member {Number} id
 */

_ProcessPermissionsEditable["default"].prototype['id'] = undefined;
/**
 * @member {Number} process_id
 */

_ProcessPermissionsEditable["default"].prototype['process_id'] = undefined;
/**
 * @member {Number} permission_id
 */

_ProcessPermissionsEditable["default"].prototype['permission_id'] = undefined;
/**
 * @member {Number} assignable_id
 */

_ProcessPermissionsEditable["default"].prototype['assignable_id'] = undefined;
/**
 * @member {String} assignable_type
 */

_ProcessPermissionsEditable["default"].prototype['assignable_type'] = undefined;
var _default = ProcessPermissions;
exports["default"] = _default;