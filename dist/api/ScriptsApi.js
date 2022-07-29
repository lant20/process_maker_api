"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineObject = _interopRequireDefault(require("../model/InlineObject10"));

var _InlineObject2 = _interopRequireDefault(require("../model/InlineObject11"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse20019"));

var _Scripts = _interopRequireDefault(require("../model/Scripts"));

var _ScriptsEditable = _interopRequireDefault(require("../model/ScriptsEditable"));

var _ScriptsPreview = _interopRequireDefault(require("../model/ScriptsPreview"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Scripts service.
* @module api/ScriptsApi
* @version 1.0.0
*/
var ScriptsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ScriptsApi. 
  * @alias module:api/ScriptsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ScriptsApi(apiClient) {
    _classCallCheck(this, ScriptsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the createScript operation.
   * @callback module:api/ScriptsApi~createScriptCallback
   * @param {String} error Error message, if any.
   * @param {module:model/Scripts} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Save a new script
   * Create a new script in a process.
   * @param {module:model/ScriptsEditable} scriptsEditable 
   * @param {module:api/ScriptsApi~createScriptCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/Scripts}
   */


  _createClass(ScriptsApi, [{
    key: "createScript",
    value: function createScript(scriptsEditable, callback) {
      var postBody = scriptsEditable; // verify the required parameter 'scriptsEditable' is set

      if (scriptsEditable === undefined || scriptsEditable === null) {
        throw new Error("Missing the required parameter 'scriptsEditable' when calling createScript");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Scripts["default"];
      return this.apiClient.callApi('/scripts', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the deleteScript operation.
     * @callback module:api/ScriptsApi~deleteScriptCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a script
     * Delete a script in a process.
     * @param {String} scriptId ID of script to return
     * @param {module:api/ScriptsApi~deleteScriptCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "deleteScript",
    value: function deleteScript(scriptId, callback) {
      var postBody = null; // verify the required parameter 'scriptId' is set

      if (scriptId === undefined || scriptId === null) {
        throw new Error("Missing the required parameter 'scriptId' when calling deleteScript");
      }

      var pathParams = {
        'script_id': scriptId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/scripts/{script_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the duplicateScript operation.
     * @callback module:api/ScriptsApi~duplicateScriptCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Scripts} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * duplicate a script
     * duplicate a Script.
     * @param {String} scriptsId ID of script to return
     * @param {module:model/ScriptsEditable} scriptsEditable 
     * @param {module:api/ScriptsApi~duplicateScriptCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Scripts}
     */

  }, {
    key: "duplicateScript",
    value: function duplicateScript(scriptsId, scriptsEditable, callback) {
      var postBody = scriptsEditable; // verify the required parameter 'scriptsId' is set

      if (scriptsId === undefined || scriptsId === null) {
        throw new Error("Missing the required parameter 'scriptsId' when calling duplicateScript");
      } // verify the required parameter 'scriptsEditable' is set


      if (scriptsEditable === undefined || scriptsEditable === null) {
        throw new Error("Missing the required parameter 'scriptsEditable' when calling duplicateScript");
      }

      var pathParams = {
        'scripts_id': scriptsId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Scripts["default"];
      return this.apiClient.callApi('/scripts/{scripts_id}/duplicate', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the executeScript operation.
     * @callback module:api/ScriptsApi~executeScriptCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ScriptsPreview} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Execute script
     * Executes a script, with sample data/config data
     * @param {Number} scriptId 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject11} opts.inlineObject11 
     * @param {module:api/ScriptsApi~executeScriptCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ScriptsPreview}
     */

  }, {
    key: "executeScript",
    value: function executeScript(scriptId, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject11']; // verify the required parameter 'scriptId' is set

      if (scriptId === undefined || scriptId === null) {
        throw new Error("Missing the required parameter 'scriptId' when calling executeScript");
      }

      var pathParams = {
        'script_id': scriptId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ScriptsPreview["default"];
      return this.apiClient.callApi('/scripts/execute/{script_id}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getScriptExecutionResponse operation.
     * @callback module:api/ScriptsApi~getScriptExecutionResponseCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the response of a script execution by execution key
     * Get the response of a script execution
     * @param {String} key 
     * @param {module:api/ScriptsApi~getScriptExecutionResponseCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */

  }, {
    key: "getScriptExecutionResponse",
    value: function getScriptExecutionResponse(key, callback) {
      var postBody = null; // verify the required parameter 'key' is set

      if (key === undefined || key === null) {
        throw new Error("Missing the required parameter 'key' when calling getScriptExecutionResponse");
      }

      var pathParams = {
        'key': key
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/scripts/execution/{key}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getScripts operation.
     * @callback module:api/ScriptsApi~getScriptsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20019} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns all scripts that the user has access to
     * Get a list of scripts in a process.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Filter results by string. Searches Name, Description, and Status. Status must match exactly. Others can be a substring.
     * @param {String} opts.orderBy Field to order results by
     * @param {module:model/String} opts.orderDirection  (default to 'asc')
     * @param {Number} opts.perPage 
     * @param {String} opts.include Include data from related models in payload. Comma separated list. (default to '')
     * @param {module:api/ScriptsApi~getScriptsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20019}
     */

  }, {
    key: "getScripts",
    value: function getScripts(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
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
      return this.apiClient.callApi('/scripts', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getScriptsById operation.
     * @callback module:api/ScriptsApi~getScriptsByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Scripts} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get single script by ID
     * Get a single script in a process.
     * @param {String} scriptId ID of script to return
     * @param {module:api/ScriptsApi~getScriptsByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Scripts}
     */

  }, {
    key: "getScriptsById",
    value: function getScriptsById(scriptId, callback) {
      var postBody = null; // verify the required parameter 'scriptId' is set

      if (scriptId === undefined || scriptId === null) {
        throw new Error("Missing the required parameter 'scriptId' when calling getScriptsById");
      }

      var pathParams = {
        'script_id': scriptId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Scripts["default"];
      return this.apiClient.callApi('/scripts/{script_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the previewScript operation.
     * @callback module:api/ScriptsApi~previewScriptCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Test script code without saving it
     * Previews executing a script, with sample data/config data
     * @param {Number} scriptId 
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject10} opts.inlineObject10 
     * @param {module:api/ScriptsApi~previewScriptCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "previewScript",
    value: function previewScript(scriptId, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject10']; // verify the required parameter 'scriptId' is set

      if (scriptId === undefined || scriptId === null) {
        throw new Error("Missing the required parameter 'scriptId' when calling previewScript");
      }

      var pathParams = {
        'script_id': scriptId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/scripts/{script_id}/preview', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateScript operation.
     * @callback module:api/ScriptsApi~updateScriptCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a script
     * Update a script in a process.
     * @param {String} scriptId ID of script to return
     * @param {module:model/ScriptsEditable} scriptsEditable 
     * @param {module:api/ScriptsApi~updateScriptCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "updateScript",
    value: function updateScript(scriptId, scriptsEditable, callback) {
      var postBody = scriptsEditable; // verify the required parameter 'scriptId' is set

      if (scriptId === undefined || scriptId === null) {
        throw new Error("Missing the required parameter 'scriptId' when calling updateScript");
      } // verify the required parameter 'scriptsEditable' is set


      if (scriptsEditable === undefined || scriptsEditable === null) {
        throw new Error("Missing the required parameter 'scriptsEditable' when calling updateScript");
      }

      var pathParams = {
        'script_id': scriptId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/scripts/{script_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return ScriptsApi;
}();

exports["default"] = ScriptsApi;