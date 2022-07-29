"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GroupMembersAllOf = _interopRequireDefault(require("./GroupMembersAllOf"));

var _ProcessCategoryEditable = _interopRequireDefault(require("./ProcessCategoryEditable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ProcessCategory model module.
 * @module model/ProcessCategory
 * @version 1.0.0
 */
var ProcessCategory = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ProcessCategory</code>.
   * Represents a business process category definition.
   * @alias module:model/ProcessCategory
   * @implements module:model/GroupMembersAllOf
   * @implements module:model/ProcessCategoryEditable
   */
  function ProcessCategory() {
    _classCallCheck(this, ProcessCategory);

    _GroupMembersAllOf["default"].initialize(this);

    _ProcessCategoryEditable["default"].initialize(this);

    ProcessCategory.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ProcessCategory, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ProcessCategory</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProcessCategory} obj Optional instance to populate.
     * @return {module:model/ProcessCategory} The populated <code>ProcessCategory</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProcessCategory();

        _GroupMembersAllOf["default"].constructFromObject(data, obj);

        _ProcessCategoryEditable["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'Date');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ProcessCategory;
}();
/**
 * @member {String} id
 */


ProcessCategory.prototype['id'] = undefined;
/**
 * @member {Date} created_at
 */

ProcessCategory.prototype['created_at'] = undefined;
/**
 * @member {Date} updated_at
 */

ProcessCategory.prototype['updated_at'] = undefined;
/**
 * @member {String} name
 */

ProcessCategory.prototype['name'] = undefined;
/**
 * @member {module:model/ProcessCategory.StatusEnum} status
 */

ProcessCategory.prototype['status'] = undefined; // Implement GroupMembersAllOf interface:

/**
 * @member {String} id
 */

_GroupMembersAllOf["default"].prototype['id'] = undefined;
/**
 * @member {Date} created_at
 */

_GroupMembersAllOf["default"].prototype['created_at'] = undefined;
/**
 * @member {Date} updated_at
 */

_GroupMembersAllOf["default"].prototype['updated_at'] = undefined; // Implement ProcessCategoryEditable interface:

/**
 * @member {String} name
 */

_ProcessCategoryEditable["default"].prototype['name'] = undefined;
/**
 * @member {module:model/ProcessCategoryEditable.StatusEnum} status
 */

_ProcessCategoryEditable["default"].prototype['status'] = undefined;
/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */

ProcessCategory['StatusEnum'] = {
  /**
   * value: "ACTIVE"
   * @const
   */
  "ACTIVE": "ACTIVE",

  /**
   * value: "INACTIVE"
   * @const
   */
  "INACTIVE": "INACTIVE"
};
var _default = ProcessCategory;
exports["default"] = _default;