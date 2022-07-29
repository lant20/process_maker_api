"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse20024"));

var _InlineResponse2 = _interopRequireDefault(require("../model/InlineResponse20025"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* SecuirtyLogs service.
* @module api/SecuirtyLogsApi
* @version 1.0.0
*/
var SecuirtyLogsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new SecuirtyLogsApi. 
  * @alias module:api/SecuirtyLogsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function SecuirtyLogsApi(apiClient) {
    _classCallCheck(this, SecuirtyLogsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the getSecurityLog operation.
   * @callback module:api/SecuirtyLogsApi~getSecurityLogCallback
   * @param {String} error Error message, if any.
   * @param {module:model/InlineResponse20025} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get single security log by ID
   * Display the specified resource.
   * @param {String} securityLog ID of security log to return
   * @param {module:api/SecuirtyLogsApi~getSecurityLogCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/InlineResponse20025}
   */


  _createClass(SecuirtyLogsApi, [{
    key: "getSecurityLog",
    value: function getSecurityLog(securityLog, callback) {
      var postBody = null; // verify the required parameter 'securityLog' is set

      if (securityLog === undefined || securityLog === null) {
        throw new Error("Missing the required parameter 'securityLog' when calling getSecurityLog");
      }

      var pathParams = {
        'securityLog': securityLog
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse2["default"];
      return this.apiClient.callApi('/security-logs/{securityLog}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getSecurityLogs operation.
     * @callback module:api/SecuirtyLogsApi~getSecurityLogsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20024} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns all security logs
     * Get a list of Security Logs.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Filter results by string. Searches Name, Description, and Status. Status must match exactly. Others can be a substring.
     * @param {String} opts.orderBy Field to order results by
     * @param {module:model/String} opts.orderDirection  (default to 'asc')
     * @param {Number} opts.perPage 
     * @param {module:api/SecuirtyLogsApi~getSecurityLogsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20024}
     */

  }, {
    key: "getSecurityLogs",
    value: function getSecurityLogs(opts, callback) {
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
      return this.apiClient.callApi('/security-logs', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return SecuirtyLogsApi;
}();

exports["default"] = SecuirtyLogsApi;