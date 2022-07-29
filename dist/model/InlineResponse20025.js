"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SecurityLog = _interopRequireDefault(require("./SecurityLog"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The InlineResponse20025 model module.
 * @module model/InlineResponse20025
 * @version 1.0.0
 */
var InlineResponse20025 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20025</code>.
   * @alias module:model/InlineResponse20025
   */
  function InlineResponse20025() {
    _classCallCheck(this, InlineResponse20025);

    InlineResponse20025.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20025, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse20025</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20025} obj Optional instance to populate.
     * @return {module:model/InlineResponse20025} The populated <code>InlineResponse20025</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20025();

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], [_SecurityLog["default"]]);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20025;
}();
/**
 * @member {Array.<module:model/SecurityLog>} data
 */


InlineResponse20025.prototype['data'] = undefined;
var _default = InlineResponse20025;
exports["default"] = _default;