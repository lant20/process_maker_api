"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse20010"));

var _InlineResponse2 = _interopRequireDefault(require("../model/InlineResponse20011"));

var _InlineResponse3 = _interopRequireDefault(require("../model/InlineResponse20012"));

var _InlineResponse4 = _interopRequireDefault(require("../model/InlineResponse2009"));

var _Process = _interopRequireDefault(require("../model/Process"));

var _ProcessAssignments = _interopRequireDefault(require("../model/ProcessAssignments"));

var _ProcessEditable = _interopRequireDefault(require("../model/ProcessEditable"));

var _ProcessImport = _interopRequireDefault(require("../model/ProcessImport"));

var _ProcessRequest = _interopRequireDefault(require("../model/ProcessRequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Processes service.
* @module api/ProcessesApi
* @version 1.0.0
*/
var ProcessesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ProcessesApi. 
  * @alias module:api/ProcessesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ProcessesApi(apiClient) {
    _classCallCheck(this, ProcessesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the assignmentProcess operation.
   * @callback module:api/ProcessesApi~assignmentProcessCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Update assignments after import
   * Import Assignments of process.
   * @param {Number} processId ID of process to return
   * @param {module:model/ProcessAssignments} processAssignments 
   * @param {module:api/ProcessesApi~assignmentProcessCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(ProcessesApi, [{
    key: "assignmentProcess",
    value: function assignmentProcess(processId, processAssignments, callback) {
      var postBody = processAssignments; // verify the required parameter 'processId' is set

      if (processId === undefined || processId === null) {
        throw new Error("Missing the required parameter 'processId' when calling assignmentProcess");
      } // verify the required parameter 'processAssignments' is set


      if (processAssignments === undefined || processAssignments === null) {
        throw new Error("Missing the required parameter 'processAssignments' when calling assignmentProcess");
      }

      var pathParams = {
        'process_id': processId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/processes/{process_id}/import/assignments', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the call6a131993b7c879ddcd3d3a291dd8380f operation.
     * @callback module:api/ProcessesApi~call6a131993b7c879ddcd3d3a291dd8380fCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20012} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check if the import is ready
     * Check if the import is ready
     * @param {String} code Import code
     * @param {module:api/ProcessesApi~call6a131993b7c879ddcd3d3a291dd8380fCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20012}
     */

  }, {
    key: "call6a131993b7c879ddcd3d3a291dd8380f",
    value: function call6a131993b7c879ddcd3d3a291dd8380f(code, callback) {
      var postBody = null; // verify the required parameter 'code' is set

      if (code === undefined || code === null) {
        throw new Error("Missing the required parameter 'code' when calling call6a131993b7c879ddcd3d3a291dd8380f");
      }

      var pathParams = {
        'code': code
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse3["default"];
      return this.apiClient.callApi('/processes/import/{code}/is_ready', 'HEAD', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the createProcess operation.
     * @callback module:api/ProcessesApi~createProcessCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Process} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Save a new process
     * Store a newly created resource in storage.
     * @param {module:model/ProcessEditable} processEditable 
     * @param {module:api/ProcessesApi~createProcessCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Process}
     */

  }, {
    key: "createProcess",
    value: function createProcess(processEditable, callback) {
      var postBody = processEditable; // verify the required parameter 'processEditable' is set

      if (processEditable === undefined || processEditable === null) {
        throw new Error("Missing the required parameter 'processEditable' when calling createProcess");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Process["default"];
      return this.apiClient.callApi('/processes', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the deleteProcess operation.
     * @callback module:api/ProcessesApi~deleteProcessCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a process
     * Remove the specified resource from storage.
     * @param {Number} processId ID of process to return
     * @param {module:api/ProcessesApi~deleteProcessCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "deleteProcess",
    value: function deleteProcess(processId, callback) {
      var postBody = null; // verify the required parameter 'processId' is set

      if (processId === undefined || processId === null) {
        throw new Error("Missing the required parameter 'processId' when calling deleteProcess");
      }

      var pathParams = {
        'processId': processId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/processes/{processId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the exportProcess operation.
     * @callback module:api/ProcessesApi~exportProcessCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20011} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Export a single process by ID and return a URL to download it
     * Export the specified process.
     * @param {Number} processId ID of process to export
     * @param {module:api/ProcessesApi~exportProcessCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20011}
     */

  }, {
    key: "exportProcess",
    value: function exportProcess(processId, callback) {
      var postBody = null; // verify the required parameter 'processId' is set

      if (processId === undefined || processId === null) {
        throw new Error("Missing the required parameter 'processId' when calling exportProcess");
      }

      var pathParams = {
        'processId': processId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse2["default"];
      return this.apiClient.callApi('/processes/{processId}/export', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getProcessById operation.
     * @callback module:api/ProcessesApi~getProcessByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Process} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get single process by ID
     * Display the specified resource.
     * @param {Number} processId ID of process to return
     * @param {Object} opts Optional parameters
     * @param {String} opts.include Include data from related models in payload. Comma separated list. (default to '')
     * @param {module:api/ProcessesApi~getProcessByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Process}
     */

  }, {
    key: "getProcessById",
    value: function getProcessById(processId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'processId' is set

      if (processId === undefined || processId === null) {
        throw new Error("Missing the required parameter 'processId' when calling getProcessById");
      }

      var pathParams = {
        'processId': processId
      };
      var queryParams = {
        'include': opts['include']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Process["default"];
      return this.apiClient.callApi('/processes/{processId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getProcesses operation.
     * @callback module:api/ProcessesApi~getProcessesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2009} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns all processes that the user has access to
     * Get list Process
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Filter results by string. Searches Name, Description, and Status. Status must match exactly. Others can be a substring.
     * @param {String} opts.orderBy Field to order results by
     * @param {module:model/String} opts.orderDirection  (default to 'asc')
     * @param {Number} opts.perPage 
     * @param {module:model/String} opts.status ACTIVE or INACTIVE
     * @param {String} opts.include Include data from related models in payload. Comma separated list. (default to '')
     * @param {module:api/ProcessesApi~getProcessesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2009}
     */

  }, {
    key: "getProcesses",
    value: function getProcesses(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'filter': opts['filter'],
        'order_by': opts['orderBy'],
        'order_direction': opts['orderDirection'],
        'per_page': opts['perPage'],
        'status': opts['status'],
        'include': opts['include']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse4["default"];
      return this.apiClient.callApi('/processes', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the importProcess operation.
     * @callback module:api/ProcessesApi~importProcessCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProcessImport} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Import a new process
     * Import the specified process.
     * @param {Object} opts Optional parameters
     * @param {File} opts.file file to import
     * @param {module:api/ProcessesApi~importProcessCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProcessImport}
     */

  }, {
    key: "importProcess",
    value: function importProcess(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {
        'file': opts['file']
      };
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = _ProcessImport["default"];
      return this.apiClient.callApi('/processes/import', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the restoreProcess operation.
     * @callback module:api/ProcessesApi~restoreProcessCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Process} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Restore an inactive process
     * Reverses the soft delete of the element
     * @param {Number} processId ID of process to return
     * @param {module:api/ProcessesApi~restoreProcessCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Process}
     */

  }, {
    key: "restoreProcess",
    value: function restoreProcess(processId, callback) {
      var postBody = null; // verify the required parameter 'processId' is set

      if (processId === undefined || processId === null) {
        throw new Error("Missing the required parameter 'processId' when calling restoreProcess");
      }

      var pathParams = {
        'processId': processId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Process["default"];
      return this.apiClient.callApi('/processes/{processId}/restore', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the startProcesses operation.
     * @callback module:api/ProcessesApi~startProcessesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20010} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the list of processes that the user can start
     * Returns the list of processes that the user can start.
     * @param {Boolean} withoutEventDefinitions If true return only processes that haven't start event definitions
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Filter results by string. Searches Name, Description, and Status. Status must match exactly. Others can be a substring.
     * @param {String} opts.orderBy Field to order results by
     * @param {module:model/String} opts.orderDirection  (default to 'asc')
     * @param {Number} opts.perPage 
     * @param {String} opts.include Include data from related models in payload. Comma separated list. (default to '')
     * @param {module:api/ProcessesApi~startProcessesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20010}
     */

  }, {
    key: "startProcesses",
    value: function startProcesses(withoutEventDefinitions, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'withoutEventDefinitions' is set

      if (withoutEventDefinitions === undefined || withoutEventDefinitions === null) {
        throw new Error("Missing the required parameter 'withoutEventDefinitions' when calling startProcesses");
      }

      var pathParams = {
        'without_event_definitions': withoutEventDefinitions
      };
      var queryParams = {
        'filter': opts['filter'],
        'order_by': opts['orderBy'],
        'order_direction': opts['orderDirection'],
        'per_page': opts['perPage'],
        'include': opts['include']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse["default"];
      return this.apiClient.callApi('/start_processes', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the triggerStartEvent operation.
     * @callback module:api/ProcessesApi~triggerStartEventCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProcessRequest} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Start a new process
     * Trigger an start event within a process.
     * @param {Number} processId ID of process to return
     * @param {String} event Node ID of the start event
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body data that will be stored as part of the created request
     * @param {module:api/ProcessesApi~triggerStartEventCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProcessRequest}
     */

  }, {
    key: "triggerStartEvent",
    value: function triggerStartEvent(processId, event, opts, callback) {
      opts = opts || {};
      var postBody = opts['body']; // verify the required parameter 'processId' is set

      if (processId === undefined || processId === null) {
        throw new Error("Missing the required parameter 'processId' when calling triggerStartEvent");
      } // verify the required parameter 'event' is set


      if (event === undefined || event === null) {
        throw new Error("Missing the required parameter 'event' when calling triggerStartEvent");
      }

      var pathParams = {
        'process_id': processId
      };
      var queryParams = {
        'event': event
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ProcessRequest["default"];
      return this.apiClient.callApi('/process_events/{process_id}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateProcess operation.
     * @callback module:api/ProcessesApi~updateProcessCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Process} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a process
     * Updates the current element
     * @param {Number} processId ID of process to return
     * @param {module:model/ProcessEditable} processEditable 
     * @param {module:api/ProcessesApi~updateProcessCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Process}
     */

  }, {
    key: "updateProcess",
    value: function updateProcess(processId, processEditable, callback) {
      var postBody = processEditable; // verify the required parameter 'processId' is set

      if (processId === undefined || processId === null) {
        throw new Error("Missing the required parameter 'processId' when calling updateProcess");
      } // verify the required parameter 'processEditable' is set


      if (processEditable === undefined || processEditable === null) {
        throw new Error("Missing the required parameter 'processEditable' when calling updateProcess");
      }

      var pathParams = {
        'processId': processId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Process["default"];
      return this.apiClient.callApi('/processes/{processId}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return ProcessesApi;
}();

exports["default"] = ProcessesApi;