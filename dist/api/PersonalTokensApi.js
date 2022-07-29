"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineObject = _interopRequireDefault(require("../model/InlineObject14"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse20030"));

var _UserToken = _interopRequireDefault(require("../model/UserToken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* PersonalTokens service.
* @module api/PersonalTokensApi
* @version 1.0.0
*/
var PersonalTokensApi = /*#__PURE__*/function () {
  /**
  * Constructs a new PersonalTokensApi. 
  * @alias module:api/PersonalTokensApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function PersonalTokensApi(apiClient) {
    _classCallCheck(this, PersonalTokensApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the createTokens operation.
   * @callback module:api/PersonalTokensApi~createTokensCallback
   * @param {String} error Error message, if any.
   * @param {module:model/UserToken} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Create new token for a specific user
   * Create a new personal access token for the user.
   * @param {Number} userId User id
   * @param {module:model/InlineObject14} inlineObject14 
   * @param {module:api/PersonalTokensApi~createTokensCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/UserToken}
   */


  _createClass(PersonalTokensApi, [{
    key: "createTokens",
    value: function createTokens(userId, inlineObject14, callback) {
      var postBody = inlineObject14; // verify the required parameter 'userId' is set

      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling createTokens");
      } // verify the required parameter 'inlineObject14' is set


      if (inlineObject14 === undefined || inlineObject14 === null) {
        throw new Error("Missing the required parameter 'inlineObject14' when calling createTokens");
      }

      var pathParams = {
        'user_id': userId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _UserToken["default"];
      return this.apiClient.callApi('/users/{user_id}/tokens', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the deleteToken operation.
     * @callback module:api/PersonalTokensApi~deleteTokenCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a token
     * Delete the given token for a user
     * @param {Number} userId User ID
     * @param {String} tokenId Token ID
     * @param {module:api/PersonalTokensApi~deleteTokenCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "deleteToken",
    value: function deleteToken(userId, tokenId, callback) {
      var postBody = null; // verify the required parameter 'userId' is set

      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling deleteToken");
      } // verify the required parameter 'tokenId' is set


      if (tokenId === undefined || tokenId === null) {
        throw new Error("Missing the required parameter 'tokenId' when calling deleteToken");
      }

      var pathParams = {
        'user_id': userId,
        'token_id': tokenId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/users/{user_id}/tokens/{token_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getTokenById operation.
     * @callback module:api/PersonalTokensApi~getTokenByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserToken} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get single token by ID
     * Show a personal access token for the user
     * @param {Number} userId ID of user
     * @param {String} tokenId ID of token to return
     * @param {module:api/PersonalTokensApi~getTokenByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserToken}
     */

  }, {
    key: "getTokenById",
    value: function getTokenById(userId, tokenId, callback) {
      var postBody = null; // verify the required parameter 'userId' is set

      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getTokenById");
      } // verify the required parameter 'tokenId' is set


      if (tokenId === undefined || tokenId === null) {
        throw new Error("Missing the required parameter 'tokenId' when calling getTokenById");
      }

      var pathParams = {
        'user_id': userId,
        'token_id': tokenId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _UserToken["default"];
      return this.apiClient.callApi('/users/{user_id}/tokens/{token_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getTokens operation.
     * @callback module:api/PersonalTokensApi~getTokensCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20030} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Display listing of access tokens for the specified user.
     * Display listing of access tokens for the specified user.
     * @param {Number} userId User id
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage 
     * @param {module:api/PersonalTokensApi~getTokensCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20030}
     */

  }, {
    key: "getTokens",
    value: function getTokens(userId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'userId' is set

      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getTokens");
      }

      var pathParams = {
        'user_id': userId
      };
      var queryParams = {
        'per_page': opts['perPage']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse["default"];
      return this.apiClient.callApi('/users/{user_id}/tokens', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return PersonalTokensApi;
}();

exports["default"] = PersonalTokensApi;