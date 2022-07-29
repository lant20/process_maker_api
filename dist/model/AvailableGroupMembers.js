"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AvailableGroupMembersAllOf = _interopRequireDefault(require("./AvailableGroupMembersAllOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The AvailableGroupMembers model module.
 * @module model/AvailableGroupMembers
 * @version 1.0.0
 */
var AvailableGroupMembers = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AvailableGroupMembers</code>.
   * Represents a group Members definition.
   * @alias module:model/AvailableGroupMembers
   * @implements module:model/AvailableGroupMembersAllOf
   */
  function AvailableGroupMembers() {
    _classCallCheck(this, AvailableGroupMembers);

    _AvailableGroupMembersAllOf["default"].initialize(this);

    AvailableGroupMembers.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AvailableGroupMembers, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AvailableGroupMembers</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AvailableGroupMembers} obj Optional instance to populate.
     * @return {module:model/AvailableGroupMembers} The populated <code>AvailableGroupMembers</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AvailableGroupMembers();

        _AvailableGroupMembersAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
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

  return AvailableGroupMembers;
}();
/**
 * @member {String} id
 */


AvailableGroupMembers.prototype['id'] = undefined;
/**
 * @member {String} description
 */

AvailableGroupMembers.prototype['description'] = undefined;
/**
 * @member {String} name
 */

AvailableGroupMembers.prototype['name'] = undefined;
/**
 * @member {module:model/AvailableGroupMembers.StatusEnum} status
 */

AvailableGroupMembers.prototype['status'] = undefined;
/**
 * @member {Date} created_at
 */

AvailableGroupMembers.prototype['created_at'] = undefined;
/**
 * @member {Date} updated_at
 */

AvailableGroupMembers.prototype['updated_at'] = undefined; // Implement AvailableGroupMembersAllOf interface:

/**
 * @member {String} id
 */

_AvailableGroupMembersAllOf["default"].prototype['id'] = undefined;
/**
 * @member {String} description
 */

_AvailableGroupMembersAllOf["default"].prototype['description'] = undefined;
/**
 * @member {String} name
 */

_AvailableGroupMembersAllOf["default"].prototype['name'] = undefined;
/**
 * @member {module:model/AvailableGroupMembersAllOf.StatusEnum} status
 */

_AvailableGroupMembersAllOf["default"].prototype['status'] = undefined;
/**
 * @member {Date} created_at
 */

_AvailableGroupMembersAllOf["default"].prototype['created_at'] = undefined;
/**
 * @member {Date} updated_at
 */

_AvailableGroupMembersAllOf["default"].prototype['updated_at'] = undefined;
/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */

AvailableGroupMembers['StatusEnum'] = {
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
var _default = AvailableGroupMembers;
exports["default"] = _default;