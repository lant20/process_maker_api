"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineObject = _interopRequireDefault(require("../model/InlineObject5"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Permissions service.
* @module api/PermissionsApi
* @version 1.0.0
*/
var PermissionsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new PermissionsApi. 
  * @alias module:api/PermissionsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function PermissionsApi(apiClient) {
    _classCallCheck(this, PermissionsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the call51b3555fb753f44324bf5c3880e01454 operation.
   * @callback module:api/PermissionsApi~call51b3555fb753f44324bf5c3880e01454Callback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Update the permissions of a user
   * Update permissions
   * @param {module:model/InlineObject5} inlineObject5 
   * @param {module:api/PermissionsApi~call51b3555fb753f44324bf5c3880e01454Callback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(PermissionsApi, [{
    key: "call51b3555fb753f44324bf5c3880e01454",
    value: function call51b3555fb753f44324bf5c3880e01454(inlineObject5, callback) {
      var postBody = inlineObject5; // verify the required parameter 'inlineObject5' is set

      if (inlineObject5 === undefined || inlineObject5 === null) {
        throw new Error("Missing the required parameter 'inlineObject5' when calling call51b3555fb753f44324bf5c3880e01454");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/permissions', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return PermissionsApi;
}();

exports["default"] = PermissionsApi;