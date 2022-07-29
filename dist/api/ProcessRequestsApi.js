"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse20013"));

var _InlineResponse2 = _interopRequireDefault(require("../model/InlineResponse404"));

var _ProcessRequest = _interopRequireDefault(require("../model/ProcessRequest"));

var _ProcessRequestEditable = _interopRequireDefault(require("../model/ProcessRequestEditable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* ProcessRequests service.
* @module api/ProcessRequestsApi
* @version 1.0.0
*/
var ProcessRequestsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ProcessRequestsApi. 
  * @alias module:api/ProcessRequestsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ProcessRequestsApi(apiClient) {
    _classCallCheck(this, ProcessRequestsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the deleteProcessRequest operation.
   * @callback module:api/ProcessRequestsApi~deleteProcessRequestCallback
   * @param {String} error Error message, if any.
   * @param {module:model/ProcessRequest} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Delete a process request
   * Delete a request
   * @param {Number} processRequestId ID of process request to return
   * @param {module:api/ProcessRequestsApi~deleteProcessRequestCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/ProcessRequest}
   */


  _createClass(ProcessRequestsApi, [{
    key: "deleteProcessRequest",
    value: function deleteProcessRequest(processRequestId, callback) {
      var postBody = null; // verify the required parameter 'processRequestId' is set

      if (processRequestId === undefined || processRequestId === null) {
        throw new Error("Missing the required parameter 'processRequestId' when calling deleteProcessRequest");
      }

      var pathParams = {
        'process_request_id': processRequestId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ProcessRequest["default"];
      return this.apiClient.callApi('/requests/{process_request_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getProcessRequestById operation.
     * @callback module:api/ProcessRequestsApi~getProcessRequestByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProcessRequest} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get single process request by ID
     * Display the specified resource.
     * @param {Number} processRequestId ID of process request to return
     * @param {Object} opts Optional parameters
     * @param {String} opts.include Include data from related models in payload. Comma separated list. (default to '')
     * @param {module:api/ProcessRequestsApi~getProcessRequestByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProcessRequest}
     */

  }, {
    key: "getProcessRequestById",
    value: function getProcessRequestById(processRequestId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'processRequestId' is set

      if (processRequestId === undefined || processRequestId === null) {
        throw new Error("Missing the required parameter 'processRequestId' when calling getProcessRequestById");
      }

      var pathParams = {
        'process_request_id': processRequestId
      };
      var queryParams = {
        'include': opts['include']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ProcessRequest["default"];
      return this.apiClient.callApi('/requests/{process_request_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getProcessesRequests operation.
     * @callback module:api/ProcessRequestsApi~getProcessesRequestsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20013} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns all process Requests that the user has access to
     * Display a listing of the resource.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.type Only return requests by type (all|in_progress|completed)
     * @param {String} opts.filter Filter results by string. Searches Name, Description, and Status. Status must match exactly. Others can be a substring.
     * @param {String} opts.orderBy Field to order results by
     * @param {module:model/String} opts.orderDirection  (default to 'asc')
     * @param {Number} opts.perPage 
     * @param {String} opts.include Include data from related models in payload. Comma separated list. (default to '')
     * @param {module:api/ProcessRequestsApi~getProcessesRequestsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20013}
     */

  }, {
    key: "getProcessesRequests",
    value: function getProcessesRequests(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'type': opts['type'],
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
      return this.apiClient.callApi('/requests', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateProcessRequest operation.
     * @callback module:api/ProcessRequestsApi~updateProcessRequestCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a process request
     * Update a request
     * @param {Number} processRequestId ID of process request to return
     * @param {module:model/ProcessRequestEditable} processRequestEditable 
     * @param {module:api/ProcessRequestsApi~updateProcessRequestCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "updateProcessRequest",
    value: function updateProcessRequest(processRequestId, processRequestEditable, callback) {
      var postBody = processRequestEditable; // verify the required parameter 'processRequestId' is set

      if (processRequestId === undefined || processRequestId === null) {
        throw new Error("Missing the required parameter 'processRequestId' when calling updateProcessRequest");
      } // verify the required parameter 'processRequestEditable' is set


      if (processRequestEditable === undefined || processRequestEditable === null) {
        throw new Error("Missing the required parameter 'processRequestEditable' when calling updateProcessRequest");
      }

      var pathParams = {
        'process_request_id': processRequestId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/requests/{process_request_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateProcessRequestEvent operation.
     * @callback module:api/ProcessRequestsApi~updateProcessRequestEventCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a process request event
     * Trigger a intermediate catch event
     * @param {String} processRequestId ID of process request to return
     * @param {String} eventId ID of process event to return
     * @param {module:api/ProcessRequestsApi~updateProcessRequestEventCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "updateProcessRequestEvent",
    value: function updateProcessRequestEvent(processRequestId, eventId, callback) {
      var postBody = null; // verify the required parameter 'processRequestId' is set

      if (processRequestId === undefined || processRequestId === null) {
        throw new Error("Missing the required parameter 'processRequestId' when calling updateProcessRequestEvent");
      } // verify the required parameter 'eventId' is set


      if (eventId === undefined || eventId === null) {
        throw new Error("Missing the required parameter 'eventId' when calling updateProcessRequestEvent");
      }

      var pathParams = {
        'process_request_id': processRequestId,
        'event_id': eventId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/requests/{process_request_id}/events/{event_id}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return ProcessRequestsApi;
}();

exports["default"] = ProcessRequestsApi;