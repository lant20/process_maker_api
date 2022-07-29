"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EnvironmentVariableAllOf = _interopRequireDefault(require("./EnvironmentVariableAllOf"));

var _EnvironmentVariableEditable = _interopRequireDefault(require("./EnvironmentVariableEditable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The EnvironmentVariable model module.
 * @module model/EnvironmentVariable
 * @version 1.0.0
 */
var EnvironmentVariable = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EnvironmentVariable</code>.
   * @alias module:model/EnvironmentVariable
   * @implements module:model/EnvironmentVariableAllOf
   * @implements module:model/EnvironmentVariableEditable
   */
  function EnvironmentVariable() {
    _classCallCheck(this, EnvironmentVariable);

    _EnvironmentVariableAllOf["default"].initialize(this);

    _EnvironmentVariableEditable["default"].initialize(this);

    EnvironmentVariable.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EnvironmentVariable, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EnvironmentVariable</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EnvironmentVariable} obj Optional instance to populate.
     * @return {module:model/EnvironmentVariable} The populated <code>EnvironmentVariable</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EnvironmentVariable();

        _EnvironmentVariableAllOf["default"].constructFromObject(data, obj);

        _EnvironmentVariableEditable["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'Date');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }
      }

      return obj;
    }
  }]);

  return EnvironmentVariable;
}();
/**
 * @member {Number} id
 */


EnvironmentVariable.prototype['id'] = undefined;
/**
 * @member {Date} created_at
 */

EnvironmentVariable.prototype['created_at'] = undefined;
/**
 * @member {Date} updated_at
 */

EnvironmentVariable.prototype['updated_at'] = undefined;
/**
 * @member {String} name
 */

EnvironmentVariable.prototype['name'] = undefined;
/**
 * @member {String} description
 */

EnvironmentVariable.prototype['description'] = undefined;
/**
 * @member {String} value
 */

EnvironmentVariable.prototype['value'] = undefined; // Implement EnvironmentVariableAllOf interface:

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

_EnvironmentVariableAllOf["default"].prototype['updated_at'] = undefined; // Implement EnvironmentVariableEditable interface:

/**
 * @member {String} name
 */

_EnvironmentVariableEditable["default"].prototype['name'] = undefined;
/**
 * @member {String} description
 */

_EnvironmentVariableEditable["default"].prototype['description'] = undefined;
/**
 * @member {String} value
 */

_EnvironmentVariableEditable["default"].prototype['value'] = undefined;
var _default = EnvironmentVariable;
exports["default"] = _default;