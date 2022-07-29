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
 * The AvailableLanguages model module.
 * @module model/AvailableLanguages
 * @version 1.0.0
 */
var AvailableLanguages = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AvailableLanguages</code>.
   * Represents an Eloquent model of a Script Executor
   * @alias module:model/AvailableLanguages
   */
  function AvailableLanguages() {
    _classCallCheck(this, AvailableLanguages);

    AvailableLanguages.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AvailableLanguages, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AvailableLanguages</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AvailableLanguages} obj Optional instance to populate.
     * @return {module:model/AvailableLanguages} The populated <code>AvailableLanguages</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AvailableLanguages();

        if (data.hasOwnProperty('text')) {
          obj['text'] = _ApiClient["default"].convertToType(data['text'], 'String');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }

        if (data.hasOwnProperty('initDockerFile')) {
          obj['initDockerFile'] = _ApiClient["default"].convertToType(data['initDockerFile'], 'String');
        }
      }

      return obj;
    }
  }]);

  return AvailableLanguages;
}();
/**
 * @member {String} text
 */


AvailableLanguages.prototype['text'] = undefined;
/**
 * @member {String} value
 */

AvailableLanguages.prototype['value'] = undefined;
/**
 * @member {String} initDockerFile
 */

AvailableLanguages.prototype['initDockerFile'] = undefined;
var _default = AvailableLanguages;
exports["default"] = _default;