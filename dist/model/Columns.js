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
 * The Columns model module.
 * @module model/Columns
 * @version 1.0.0
 */
var Columns = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Columns</code>.
   * @alias module:model/Columns
   */
  function Columns() {
    _classCallCheck(this, Columns);

    Columns.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Columns, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Columns</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Columns} obj Optional instance to populate.
     * @return {module:model/Columns} The populated <code>Columns</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Columns();

        if (data.hasOwnProperty('label')) {
          obj['label'] = _ApiClient["default"].convertToType(data['label'], 'String');
        }

        if (data.hasOwnProperty('field')) {
          obj['field'] = _ApiClient["default"].convertToType(data['field'], 'String');
        }

        if (data.hasOwnProperty('sortable')) {
          obj['sortable'] = _ApiClient["default"].convertToType(data['sortable'], 'Boolean');
        }

        if (data.hasOwnProperty('default')) {
          obj['default'] = _ApiClient["default"].convertToType(data['default'], 'Boolean');
        }

        if (data.hasOwnProperty('format')) {
          obj['format'] = _ApiClient["default"].convertToType(data['format'], 'String');
        }

        if (data.hasOwnProperty('mask')) {
          obj['mask'] = _ApiClient["default"].convertToType(data['mask'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Columns;
}();
/**
 * @member {String} label
 */


Columns.prototype['label'] = undefined;
/**
 * @member {String} field
 */

Columns.prototype['field'] = undefined;
/**
 * @member {Boolean} sortable
 */

Columns.prototype['sortable'] = undefined;
/**
 * @member {Boolean} default
 */

Columns.prototype['default'] = undefined;
/**
 * @member {String} format
 */

Columns.prototype['format'] = undefined;
/**
 * @member {String} mask
 */

Columns.prototype['mask'] = undefined;
var _default = Columns;
exports["default"] = _default;