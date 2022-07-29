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
 * The Metadata model module.
 * @module model/Metadata
 * @version 1.0.0
 */
var Metadata = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Metadata</code>.
   * @alias module:model/Metadata
   */
  function Metadata() {
    _classCallCheck(this, Metadata);

    Metadata.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Metadata, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Metadata</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Metadata} obj Optional instance to populate.
     * @return {module:model/Metadata} The populated <code>Metadata</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Metadata();

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
      }

      return obj;
    }
  }]);

  return Metadata;
}();
/**
 * @member {String} filter
 */


Metadata.prototype['filter'] = undefined;
/**
 * @member {String} sort_by
 */

Metadata.prototype['sort_by'] = undefined;
/**
 * @member {module:model/Metadata.SortOrderEnum} sort_order
 */

Metadata.prototype['sort_order'] = undefined;
/**
 * @member {Number} count
 */

Metadata.prototype['count'] = undefined;
/**
 * @member {Number} total_pages
 */

Metadata.prototype['total_pages'] = undefined;
/**
 * @member {Number} current_page
 */

Metadata.prototype['current_page'] = undefined;
/**
 * @member {Number} form
 */

Metadata.prototype['form'] = undefined;
/**
 * @member {Number} last_page
 */

Metadata.prototype['last_page'] = undefined;
/**
 * @member {String} path
 */

Metadata.prototype['path'] = undefined;
/**
 * @member {Number} per_page
 */

Metadata.prototype['per_page'] = undefined;
/**
 * @member {Number} to
 */

Metadata.prototype['to'] = undefined;
/**
 * @member {Number} total
 */

Metadata.prototype['total'] = undefined;
/**
 * Allowed values for the <code>sort_order</code> property.
 * @enum {String}
 * @readonly
 */

Metadata['SortOrderEnum'] = {
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
var _default = Metadata;
exports["default"] = _default;