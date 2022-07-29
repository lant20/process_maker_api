"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EnvironmentVariableAllOf = _interopRequireDefault(require("./EnvironmentVariableAllOf"));

var _ScriptExecutorsEditable = _interopRequireDefault(require("./ScriptExecutorsEditable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ScriptExecutors model module.
 * @module model/ScriptExecutors
 * @version 1.0.0
 */
var ScriptExecutors = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ScriptExecutors</code>.
   * @alias module:model/ScriptExecutors
   * @implements module:model/EnvironmentVariableAllOf
   * @implements module:model/ScriptExecutorsEditable
   */
  function ScriptExecutors() {
    _classCallCheck(this, ScriptExecutors);

    _EnvironmentVariableAllOf["default"].initialize(this);

    _ScriptExecutorsEditable["default"].initialize(this);

    ScriptExecutors.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ScriptExecutors, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ScriptExecutors</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScriptExecutors} obj Optional instance to populate.
     * @return {module:model/ScriptExecutors} The populated <code>ScriptExecutors</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ScriptExecutors();

        _EnvironmentVariableAllOf["default"].constructFromObject(data, obj);

        _ScriptExecutorsEditable["default"].constructFromObject(data, obj);

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

        if (data.hasOwnProperty('config')) {
          obj['config'] = _ApiClient["default"].convertToType(data['config'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ScriptExecutors;
}();
/**
 * @member {Number} id
 */


ScriptExecutors.prototype['id'] = undefined;
/**
 * @member {Date} created_at
 */

ScriptExecutors.prototype['created_at'] = undefined;
/**
 * @member {Date} updated_at
 */

ScriptExecutors.prototype['updated_at'] = undefined;
/**
 * @member {String} title
 */

ScriptExecutors.prototype['title'] = undefined;
/**
 * @member {String} description
 */

ScriptExecutors.prototype['description'] = undefined;
/**
 * @member {String} language
 */

ScriptExecutors.prototype['language'] = undefined;
/**
 * @member {String} config
 */

ScriptExecutors.prototype['config'] = undefined; // Implement EnvironmentVariableAllOf interface:

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

_EnvironmentVariableAllOf["default"].prototype['updated_at'] = undefined; // Implement ScriptExecutorsEditable interface:

/**
 * @member {String} title
 */

_ScriptExecutorsEditable["default"].prototype['title'] = undefined;
/**
 * @member {String} description
 */

_ScriptExecutorsEditable["default"].prototype['description'] = undefined;
/**
 * @member {String} language
 */

_ScriptExecutorsEditable["default"].prototype['language'] = undefined;
/**
 * @member {String} config
 */

_ScriptExecutorsEditable["default"].prototype['config'] = undefined;
var _default = ScriptExecutors;
exports["default"] = _default;