"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse20028"));

var _InlineResponse2 = _interopRequireDefault(require("../model/InlineResponse404"));

var _InlineResponse3 = _interopRequireDefault(require("../model/InlineResponse422"));

var _TaskAssignments = _interopRequireDefault(require("../model/TaskAssignments"));

var _TaskAssignmentsEditable = _interopRequireDefault(require("../model/TaskAssignmentsEditable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* TaskAssignments service.
* @module api/TaskAssignmentsApi
* @version 1.0.0
*/
var TaskAssignmentsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new TaskAssignmentsApi. 
  * @alias module:api/TaskAssignmentsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function TaskAssignmentsApi(apiClient) {
    _classCallCheck(this, TaskAssignmentsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the createTaskAssignments operation.
   * @callback module:api/TaskAssignmentsApi~createTaskAssignmentsCallback
   * @param {String} error Error message, if any.
   * @param {module:model/TaskAssignments} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Save a new Task Assignment
   * Store a newly created task assignment in storage.
   * @param {module:model/TaskAssignmentsEditable} taskAssignmentsEditable 
   * @param {module:api/TaskAssignmentsApi~createTaskAssignmentsCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/TaskAssignments}
   */


  _createClass(TaskAssignmentsApi, [{
    key: "createTaskAssignments",
    value: function createTaskAssignments(taskAssignmentsEditable, callback) {
      var postBody = taskAssignmentsEditable; // verify the required parameter 'taskAssignmentsEditable' is set

      if (taskAssignmentsEditable === undefined || taskAssignmentsEditable === null) {
        throw new Error("Missing the required parameter 'taskAssignmentsEditable' when calling createTaskAssignments");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _TaskAssignments["default"];
      return this.apiClient.callApi('/task_assignments', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the deleteTaskAssignments operation.
     * @callback module:api/TaskAssignmentsApi~deleteTaskAssignmentsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a Task Assignment
     * Remove an assignment
     * @param {Number} taskAssignment ID of task assignment to delete
     * @param {module:model/TaskAssignmentsEditable} taskAssignmentsEditable 
     * @param {module:api/TaskAssignmentsApi~deleteTaskAssignmentsCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "deleteTaskAssignments",
    value: function deleteTaskAssignments(taskAssignment, taskAssignmentsEditable, callback) {
      var postBody = taskAssignmentsEditable; // verify the required parameter 'taskAssignment' is set

      if (taskAssignment === undefined || taskAssignment === null) {
        throw new Error("Missing the required parameter 'taskAssignment' when calling deleteTaskAssignments");
      } // verify the required parameter 'taskAssignmentsEditable' is set


      if (taskAssignmentsEditable === undefined || taskAssignmentsEditable === null) {
        throw new Error("Missing the required parameter 'taskAssignmentsEditable' when calling deleteTaskAssignments");
      }

      var pathParams = {
        'task_assignment': taskAssignment
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/task_assignments/{task_assignment}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getTaskAssignments operation.
     * @callback module:api/TaskAssignmentsApi~getTaskAssignmentsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20028} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns all task assignments
     * Display a listing of the resource.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Filter results by string. Searches Name, Description, and Status. Status must match exactly. Others can be a substring.
     * @param {String} opts.orderBy Field to order results by
     * @param {module:model/String} opts.orderDirection  (default to 'asc')
     * @param {Number} opts.perPage 
     * @param {module:api/TaskAssignmentsApi~getTaskAssignmentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20028}
     */

  }, {
    key: "getTaskAssignments",
    value: function getTaskAssignments(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'filter': opts['filter'],
        'order_by': opts['orderBy'],
        'order_direction': opts['orderDirection'],
        'per_page': opts['perPage']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse["default"];
      return this.apiClient.callApi('/task_assignments', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateTaskAssignments operation.
     * @callback module:api/TaskAssignmentsApi~updateTaskAssignmentsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a Task Assignment
     * Update a task assignment
     * @param {Number} taskAssignment ID of task assignment to update
     * @param {module:model/TaskAssignmentsEditable} taskAssignmentsEditable 
     * @param {module:api/TaskAssignmentsApi~updateTaskAssignmentsCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "updateTaskAssignments",
    value: function updateTaskAssignments(taskAssignment, taskAssignmentsEditable, callback) {
      var postBody = taskAssignmentsEditable; // verify the required parameter 'taskAssignment' is set

      if (taskAssignment === undefined || taskAssignment === null) {
        throw new Error("Missing the required parameter 'taskAssignment' when calling updateTaskAssignments");
      } // verify the required parameter 'taskAssignmentsEditable' is set


      if (taskAssignmentsEditable === undefined || taskAssignmentsEditable === null) {
        throw new Error("Missing the required parameter 'taskAssignmentsEditable' when calling updateTaskAssignments");
      }

      var pathParams = {
        'task_assignment': taskAssignment
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/task_assignments/{task_assignment}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return TaskAssignmentsApi;
}();

exports["default"] = TaskAssignmentsApi;