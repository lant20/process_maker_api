"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse2001"));

var _InlineResponse2 = _interopRequireDefault(require("../model/InlineResponse2002"));

var _InlineResponse3 = _interopRequireDefault(require("../model/InlineResponse404"));

var _Media = _interopRequireDefault(require("../model/Media"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Files service.
* @module api/FilesApi
* @version 1.0.0
*/
var FilesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new FilesApi. 
  * @alias module:api/FilesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function FilesApi(apiClient) {
    _classCallCheck(this, FilesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the createFile operation.
   * @callback module:api/FilesApi~createFileCallback
   * @param {String} error Error message, if any.
   * @param {module:model/InlineResponse2002} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Save a new media file. Note: To upload files to a request, use createRequestFile in the RequestFile API
   * Store a newly created resource in storage.
   * @param {Number} modelId ID of the model to which the file will be associated
   * @param {String} model Full namespaced class of the model to associate
   * @param {Object} opts Optional parameters
   * @param {String} opts.dataName Name of the variable used in a request
   * @param {String} opts.collection Media collection name. For requests, use 'default'
   * @param {File} opts.file save a new media file
   * @param {module:api/FilesApi~createFileCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/InlineResponse2002}
   */


  _createClass(FilesApi, [{
    key: "createFile",
    value: function createFile(modelId, model, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'modelId' is set

      if (modelId === undefined || modelId === null) {
        throw new Error("Missing the required parameter 'modelId' when calling createFile");
      } // verify the required parameter 'model' is set


      if (model === undefined || model === null) {
        throw new Error("Missing the required parameter 'model' when calling createFile");
      }

      var pathParams = {};
      var queryParams = {
        'model_id': modelId,
        'model': model,
        'data_name': opts['dataName'],
        'collection': opts['collection']
      };
      var headerParams = {};
      var formParams = {
        'file': opts['file']
      };
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse2["default"];
      return this.apiClient.callApi('/files', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the deleteFile operation.
     * @callback module:api/FilesApi~deleteFileCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a media file
     * Remove the specified resource from storage.
     * @param {Number} fileId ID of the file
     * @param {module:api/FilesApi~deleteFileCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "deleteFile",
    value: function deleteFile(fileId, callback) {
      var postBody = null; // verify the required parameter 'fileId' is set

      if (fileId === undefined || fileId === null) {
        throw new Error("Missing the required parameter 'fileId' when calling deleteFile");
      }

      var pathParams = {
        'file_id': fileId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/files/{file_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getFileById operation.
     * @callback module:api/FilesApi~getFileByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Media} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the metadata of a file. To actually fetch the file see Get File Contents
     * Get a single media file.
     * @param {Number} fileId ID of the file to return
     * @param {module:api/FilesApi~getFileByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Media}
     */

  }, {
    key: "getFileById",
    value: function getFileById(fileId, callback) {
      var postBody = null; // verify the required parameter 'fileId' is set

      if (fileId === undefined || fileId === null) {
        throw new Error("Missing the required parameter 'fileId' when calling getFileById");
      }

      var pathParams = {
        'file_id': fileId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Media["default"];
      return this.apiClient.callApi('/files/{file_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getFileContentsById operation.
     * @callback module:api/FilesApi~getFileContentsByIdCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the contents of a file
     * Display the specified resource.
     * @param {Number} fileId ID of the file to return
     * @param {module:api/FilesApi~getFileContentsByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */

  }, {
    key: "getFileContentsById",
    value: function getFileContentsById(fileId, callback) {
      var postBody = null; // verify the required parameter 'fileId' is set

      if (fileId === undefined || fileId === null) {
        throw new Error("Missing the required parameter 'fileId' when calling getFileContentsById");
      }

      var pathParams = {
        'file_id': fileId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = [];
      var accepts = ['application/octet-stream', 'application/json'];
      var returnType = File;
      return this.apiClient.callApi('/files/{file_id}/contents', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getFiles operation.
     * @callback module:api/FilesApi~getFilesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2001} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the list of files
     * Display a listing of the resource.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Filter results by string. Searches Name, Description, and Status. Status must match exactly. Others can be a substring.
     * @param {String} opts.orderBy Field to order results by
     * @param {module:model/String} opts.orderDirection  (default to 'asc')
     * @param {Number} opts.perPage 
     * @param {module:api/FilesApi~getFilesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2001}
     */

  }, {
    key: "getFiles",
    value: function getFiles(opts, callback) {
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
      return this.apiClient.callApi('/files', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return FilesApi;
}();

exports["default"] = FilesApi;