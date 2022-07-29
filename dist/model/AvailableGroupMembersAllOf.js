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
 * The AvailableGroupMembersAllOf model module.
 * @module model/AvailableGroupMembersAllOf
 * @version 1.0.0
 */
var AvailableGroupMembersAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AvailableGroupMembersAllOf</code>.
   * @alias module:model/AvailableGroupMembersAllOf
   */
  function AvailableGroupMembersAllOf() {
    _classCallCheck(this, AvailableGroupMembersAllOf);

    AvailableGroupMembersAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AvailableGroupMembersAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AvailableGroupMembersAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AvailableGroupMembersAllOf} obj Optional instance to populate.
     * @return {module:model/AvailableGroupMembersAllOf} The populated <code>AvailableGroupMembersAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AvailableGroupMembersAllOf();

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

  return AvailableGroupMembersAllOf;
}();
/**
 * @member {String} id
 */


AvailableGroupMembersAllOf.prototype['id'] = undefined;
/**
 * @member {String} description
 */

AvailableGroupMembersAllOf.prototype['description'] = undefined;
/**
 * @member {String} name
 */

AvailableGroupMembersAllOf.prototype['name'] = undefined;
/**
 * @member {module:model/AvailableGroupMembersAllOf.StatusEnum} status
 */

AvailableGroupMembersAllOf.prototype['status'] = undefined;
/**
 * @member {Date} created_at
 */

AvailableGroupMembersAllOf.prototype['created_at'] = undefined;
/**
 * @member {Date} updated_at
 */

AvailableGroupMembersAllOf.prototype['updated_at'] = undefined;
/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */

AvailableGroupMembersAllOf['StatusEnum'] = {
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
var _default = AvailableGroupMembersAllOf;
exports["default"] = _default;