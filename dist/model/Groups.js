"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GroupsAllOf = _interopRequireDefault(require("./GroupsAllOf"));

var _GroupsEditable = _interopRequireDefault(require("./GroupsEditable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The Groups model module.
 * @module model/Groups
 * @version 1.0.0
 */
var Groups = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Groups</code>.
   * Represents a group definition.
   * @alias module:model/Groups
   * @implements module:model/GroupsAllOf
   * @implements module:model/GroupsEditable
   */
  function Groups() {
    _classCallCheck(this, Groups);

    _GroupsAllOf["default"].initialize(this);

    _GroupsEditable["default"].initialize(this);

    Groups.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Groups, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Groups</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Groups} obj Optional instance to populate.
     * @return {module:model/Groups} The populated <code>Groups</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Groups();

        _GroupsAllOf["default"].constructFromObject(data, obj);

        _GroupsEditable["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'Date');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('manager_id')) {
          obj['manager_id'] = _ApiClient["default"].convertToType(data['manager_id'], 'Number');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Groups;
}();
/**
 * @member {Date} created_at
 */


Groups.prototype['created_at'] = undefined;
/**
 * @member {Date} updated_at
 */

Groups.prototype['updated_at'] = undefined;
/**
 * @member {String} id
 */

Groups.prototype['id'] = undefined;
/**
 * @member {String} name
 */

Groups.prototype['name'] = undefined;
/**
 * @member {String} description
 */

Groups.prototype['description'] = undefined;
/**
 * @member {Number} manager_id
 */

Groups.prototype['manager_id'] = undefined;
/**
 * @member {module:model/Groups.StatusEnum} status
 */

Groups.prototype['status'] = undefined; // Implement GroupsAllOf interface:

/**
 * @member {Date} created_at
 */

_GroupsAllOf["default"].prototype['created_at'] = undefined;
/**
 * @member {Date} updated_at
 */

_GroupsAllOf["default"].prototype['updated_at'] = undefined;
/**
 * @member {String} id
 */

_GroupsAllOf["default"].prototype['id'] = undefined; // Implement GroupsEditable interface:

/**
 * @member {String} name
 */

_GroupsEditable["default"].prototype['name'] = undefined;
/**
 * @member {String} description
 */

_GroupsEditable["default"].prototype['description'] = undefined;
/**
 * @member {Number} manager_id
 */

_GroupsEditable["default"].prototype['manager_id'] = undefined;
/**
 * @member {module:model/GroupsEditable.StatusEnum} status
 */

_GroupsEditable["default"].prototype['status'] = undefined;
/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */

Groups['StatusEnum'] = {
  /**
   * value: "ACTIVE"
   * @const
   */
  "ACTIVE": "ACTIVE",

  /**
   * value: "INACTIVE"
   * @const
   */
  "INACTIVE": "INACTIVE"
};
var _default = Groups;
exports["default"] = _default;