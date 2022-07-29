"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CommentsAllOf = _interopRequireDefault(require("./CommentsAllOf"));

var _CommentsEditable = _interopRequireDefault(require("./CommentsEditable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The Comments model module.
 * @module model/Comments
 * @version 1.0.0
 */
var Comments = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Comments</code>.
   * Represents a business process definition.
   * @alias module:model/Comments
   * @implements module:model/CommentsAllOf
   * @implements module:model/CommentsEditable
   */
  function Comments() {
    _classCallCheck(this, Comments);

    _CommentsAllOf["default"].initialize(this);

    _CommentsEditable["default"].initialize(this);

    Comments.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Comments, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Comments</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Comments} obj Optional instance to populate.
     * @return {module:model/Comments} The populated <code>Comments</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Comments();

        _CommentsAllOf["default"].constructFromObject(data, obj);

        _CommentsEditable["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'Date');
        }

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

  return Comments;
}();
/**
 * @member {Date} created_at
 */


Comments.prototype['created_at'] = undefined;
/**
 * @member {Date} updated_at
 */

Comments.prototype['updated_at'] = undefined;
/**
 * @member {String} id
 */

Comments.prototype['id'] = undefined;
/**
 * @member {String} user_id
 */

Comments.prototype['user_id'] = undefined;
/**
 * @member {String} commentable_id
 */

Comments.prototype['commentable_id'] = undefined;
/**
 * @member {String} commentable_type
 */

Comments.prototype['commentable_type'] = undefined;
/**
 * @member {Number} up
 */

Comments.prototype['up'] = undefined;
/**
 * @member {Number} down
 */

Comments.prototype['down'] = undefined;
/**
 * @member {String} subject
 */

Comments.prototype['subject'] = undefined;
/**
 * @member {String} body
 */

Comments.prototype['body'] = undefined;
/**
 * @member {Boolean} hidden
 */

Comments.prototype['hidden'] = undefined;
/**
 * @member {module:model/Comments.TypeEnum} type
 */

Comments.prototype['type'] = undefined; // Implement CommentsAllOf interface:

/**
 * @member {Date} created_at
 */

_CommentsAllOf["default"].prototype['created_at'] = undefined;
/**
 * @member {Date} updated_at
 */

_CommentsAllOf["default"].prototype['updated_at'] = undefined; // Implement CommentsEditable interface:

/**
 * @member {String} id
 */

_CommentsEditable["default"].prototype['id'] = undefined;
/**
 * @member {String} user_id
 */

_CommentsEditable["default"].prototype['user_id'] = undefined;
/**
 * @member {String} commentable_id
 */

_CommentsEditable["default"].prototype['commentable_id'] = undefined;
/**
 * @member {String} commentable_type
 */

_CommentsEditable["default"].prototype['commentable_type'] = undefined;
/**
 * @member {Number} up
 */

_CommentsEditable["default"].prototype['up'] = undefined;
/**
 * @member {Number} down
 */

_CommentsEditable["default"].prototype['down'] = undefined;
/**
 * @member {String} subject
 */

_CommentsEditable["default"].prototype['subject'] = undefined;
/**
 * @member {String} body
 */

_CommentsEditable["default"].prototype['body'] = undefined;
/**
 * @member {Boolean} hidden
 */

_CommentsEditable["default"].prototype['hidden'] = undefined;
/**
 * @member {module:model/CommentsEditable.TypeEnum} type
 */

_CommentsEditable["default"].prototype['type'] = undefined;
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */

Comments['TypeEnum'] = {
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
var _default = Comments;
exports["default"] = _default;