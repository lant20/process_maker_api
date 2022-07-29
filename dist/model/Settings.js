"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GroupMembersAllOf = _interopRequireDefault(require("./GroupMembersAllOf"));

var _SettingsEditable = _interopRequireDefault(require("./SettingsEditable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The Settings model module.
 * @module model/Settings
 * @version 1.0.0
 */
var Settings = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Settings</code>.
   * Class Settings
   * @alias module:model/Settings
   * @implements module:model/GroupMembersAllOf
   * @implements module:model/SettingsEditable
   */
  function Settings() {
    _classCallCheck(this, Settings);

    _GroupMembersAllOf["default"].initialize(this);

    _SettingsEditable["default"].initialize(this);

    Settings.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Settings, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Settings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Settings} obj Optional instance to populate.
     * @return {module:model/Settings} The populated <code>Settings</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Settings();

        _GroupMembersAllOf["default"].constructFromObject(data, obj);

        _SettingsEditable["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'Date');
        }

        if (data.hasOwnProperty('key')) {
          obj['key'] = _ApiClient["default"].convertToType(data['key'], 'String');
        }

        if (data.hasOwnProperty('config')) {
          obj['config'] = _ApiClient["default"].convertToType(data['config'], [Object]);
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('helper')) {
          obj['helper'] = _ApiClient["default"].convertToType(data['helper'], 'String');
        }

        if (data.hasOwnProperty('group')) {
          obj['group'] = _ApiClient["default"].convertToType(data['group'], 'String');
        }

        if (data.hasOwnProperty('format')) {
          obj['format'] = _ApiClient["default"].convertToType(data['format'], 'String');
        }

        if (data.hasOwnProperty('hidden')) {
          obj['hidden'] = _ApiClient["default"].convertToType(data['hidden'], 'Boolean');
        }

        if (data.hasOwnProperty('readonly')) {
          obj['readonly'] = _ApiClient["default"].convertToType(data['readonly'], 'Boolean');
        }

        if (data.hasOwnProperty('variables')) {
          obj['variables'] = _ApiClient["default"].convertToType(data['variables'], 'String');
        }

        if (data.hasOwnProperty('sansSerifFont')) {
          obj['sansSerifFont'] = _ApiClient["default"].convertToType(data['sansSerifFont'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Settings;
}();
/**
 * @member {String} id
 */


Settings.prototype['id'] = undefined;
/**
 * @member {Date} created_at
 */

Settings.prototype['created_at'] = undefined;
/**
 * @member {Date} updated_at
 */

Settings.prototype['updated_at'] = undefined;
/**
 * @member {String} key
 */

Settings.prototype['key'] = undefined;
/**
 * @member {Array.<Object>} config
 */

Settings.prototype['config'] = undefined;
/**
 * @member {String} name
 */

Settings.prototype['name'] = undefined;
/**
 * @member {String} helper
 */

Settings.prototype['helper'] = undefined;
/**
 * @member {String} group
 */

Settings.prototype['group'] = undefined;
/**
 * @member {String} format
 */

Settings.prototype['format'] = undefined;
/**
 * @member {Boolean} hidden
 */

Settings.prototype['hidden'] = undefined;
/**
 * @member {Boolean} readonly
 */

Settings.prototype['readonly'] = undefined;
/**
 * @member {String} variables
 */

Settings.prototype['variables'] = undefined;
/**
 * @member {String} sansSerifFont
 */

Settings.prototype['sansSerifFont'] = undefined; // Implement GroupMembersAllOf interface:

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

_GroupMembersAllOf["default"].prototype['updated_at'] = undefined; // Implement SettingsEditable interface:

/**
 * @member {String} key
 */

_SettingsEditable["default"].prototype['key'] = undefined;
/**
 * @member {Array.<Object>} config
 */

_SettingsEditable["default"].prototype['config'] = undefined;
/**
 * @member {String} name
 */

_SettingsEditable["default"].prototype['name'] = undefined;
/**
 * @member {String} helper
 */

_SettingsEditable["default"].prototype['helper'] = undefined;
/**
 * @member {String} group
 */

_SettingsEditable["default"].prototype['group'] = undefined;
/**
 * @member {String} format
 */

_SettingsEditable["default"].prototype['format'] = undefined;
/**
 * @member {Boolean} hidden
 */

_SettingsEditable["default"].prototype['hidden'] = undefined;
/**
 * @member {Boolean} readonly
 */

_SettingsEditable["default"].prototype['readonly'] = undefined;
/**
 * @member {String} variables
 */

_SettingsEditable["default"].prototype['variables'] = undefined;
/**
 * @member {String} sansSerifFont
 */

_SettingsEditable["default"].prototype['sansSerifFont'] = undefined;
var _default = Settings;
exports["default"] = _default;