"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse20027"));

var _Signals = _interopRequireDefault(require("../model/Signals"));

var _SignalsEditable = _interopRequireDefault(require("../model/SignalsEditable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Signals service.
* @module api/SignalsApi
* @version 1.0.0
*/
var SignalsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new SignalsApi. 
  * @alias module:api/SignalsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function SignalsApi(apiClient) {
    _classCallCheck(this, SignalsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the createSignal operation.
   * @callback module:api/SignalsApi~createSignalCallback
   * @param {String} error Error message, if any.
   * @param {module:model/Signals} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Creates a new Global Signal
   * Creates a new global signal
   * @param {module:model/SignalsEditable} signalsEditable 
   * @param {module:api/SignalsApi~createSignalCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/Signals}
   */


  _createClass(SignalsApi, [{
    key: "createSignal",
    value: function createSignal(signalsEditable, callback) {
      var postBody = signalsEditable; // verify the required parameter 'signalsEditable' is set

      if (signalsEditable === undefined || signalsEditable === null) {
        throw new Error("Missing the required parameter 'signalsEditable' when calling createSignal");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Signals["default"];
      return this.apiClient.callApi('/signals', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the deleteSignal operation.
     * @callback module:api/SignalsApi~deleteSignalCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a signal
     * @param {String} signalId ID of signal to delete
     * @param {module:api/SignalsApi~deleteSignalCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "deleteSignal",
    value: function deleteSignal(signalId, callback) {
      var postBody = null; // verify the required parameter 'signalId' is set

      if (signalId === undefined || signalId === null) {
        throw new Error("Missing the required parameter 'signalId' when calling deleteSignal");
      }

      var pathParams = {
        'signal_id': signalId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/signals/{signal_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getSignals operation.
     * @callback module:api/SignalsApi~getSignalsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20027} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns all signals
     * Display a listing of the resource.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Filter results by string. Searches Name, Description, and Status. Status must match exactly. Others can be a substring.
     * @param {String} opts.orderBy Field to order results by
     * @param {module:model/String} opts.orderDirection  (default to 'asc')
     * @param {Number} opts.perPage 
     * @param {module:api/SignalsApi~getSignalsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20027}
     */

  }, {
    key: "getSignals",
    value: function getSignals(opts, callback) {
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
      return this.apiClient.callApi('/signals', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getSignalsById operation.
     * @callback module:api/SignalsApi~getSignalsByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Signals} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a single signal by ID
     * Display the specified resource.
     * @param {String} signalId signal id
     * @param {module:api/SignalsApi~getSignalsByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Signals}
     */

  }, {
    key: "getSignalsById",
    value: function getSignalsById(signalId, callback) {
      var postBody = null; // verify the required parameter 'signalId' is set

      if (signalId === undefined || signalId === null) {
        throw new Error("Missing the required parameter 'signalId' when calling getSignalsById");
      }

      var pathParams = {
        'signal_id': signalId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Signals["default"];
      return this.apiClient.callApi('/signals/{signal_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateSignal operation.
     * @callback module:api/SignalsApi~updateSignalCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Signals} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a signal
     * @param {String} signalId ID of signal to update
     * @param {module:model/SignalsEditable} signalsEditable 
     * @param {module:api/SignalsApi~updateSignalCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Signals}
     */

  }, {
    key: "updateSignal",
    value: function updateSignal(signalId, signalsEditable, callback) {
      var postBody = signalsEditable; // verify the required parameter 'signalId' is set

      if (signalId === undefined || signalId === null) {
        throw new Error("Missing the required parameter 'signalId' when calling updateSignal");
      } // verify the required parameter 'signalsEditable' is set


      if (signalsEditable === undefined || signalsEditable === null) {
        throw new Error("Missing the required parameter 'signalsEditable' when calling updateSignal");
      }

      var pathParams = {
        'signal_id': signalId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Signals["default"];
      return this.apiClient.callApi('/signals/{signal_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return SignalsApi;
}();

exports["default"] = SignalsApi;