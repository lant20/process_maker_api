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
 * The CreateGroupMembersAllOf model module.
 * @module model/CreateGroupMembersAllOf
 * @version 1.0.0
 */
var CreateGroupMembersAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateGroupMembersAllOf</code>.
   * @alias module:model/CreateGroupMembersAllOf
   */
  function CreateGroupMembersAllOf() {
    _classCallCheck(this, CreateGroupMembersAllOf);

    CreateGroupMembersAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateGroupMembersAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreateGroupMembersAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateGroupMembersAllOf} obj Optional instance to populate.
     * @return {module:model/CreateGroupMembersAllOf} The populated <code>CreateGroupMembersAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateGroupMembersAllOf();

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
      }

      return obj;
    }
  }]);

  return CreateGroupMembersAllOf;
}();
/**
 * @member {String} id
 */


CreateGroupMembersAllOf.prototype['id'] = undefined;
/**
 * @member {Object} group
 */

CreateGroupMembersAllOf.prototype['group'] = undefined;
/**
 * @member {Object} member
 */

CreateGroupMembersAllOf.prototype['member'] = undefined;
/**
 * @member {Date} created_at
 */

CreateGroupMembersAllOf.prototype['created_at'] = undefined;
/**
 * @member {Date} updated_at
 */

CreateGroupMembersAllOf.prototype['updated_at'] = undefined;
var _default = CreateGroupMembersAllOf;
exports["default"] = _default;