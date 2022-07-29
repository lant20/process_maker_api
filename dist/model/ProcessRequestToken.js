"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ProcessRequestTokenAllOf = _interopRequireDefault(require("./ProcessRequestTokenAllOf"));

var _ProcessRequestTokenEditable = _interopRequireDefault(require("./ProcessRequestTokenEditable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ProcessRequestToken model module.
 * @module model/ProcessRequestToken
 * @version 1.0.0
 */
var ProcessRequestToken = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ProcessRequestToken</code>.
   * ProcessRequestToken is used to store the state of a token of the Nayra engine
   * @alias module:model/ProcessRequestToken
   * @implements module:model/ProcessRequestTokenAllOf
   * @implements module:model/ProcessRequestTokenEditable
   */
  function ProcessRequestToken() {
    _classCallCheck(this, ProcessRequestToken);

    _ProcessRequestTokenAllOf["default"].initialize(this);

    _ProcessRequestTokenEditable["default"].initialize(this);

    ProcessRequestToken.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ProcessRequestToken, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ProcessRequestToken</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProcessRequestToken} obj Optional instance to populate.
     * @return {module:model/ProcessRequestToken} The populated <code>ProcessRequestToken</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProcessRequestToken();

        _ProcessRequestTokenAllOf["default"].constructFromObject(data, obj);

        _ProcessRequestTokenEditable["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('process_id')) {
          obj['process_id'] = _ApiClient["default"].convertToType(data['process_id'], 'String');
        }

        if (data.hasOwnProperty('process_request_id')) {
          obj['process_request_id'] = _ApiClient["default"].convertToType(data['process_request_id'], 'String');
        }

        if (data.hasOwnProperty('element_id')) {
          obj['element_id'] = _ApiClient["default"].convertToType(data['element_id'], 'String');
        }

        if (data.hasOwnProperty('element_type')) {
          obj['element_type'] = _ApiClient["default"].convertToType(data['element_type'], 'String');
        }

        if (data.hasOwnProperty('element_index')) {
          obj['element_index'] = _ApiClient["default"].convertToType(data['element_index'], 'String');
        }

        if (data.hasOwnProperty('element_name')) {
          obj['element_name'] = _ApiClient["default"].convertToType(data['element_name'], 'String');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'Date');
        }

        if (data.hasOwnProperty('initiated_at')) {
          obj['initiated_at'] = _ApiClient["default"].convertToType(data['initiated_at'], 'Date');
        }

        if (data.hasOwnProperty('advanceStatus')) {
          obj['advanceStatus'] = _ApiClient["default"].convertToType(data['advanceStatus'], 'String');
        }

        if (data.hasOwnProperty('due_notified')) {
          obj['due_notified'] = _ApiClient["default"].convertToType(data['due_notified'], 'Number');
        }

        if (data.hasOwnProperty('user')) {
          obj['user'] = _ApiClient["default"].convertToType(data['user'], Object);
        }

        if (data.hasOwnProperty('process')) {
          obj['process'] = _ApiClient["default"].convertToType(data['process'], Object);
        }

        if (data.hasOwnProperty('process_request')) {
          obj['process_request'] = _ApiClient["default"].convertToType(data['process_request'], Object);
        }

        if (data.hasOwnProperty('user_id')) {
          obj['user_id'] = _ApiClient["default"].convertToType(data['user_id'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('due_at')) {
          obj['due_at'] = _ApiClient["default"].convertToType(data['due_at'], 'Date');
        }

        if (data.hasOwnProperty('riskchanges_at')) {
          obj['riskchanges_at'] = _ApiClient["default"].convertToType(data['riskchanges_at'], 'Date');
        }

        if (data.hasOwnProperty('subprocess_start_event_id')) {
          obj['subprocess_start_event_id'] = _ApiClient["default"].convertToType(data['subprocess_start_event_id'], 'String');
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], Object);
        }
      }

      return obj;
    }
  }]);

  return ProcessRequestToken;
}();
/**
 * @member {String} id
 */


ProcessRequestToken.prototype['id'] = undefined;
/**
 * @member {String} process_id
 */

ProcessRequestToken.prototype['process_id'] = undefined;
/**
 * @member {String} process_request_id
 */

ProcessRequestToken.prototype['process_request_id'] = undefined;
/**
 * @member {String} element_id
 */

ProcessRequestToken.prototype['element_id'] = undefined;
/**
 * @member {String} element_type
 */

ProcessRequestToken.prototype['element_type'] = undefined;
/**
 * @member {String} element_index
 */

ProcessRequestToken.prototype['element_index'] = undefined;
/**
 * @member {String} element_name
 */

ProcessRequestToken.prototype['element_name'] = undefined;
/**
 * @member {Date} created_at
 */

ProcessRequestToken.prototype['created_at'] = undefined;
/**
 * @member {Date} updated_at
 */

ProcessRequestToken.prototype['updated_at'] = undefined;
/**
 * @member {Date} initiated_at
 */

ProcessRequestToken.prototype['initiated_at'] = undefined;
/**
 * @member {String} advanceStatus
 */

ProcessRequestToken.prototype['advanceStatus'] = undefined;
/**
 * @member {Number} due_notified
 */

ProcessRequestToken.prototype['due_notified'] = undefined;
/**
 * @member {Object} user
 */

ProcessRequestToken.prototype['user'] = undefined;
/**
 * @member {Object} process
 */

ProcessRequestToken.prototype['process'] = undefined;
/**
 * @member {Object} process_request
 */

ProcessRequestToken.prototype['process_request'] = undefined;
/**
 * @member {String} user_id
 */

ProcessRequestToken.prototype['user_id'] = undefined;
/**
 * @member {String} status
 */

ProcessRequestToken.prototype['status'] = undefined;
/**
 * @member {Date} due_at
 */

ProcessRequestToken.prototype['due_at'] = undefined;
/**
 * @member {Date} riskchanges_at
 */

ProcessRequestToken.prototype['riskchanges_at'] = undefined;
/**
 * @member {String} subprocess_start_event_id
 */

ProcessRequestToken.prototype['subprocess_start_event_id'] = undefined;
/**
 * @member {Object} data
 */

ProcessRequestToken.prototype['data'] = undefined; // Implement ProcessRequestTokenAllOf interface:

/**
 * @member {String} id
 */

_ProcessRequestTokenAllOf["default"].prototype['id'] = undefined;
/**
 * @member {String} process_id
 */

_ProcessRequestTokenAllOf["default"].prototype['process_id'] = undefined;
/**
 * @member {String} process_request_id
 */

_ProcessRequestTokenAllOf["default"].prototype['process_request_id'] = undefined;
/**
 * @member {String} element_id
 */

_ProcessRequestTokenAllOf["default"].prototype['element_id'] = undefined;
/**
 * @member {String} element_type
 */

_ProcessRequestTokenAllOf["default"].prototype['element_type'] = undefined;
/**
 * @member {String} element_index
 */

_ProcessRequestTokenAllOf["default"].prototype['element_index'] = undefined;
/**
 * @member {String} element_name
 */

_ProcessRequestTokenAllOf["default"].prototype['element_name'] = undefined;
/**
 * @member {Date} created_at
 */

_ProcessRequestTokenAllOf["default"].prototype['created_at'] = undefined;
/**
 * @member {Date} updated_at
 */

_ProcessRequestTokenAllOf["default"].prototype['updated_at'] = undefined;
/**
 * @member {Date} initiated_at
 */

_ProcessRequestTokenAllOf["default"].prototype['initiated_at'] = undefined;
/**
 * @member {String} advanceStatus
 */

_ProcessRequestTokenAllOf["default"].prototype['advanceStatus'] = undefined;
/**
 * @member {Number} due_notified
 */

_ProcessRequestTokenAllOf["default"].prototype['due_notified'] = undefined;
/**
 * @member {Object} user
 */

_ProcessRequestTokenAllOf["default"].prototype['user'] = undefined;
/**
 * @member {Object} process
 */

_ProcessRequestTokenAllOf["default"].prototype['process'] = undefined;
/**
 * @member {Object} process_request
 */

_ProcessRequestTokenAllOf["default"].prototype['process_request'] = undefined; // Implement ProcessRequestTokenEditable interface:

/**
 * @member {String} user_id
 */

_ProcessRequestTokenEditable["default"].prototype['user_id'] = undefined;
/**
 * @member {String} status
 */

_ProcessRequestTokenEditable["default"].prototype['status'] = undefined;
/**
 * @member {Date} due_at
 */

_ProcessRequestTokenEditable["default"].prototype['due_at'] = undefined;
/**
 * @member {Date} initiated_at
 */

_ProcessRequestTokenEditable["default"].prototype['initiated_at'] = undefined;
/**
 * @member {Date} riskchanges_at
 */

_ProcessRequestTokenEditable["default"].prototype['riskchanges_at'] = undefined;
/**
 * @member {String} subprocess_start_event_id
 */

_ProcessRequestTokenEditable["default"].prototype['subprocess_start_event_id'] = undefined;
/**
 * @member {Object} data
 */

_ProcessRequestTokenEditable["default"].prototype['data'] = undefined;
var _default = ProcessRequestToken;
exports["default"] = _default;