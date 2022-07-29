"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse20018"));

var _ScriptCategory = _interopRequireDefault(require("../model/ScriptCategory"));

var _ScriptCategoryEditable = _interopRequireDefault(require("../model/ScriptCategoryEditable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* ScriptCategories service.
* @module api/ScriptCategoriesApi
* @version 1.0.0
*/
var ScriptCategoriesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ScriptCategoriesApi. 
  * @alias module:api/ScriptCategoriesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ScriptCategoriesApi(apiClient) {
    _classCallCheck(this, ScriptCategoriesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the createScriptCategory operation.
   * @callback module:api/ScriptCategoriesApi~createScriptCategoryCallback
   * @param {String} error Error message, if any.
   * @param {module:model/ScriptCategory} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Save a new Script Category
   * Store a newly created Script Category in storage
   * @param {module:model/ScriptCategoryEditable} scriptCategoryEditable 
   * @param {module:api/ScriptCategoriesApi~createScriptCategoryCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/ScriptCategory}
   */


  _createClass(ScriptCategoriesApi, [{
    key: "createScriptCategory",
    value: function createScriptCategory(scriptCategoryEditable, callback) {
      var postBody = scriptCategoryEditable; // verify the required parameter 'scriptCategoryEditable' is set

      if (scriptCategoryEditable === undefined || scriptCategoryEditable === null) {
        throw new Error("Missing the required parameter 'scriptCategoryEditable' when calling createScriptCategory");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ScriptCategory["default"];
      return this.apiClient.callApi('/script_categories', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the deleteScriptCategory operation.
     * @callback module:api/ScriptCategoriesApi~deleteScriptCategoryCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a script category
     * Remove the specified resource from storage.
     * @param {String} scriptCategoryId ID of script category to return
     * @param {module:api/ScriptCategoriesApi~deleteScriptCategoryCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "deleteScriptCategory",
    value: function deleteScriptCategory(scriptCategoryId, callback) {
      var postBody = null; // verify the required parameter 'scriptCategoryId' is set

      if (scriptCategoryId === undefined || scriptCategoryId === null) {
        throw new Error("Missing the required parameter 'scriptCategoryId' when calling deleteScriptCategory");
      }

      var pathParams = {
        'script_category_id': scriptCategoryId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/script_categories/{script_category_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getScriptCategories operation.
     * @callback module:api/ScriptCategoriesApi~getScriptCategoriesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20018} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns all scripts categories that the user has access to
     * Display a listing of the Script Categories.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Filter results by string. Searches Name, Description, and Status. All fields must match exactly.
     * @param {String} opts.orderBy Field to order results by
     * @param {module:model/String} opts.orderDirection  (default to 'asc')
     * @param {Number} opts.perPage 
     * @param {module:api/ScriptCategoriesApi~getScriptCategoriesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20018}
     */

  }, {
    key: "getScriptCategories",
    value: function getScriptCategories(opts, callback) {
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
      return this.apiClient.callApi('/script_categories', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getScriptCategoryById operation.
     * @callback module:api/ScriptCategoriesApi~getScriptCategoryByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ScriptCategory} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get single script category by ID
     * Display the specified script category.
     * @param {String} scriptCategoryId ID of script category to return
     * @param {module:api/ScriptCategoriesApi~getScriptCategoryByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ScriptCategory}
     */

  }, {
    key: "getScriptCategoryById",
    value: function getScriptCategoryById(scriptCategoryId, callback) {
      var postBody = null; // verify the required parameter 'scriptCategoryId' is set

      if (scriptCategoryId === undefined || scriptCategoryId === null) {
        throw new Error("Missing the required parameter 'scriptCategoryId' when calling getScriptCategoryById");
      }

      var pathParams = {
        'script_category_id': scriptCategoryId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ScriptCategory["default"];
      return this.apiClient.callApi('/script_categories/{script_category_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateScriptCategory operation.
     * @callback module:api/ScriptCategoriesApi~updateScriptCategoryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ScriptCategory} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a script Category
     * Updates the current element
     * @param {String} scriptCategoryId ID of script category to return
     * @param {module:model/ScriptCategoryEditable} scriptCategoryEditable 
     * @param {module:api/ScriptCategoriesApi~updateScriptCategoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ScriptCategory}
     */

  }, {
    key: "updateScriptCategory",
    value: function updateScriptCategory(scriptCategoryId, scriptCategoryEditable, callback) {
      var postBody = scriptCategoryEditable; // verify the required parameter 'scriptCategoryId' is set

      if (scriptCategoryId === undefined || scriptCategoryId === null) {
        throw new Error("Missing the required parameter 'scriptCategoryId' when calling updateScriptCategory");
      } // verify the required parameter 'scriptCategoryEditable' is set


      if (scriptCategoryEditable === undefined || scriptCategoryEditable === null) {
        throw new Error("Missing the required parameter 'scriptCategoryEditable' when calling updateScriptCategory");
      }

      var pathParams = {
        'script_category_id': scriptCategoryId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ScriptCategory["default"];
      return this.apiClient.callApi('/script_categories/{script_category_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return ScriptCategoriesApi;
}();

exports["default"] = ScriptCategoriesApi;