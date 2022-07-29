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
 * The MediaEditable model module.
 * @module model/MediaEditable
 * @version 1.0.0
 */
var MediaEditable = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MediaEditable</code>.
   * @alias module:model/MediaEditable
   */
  function MediaEditable() {
    _classCallCheck(this, MediaEditable);

    MediaEditable.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(MediaEditable, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>MediaEditable</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MediaEditable} obj Optional instance to populate.
     * @return {module:model/MediaEditable} The populated <code>MediaEditable</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MediaEditable();

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

  return MediaEditable;
}();
/**
 * @member {Number} id
 */


MediaEditable.prototype['id'] = undefined;
/**
 * @member {Number} model_id
 */

MediaEditable.prototype['model_id'] = undefined;
/**
 * @member {String} model_type
 */

MediaEditable.prototype['model_type'] = undefined;
/**
 * @member {String} collection_name
 */

MediaEditable.prototype['collection_name'] = undefined;
/**
 * @member {String} name
 */

MediaEditable.prototype['name'] = undefined;
/**
 * @member {String} file_name
 */

MediaEditable.prototype['file_name'] = undefined;
/**
 * @member {String} mime_type
 */

MediaEditable.prototype['mime_type'] = undefined;
/**
 * @member {String} disk
 */

MediaEditable.prototype['disk'] = undefined;
/**
 * @member {Number} size
 */

MediaEditable.prototype['size'] = undefined;
/**
 * @member {Object} manipulations
 */

MediaEditable.prototype['manipulations'] = undefined;
/**
 * @member {Object} custom_properties
 */

MediaEditable.prototype['custom_properties'] = undefined;
/**
 * @member {Object} responsive_images
 */

MediaEditable.prototype['responsive_images'] = undefined;
/**
 * @member {Number} order_column
 */

MediaEditable.prototype['order_column'] = undefined;
var _default = MediaEditable;
exports["default"] = _default;