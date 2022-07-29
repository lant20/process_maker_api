"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ProcessRequestAllOf = _interopRequireDefault(require("./ProcessRequestAllOf"));

var _ProcessRequestEditable = _interopRequireDefault(require("./ProcessRequestEditable"));

var _Users = _interopRequireDefault(require("./Users"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ProcessRequest model module.
 * @module model/ProcessRequest
 * @version 1.0.0
 */
var ProcessRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ProcessRequest</code>.
   * Represents an Eloquent model of a Request which is an instance of a Process.
   * @alias module:model/ProcessRequest
   * @implements module:model/ProcessRequestAllOf
   * @implements module:model/ProcessRequestEditable
   */
  function ProcessRequest() {
    _classCallCheck(this, ProcessRequest);

    _ProcessRequestAllOf["default"].initialize(this);

    _ProcessRequestEditable["default"].initialize(this);

    ProcessRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ProcessRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ProcessRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProcessRequest} obj Optional instance to populate.
     * @return {module:model/ProcessRequest} The populated <code>ProcessRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProcessRequest();

        _ProcessRequestAllOf["default"].constructFromObject(data, obj);

        _ProcessRequestEditable["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('process_id')) {
          obj['process_id'] = _ApiClient["default"].convertToType(data['process_id'], 'Number');
        }

        if (data.hasOwnProperty('process_collaboration_id')) {
          obj['process_collaboration_id'] = _ApiClient["default"].convertToType(data['process_collaboration_id'], 'String');
        }

        if (data.hasOwnProperty('participant_id')) {
          obj['participant_id'] = _ApiClient["default"].convertToType(data['participant_id'], 'String');
        }

        if (data.hasOwnProperty('process_category_id')) {
          obj['process_category_id'] = _ApiClient["default"].convertToType(data['process_category_id'], 'String');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'Date');
        }

        if (data.hasOwnProperty('user')) {
          obj['user'] = _ApiClient["default"].convertToType(data['user'], Object);
        }

        if (data.hasOwnProperty('participants')) {
          obj['participants'] = _ApiClient["default"].convertToType(data['participants'], [_Users["default"]]);
        }

        if (data.hasOwnProperty('user_id')) {
          obj['user_id'] = _ApiClient["default"].convertToType(data['user_id'], 'String');
        }

        if (data.hasOwnProperty('callable_id')) {
          obj['callable_id'] = _ApiClient["default"].convertToType(data['callable_id'], 'String');
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], Object);
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('process')) {
          obj['process'] = _ApiClient["default"].convertToType(data['process'], Object);
        }
      }

      return obj;
    }
  }]);

  return ProcessRequest;
}();
/**
 * @member {String} id
 */


ProcessRequest.prototype['id'] = undefined;
/**
 * @member {Number} process_id
 */

ProcessRequest.prototype['process_id'] = undefined;
/**
 * @member {String} process_collaboration_id
 */

ProcessRequest.prototype['process_collaboration_id'] = undefined;
/**
 * @member {String} participant_id
 */

ProcessRequest.prototype['participant_id'] = undefined;
/**
 * @member {String} process_category_id
 */

ProcessRequest.prototype['process_category_id'] = undefined;
/**
 * @member {Date} created_at
 */

ProcessRequest.prototype['created_at'] = undefined;
/**
 * @member {Date} updated_at
 */

ProcessRequest.prototype['updated_at'] = undefined;
/**
 * @member {Object} user
 */

ProcessRequest.prototype['user'] = undefined;
/**
 * @member {Array.<module:model/Users>} participants
 */

ProcessRequest.prototype['participants'] = undefined;
/**
 * @member {String} user_id
 */

ProcessRequest.prototype['user_id'] = undefined;
/**
 * @member {String} callable_id
 */

ProcessRequest.prototype['callable_id'] = undefined;
/**
 * @member {Object} data
 */

ProcessRequest.prototype['data'] = undefined;
/**
 * @member {module:model/ProcessRequest.StatusEnum} status
 */

ProcessRequest.prototype['status'] = undefined;
/**
 * @member {String} name
 */

ProcessRequest.prototype['name'] = undefined;
/**
 * @member {Object} process
 */

ProcessRequest.prototype['process'] = undefined; // Implement ProcessRequestAllOf interface:

/**
 * @member {String} id
 */

_ProcessRequestAllOf["default"].prototype['id'] = undefined;
/**
 * @member {String} process_id
 */

_ProcessRequestAllOf["default"].prototype['process_id'] = undefined;
/**
 * @member {String} process_collaboration_id
 */

_ProcessRequestAllOf["default"].prototype['process_collaboration_id'] = undefined;
/**
 * @member {String} participant_id
 */

_ProcessRequestAllOf["default"].prototype['participant_id'] = undefined;
/**
 * @member {String} process_category_id
 */

_ProcessRequestAllOf["default"].prototype['process_category_id'] = undefined;
/**
 * @member {Date} created_at
 */

_ProcessRequestAllOf["default"].prototype['created_at'] = undefined;
/**
 * @member {Date} updated_at
 */

_ProcessRequestAllOf["default"].prototype['updated_at'] = undefined;
/**
 * @member {Object} user
 */

_ProcessRequestAllOf["default"].prototype['user'] = undefined;
/**
 * @member {Array.<module:model/Users>} participants
 */

_ProcessRequestAllOf["default"].prototype['participants'] = undefined; // Implement ProcessRequestEditable interface:

/**
 * @member {String} user_id
 */

_ProcessRequestEditable["default"].prototype['user_id'] = undefined;
/**
 * @member {String} callable_id
 */

_ProcessRequestEditable["default"].prototype['callable_id'] = undefined;
/**
 * @member {Object} data
 */

_ProcessRequestEditable["default"].prototype['data'] = undefined;
/**
 * @member {module:model/ProcessRequestEditable.StatusEnum} status
 */

_ProcessRequestEditable["default"].prototype['status'] = undefined;
/**
 * @member {String} name
 */

_ProcessRequestEditable["default"].prototype['name'] = undefined;
/**
 * @member {Number} process_id
 */

_ProcessRequestEditable["default"].prototype['process_id'] = undefined;
/**
 * @member {Object} process
 */

_ProcessRequestEditable["default"].prototype['process'] = undefined;
/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */

ProcessRequest['StatusEnum'] = {
  /**
   * value: "ACTIVE"
   * @const
   */
  "ACTIVE": "ACTIVE",

  /**
   * value: "COMPLETED"
   * @const
   */
  "COMPLETED": "COMPLETED",

  /**
   * value: "ERROR"
   * @const
   */
  "ERROR": "ERROR",

  /**
   * value: "CANCELED"
   * @const
   */
  "CANCELED": "CANCELED"
};
var _default = ProcessRequest;
exports["default"] = _default;