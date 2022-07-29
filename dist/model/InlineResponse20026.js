"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Metadata = _interopRequireDefault(require("./Metadata"));

var _Settings = _interopRequireDefault(require("./Settings"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The InlineResponse20026 model module.
 * @module model/InlineResponse20026
 * @version 1.0.0
 */
var InlineResponse20026 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20026</code>.
   * @alias module:model/InlineResponse20026
   */
  function InlineResponse20026() {
    _classCallCheck(this, InlineResponse20026);

    InlineResponse20026.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20026, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse20026</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20026} obj Optional instance to populate.
     * @return {module:model/InlineResponse20026} The populated <code>InlineResponse20026</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20026();

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], [_Settings["default"]]);
        }

        if (data.hasOwnProperty('meta')) {
          obj['meta'] = _Metadata["default"].constructFromObject(data['meta']);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20026;
}();
/**
 * @member {Array.<module:model/Settings>} data
 */


InlineResponse20026.prototype['data'] = undefined;
/**
 * @member {module:model/Metadata} meta
 */

InlineResponse20026.prototype['meta'] = undefined;
var _default = InlineResponse20026;
exports["default"] = _default;