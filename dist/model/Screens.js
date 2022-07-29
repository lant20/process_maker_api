"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GroupMembersAllOf = _interopRequireDefault(require("./GroupMembersAllOf"));

var _ScreensEditable = _interopRequireDefault(require("./ScreensEditable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The Screens model module.
 * @module model/Screens
 * @version 1.0.0
 */
var Screens = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Screens</code>.
   * @alias module:model/Screens
   * @implements module:model/GroupMembersAllOf
   * @implements module:model/ScreensEditable
   */
  function Screens() {
    _classCallCheck(this, Screens);

    _GroupMembersAllOf["default"].initialize(this);

    _ScreensEditable["default"].initialize(this);

    Screens.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Screens, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Screens</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Screens} obj Optional instance to populate.
     * @return {module:model/Screens} The populated <code>Screens</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Screens();

        _GroupMembersAllOf["default"].constructFromObject(data, obj);

        _ScreensEditable["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'Date');
        }

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

  return Screens;
}();
/**
 * @member {String} id
 */


Screens.prototype['id'] = undefined;
/**
 * @member {Date} created_at
 */

Screens.prototype['created_at'] = undefined;
/**
 * @member {Date} updated_at
 */

Screens.prototype['updated_at'] = undefined;
/**
 * @member {String} title
 */

Screens.prototype['title'] = undefined;
/**
 * @member {String} type
 */

Screens.prototype['type'] = undefined;
/**
 * @member {String} description
 */

Screens.prototype['description'] = undefined;
/**
 * @member {Array.<Object>} config
 */

Screens.prototype['config'] = undefined;
/**
 * @member {Array.<Object>} computed
 */

Screens.prototype['computed'] = undefined;
/**
 * @member {Array.<Object>} watchers
 */

Screens.prototype['watchers'] = undefined;
/**
 * @member {String} custom_css
 */

Screens.prototype['custom_css'] = undefined;
/**
 * @member {String} screen_category_id
 */

Screens.prototype['screen_category_id'] = undefined; // Implement GroupMembersAllOf interface:

/**
 * @member {String} id
 */

_GroupMembersAllOf["default"].prototype['id'] = undefined;
/**
 * @member {Date} created_at
 */

_GroupMembersAllOf["default"].prototype['created_at'] = undefined;
/**
 * @member {Date} updated_at
 */

_GroupMembersAllOf["default"].prototype['updated_at'] = undefined; // Implement ScreensEditable interface:

/**
 * @member {String} title
 */

_ScreensEditable["default"].prototype['title'] = undefined;
/**
 * @member {String} type
 */

_ScreensEditable["default"].prototype['type'] = undefined;
/**
 * @member {String} description
 */

_ScreensEditable["default"].prototype['description'] = undefined;
/**
 * @member {Array.<Object>} config
 */

_ScreensEditable["default"].prototype['config'] = undefined;
/**
 * @member {Array.<Object>} computed
 */

_ScreensEditable["default"].prototype['computed'] = undefined;
/**
 * @member {Array.<Object>} watchers
 */

_ScreensEditable["default"].prototype['watchers'] = undefined;
/**
 * @member {String} custom_css
 */

_ScreensEditable["default"].prototype['custom_css'] = undefined;
/**
 * @member {String} screen_category_id
 */

_ScreensEditable["default"].prototype['screen_category_id'] = undefined;
var _default = Screens;
exports["default"] = _default;