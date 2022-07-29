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
 * The GroupMembersEditable model module.
 * @module model/GroupMembersEditable
 * @version 1.0.0
 */
var GroupMembersEditable = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GroupMembersEditable</code>.
   * @alias module:model/GroupMembersEditable
   */
  function GroupMembersEditable() {
    _classCallCheck(this, GroupMembersEditable);

    GroupMembersEditable.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GroupMembersEditable, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>GroupMembersEditable</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GroupMembersEditable} obj Optional instance to populate.
     * @return {module:model/GroupMembersEditable} The populated <code>GroupMembersEditable</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GroupMembersEditable();

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

  return GroupMembersEditable;
}();
/**
 * @member {String} group_id
 */


GroupMembersEditable.prototype['group_id'] = undefined;
/**
 * @member {String} member_id
 */

GroupMembersEditable.prototype['member_id'] = undefined;
/**
 * @member {String} member_type
 */

GroupMembersEditable.prototype['member_type'] = undefined;
/**
 * @member {String} description
 */

GroupMembersEditable.prototype['description'] = undefined;
var _default = GroupMembersEditable;
exports["default"] = _default;