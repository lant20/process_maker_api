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
 * The ScreensEditable model module.
 * @module model/ScreensEditable
 * @version 1.0.0
 */
var ScreensEditable = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ScreensEditable</code>.
   * @alias module:model/ScreensEditable
   */
  function ScreensEditable() {
    _classCallCheck(this, ScreensEditable);

    ScreensEditable.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ScreensEditable, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ScreensEditable</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScreensEditable} obj Optional instance to populate.
     * @return {module:model/ScreensEditable} The populated <code>ScreensEditable</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ScreensEditable();

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('config')) {
          obj['config'] = _ApiClient["default"].convertToType(data['config'], [Object]);
        }

        if (data.hasOwnProperty('computed')) {
          obj['computed'] = _ApiClient["default"].convertToType(data['computed'], [Object]);
        }

        if (data.hasOwnProperty('watchers')) {
          obj['watchers'] = _ApiClient["default"].convertToType(data['watchers'], [Object]);
        }

        if (data.hasOwnProperty('custom_css')) {
          obj['custom_css'] = _ApiClient["default"].convertToType(data['custom_css'], 'String');
        }

        if (data.hasOwnProperty('screen_category_id')) {
          obj['screen_category_id'] = _ApiClient["default"].convertToType(data['screen_category_id'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ScreensEditable;
}();
/**
 * @member {String} title
 */


ScreensEditable.prototype['title'] = undefined;
/**
 * @member {String} type
 */

ScreensEditable.prototype['type'] = undefined;
/**
 * @member {String} description
 */

ScreensEditable.prototype['description'] = undefined;
/**
 * @member {Array.<Object>} config
 */

ScreensEditable.prototype['config'] = undefined;
/**
 * @member {Array.<Object>} computed
 */

ScreensEditable.prototype['computed'] = undefined;
/**
 * @member {Array.<Object>} watchers
 */

ScreensEditable.prototype['watchers'] = undefined;
/**
 * @member {String} custom_css
 */

ScreensEditable.prototype['custom_css'] = undefined;
/**
 * @member {String} screen_category_id
 */

ScreensEditable.prototype['screen_category_id'] = undefined;
var _default = ScreensEditable;
exports["default"] = _default;