"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Metadata = _interopRequireDefault(require("./Metadata"));

var _ProcessRequest = _interopRequireDefault(require("./ProcessRequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The InlineResponse20013 model module.
 * @module model/InlineResponse20013
 * @version 1.0.0
 */
var InlineResponse20013 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20013</code>.
   * @alias module:model/InlineResponse20013
   */
  function InlineResponse20013() {
    _classCallCheck(this, InlineResponse20013);

    InlineResponse20013.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20013, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse20013</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20013} obj Optional instance to populate.
     * @return {module:model/InlineResponse20013} The populated <code>InlineResponse20013</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20013();

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], [_ProcessRequest["default"]]);
        }

        if (data.hasOwnProperty('meta')) {
          obj['meta'] = _Metadata["default"].constructFromObject(data['meta']);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20013;
}();
/**
 * @member {Array.<module:model/ProcessRequest>} data
 */


InlineResponse20013.prototype['data'] = undefined;
/**
 * @member {module:model/Metadata} meta
 */

InlineResponse20013.prototype['meta'] = undefined;
var _default = InlineResponse20013;
exports["default"] = _default;