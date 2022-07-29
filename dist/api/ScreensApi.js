"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineObject = _interopRequireDefault(require("../model/InlineObject9"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse20017"));

var _InlineResponse2 = _interopRequireDefault(require("../model/InlineResponse201"));

var _ScreenExported = _interopRequireDefault(require("../model/ScreenExported"));

var _Screens = _interopRequireDefault(require("../model/Screens"));

var _ScreensEditable = _interopRequireDefault(require("../model/ScreensEditable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Screens service.
* @module api/ScreensApi
* @version 1.0.0
*/
var ScreensApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ScreensApi. 
  * @alias module:api/ScreensApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ScreensApi(apiClient) {
    _classCallCheck(this, ScreensApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the createScreen operation.
   * @callback module:api/ScreensApi~createScreenCallback
   * @param {String} error Error message, if any.
   * @param {module:model/Screens} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Save a new screens
   * Create a new Screen.
   * @param {module:model/ScreensEditable} screensEditable 
   * @param {module:api/ScreensApi~createScreenCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/Screens}
   */


  _createClass(ScreensApi, [{
    key: "createScreen",
    value: function createScreen(screensEditable, callback) {
      var postBody = screensEditable; // verify the required parameter 'screensEditable' is set

      if (screensEditable === undefined || screensEditable === null) {
        throw new Error("Missing the required parameter 'screensEditable' when calling createScreen");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Screens["default"];
      return this.apiClient.callApi('/screens', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the deleteScreen operation.
     * @callback module:api/ScreensApi~deleteScreenCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a screen
     * Delete a Screen.
     * @param {String} screensId ID of screen to return
     * @param {module:api/ScreensApi~deleteScreenCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "deleteScreen",
    value: function deleteScreen(screensId, callback) {
      var postBody = null; // verify the required parameter 'screensId' is set

      if (screensId === undefined || screensId === null) {
        throw new Error("Missing the required parameter 'screensId' when calling deleteScreen");
      }

      var pathParams = {
        'screens_id': screensId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/screens/{screens_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the duplicateScreen operation.
     * @callback module:api/ScreensApi~duplicateScreenCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Screens} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * duplicate a screen
     * duplicate a Screen.
     * @param {String} screensId ID of screen to return
     * @param {module:model/ScreensEditable} screensEditable 
     * @param {module:api/ScreensApi~duplicateScreenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Screens}
     */

  }, {
    key: "duplicateScreen",
    value: function duplicateScreen(screensId, screensEditable, callback) {
      var postBody = screensEditable; // verify the required parameter 'screensId' is set

      if (screensId === undefined || screensId === null) {
        throw new Error("Missing the required parameter 'screensId' when calling duplicateScreen");
      } // verify the required parameter 'screensEditable' is set


      if (screensEditable === undefined || screensEditable === null) {
        throw new Error("Missing the required parameter 'screensEditable' when calling duplicateScreen");
      }

      var pathParams = {
        'screens_id': screensId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Screens["default"];
      return this.apiClient.callApi('/screens/{screens_id}/duplicate', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the exportScreen operation.
     * @callback module:api/ScreensApi~exportScreenCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ScreenExported} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Export a single screen by ID
     * Export the specified screen.
     * @param {String} screensId ID of screen to return
     * @param {module:api/ScreensApi~exportScreenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ScreenExported}
     */

  }, {
    key: "exportScreen",
    value: function exportScreen(screensId, callback) {
      var postBody = null; // verify the required parameter 'screensId' is set

      if (screensId === undefined || screensId === null) {
        throw new Error("Missing the required parameter 'screensId' when calling exportScreen");
      }

      var pathParams = {
        'screensId': screensId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ScreenExported["default"];
      return this.apiClient.callApi('/screens/{screensId}/export', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getScreens operation.
     * @callback module:api/ScreensApi~getScreensCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20017} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns all screens that the user has access to
     * Get a list of Screens.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Filter results by string. Searches Name, Description, and Status. Status must match exactly. Others can be a substring.
     * @param {String} opts.orderBy Field to order results by
     * @param {module:model/String} opts.orderDirection  (default to 'asc')
     * @param {Number} opts.perPage 
     * @param {String} opts.include Include data from related models in payload. Comma separated list. (default to '')
     * @param {String} opts.exclude Comma separated list of fields to exclude from the response (default to '')
     * @param {module:api/ScreensApi~getScreensCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20017}
     */

  }, {
    key: "getScreens",
    value: function getScreens(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'filter': opts['filter'],
        'order_by': opts['orderBy'],
        'order_direction': opts['orderDirection'],
        'per_page': opts['perPage'],
        'include': opts['include'],
        'exclude': opts['exclude']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse["default"];
      return this.apiClient.callApi('/screens', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getScreensById operation.
     * @callback module:api/ScreensApi~getScreensByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Screens} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get single screens by ID
     * Get a single Screen.
     * @param {String} screensId ID of screens to return
     * @param {module:api/ScreensApi~getScreensByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Screens}
     */

  }, {
    key: "getScreensById",
    value: function getScreensById(screensId, callback) {
      var postBody = null; // verify the required parameter 'screensId' is set

      if (screensId === undefined || screensId === null) {
        throw new Error("Missing the required parameter 'screensId' when calling getScreensById");
      }

      var pathParams = {
        'screens_id': screensId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Screens["default"];
      return this.apiClient.callApi('/screens/{screens_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the importScreen operation.
     * @callback module:api/ScreensApi~importScreenCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse201} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Import a new screen
     * Import the specified screen.
     * @param {Object} opts Optional parameters
     * @param {File} opts.file file to import
     * @param {module:api/ScreensApi~importScreenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse201}
     */

  }, {
    key: "importScreen",
    value: function importScreen(opts, callback) {
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
      var returnType = _InlineResponse2["default"];
      return this.apiClient.callApi('/screens/import', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the preview operation.
     * @callback module:api/ScreensApi~previewCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Screens} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Preview a screen
     * Get preview a screen
     * @param {module:model/InlineObject9} inlineObject9 
     * @param {module:api/ScreensApi~previewCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Screens}
     */

  }, {
    key: "preview",
    value: function preview(inlineObject9, callback) {
      var postBody = inlineObject9; // verify the required parameter 'inlineObject9' is set

      if (inlineObject9 === undefined || inlineObject9 === null) {
        throw new Error("Missing the required parameter 'inlineObject9' when calling preview");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Screens["default"];
      return this.apiClient.callApi('/screens/preview', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateScreen operation.
     * @callback module:api/ScreensApi~updateScreenCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a screen
     * Update a Screen.
     * @param {String} screensId ID of screen to return
     * @param {module:model/ScreensEditable} screensEditable 
     * @param {module:api/ScreensApi~updateScreenCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "updateScreen",
    value: function updateScreen(screensId, screensEditable, callback) {
      var postBody = screensEditable; // verify the required parameter 'screensId' is set

      if (screensId === undefined || screensId === null) {
        throw new Error("Missing the required parameter 'screensId' when calling updateScreen");
      } // verify the required parameter 'screensEditable' is set


      if (screensEditable === undefined || screensEditable === null) {
        throw new Error("Missing the required parameter 'screensEditable' when calling updateScreen");
      }

      var pathParams = {
        'screens_id': screensId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/screens/{screens_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return ScreensApi;
}();

exports["default"] = ScreensApi;