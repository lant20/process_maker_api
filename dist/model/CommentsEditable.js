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
 * The CommentsEditable model module.
 * @module model/CommentsEditable
 * @version 1.0.0
 */
var CommentsEditable = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CommentsEditable</code>.
   * @alias module:model/CommentsEditable
   */
  function CommentsEditable() {
    _classCallCheck(this, CommentsEditable);

    CommentsEditable.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CommentsEditable, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CommentsEditable</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CommentsEditable} obj Optional instance to populate.
     * @return {module:model/CommentsEditable} The populated <code>CommentsEditable</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CommentsEditable();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('user_id')) {
          obj['user_id'] = _ApiClient["default"].convertToType(data['user_id'], 'String');
        }

        if (data.hasOwnProperty('commentable_id')) {
          obj['commentable_id'] = _ApiClient["default"].convertToType(data['commentable_id'], 'String');
        }

        if (data.hasOwnProperty('commentable_type')) {
          obj['commentable_type'] = _ApiClient["default"].convertToType(data['commentable_type'], 'String');
        }

        if (data.hasOwnProperty('up')) {
          obj['up'] = _ApiClient["default"].convertToType(data['up'], 'Number');
        }

        if (data.hasOwnProperty('down')) {
          obj['down'] = _ApiClient["default"].convertToType(data['down'], 'Number');
        }

        if (data.hasOwnProperty('subject')) {
          obj['subject'] = _ApiClient["default"].convertToType(data['subject'], 'String');
        }

        if (data.hasOwnProperty('body')) {
          obj['body'] = _ApiClient["default"].convertToType(data['body'], 'String');
        }

        if (data.hasOwnProperty('hidden')) {
          obj['hidden'] = _ApiClient["default"].convertToType(data['hidden'], 'Boolean');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CommentsEditable;
}();
/**
 * @member {String} id
 */


CommentsEditable.prototype['id'] = undefined;
/**
 * @member {String} user_id
 */

CommentsEditable.prototype['user_id'] = undefined;
/**
 * @member {String} commentable_id
 */

CommentsEditable.prototype['commentable_id'] = undefined;
/**
 * @member {String} commentable_type
 */

CommentsEditable.prototype['commentable_type'] = undefined;
/**
 * @member {Number} up
 */

CommentsEditable.prototype['up'] = undefined;
/**
 * @member {Number} down
 */

CommentsEditable.prototype['down'] = undefined;
/**
 * @member {String} subject
 */

CommentsEditable.prototype['subject'] = undefined;
/**
 * @member {String} body
 */

CommentsEditable.prototype['body'] = undefined;
/**
 * @member {Boolean} hidden
 */

CommentsEditable.prototype['hidden'] = undefined;
/**
 * @member {module:model/CommentsEditable.TypeEnum} type
 */

CommentsEditable.prototype['type'] = undefined;
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */

CommentsEditable['TypeEnum'] = {
  /**
   * value: "LOG"
   * @const
   */
  "LOG": "LOG",

  /**
   * value: "MESSAGE"
   * @const
   */
  "MESSAGE": "MESSAGE"
};
var _default = CommentsEditable;
exports["default"] = _default;