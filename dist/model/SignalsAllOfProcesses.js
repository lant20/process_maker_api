"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SignalsAllOfCatches = _interopRequireDefault(require("./SignalsAllOfCatches"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The SignalsAllOfProcesses model module.
 * @module model/SignalsAllOfProcesses
 * @version 1.0.0
 */
var SignalsAllOfProcesses = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SignalsAllOfProcesses</code>.
   * @alias module:model/SignalsAllOfProcesses
   */
  function SignalsAllOfProcesses() {
    _classCallCheck(this, SignalsAllOfProcesses);

    SignalsAllOfProcesses.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SignalsAllOfProcesses, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SignalsAllOfProcesses</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SignalsAllOfProcesses} obj Optional instance to populate.
     * @return {module:model/SignalsAllOfProcesses} The populated <code>SignalsAllOfProcesses</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SignalsAllOfProcesses();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('is_system')) {
          obj['is_system'] = _ApiClient["default"].convertToType(data['is_system'], 'Boolean');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('catches')) {
          obj['catches'] = _ApiClient["default"].convertToType(data['catches'], [_SignalsAllOfCatches["default"]]);
        }
      }

      return obj;
    }
  }]);

  return SignalsAllOfProcesses;
}();
/**
 * @member {Number} id
 */


SignalsAllOfProcesses.prototype['id'] = undefined;
/**
 * @member {Boolean} is_system
 */

SignalsAllOfProcesses.prototype['is_system'] = undefined;
/**
 * @member {String} name
 */

SignalsAllOfProcesses.prototype['name'] = undefined;
/**
 * @member {Array.<module:model/SignalsAllOfCatches>} catches
 */

SignalsAllOfProcesses.prototype['catches'] = undefined;
var _default = SignalsAllOfProcesses;
exports["default"] = _default;