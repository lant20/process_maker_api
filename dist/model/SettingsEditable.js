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
 * The SettingsEditable model module.
 * @module model/SettingsEditable
 * @version 1.0.0
 */
var SettingsEditable = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SettingsEditable</code>.
   * @alias module:model/SettingsEditable
   */
  function SettingsEditable() {
    _classCallCheck(this, SettingsEditable);

    SettingsEditable.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SettingsEditable, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SettingsEditable</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SettingsEditable} obj Optional instance to populate.
     * @return {module:model/SettingsEditable} The populated <code>SettingsEditable</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SettingsEditable();

        if (data.hasOwnProperty('key')) {
          obj['key'] = _ApiClient["default"].convertToType(data['key'], 'String');
        }

        if (data.hasOwnProperty('config')) {
          obj['config'] = _ApiClient["default"].convertToType(data['config'], [Object]);
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('helper')) {
          obj['helper'] = _ApiClient["default"].convertToType(data['helper'], 'String');
        }

        if (data.hasOwnProperty('group')) {
          obj['group'] = _ApiClient["default"].convertToType(data['group'], 'String');
        }

        if (data.hasOwnProperty('format')) {
          obj['format'] = _ApiClient["default"].convertToType(data['format'], 'String');
        }

        if (data.hasOwnProperty('hidden')) {
          obj['hidden'] = _ApiClient["default"].convertToType(data['hidden'], 'Boolean');
        }

        if (data.hasOwnProperty('readonly')) {
          obj['readonly'] = _ApiClient["default"].convertToType(data['readonly'], 'Boolean');
        }

        if (data.hasOwnProperty('variables')) {
          obj['variables'] = _ApiClient["default"].convertToType(data['variables'], 'String');
        }

        if (data.hasOwnProperty('sansSerifFont')) {
          obj['sansSerifFont'] = _ApiClient["default"].convertToType(data['sansSerifFont'], 'String');
        }
      }

      return obj;
    }
  }]);

  return SettingsEditable;
}();
/**
 * @member {String} key
 */


SettingsEditable.prototype['key'] = undefined;
/**
 * @member {Array.<Object>} config
 */

SettingsEditable.prototype['config'] = undefined;
/**
 * @member {String} name
 */

SettingsEditable.prototype['name'] = undefined;
/**
 * @member {String} helper
 */

SettingsEditable.prototype['helper'] = undefined;
/**
 * @member {String} group
 */

SettingsEditable.prototype['group'] = undefined;
/**
 * @member {String} format
 */

SettingsEditable.prototype['format'] = undefined;
/**
 * @member {Boolean} hidden
 */

SettingsEditable.prototype['hidden'] = undefined;
/**
 * @member {Boolean} readonly
 */

SettingsEditable.prototype['readonly'] = undefined;
/**
 * @member {String} variables
 */

SettingsEditable.prototype['variables'] = undefined;
/**
 * @member {String} sansSerifFont
 */

SettingsEditable.prototype['sansSerifFont'] = undefined;
var _default = SettingsEditable;
exports["default"] = _default;