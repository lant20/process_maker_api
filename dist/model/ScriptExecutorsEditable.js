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
 * The ScriptExecutorsEditable model module.
 * @module model/ScriptExecutorsEditable
 * @version 1.0.0
 */
var ScriptExecutorsEditable = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ScriptExecutorsEditable</code>.
   * @alias module:model/ScriptExecutorsEditable
   */
  function ScriptExecutorsEditable() {
    _classCallCheck(this, ScriptExecutorsEditable);

    ScriptExecutorsEditable.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ScriptExecutorsEditable, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ScriptExecutorsEditable</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScriptExecutorsEditable} obj Optional instance to populate.
     * @return {module:model/ScriptExecutorsEditable} The populated <code>ScriptExecutorsEditable</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ScriptExecutorsEditable();

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('language')) {
          obj['language'] = _ApiClient["default"].convertToType(data['language'], 'String');
        }

        if (data.hasOwnProperty('config')) {
          obj['config'] = _ApiClient["default"].convertToType(data['config'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ScriptExecutorsEditable;
}();
/**
 * @member {String} title
 */


ScriptExecutorsEditable.prototype['title'] = undefined;
/**
 * @member {String} description
 */

ScriptExecutorsEditable.prototype['description'] = undefined;
/**
 * @member {String} language
 */

ScriptExecutorsEditable.prototype['language'] = undefined;
/**
 * @member {String} config
 */

ScriptExecutorsEditable.prototype['config'] = undefined;
var _default = ScriptExecutorsEditable;
exports["default"] = _default;