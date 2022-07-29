"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse20014"));

var _InlineResponse2 = _interopRequireDefault(require("../model/InlineResponse20015"));

var _InlineResponse3 = _interopRequireDefault(require("../model/InlineResponse404"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* RequestFiles service.
* @module api/RequestFilesApi
* @version 1.0.0
*/
var RequestFilesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new RequestFilesApi. 
  * @alias module:api/RequestFilesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function RequestFilesApi(apiClient) {
    _classCallCheck(this, RequestFilesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the createRequestFile operation.
   * @callback module:api/RequestFilesApi~createRequestFileCallback
   * @param {String} error Error message, if any.
   * @param {module:model/InlineResponse20015} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Save a new media file to a request
   * Store a newly created resource in storage.
   * @param {Number} requestId ID of the request
   * @param {Object} opts Optional parameters
   * @param {String} opts.dataName Variable name in the request data to use for the file name
   * @param {File} opts.file save a new media file
   * @param {module:api/RequestFilesApi~createRequestFileCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/InlineResponse20015}
   */


  _createClass(RequestFilesApi, [{
    key: "createRequestFile",
    value: function createRequestFile(requestId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'requestId' is set

      if (requestId === undefined || requestId === null) {
        throw new Error("Missing the required parameter 'requestId' when calling createRequestFile");
      }

      var pathParams = {
        'request_id': requestId
      };
      var queryParams = {
        'data_name': opts['dataName']
      };
      var headerParams = {};
      var formParams = {
        'file': opts['file']
      };
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse2["default"];
      return this.apiClient.callApi('/requests/{request_id}/files', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the deleteRequestFile operation.
     * @callback module:api/RequestFilesApi~deleteRequestFileCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete all media associated with a request
     * Remove the specified resource from storage.
     * @param {Number} fileId ID of the file
     * @param {String} requestId ID of the request
     * @param {module:api/RequestFilesApi~deleteRequestFileCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "deleteRequestFile",
    value: function deleteRequestFile(fileId, requestId, callback) {
      var postBody = null; // verify the required parameter 'fileId' is set

      if (fileId === undefined || fileId === null) {
        throw new Error("Missing the required parameter 'fileId' when calling deleteRequestFile");
      } // verify the required parameter 'requestId' is set


      if (requestId === undefined || requestId === null) {
        throw new Error("Missing the required parameter 'requestId' when calling deleteRequestFile");
      }

      var pathParams = {
        'file_id': fileId,
        'request_id': requestId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/requests/{request_id}/files/{file_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getRequestFiles operation.
     * @callback module:api/RequestFilesApi~getRequestFilesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20014} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the list of files associated with a request
     * Display a listing of the resource.
     * @param {Number} requestId ID of the request
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Filter results by string. Searches Name, Description, and Status. Status must match exactly. Others can be a substring.
     * @param {String} opts.orderBy Field to order results by
     * @param {module:model/String} opts.orderDirection  (default to 'asc')
     * @param {Number} opts.perPage 
     * @param {module:api/RequestFilesApi~getRequestFilesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20014}
     */

  }, {
    key: "getRequestFiles",
    value: function getRequestFiles(requestId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'requestId' is set

      if (requestId === undefined || requestId === null) {
        throw new Error("Missing the required parameter 'requestId' when calling getRequestFiles");
      }

      var pathParams = {
        'request_id': requestId
      };
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
      return this.apiClient.callApi('/requests/{request_id}/files', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getRequestFilesById operation.
     * @callback module:api/RequestFilesApi~getRequestFilesByIdCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a file uploaded to a request
     * Display the specified resource.
     * @param {Number} requestId ID of the request
     * @param {Number} fileId ID of the file to return
     * @param {module:api/RequestFilesApi~getRequestFilesByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */

  }, {
    key: "getRequestFilesById",
    value: function getRequestFilesById(requestId, fileId, callback) {
      var postBody = null; // verify the required parameter 'requestId' is set

      if (requestId === undefined || requestId === null) {
        throw new Error("Missing the required parameter 'requestId' when calling getRequestFilesById");
      } // verify the required parameter 'fileId' is set


      if (fileId === undefined || fileId === null) {
        throw new Error("Missing the required parameter 'fileId' when calling getRequestFilesById");
      }

      var pathParams = {
        'request_id': requestId,
        'file_id': fileId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = [];
      var accepts = ['application/octet-stream', 'application/json'];
      var returnType = File;
      return this.apiClient.callApi('/requests/{request_id}/files/{file_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return RequestFilesApi;
}();

exports["default"] = RequestFilesApi;