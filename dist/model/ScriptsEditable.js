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
 * The ScriptsEditable model module.
 * @module model/ScriptsEditable
 * @version 1.0.0
 */
var ScriptsEditable = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ScriptsEditable</code>.
   * @alias module:model/ScriptsEditable
   */
  function ScriptsEditable() {
    _classCallCheck(this, ScriptsEditable);

    ScriptsEditable.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ScriptsEditable, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ScriptsEditable</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScriptsEditable} obj Optional instance to populate.
     * @return {module:model/ScriptsEditable} The populated <code>ScriptsEditable</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ScriptsEditable();

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('language')) {
          obj['language'] = _ApiClient["default"].convertToType(data['language'], 'String');
        }

        if (data.hasOwnProperty('code')) {
          obj['code'] = _ApiClient["default"].convertToType(data['code'], 'String');
        }

        if (data.hasOwnProperty('timeout')) {
          obj['timeout'] = _ApiClient["default"].convertToType(data['timeout'], 'Number');
        }

        if (data.hasOwnProperty('run_as_user_id')) {
          obj['run_as_user_id'] = _ApiClient["default"].convertToType(data['run_as_user_id'], 'Number');
        }

        if (data.hasOwnProperty('key')) {
          obj['key'] = _ApiClient["default"].convertToType(data['key'], 'String');
        }

        if (data.hasOwnProperty('script_category_id')) {
          obj['script_category_id'] = _ApiClient["default"].convertToType(data['script_category_id'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ScriptsEditable;
}();
/**
 * @member {String} title
 */


ScriptsEditable.prototype['title'] = undefined;
/**
 * @member {String} description
 */

ScriptsEditable.prototype['description'] = undefined;
/**
 * @member {String} language
 */

ScriptsEditable.prototype['language'] = undefined;
/**
 * @member {String} code
 */

ScriptsEditable.prototype['code'] = undefined;
/**
 * @member {Number} timeout
 */

ScriptsEditable.prototype['timeout'] = undefined;
/**
 * @member {Number} run_as_user_id
 */

ScriptsEditable.prototype['run_as_user_id'] = undefined;
/**
 * @member {String} key
 */

ScriptsEditable.prototype['key'] = undefined;
/**
 * @member {Number} script_category_id
 */

ScriptsEditable.prototype['script_category_id'] = undefined;
var _default = ScriptsEditable;
exports["default"] = _default;