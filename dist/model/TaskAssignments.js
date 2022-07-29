"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TaskAssignmentsAllOf = _interopRequireDefault(require("./TaskAssignmentsAllOf"));

var _TaskAssignmentsEditable = _interopRequireDefault(require("./TaskAssignmentsEditable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The TaskAssignments model module.
 * @module model/TaskAssignments
 * @version 1.0.0
 */
var TaskAssignments = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TaskAssignments</code>.
   * Represents a business process task assignment definition.
   * @alias module:model/TaskAssignments
   * @implements module:model/TaskAssignmentsAllOf
   * @implements module:model/TaskAssignmentsEditable
   */
  function TaskAssignments() {
    _classCallCheck(this, TaskAssignments);

    _TaskAssignmentsAllOf["default"].initialize(this);

    _TaskAssignmentsEditable["default"].initialize(this);

    TaskAssignments.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TaskAssignments, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TaskAssignments</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TaskAssignments} obj Optional instance to populate.
     * @return {module:model/TaskAssignments} The populated <code>TaskAssignments</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TaskAssignments();

        _TaskAssignmentsAllOf["default"].constructFromObject(data, obj);

        _TaskAssignmentsEditable["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'Date');
        }

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

  return TaskAssignments;
}();
/**
 * @member {Number} id
 */


TaskAssignments.prototype['id'] = undefined;
/**
 * @member {Date} created_at
 */

TaskAssignments.prototype['created_at'] = undefined;
/**
 * @member {Date} updated_at
 */

TaskAssignments.prototype['updated_at'] = undefined;
/**
 * @member {Number} process_id
 */

TaskAssignments.prototype['process_id'] = undefined;
/**
 * @member {String} process_task_id
 */

TaskAssignments.prototype['process_task_id'] = undefined;
/**
 * @member {Number} assignment_id
 */

TaskAssignments.prototype['assignment_id'] = undefined;
/**
 * @member {module:model/TaskAssignments.AssignmentTypeEnum} assignment_type
 */

TaskAssignments.prototype['assignment_type'] = undefined; // Implement TaskAssignmentsAllOf interface:

/**
 * @member {Number} id
 */

_TaskAssignmentsAllOf["default"].prototype['id'] = undefined;
/**
 * @member {Date} created_at
 */

_TaskAssignmentsAllOf["default"].prototype['created_at'] = undefined;
/**
 * @member {Date} updated_at
 */

_TaskAssignmentsAllOf["default"].prototype['updated_at'] = undefined; // Implement TaskAssignmentsEditable interface:

/**
 * @member {Number} process_id
 */

_TaskAssignmentsEditable["default"].prototype['process_id'] = undefined;
/**
 * @member {String} process_task_id
 */

_TaskAssignmentsEditable["default"].prototype['process_task_id'] = undefined;
/**
 * @member {Number} assignment_id
 */

_TaskAssignmentsEditable["default"].prototype['assignment_id'] = undefined;
/**
 * @member {module:model/TaskAssignmentsEditable.AssignmentTypeEnum} assignment_type
 */

_TaskAssignmentsEditable["default"].prototype['assignment_type'] = undefined;
/**
 * Allowed values for the <code>assignment_type</code> property.
 * @enum {String}
 * @readonly
 */

TaskAssignments['AssignmentTypeEnum'] = {
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
var _default = TaskAssignments;
exports["default"] = _default;