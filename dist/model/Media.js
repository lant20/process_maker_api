"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CommentsAllOf = _interopRequireDefault(require("./CommentsAllOf"));

var _MediaEditable = _interopRequireDefault(require("./MediaEditable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The Media model module.
 * @module model/Media
 * @version 1.0.0
 */
var Media = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Media</code>.
   * @alias module:model/Media
   * @implements module:model/CommentsAllOf
   * @implements module:model/MediaEditable
   */
  function Media() {
    _classCallCheck(this, Media);

    _CommentsAllOf["default"].initialize(this);

    _MediaEditable["default"].initialize(this);

    Media.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Media, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Media</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Media} obj Optional instance to populate.
     * @return {module:model/Media} The populated <code>Media</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Media();

        _CommentsAllOf["default"].constructFromObject(data, obj);

        _MediaEditable["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'Date');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('model_id')) {
          obj['model_id'] = _ApiClient["default"].convertToType(data['model_id'], 'Number');
        }

        if (data.hasOwnProperty('model_type')) {
          obj['model_type'] = _ApiClient["default"].convertToType(data['model_type'], 'String');
        }

        if (data.hasOwnProperty('collection_name')) {
          obj['collection_name'] = _ApiClient["default"].convertToType(data['collection_name'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('file_name')) {
          obj['file_name'] = _ApiClient["default"].convertToType(data['file_name'], 'String');
        }

        if (data.hasOwnProperty('mime_type')) {
          obj['mime_type'] = _ApiClient["default"].convertToType(data['mime_type'], 'String');
        }

        if (data.hasOwnProperty('disk')) {
          obj['disk'] = _ApiClient["default"].convertToType(data['disk'], 'String');
        }

        if (data.hasOwnProperty('size')) {
          obj['size'] = _ApiClient["default"].convertToType(data['size'], 'Number');
        }

        if (data.hasOwnProperty('manipulations')) {
          obj['manipulations'] = _ApiClient["default"].convertToType(data['manipulations'], Object);
        }

        if (data.hasOwnProperty('custom_properties')) {
          obj['custom_properties'] = _ApiClient["default"].convertToType(data['custom_properties'], Object);
        }

        if (data.hasOwnProperty('responsive_images')) {
          obj['responsive_images'] = _ApiClient["default"].convertToType(data['responsive_images'], Object);
        }

        if (data.hasOwnProperty('order_column')) {
          obj['order_column'] = _ApiClient["default"].convertToType(data['order_column'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return Media;
}();
/**
 * @member {Date} created_at
 */


Media.prototype['created_at'] = undefined;
/**
 * @member {Date} updated_at
 */

Media.prototype['updated_at'] = undefined;
/**
 * @member {Number} id
 */

Media.prototype['id'] = undefined;
/**
 * @member {Number} model_id
 */

Media.prototype['model_id'] = undefined;
/**
 * @member {String} model_type
 */

Media.prototype['model_type'] = undefined;
/**
 * @member {String} collection_name
 */

Media.prototype['collection_name'] = undefined;
/**
 * @member {String} name
 */

Media.prototype['name'] = undefined;
/**
 * @member {String} file_name
 */

Media.prototype['file_name'] = undefined;
/**
 * @member {String} mime_type
 */

Media.prototype['mime_type'] = undefined;
/**
 * @member {String} disk
 */

Media.prototype['disk'] = undefined;
/**
 * @member {Number} size
 */

Media.prototype['size'] = undefined;
/**
 * @member {Object} manipulations
 */

Media.prototype['manipulations'] = undefined;
/**
 * @member {Object} custom_properties
 */

Media.prototype['custom_properties'] = undefined;
/**
 * @member {Object} responsive_images
 */

Media.prototype['responsive_images'] = undefined;
/**
 * @member {Number} order_column
 */

Media.prototype['order_column'] = undefined; // Implement CommentsAllOf interface:

/**
 * @member {Date} created_at
 */

_CommentsAllOf["default"].prototype['created_at'] = undefined;
/**
 * @member {Date} updated_at
 */

_CommentsAllOf["default"].prototype['updated_at'] = undefined; // Implement MediaEditable interface:

/**
 * @member {Number} id
 */

_MediaEditable["default"].prototype['id'] = undefined;
/**
 * @member {Number} model_id
 */

_MediaEditable["default"].prototype['model_id'] = undefined;
/**
 * @member {String} model_type
 */

_MediaEditable["default"].prototype['model_type'] = undefined;
/**
 * @member {String} collection_name
 */

_MediaEditable["default"].prototype['collection_name'] = undefined;
/**
 * @member {String} name
 */

_MediaEditable["default"].prototype['name'] = undefined;
/**
 * @member {String} file_name
 */

_MediaEditable["default"].prototype['file_name'] = undefined;
/**
 * @member {String} mime_type
 */

_MediaEditable["default"].prototype['mime_type'] = undefined;
/**
 * @member {String} disk
 */

_MediaEditable["default"].prototype['disk'] = undefined;
/**
 * @member {Number} size
 */

_MediaEditable["default"].prototype['size'] = undefined;
/**
 * @member {Object} manipulations
 */

_MediaEditable["default"].prototype['manipulations'] = undefined;
/**
 * @member {Object} custom_properties
 */

_MediaEditable["default"].prototype['custom_properties'] = undefined;
/**
 * @member {Object} responsive_images
 */

_MediaEditable["default"].prototype['responsive_images'] = undefined;
/**
 * @member {Number} order_column
 */

_MediaEditable["default"].prototype['order_column'] = undefined;
var _default = Media;
exports["default"] = _default;