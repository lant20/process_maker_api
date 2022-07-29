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
 * The SignalsEditable model module.
 * @module model/SignalsEditable
 * @version 1.0.0
 */
var SignalsEditable = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SignalsEditable</code>.
   * @alias module:model/SignalsEditable
   */
  function SignalsEditable() {
    _classCallCheck(this, SignalsEditable);

    SignalsEditable.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SignalsEditable, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SignalsEditable</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SignalsEditable} obj Optional instance to populate.
     * @return {module:model/SignalsEditable} The populated <code>SignalsEditable</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SignalsEditable();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('detail')) {
          obj['detail'] = _ApiClient["default"].convertToType(data['detail'], 'String');
        }
      }

      return obj;
    }
  }]);

  return SignalsEditable;
}();
/**
 * @member {String} id
 */


SignalsEditable.prototype['id'] = undefined;
/**
 * @member {String} name
 */

SignalsEditable.prototype['name'] = undefined;
/**
 * @member {String} detail
 */

SignalsEditable.prototype['detail'] = undefined;
var _default = SignalsEditable;
exports["default"] = _default;