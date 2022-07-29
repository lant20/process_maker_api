"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SecurityLogOs = _interopRequireDefault(require("./SecurityLogOs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The SecurityLogMeta model module.
 * @module model/SecurityLogMeta
 * @version 1.0.0
 */
var SecurityLogMeta = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SecurityLogMeta</code>.
   * @alias module:model/SecurityLogMeta
   */
  function SecurityLogMeta() {
    _classCallCheck(this, SecurityLogMeta);

    SecurityLogMeta.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SecurityLogMeta, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SecurityLogMeta</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SecurityLogMeta} obj Optional instance to populate.
     * @return {module:model/SecurityLogMeta} The populated <code>SecurityLogMeta</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SecurityLogMeta();

        if (data.hasOwnProperty('os')) {
          obj['os'] = _ApiClient["default"].convertToType(data['os'], [_SecurityLogOs["default"]]);
        }

        if (data.hasOwnProperty('browser')) {
          obj['browser'] = _ApiClient["default"].convertToType(data['browser'], [_SecurityLogOs["default"]]);
        }

        if (data.hasOwnProperty('user_agent')) {
          obj['user_agent'] = _ApiClient["default"].convertToType(data['user_agent'], 'String');
        }
      }

      return obj;
    }
  }]);

  return SecurityLogMeta;
}();
/**
 * @member {Array.<module:model/SecurityLogOs>} os
 */


SecurityLogMeta.prototype['os'] = undefined;
/**
 * @member {Array.<module:model/SecurityLogOs>} browser
 */

SecurityLogMeta.prototype['browser'] = undefined;
/**
 * @member {String} user_agent
 */

SecurityLogMeta.prototype['user_agent'] = undefined;
var _default = SecurityLogMeta;
exports["default"] = _default;