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
 * The NotificationAllOf model module.
 * @module model/NotificationAllOf
 * @version 1.0.0
 */
var NotificationAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NotificationAllOf</code>.
   * @alias module:model/NotificationAllOf
   */
  function NotificationAllOf() {
    _classCallCheck(this, NotificationAllOf);

    NotificationAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NotificationAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>NotificationAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NotificationAllOf} obj Optional instance to populate.
     * @return {module:model/NotificationAllOf} The populated <code>NotificationAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NotificationAllOf();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('read_at')) {
          obj['read_at'] = _ApiClient["default"].convertToType(data['read_at'], 'Date');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'Date');
        }
      }

      return obj;
    }
  }]);

  return NotificationAllOf;
}();
/**
 * @member {String} id
 */


NotificationAllOf.prototype['id'] = undefined;
/**
 * @member {Date} read_at
 */

NotificationAllOf.prototype['read_at'] = undefined;
/**
 * @member {Date} created_at
 */

NotificationAllOf.prototype['created_at'] = undefined;
/**
 * @member {Date} updated_at
 */

NotificationAllOf.prototype['updated_at'] = undefined;
var _default = NotificationAllOf;
exports["default"] = _default;