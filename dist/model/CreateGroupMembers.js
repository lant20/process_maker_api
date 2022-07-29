"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CreateGroupMembersAllOf = _interopRequireDefault(require("./CreateGroupMembersAllOf"));

var _GroupMembersEditable = _interopRequireDefault(require("./GroupMembersEditable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The CreateGroupMembers model module.
 * @module model/CreateGroupMembers
 * @version 1.0.0
 */
var CreateGroupMembers = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateGroupMembers</code>.
   * @alias module:model/CreateGroupMembers
   * @implements module:model/CreateGroupMembersAllOf
   * @implements module:model/GroupMembersEditable
   */
  function CreateGroupMembers() {
    _classCallCheck(this, CreateGroupMembers);

    _CreateGroupMembersAllOf["default"].initialize(this);

    _GroupMembersEditable["default"].initialize(this);

    CreateGroupMembers.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateGroupMembers, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreateGroupMembers</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateGroupMembers} obj Optional instance to populate.
     * @return {module:model/CreateGroupMembers} The populated <code>CreateGroupMembers</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateGroupMembers();

        _CreateGroupMembersAllOf["default"].constructFromObject(data, obj);

        _GroupMembersEditable["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('group')) {
          obj['group'] = _ApiClient["default"].convertToType(data['group'], Object);
        }

        if (data.hasOwnProperty('member')) {
          obj['member'] = _ApiClient["default"].convertToType(data['member'], Object);
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'Date');
        }

        if (data.hasOwnProperty('group_id')) {
          obj['group_id'] = _ApiClient["default"].convertToType(data['group_id'], 'String');
        }

        if (data.hasOwnProperty('member_id')) {
          obj['member_id'] = _ApiClient["default"].convertToType(data['member_id'], 'String');
        }

        if (data.hasOwnProperty('member_type')) {
          obj['member_type'] = _ApiClient["default"].convertToType(data['member_type'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CreateGroupMembers;
}();
/**
 * @member {String} id
 */


CreateGroupMembers.prototype['id'] = undefined;
/**
 * @member {Object} group
 */

CreateGroupMembers.prototype['group'] = undefined;
/**
 * @member {Object} member
 */

CreateGroupMembers.prototype['member'] = undefined;
/**
 * @member {Date} created_at
 */

CreateGroupMembers.prototype['created_at'] = undefined;
/**
 * @member {Date} updated_at
 */

CreateGroupMembers.prototype['updated_at'] = undefined;
/**
 * @member {String} group_id
 */

CreateGroupMembers.prototype['group_id'] = undefined;
/**
 * @member {String} member_id
 */

CreateGroupMembers.prototype['member_id'] = undefined;
/**
 * @member {String} member_type
 */

CreateGroupMembers.prototype['member_type'] = undefined;
/**
 * @member {String} description
 */

CreateGroupMembers.prototype['description'] = undefined; // Implement CreateGroupMembersAllOf interface:

/**
 * @member {String} id
 */

_CreateGroupMembersAllOf["default"].prototype['id'] = undefined;
/**
 * @member {Object} group
 */

_CreateGroupMembersAllOf["default"].prototype['group'] = undefined;
/**
 * @member {Object} member
 */

_CreateGroupMembersAllOf["default"].prototype['member'] = undefined;
/**
 * @member {Date} created_at
 */

_CreateGroupMembersAllOf["default"].prototype['created_at'] = undefined;
/**
 * @member {Date} updated_at
 */

_CreateGroupMembersAllOf["default"].prototype['updated_at'] = undefined; // Implement GroupMembersEditable interface:

/**
 * @member {String} group_id
 */

_GroupMembersEditable["default"].prototype['group_id'] = undefined;
/**
 * @member {String} member_id
 */

_GroupMembersEditable["default"].prototype['member_id'] = undefined;
/**
 * @member {String} member_type
 */

_GroupMembersEditable["default"].prototype['member_type'] = undefined;
/**
 * @member {String} description
 */

_GroupMembersEditable["default"].prototype['description'] = undefined;
var _default = CreateGroupMembers;
exports["default"] = _default;