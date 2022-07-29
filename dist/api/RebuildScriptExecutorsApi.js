"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineObject = _interopRequireDefault(require("../model/InlineObject12"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse20020"));

var _InlineResponse2 = _interopRequireDefault(require("../model/InlineResponse20021"));

var _InlineResponse3 = _interopRequireDefault(require("../model/InlineResponse20022"));

var _InlineResponse4 = _interopRequireDefault(require("../model/InlineResponse20023"));

var _ScriptExecutorsEditable = _interopRequireDefault(require("../model/ScriptExecutorsEditable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* RebuildScriptExecutors service.
* @module api/RebuildScriptExecutorsApi
* @version 1.0.0
*/
var RebuildScriptExecutorsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new RebuildScriptExecutorsApi. 
  * @alias module:api/RebuildScriptExecutorsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function RebuildScriptExecutorsApi(apiClient) {
    _classCallCheck(this, RebuildScriptExecutorsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the cancelScriptExecutor operation.
   * @callback module:api/RebuildScriptExecutorsApi~cancelScriptExecutorCallback
   * @param {String} error Error message, if any.
   * @param {module:model/InlineResponse20021} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Cancel a script executor
   * Cancel a script executor
   * @param {module:model/InlineObject12} inlineObject12 
   * @param {module:api/RebuildScriptExecutorsApi~cancelScriptExecutorCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/InlineResponse20021}
   */


  _createClass(RebuildScriptExecutorsApi, [{
    key: "cancelScriptExecutor",
    value: function cancelScriptExecutor(inlineObject12, callback) {
      var postBody = inlineObject12; // verify the required parameter 'inlineObject12' is set

      if (inlineObject12 === undefined || inlineObject12 === null) {
        throw new Error("Missing the required parameter 'inlineObject12' when calling cancelScriptExecutor");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse2["default"];
      return this.apiClient.callApi('/script-executors/cancel', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the createScriptExecutor operation.
     * @callback module:api/RebuildScriptExecutorsApi~createScriptExecutorCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20021} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a script executor
     * Create a script executor
     * @param {module:model/ScriptExecutorsEditable} scriptExecutorsEditable 
     * @param {module:api/RebuildScriptExecutorsApi~createScriptExecutorCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20021}
     */

  }, {
    key: "createScriptExecutor",
    value: function createScriptExecutor(scriptExecutorsEditable, callback) {
      var postBody = scriptExecutorsEditable; // verify the required parameter 'scriptExecutorsEditable' is set

      if (scriptExecutorsEditable === undefined || scriptExecutorsEditable === null) {
        throw new Error("Missing the required parameter 'scriptExecutorsEditable' when calling createScriptExecutor");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse2["default"];
      return this.apiClient.callApi('/script-executors', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the deleteScriptExecutor operation.
     * @callback module:api/RebuildScriptExecutorsApi~deleteScriptExecutorCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20022} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a script executor
     * Delete a script executor
     * @param {String} scriptExecutor ID of script executor to return
     * @param {module:api/RebuildScriptExecutorsApi~deleteScriptExecutorCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20022}
     */

  }, {
    key: "deleteScriptExecutor",
    value: function deleteScriptExecutor(scriptExecutor, callback) {
      var postBody = null; // verify the required parameter 'scriptExecutor' is set

      if (scriptExecutor === undefined || scriptExecutor === null) {
        throw new Error("Missing the required parameter 'scriptExecutor' when calling deleteScriptExecutor");
      }

      var pathParams = {
        'script_executor': scriptExecutor
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse3["default"];
      return this.apiClient.callApi('/script-executors/{script_executor}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getAvailableLanguages operation.
     * @callback module:api/RebuildScriptExecutorsApi~getAvailableLanguagesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20023} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns all available languages
     * Get a list of available languages.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Filter results by string. Searches Name, Description, and Status. Status must match exactly. Others can be a substring.
     * @param {String} opts.orderBy Field to order results by
     * @param {module:model/String} opts.orderDirection  (default to 'asc')
     * @param {Number} opts.perPage 
     * @param {module:api/RebuildScriptExecutorsApi~getAvailableLanguagesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20023}
     */

  }, {
    key: "getAvailableLanguages",
    value: function getAvailableLanguages(opts, callback) {
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
      var returnType = _InlineResponse4["default"];
      return this.apiClient.callApi('/script-executors/available-languages', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getScriptExecutors operation.
     * @callback module:api/RebuildScriptExecutorsApi~getScriptExecutorsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20020} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns all script executors that the user has access to
     * Get a list of script executors.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Filter results by string. Searches Name, Description, and Status. Status must match exactly. Others can be a substring.
     * @param {String} opts.orderBy Field to order results by
     * @param {module:model/String} opts.orderDirection  (default to 'asc')
     * @param {Number} opts.perPage 
     * @param {module:api/RebuildScriptExecutorsApi~getScriptExecutorsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20020}
     */

  }, {
    key: "getScriptExecutors",
    value: function getScriptExecutors(opts, callback) {
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
      return this.apiClient.callApi('/script-executors', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateScriptExecutor operation.
     * @callback module:api/RebuildScriptExecutorsApi~updateScriptExecutorCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20022} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update script executor
     * Update and rebuild the script executor
     * @param {String} scriptExecutor ID of script executor to return
     * @param {module:model/ScriptExecutorsEditable} scriptExecutorsEditable 
     * @param {module:api/RebuildScriptExecutorsApi~updateScriptExecutorCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20022}
     */

  }, {
    key: "updateScriptExecutor",
    value: function updateScriptExecutor(scriptExecutor, scriptExecutorsEditable, callback) {
      var postBody = scriptExecutorsEditable; // verify the required parameter 'scriptExecutor' is set

      if (scriptExecutor === undefined || scriptExecutor === null) {
        throw new Error("Missing the required parameter 'scriptExecutor' when calling updateScriptExecutor");
      } // verify the required parameter 'scriptExecutorsEditable' is set


      if (scriptExecutorsEditable === undefined || scriptExecutorsEditable === null) {
        throw new Error("Missing the required parameter 'scriptExecutorsEditable' when calling updateScriptExecutor");
      }

      var pathParams = {
        'script_executor': scriptExecutor
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse3["default"];
      return this.apiClient.callApi('/script-executors/{script_executor}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return RebuildScriptExecutorsApi;
}();

exports["default"] = RebuildScriptExecutorsApi;