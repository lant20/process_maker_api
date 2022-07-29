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
 * The ProcessImportAllOf model module.
 * @module model/ProcessImportAllOf
 * @version 1.0.0
 */
var ProcessImportAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ProcessImportAllOf</code>.
   * @alias module:model/ProcessImportAllOf
   */
  function ProcessImportAllOf() {
    _classCallCheck(this, ProcessImportAllOf);

    ProcessImportAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ProcessImportAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ProcessImportAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProcessImportAllOf} obj Optional instance to populate.
     * @return {module:model/ProcessImportAllOf} The populated <code>ProcessImportAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProcessImportAllOf();

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], [Object]);
        }

        if (data.hasOwnProperty('assignable')) {
          obj['assignable'] = _ApiClient["default"].convertToType(data['assignable'], [Object]);
        }

        if (data.hasOwnProperty('process')) {
          obj['process'] = _ApiClient["default"].convertToType(data['process'], Object);
        }
      }

      return obj;
    }
  }]);

  return ProcessImportAllOf;
}();
/**
 * @member {Array.<Object>} status
 */


ProcessImportAllOf.prototype['status'] = undefined;
/**
 * @member {Array.<Object>} assignable
 */

ProcessImportAllOf.prototype['assignable'] = undefined;
/**
 * @member {Object} process
 */

ProcessImportAllOf.prototype['process'] = undefined;
var _default = ProcessImportAllOf;
exports["default"] = _default;