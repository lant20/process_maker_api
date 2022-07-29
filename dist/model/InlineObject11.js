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
 * The InlineObject11 model module.
 * @module model/InlineObject11
 * @version 1.0.0
 */
var InlineObject11 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject11</code>.
   * @alias module:model/InlineObject11
   */
  function InlineObject11() {
    _classCallCheck(this, InlineObject11);

    InlineObject11.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject11, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineObject11</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject11} obj Optional instance to populate.
     * @return {module:model/InlineObject11} The populated <code>InlineObject11</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject11();

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], [Object]);
        }

        if (data.hasOwnProperty('config')) {
          obj['config'] = _ApiClient["default"].convertToType(data['config'], [Object]);
        }
      }

      return obj;
    }
  }]);

  return InlineObject11;
}();
/**
 * @member {Array.<Object>} data
 */


InlineObject11.prototype['data'] = undefined;
/**
 * @member {Array.<Object>} config
 */

InlineObject11.prototype['config'] = undefined;
var _default = InlineObject11;
exports["default"] = _default;