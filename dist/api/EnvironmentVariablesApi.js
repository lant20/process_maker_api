"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EnvironmentVariable = _interopRequireDefault(require("../model/EnvironmentVariable"));

var _EnvironmentVariableEditable = _interopRequireDefault(require("../model/EnvironmentVariableEditable"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse200"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* EnvironmentVariables service.
* @module api/EnvironmentVariablesApi
* @version 1.0.0
*/
var EnvironmentVariablesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new EnvironmentVariablesApi. 
  * @alias module:api/EnvironmentVariablesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function EnvironmentVariablesApi(apiClient) {
    _classCallCheck(this, EnvironmentVariablesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the createEnvironmentVariable operation.
   * @callback module:api/EnvironmentVariablesApi~createEnvironmentVariableCallback
   * @param {String} error Error message, if any.
   * @param {module:model/EnvironmentVariable} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Create a new environment variable
   * Creates a new global Environment Variable in the system
   * @param {module:model/EnvironmentVariableEditable} environmentVariableEditable 
   * @param {module:api/EnvironmentVariablesApi~createEnvironmentVariableCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/EnvironmentVariable}
   */


  _createClass(EnvironmentVariablesApi, [{
    key: "createEnvironmentVariable",
    value: function createEnvironmentVariable(environmentVariableEditable, callback) {
      var postBody = environmentVariableEditable; // verify the required parameter 'environmentVariableEditable' is set

      if (environmentVariableEditable === undefined || environmentVariableEditable === null) {
        throw new Error("Missing the required parameter 'environmentVariableEditable' when calling createEnvironmentVariable");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EnvironmentVariable["default"];
      return this.apiClient.callApi('/environment_variables', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the deleteEnvironmentVariable operation.
     * @callback module:api/EnvironmentVariablesApi~deleteEnvironmentVariableCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an environment variable
     * @param {Number} environmentVariableId ID of environment_variables to return
     * @param {module:api/EnvironmentVariablesApi~deleteEnvironmentVariableCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "deleteEnvironmentVariable",
    value: function deleteEnvironmentVariable(environmentVariableId, callback) {
      var postBody = null; // verify the required parameter 'environmentVariableId' is set

      if (environmentVariableId === undefined || environmentVariableId === null) {
        throw new Error("Missing the required parameter 'environmentVariableId' when calling deleteEnvironmentVariable");
      }

      var pathParams = {
        'environment_variable_id': environmentVariableId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/environment_variables/{environment_variable_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getEnvironmentVariableById operation.
     * @callback module:api/EnvironmentVariablesApi~getEnvironmentVariableByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnvironmentVariable} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an environment variable by id. For security, the value is not included.
     * Return an environment variable instance Using implicit model binding, will automatically return 404 if variable now found
     * @param {Number} environmentVariableId ID of environment_variables to return
     * @param {module:api/EnvironmentVariablesApi~getEnvironmentVariableByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnvironmentVariable}
     */

  }, {
    key: "getEnvironmentVariableById",
    value: function getEnvironmentVariableById(environmentVariableId, callback) {
      var postBody = null; // verify the required parameter 'environmentVariableId' is set

      if (environmentVariableId === undefined || environmentVariableId === null) {
        throw new Error("Missing the required parameter 'environmentVariableId' when calling getEnvironmentVariableById");
      }

      var pathParams = {
        'environment_variable_id': environmentVariableId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EnvironmentVariable["default"];
      return this.apiClient.callApi('/environment_variables/{environment_variable_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getEnvironmentVariables operation.
     * @callback module:api/EnvironmentVariablesApi~getEnvironmentVariablesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns all environmentVariables that the user has access to. For security, values are not included.
     * Fetch a collection of variables based on paged request and filter if provided
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Filter results by string. Searches Name, Description, and Status. Status must match exactly. Others can be a substring.
     * @param {String} opts.orderBy Field to order results by
     * @param {module:model/String} opts.orderDirection  (default to 'asc')
     * @param {Number} opts.perPage 
     * @param {String} opts.include Include data from related models in payload. Comma separated list. (default to '')
     * @param {module:api/EnvironmentVariablesApi~getEnvironmentVariablesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse200}
     */

  }, {
    key: "getEnvironmentVariables",
    value: function getEnvironmentVariables(opts, callback) {
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
      return this.apiClient.callApi('/environment_variables', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateEnvironmentVariable operation.
     * @callback module:api/EnvironmentVariablesApi~updateEnvironmentVariableCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnvironmentVariable} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an environment variable
     * Update an environment variable
     * @param {Number} environmentVariableId ID of environment variables to update
     * @param {module:model/EnvironmentVariableEditable} environmentVariableEditable 
     * @param {module:api/EnvironmentVariablesApi~updateEnvironmentVariableCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnvironmentVariable}
     */

  }, {
    key: "updateEnvironmentVariable",
    value: function updateEnvironmentVariable(environmentVariableId, environmentVariableEditable, callback) {
      var postBody = environmentVariableEditable; // verify the required parameter 'environmentVariableId' is set

      if (environmentVariableId === undefined || environmentVariableId === null) {
        throw new Error("Missing the required parameter 'environmentVariableId' when calling updateEnvironmentVariable");
      } // verify the required parameter 'environmentVariableEditable' is set


      if (environmentVariableEditable === undefined || environmentVariableEditable === null) {
        throw new Error("Missing the required parameter 'environmentVariableEditable' when calling updateEnvironmentVariable");
      }

      var pathParams = {
        'environment_variable_id': environmentVariableId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EnvironmentVariable["default"];
      return this.apiClient.callApi('/environment_variables/{environment_variable_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return EnvironmentVariablesApi;
}();

exports["default"] = EnvironmentVariablesApi;