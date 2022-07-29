"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Media = _interopRequireDefault(require("./Media"));

var _Metadata = _interopRequireDefault(require("./Metadata"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The InlineResponse2001 model module.
 * @module model/InlineResponse2001
 * @version 1.0.0
 */
var InlineResponse2001 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse2001</code>.
   * @alias module:model/InlineResponse2001
   */
  function InlineResponse2001() {
    _classCallCheck(this, InlineResponse2001);

    InlineResponse2001.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse2001, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse2001</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2001} obj Optional instance to populate.
     * @return {module:model/InlineResponse2001} The populated <code>InlineResponse2001</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse2001();

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], [_Media["default"]]);
        }

        if (data.hasOwnProperty('meta')) {
          obj['meta'] = _Metadata["default"].constructFromObject(data['meta']);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse2001;
}();
/**
 * @member {Array.<module:model/Media>} data
 */


InlineResponse2001.prototype['data'] = undefined;
/**
 * @member {module:model/Metadata} meta
 */

InlineResponse2001.prototype['meta'] = undefined;
var _default = InlineResponse2001;
exports["default"] = _default;