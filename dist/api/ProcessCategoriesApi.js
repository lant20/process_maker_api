"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse2008"));

var _Process = _interopRequireDefault(require("../model/Process"));

var _ProcessCategory = _interopRequireDefault(require("../model/ProcessCategory"));

var _ProcessCategoryEditable = _interopRequireDefault(require("../model/ProcessCategoryEditable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* ProcessCategories service.
* @module api/ProcessCategoriesApi
* @version 1.0.0
*/
var ProcessCategoriesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ProcessCategoriesApi. 
  * @alias module:api/ProcessCategoriesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ProcessCategoriesApi(apiClient) {
    _classCallCheck(this, ProcessCategoriesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the createProcessCategory operation.
   * @callback module:api/ProcessCategoriesApi~createProcessCategoryCallback
   * @param {String} error Error message, if any.
   * @param {module:model/ProcessCategory} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Save a new process Category
   * Store a newly created Process Category in storage
   * @param {module:model/ProcessCategoryEditable} processCategoryEditable 
   * @param {module:api/ProcessCategoriesApi~createProcessCategoryCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/ProcessCategory}
   */


  _createClass(ProcessCategoriesApi, [{
    key: "createProcessCategory",
    value: function createProcessCategory(processCategoryEditable, callback) {
      var postBody = processCategoryEditable; // verify the required parameter 'processCategoryEditable' is set

      if (processCategoryEditable === undefined || processCategoryEditable === null) {
        throw new Error("Missing the required parameter 'processCategoryEditable' when calling createProcessCategory");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ProcessCategory["default"];
      return this.apiClient.callApi('/process_categories', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the deleteProcessCategory operation.
     * @callback module:api/ProcessCategoriesApi~deleteProcessCategoryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Process} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a process category
     * Remove the specified resource from storage.
     * @param {Number} processCategoryId ID of process category to return
     * @param {module:api/ProcessCategoriesApi~deleteProcessCategoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Process}
     */

  }, {
    key: "deleteProcessCategory",
    value: function deleteProcessCategory(processCategoryId, callback) {
      var postBody = null; // verify the required parameter 'processCategoryId' is set

      if (processCategoryId === undefined || processCategoryId === null) {
        throw new Error("Missing the required parameter 'processCategoryId' when calling deleteProcessCategory");
      }

      var pathParams = {
        'process_category_id': processCategoryId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Process["default"];
      return this.apiClient.callApi('/process_categories/{process_category_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getProcessCategories operation.
     * @callback module:api/ProcessCategoriesApi~getProcessCategoriesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2008} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns all processes categories that the user has access to
     * Display a listing of the Process Categories.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Filter results by string. Searches Name and Status. All fields must match exactly.
     * @param {String} opts.orderBy Field to order results by
     * @param {module:model/String} opts.orderDirection  (default to 'asc')
     * @param {Number} opts.perPage 
     * @param {module:api/ProcessCategoriesApi~getProcessCategoriesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2008}
     */

  }, {
    key: "getProcessCategories",
    value: function getProcessCategories(opts, callback) {
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
      return this.apiClient.callApi('/process_categories', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getProcessCategoryById operation.
     * @callback module:api/ProcessCategoriesApi~getProcessCategoryByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProcessCategory} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get single process category by ID
     * Display the specified Process category.
     * @param {Number} processCategoryId ID of process category to return
     * @param {module:api/ProcessCategoriesApi~getProcessCategoryByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProcessCategory}
     */

  }, {
    key: "getProcessCategoryById",
    value: function getProcessCategoryById(processCategoryId, callback) {
      var postBody = null; // verify the required parameter 'processCategoryId' is set

      if (processCategoryId === undefined || processCategoryId === null) {
        throw new Error("Missing the required parameter 'processCategoryId' when calling getProcessCategoryById");
      }

      var pathParams = {
        'process_category_id': processCategoryId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ProcessCategory["default"];
      return this.apiClient.callApi('/process_categories/{process_category_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateProcessCategory operation.
     * @callback module:api/ProcessCategoriesApi~updateProcessCategoryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProcessCategory} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a process Category
     * Updates the current element
     * @param {Number} processCategoryId ID of process category to return
     * @param {module:model/ProcessCategoryEditable} processCategoryEditable 
     * @param {module:api/ProcessCategoriesApi~updateProcessCategoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProcessCategory}
     */

  }, {
    key: "updateProcessCategory",
    value: function updateProcessCategory(processCategoryId, processCategoryEditable, callback) {
      var postBody = processCategoryEditable; // verify the required parameter 'processCategoryId' is set

      if (processCategoryId === undefined || processCategoryId === null) {
        throw new Error("Missing the required parameter 'processCategoryId' when calling updateProcessCategory");
      } // verify the required parameter 'processCategoryEditable' is set


      if (processCategoryEditable === undefined || processCategoryEditable === null) {
        throw new Error("Missing the required parameter 'processCategoryEditable' when calling updateProcessCategory");
      }

      var pathParams = {
        'process_category_id': processCategoryId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ProcessCategory["default"];
      return this.apiClient.callApi('/process_categories/{process_category_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return ProcessCategoriesApi;
}();

exports["default"] = ProcessCategoriesApi;