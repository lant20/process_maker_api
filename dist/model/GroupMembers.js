"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GroupMembersAllOf = _interopRequireDefault(require("./GroupMembersAllOf"));

var _GroupMembersEditable = _interopRequireDefault(require("./GroupMembersEditable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The GroupMembers model module.
 * @module model/GroupMembers
 * @version 1.0.0
 */
var GroupMembers = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GroupMembers</code>.
   * @alias module:model/GroupMembers
   * @implements module:model/GroupMembersAllOf
   * @implements module:model/GroupMembersEditable
   */
  function GroupMembers() {
    _classCallCheck(this, GroupMembers);

    _GroupMembersAllOf["default"].initialize(this);

    _GroupMembersEditable["default"].initialize(this);

    GroupMembers.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GroupMembers, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>GroupMembers</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GroupMembers} obj Optional instance to populate.
     * @return {module:model/GroupMembers} The populated <code>GroupMembers</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GroupMembers();

        _GroupMembersAllOf["default"].constructFromObject(data, obj);

        _GroupMembersEditable["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
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

  return GroupMembers;
}();
/**
 * @member {String} id
 */


GroupMembers.prototype['id'] = undefined;
/**
 * @member {Date} created_at
 */

GroupMembers.prototype['created_at'] = undefined;
/**
 * @member {Date} updated_at
 */

GroupMembers.prototype['updated_at'] = undefined;
/**
 * @member {String} group_id
 */

GroupMembers.prototype['group_id'] = undefined;
/**
 * @member {String} member_id
 */

GroupMembers.prototype['member_id'] = undefined;
/**
 * @member {String} member_type
 */

GroupMembers.prototype['member_type'] = undefined;
/**
 * @member {String} description
 */

GroupMembers.prototype['description'] = undefined; // Implement GroupMembersAllOf interface:

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

_GroupMembersAllOf["default"].prototype['updated_at'] = undefined; // Implement GroupMembersEditable interface:

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
var _default = GroupMembers;
exports["default"] = _default;