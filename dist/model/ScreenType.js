"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ScreenTypeAllOf = _interopRequireDefault(require("./ScreenTypeAllOf"));

var _ScreenTypeEditable = _interopRequireDefault(require("./ScreenTypeEditable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ScreenType model module.
 * @module model/ScreenType
 * @version 1.0.0
 */
var ScreenType = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ScreenType</code>.
   * Represents a business screen Type definition.
   * @alias module:model/ScreenType
   * @implements module:model/ScreenTypeAllOf
   * @implements module:model/ScreenTypeEditable
   */
  function ScreenType() {
    _classCallCheck(this, ScreenType);

    _ScreenTypeAllOf["default"].initialize(this);

    _ScreenTypeEditable["default"].initialize(this);

    ScreenType.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ScreenType, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ScreenType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScreenType} obj Optional instance to populate.
     * @return {module:model/ScreenType} The populated <code>ScreenType</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ScreenType();

        _ScreenTypeAllOf["default"].constructFromObject(data, obj);

        _ScreenTypeEditable["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ScreenType;
}();
/**
 * @member {String} id
 */


ScreenType.prototype['id'] = undefined;
/**
 * @member {String} name
 */

ScreenType.prototype['name'] = undefined; // Implement ScreenTypeAllOf interface:

/**
 * @member {String} id
 */

_ScreenTypeAllOf["default"].prototype['id'] = undefined; // Implement ScreenTypeEditable interface:

/**
 * @member {String} name
 */

_ScreenTypeEditable["default"].prototype['name'] = undefined;
var _default = ScreenType;
exports["default"] = _default;