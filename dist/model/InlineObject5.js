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
 * The InlineObject5 model module.
 * @module model/InlineObject5
 * @version 1.0.0
 */
var InlineObject5 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject5</code>.
   * @alias module:model/InlineObject5
   */
  function InlineObject5() {
    _classCallCheck(this, InlineObject5);

    InlineObject5.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject5, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineObject5</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject5} obj Optional instance to populate.
     * @return {module:model/InlineObject5} The populated <code>InlineObject5</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject5();

        if (data.hasOwnProperty('user_id')) {
          obj['user_id'] = _ApiClient["default"].convertToType(data['user_id'], 'Number');
        }

        if (data.hasOwnProperty('group_id')) {
          obj['group_id'] = _ApiClient["default"].convertToType(data['group_id'], 'Number');
        }

        if (data.hasOwnProperty('is_administrator')) {
          obj['is_administrator'] = _ApiClient["default"].convertToType(data['is_administrator'], 'Boolean');
        }

        if (data.hasOwnProperty('permission_names')) {
          obj['permission_names'] = _ApiClient["default"].convertToType(data['permission_names'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return InlineObject5;
}();
/**
 * ID of the user whose permissions are configured
 * @member {Number} user_id
 */


InlineObject5.prototype['user_id'] = undefined;
/**
 * ID of the group whose permissions are configured
 * @member {Number} group_id
 */

InlineObject5.prototype['group_id'] = undefined;
/**
 * Whether the user should have Super Admin privileges
 * @member {Boolean} is_administrator
 * @default false
 */

InlineObject5.prototype['is_administrator'] = false;
/**
 * @member {Array.<String>} permission_names
 */

InlineObject5.prototype['permission_names'] = undefined;
var _default = InlineObject5;
exports["default"] = _default;