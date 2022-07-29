"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Metadata = _interopRequireDefault(require("./Metadata"));

var _TaskMetadataAllOf = _interopRequireDefault(require("./TaskMetadataAllOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The TaskMetadata model module.
 * @module model/TaskMetadata
 * @version 1.0.0
 */
var TaskMetadata = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TaskMetadata</code>.
   * @alias module:model/TaskMetadata
   * @implements module:model/TaskMetadataAllOf
   * @implements module:model/Metadata
   */
  function TaskMetadata() {
    _classCallCheck(this, TaskMetadata);

    _TaskMetadataAllOf["default"].initialize(this);

    _Metadata["default"].initialize(this);

    TaskMetadata.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TaskMetadata, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TaskMetadata</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TaskMetadata} obj Optional instance to populate.
     * @return {module:model/TaskMetadata} The populated <code>TaskMetadata</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TaskMetadata();

        _TaskMetadataAllOf["default"].constructFromObject(data, obj);

        _Metadata["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('filter')) {
          obj['filter'] = _ApiClient["default"].convertToType(data['filter'], 'String');
        }

        if (data.hasOwnProperty('sort_by')) {
          obj['sort_by'] = _ApiClient["default"].convertToType(data['sort_by'], 'String');
        }

        if (data.hasOwnProperty('sort_order')) {
          obj['sort_order'] = _ApiClient["default"].convertToType(data['sort_order'], 'String');
        }

        if (data.hasOwnProperty('count')) {
          obj['count'] = _ApiClient["default"].convertToType(data['count'], 'Number');
        }

        if (data.hasOwnProperty('total_pages')) {
          obj['total_pages'] = _ApiClient["default"].convertToType(data['total_pages'], 'Number');
        }

        if (data.hasOwnProperty('current_page')) {
          obj['current_page'] = _ApiClient["default"].convertToType(data['current_page'], 'Number');
        }

        if (data.hasOwnProperty('form')) {
          obj['form'] = _ApiClient["default"].convertToType(data['form'], 'Number');
        }

        if (data.hasOwnProperty('last_page')) {
          obj['last_page'] = _ApiClient["default"].convertToType(data['last_page'], 'Number');
        }

        if (data.hasOwnProperty('path')) {
          obj['path'] = _ApiClient["default"].convertToType(data['path'], 'String');
        }

        if (data.hasOwnProperty('per_page')) {
          obj['per_page'] = _ApiClient["default"].convertToType(data['per_page'], 'Number');
        }

        if (data.hasOwnProperty('to')) {
          obj['to'] = _ApiClient["default"].convertToType(data['to'], 'Number');
        }

        if (data.hasOwnProperty('total')) {
          obj['total'] = _ApiClient["default"].convertToType(data['total'], 'Number');
        }

        if (data.hasOwnProperty('in_overdue')) {
          obj['in_overdue'] = _ApiClient["default"].convertToType(data['in_overdue'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return TaskMetadata;
}();
/**
 * @member {String} filter
 */


TaskMetadata.prototype['filter'] = undefined;
/**
 * @member {String} sort_by
 */

TaskMetadata.prototype['sort_by'] = undefined;
/**
 * @member {module:model/TaskMetadata.SortOrderEnum} sort_order
 */

TaskMetadata.prototype['sort_order'] = undefined;
/**
 * @member {Number} count
 */

TaskMetadata.prototype['count'] = undefined;
/**
 * @member {Number} total_pages
 */

TaskMetadata.prototype['total_pages'] = undefined;
/**
 * @member {Number} current_page
 */

TaskMetadata.prototype['current_page'] = undefined;
/**
 * @member {Number} form
 */

TaskMetadata.prototype['form'] = undefined;
/**
 * @member {Number} last_page
 */

TaskMetadata.prototype['last_page'] = undefined;
/**
 * @member {String} path
 */

TaskMetadata.prototype['path'] = undefined;
/**
 * @member {Number} per_page
 */

TaskMetadata.prototype['per_page'] = undefined;
/**
 * @member {Number} to
 */

TaskMetadata.prototype['to'] = undefined;
/**
 * @member {Number} total
 */

TaskMetadata.prototype['total'] = undefined;
/**
 * @member {Number} in_overdue
 */

TaskMetadata.prototype['in_overdue'] = undefined; // Implement TaskMetadataAllOf interface:

/**
 * @member {String} filter
 */

_TaskMetadataAllOf["default"].prototype['filter'] = undefined;
/**
 * @member {String} sort_by
 */

_TaskMetadataAllOf["default"].prototype['sort_by'] = undefined;
/**
 * @member {module:model/TaskMetadataAllOf.SortOrderEnum} sort_order
 */

_TaskMetadataAllOf["default"].prototype['sort_order'] = undefined;
/**
 * @member {Number} count
 */

_TaskMetadataAllOf["default"].prototype['count'] = undefined;
/**
 * @member {Number} total_pages
 */

_TaskMetadataAllOf["default"].prototype['total_pages'] = undefined;
/**
 * @member {Number} current_page
 */

_TaskMetadataAllOf["default"].prototype['current_page'] = undefined;
/**
 * @member {Number} form
 */

_TaskMetadataAllOf["default"].prototype['form'] = undefined;
/**
 * @member {Number} last_page
 */

_TaskMetadataAllOf["default"].prototype['last_page'] = undefined;
/**
 * @member {String} path
 */

_TaskMetadataAllOf["default"].prototype['path'] = undefined;
/**
 * @member {Number} per_page
 */

_TaskMetadataAllOf["default"].prototype['per_page'] = undefined;
/**
 * @member {Number} to
 */

_TaskMetadataAllOf["default"].prototype['to'] = undefined;
/**
 * @member {Number} total
 */

_TaskMetadataAllOf["default"].prototype['total'] = undefined;
/**
 * @member {Number} in_overdue
 */

_TaskMetadataAllOf["default"].prototype['in_overdue'] = undefined; // Implement Metadata interface:

/**
 * @member {String} filter
 */

_Metadata["default"].prototype['filter'] = undefined;
/**
 * @member {String} sort_by
 */

_Metadata["default"].prototype['sort_by'] = undefined;
/**
 * @member {module:model/Metadata.SortOrderEnum} sort_order
 */

_Metadata["default"].prototype['sort_order'] = undefined;
/**
 * @member {Number} count
 */

_Metadata["default"].prototype['count'] = undefined;
/**
 * @member {Number} total_pages
 */

_Metadata["default"].prototype['total_pages'] = undefined;
/**
 * @member {Number} current_page
 */

_Metadata["default"].prototype['current_page'] = undefined;
/**
 * @member {Number} form
 */

_Metadata["default"].prototype['form'] = undefined;
/**
 * @member {Number} last_page
 */

_Metadata["default"].prototype['last_page'] = undefined;
/**
 * @member {String} path
 */

_Metadata["default"].prototype['path'] = undefined;
/**
 * @member {Number} per_page
 */

_Metadata["default"].prototype['per_page'] = undefined;
/**
 * @member {Number} to
 */

_Metadata["default"].prototype['to'] = undefined;
/**
 * @member {Number} total
 */

_Metadata["default"].prototype['total'] = undefined;
/**
 * Allowed values for the <code>sort_order</code> property.
 * @enum {String}
 * @readonly
 */

TaskMetadata['SortOrderEnum'] = {
  /**
   * value: "asc"
   * @const
   */
  "asc": "asc",

  /**
   * value: "desc"
   * @const
   */
  "desc": "desc"
};
var _default = TaskMetadata;
exports["default"] = _default;