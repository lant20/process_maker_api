"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineObject = _interopRequireDefault(require("../model/InlineObject13"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse20029"));

var _InlineResponse2 = _interopRequireDefault(require("../model/InlineResponse404"));

var _InlineResponse3 = _interopRequireDefault(require("../model/InlineResponse422"));

var _ProcessRequestToken = _interopRequireDefault(require("../model/ProcessRequestToken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Tasks service.
* @module api/TasksApi
* @version 1.0.0
*/
var TasksApi = /*#__PURE__*/function () {
  /**
  * Constructs a new TasksApi. 
  * @alias module:api/TasksApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function TasksApi(apiClient) {
    _classCallCheck(this, TasksApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the getTasks operation.
   * @callback module:api/TasksApi~getTasksCallback
   * @param {String} error Error message, if any.
   * @param {module:model/InlineResponse20029} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Returns all tasks that the user has access to
   * Display a listing of the resource.
   * @param {Object} opts Optional parameters
   * @param {Number} opts.processRequestId Process request id
   * @param {String} opts.filter Filter results by string. Searches Name, Description, and Status. Status must match exactly. Others can be a substring.
   * @param {String} opts.orderBy Field to order results by
   * @param {module:model/String} opts.orderDirection  (default to 'asc')
   * @param {String} opts.include Include data from related models in payload. Comma separated list. (default to '')
   * @param {module:api/TasksApi~getTasksCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/InlineResponse20029}
   */


  _createClass(TasksApi, [{
    key: "getTasks",
    value: function getTasks(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'process_request_id': opts['processRequestId'],
        'filter': opts['filter'],
        'order_by': opts['orderBy'],
        'order_direction': opts['orderDirection'],
        'include': opts['include']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse["default"];
      return this.apiClient.callApi('/tasks', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getTasksById operation.
     * @callback module:api/TasksApi~getTasksByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProcessRequestToken} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a single task by ID
     * Display the specified resource.
     * @param {Number} taskId task id
     * @param {module:api/TasksApi~getTasksByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProcessRequestToken}
     */

  }, {
    key: "getTasksById",
    value: function getTasksById(taskId, callback) {
      var postBody = null; // verify the required parameter 'taskId' is set

      if (taskId === undefined || taskId === null) {
        throw new Error("Missing the required parameter 'taskId' when calling getTasksById");
      }

      var pathParams = {
        'task_id': taskId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ProcessRequestToken["default"];
      return this.apiClient.callApi('/tasks/{task_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateTask operation.
     * @callback module:api/TasksApi~updateTaskCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProcessRequestToken} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a task
     * Updates the current element
     * @param {Number} taskId ID of task to update
     * @param {module:model/InlineObject13} inlineObject13 
     * @param {module:api/TasksApi~updateTaskCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProcessRequestToken}
     */

  }, {
    key: "updateTask",
    value: function updateTask(taskId, inlineObject13, callback) {
      var postBody = inlineObject13; // verify the required parameter 'taskId' is set

      if (taskId === undefined || taskId === null) {
        throw new Error("Missing the required parameter 'taskId' when calling updateTask");
      } // verify the required parameter 'inlineObject13' is set


      if (inlineObject13 === undefined || inlineObject13 === null) {
        throw new Error("Missing the required parameter 'inlineObject13' when calling updateTask");
      }

      var pathParams = {
        'task_id': taskId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ProcessRequestToken["default"];
      return this.apiClient.callApi('/tasks/{task_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return TasksApi;
}();

exports["default"] = TasksApi;