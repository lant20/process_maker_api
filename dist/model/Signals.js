"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SignalsAllOf = _interopRequireDefault(require("./SignalsAllOf"));

var _SignalsAllOfProcesses = _interopRequireDefault(require("./SignalsAllOfProcesses"));

var _SignalsEditable = _interopRequireDefault(require("./SignalsEditable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The Signals model module.
 * @module model/Signals
 * @version 1.0.0
 */
var Signals = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Signals</code>.
   * Represents a business signal definition.
   * @alias module:model/Signals
   * @implements module:model/SignalsAllOf
   * @implements module:model/SignalsEditable
   */
  function Signals() {
    _classCallCheck(this, Signals);

    _SignalsAllOf["default"].initialize(this);

    _SignalsEditable["default"].initialize(this);

    Signals.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Signals, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Signals</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Signals} obj Optional instance to populate.
     * @return {module:model/Signals} The populated <code>Signals</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Signals();

        _SignalsAllOf["default"].constructFromObject(data, obj);

        _SignalsEditable["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('processes')) {
          obj['processes'] = _ApiClient["default"].convertToType(data['processes'], [_SignalsAllOfProcesses["default"]]);
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('detail')) {
          obj['detail'] = _ApiClient["default"].convertToType(data['detail'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Signals;
}();
/**
 * @member {String} type
 */


Signals.prototype['type'] = undefined;
/**
 * @member {Array.<module:model/SignalsAllOfProcesses>} processes
 */

Signals.prototype['processes'] = undefined;
/**
 * @member {String} id
 */

Signals.prototype['id'] = undefined;
/**
 * @member {String} name
 */

Signals.prototype['name'] = undefined;
/**
 * @member {String} detail
 */

Signals.prototype['detail'] = undefined; // Implement SignalsAllOf interface:

/**
 * @member {String} type
 */

_SignalsAllOf["default"].prototype['type'] = undefined;
/**
 * @member {Array.<module:model/SignalsAllOfProcesses>} processes
 */

_SignalsAllOf["default"].prototype['processes'] = undefined; // Implement SignalsEditable interface:

/**
 * @member {String} id
 */

_SignalsEditable["default"].prototype['id'] = undefined;
/**
 * @member {String} name
 */

_SignalsEditable["default"].prototype['name'] = undefined;
/**
 * @member {String} detail
 */

_SignalsEditable["default"].prototype['detail'] = undefined;
var _default = Signals;
exports["default"] = _default;