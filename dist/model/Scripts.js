"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EnvironmentVariableAllOf = _interopRequireDefault(require("./EnvironmentVariableAllOf"));

var _ScriptsEditable = _interopRequireDefault(require("./ScriptsEditable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The Scripts model module.
 * @module model/Scripts
 * @version 1.0.0
 */
var Scripts = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Scripts</code>.
   * @alias module:model/Scripts
   * @implements module:model/EnvironmentVariableAllOf
   * @implements module:model/ScriptsEditable
   */
  function Scripts() {
    _classCallCheck(this, Scripts);

    _EnvironmentVariableAllOf["default"].initialize(this);

    _ScriptsEditable["default"].initialize(this);

    Scripts.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Scripts, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Scripts</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Scripts} obj Optional instance to populate.
     * @return {module:model/Scripts} The populated <code>Scripts</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Scripts();

        _EnvironmentVariableAllOf["default"].constructFromObject(data, obj);

        _ScriptsEditable["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
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

  return Scripts;
}();
/**
 * @member {Number} id
 */


Scripts.prototype['id'] = undefined;
/**
 * @member {Date} created_at
 */

Scripts.prototype['created_at'] = undefined;
/**
 * @member {Date} updated_at
 */

Scripts.prototype['updated_at'] = undefined;
/**
 * @member {String} title
 */

Scripts.prototype['title'] = undefined;
/**
 * @member {String} description
 */

Scripts.prototype['description'] = undefined;
/**
 * @member {String} language
 */

Scripts.prototype['language'] = undefined;
/**
 * @member {String} code
 */

Scripts.prototype['code'] = undefined;
/**
 * @member {Number} timeout
 */

Scripts.prototype['timeout'] = undefined;
/**
 * @member {Number} run_as_user_id
 */

Scripts.prototype['run_as_user_id'] = undefined;
/**
 * @member {String} key
 */

Scripts.prototype['key'] = undefined;
/**
 * @member {Number} script_category_id
 */

Scripts.prototype['script_category_id'] = undefined; // Implement EnvironmentVariableAllOf interface:

/**
 * @member {Number} id
 */

_EnvironmentVariableAllOf["default"].prototype['id'] = undefined;
/**
 * @member {Date} created_at
 */

_EnvironmentVariableAllOf["default"].prototype['created_at'] = undefined;
/**
 * @member {Date} updated_at
 */

_EnvironmentVariableAllOf["default"].prototype['updated_at'] = undefined; // Implement ScriptsEditable interface:

/**
 * @member {String} title
 */

_ScriptsEditable["default"].prototype['title'] = undefined;
/**
 * @member {String} description
 */

_ScriptsEditable["default"].prototype['description'] = undefined;
/**
 * @member {String} language
 */

_ScriptsEditable["default"].prototype['language'] = undefined;
/**
 * @member {String} code
 */

_ScriptsEditable["default"].prototype['code'] = undefined;
/**
 * @member {Number} timeout
 */

_ScriptsEditable["default"].prototype['timeout'] = undefined;
/**
 * @member {Number} run_as_user_id
 */

_ScriptsEditable["default"].prototype['run_as_user_id'] = undefined;
/**
 * @member {String} key
 */

_ScriptsEditable["default"].prototype['key'] = undefined;
/**
 * @member {Number} script_category_id
 */

_ScriptsEditable["default"].prototype['script_category_id'] = undefined;
var _default = Scripts;
exports["default"] = _default;