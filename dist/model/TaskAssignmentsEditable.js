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
 * The TaskAssignmentsEditable model module.
 * @module model/TaskAssignmentsEditable
 * @version 1.0.0
 */
var TaskAssignmentsEditable = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TaskAssignmentsEditable</code>.
   * @alias module:model/TaskAssignmentsEditable
   */
  function TaskAssignmentsEditable() {
    _classCallCheck(this, TaskAssignmentsEditable);

    TaskAssignmentsEditable.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TaskAssignmentsEditable, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TaskAssignmentsEditable</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TaskAssignmentsEditable} obj Optional instance to populate.
     * @return {module:model/TaskAssignmentsEditable} The populated <code>TaskAssignmentsEditable</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TaskAssignmentsEditable();

        if (data.hasOwnProperty('process_id')) {
          obj['process_id'] = _ApiClient["default"].convertToType(data['process_id'], 'Number');
        }

        if (data.hasOwnProperty('process_task_id')) {
          obj['process_task_id'] = _ApiClient["default"].convertToType(data['process_task_id'], 'String');
        }

        if (data.hasOwnProperty('assignment_id')) {
          obj['assignment_id'] = _ApiClient["default"].convertToType(data['assignment_id'], 'Number');
        }

        if (data.hasOwnProperty('assignment_type')) {
          obj['assignment_type'] = _ApiClient["default"].convertToType(data['assignment_type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return TaskAssignmentsEditable;
}();
/**
 * @member {Number} process_id
 */


TaskAssignmentsEditable.prototype['process_id'] = undefined;
/**
 * @member {String} process_task_id
 */

TaskAssignmentsEditable.prototype['process_task_id'] = undefined;
/**
 * @member {Number} assignment_id
 */

TaskAssignmentsEditable.prototype['assignment_id'] = undefined;
/**
 * @member {module:model/TaskAssignmentsEditable.AssignmentTypeEnum} assignment_type
 */

TaskAssignmentsEditable.prototype['assignment_type'] = undefined;
/**
 * Allowed values for the <code>assignment_type</code> property.
 * @enum {String}
 * @readonly
 */

TaskAssignmentsEditable['AssignmentTypeEnum'] = {
  /**
   * value: "ProcessMaker\\Models\\User"
   * @const
   */
  "User": "ProcessMaker\\Models\\User",

  /**
   * value: "ProcessMaker\\Models\\Group"
   * @const
   */
  "Group": "ProcessMaker\\Models\\Group"
};
var _default = TaskAssignmentsEditable;
exports["default"] = _default;