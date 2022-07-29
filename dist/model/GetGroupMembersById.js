"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GetGroupMembersByIdAllOf = _interopRequireDefault(require("./GetGroupMembersByIdAllOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The GetGroupMembersById model module.
 * @module model/GetGroupMembersById
 * @version 1.0.0
 */
var GetGroupMembersById = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetGroupMembersById</code>.
   * @alias module:model/GetGroupMembersById
   * @implements module:model/GetGroupMembersByIdAllOf
   */
  function GetGroupMembersById() {
    _classCallCheck(this, GetGroupMembersById);

    _GetGroupMembersByIdAllOf["default"].initialize(this);

    GetGroupMembersById.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetGroupMembersById, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>GetGroupMembersById</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetGroupMembersById} obj Optional instance to populate.
     * @return {module:model/GetGroupMembersById} The populated <code>GetGroupMembersById</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetGroupMembersById();

        _GetGroupMembersByIdAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('group_id')) {
          obj['group_id'] = _ApiClient["default"].convertToType(data['group_id'], 'String');
        }

        if (data.hasOwnProperty('member_id')) {
          obj['member_id'] = _ApiClient["default"].convertToType(data['member_id'], 'String');
        }

        if (data.hasOwnProperty('member_type')) {
          obj['member_type'] = _ApiClient["default"].convertToType(data['member_type'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'Date');
        }
      }

      return obj;
    }
  }]);

  return GetGroupMembersById;
}();
/**
 * @member {String} group_id
 */


GetGroupMembersById.prototype['group_id'] = undefined;
/**
 * @member {String} member_id
 */

GetGroupMembersById.prototype['member_id'] = undefined;
/**
 * @member {String} member_type
 */

GetGroupMembersById.prototype['member_type'] = undefined;
/**
 * @member {String} id
 */

GetGroupMembersById.prototype['id'] = undefined;
/**
 * @member {Date} created_at
 */

GetGroupMembersById.prototype['created_at'] = undefined;
/**
 * @member {Date} updated_at
 */

GetGroupMembersById.prototype['updated_at'] = undefined; // Implement GetGroupMembersByIdAllOf interface:

/**
 * @member {String} group_id
 */

_GetGroupMembersByIdAllOf["default"].prototype['group_id'] = undefined;
/**
 * @member {String} member_id
 */

_GetGroupMembersByIdAllOf["default"].prototype['member_id'] = undefined;
/**
 * @member {String} member_type
 */

_GetGroupMembersByIdAllOf["default"].prototype['member_type'] = undefined;
/**
 * @member {String} id
 */

_GetGroupMembersByIdAllOf["default"].prototype['id'] = undefined;
/**
 * @member {Date} created_at
 */

_GetGroupMembersByIdAllOf["default"].prototype['created_at'] = undefined;
/**
 * @member {Date} updated_at
 */

_GetGroupMembersByIdAllOf["default"].prototype['updated_at'] = undefined;
var _default = GetGroupMembersById;
exports["default"] = _default;