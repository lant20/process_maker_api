"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse20016"));

var _ScreenCategory = _interopRequireDefault(require("../model/ScreenCategory"));

var _ScreenCategoryEditable = _interopRequireDefault(require("../model/ScreenCategoryEditable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* ScreenCategories service.
* @module api/ScreenCategoriesApi
* @version 1.0.0
*/
var ScreenCategoriesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ScreenCategoriesApi. 
  * @alias module:api/ScreenCategoriesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ScreenCategoriesApi(apiClient) {
    _classCallCheck(this, ScreenCategoriesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the createScreenCategory operation.
   * @callback module:api/ScreenCategoriesApi~createScreenCategoryCallback
   * @param {String} error Error message, if any.
   * @param {module:model/ScreenCategory} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Save a new Screen Category
   * Store a newly created Screen Category in storage
   * @param {module:model/ScreenCategoryEditable} screenCategoryEditable 
   * @param {module:api/ScreenCategoriesApi~createScreenCategoryCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/ScreenCategory}
   */


  _createClass(ScreenCategoriesApi, [{
    key: "createScreenCategory",
    value: function createScreenCategory(screenCategoryEditable, callback) {
      var postBody = screenCategoryEditable; // verify the required parameter 'screenCategoryEditable' is set

      if (screenCategoryEditable === undefined || screenCategoryEditable === null) {
        throw new Error("Missing the required parameter 'screenCategoryEditable' when calling createScreenCategory");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ScreenCategory["default"];
      return this.apiClient.callApi('/screen_categories', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the deleteScreenCategory operation.
     * @callback module:api/ScreenCategoriesApi~deleteScreenCategoryCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a screen category
     * Remove the specified resource from storage.
     * @param {String} screenCategoryId ID of screen category to return
     * @param {module:api/ScreenCategoriesApi~deleteScreenCategoryCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "deleteScreenCategory",
    value: function deleteScreenCategory(screenCategoryId, callback) {
      var postBody = null; // verify the required parameter 'screenCategoryId' is set

      if (screenCategoryId === undefined || screenCategoryId === null) {
        throw new Error("Missing the required parameter 'screenCategoryId' when calling deleteScreenCategory");
      }

      var pathParams = {
        'screen_category_id': screenCategoryId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/screen_categories/{screen_category_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getScreenCategories operation.
     * @callback module:api/ScreenCategoriesApi~getScreenCategoriesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20016} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns all screens categories that the user has access to
     * Display a listing of the Screen Categories.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Filter results by string. Searches Name, Description, and Status. All fields must match exactly.
     * @param {String} opts.orderBy Field to order results by
     * @param {module:model/String} opts.orderDirection  (default to 'asc')
     * @param {Number} opts.perPage 
     * @param {module:api/ScreenCategoriesApi~getScreenCategoriesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20016}
     */

  }, {
    key: "getScreenCategories",
    value: function getScreenCategories(opts, callback) {
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
      return this.apiClient.callApi('/screen_categories', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getScreenCategoryById operation.
     * @callback module:api/ScreenCategoriesApi~getScreenCategoryByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ScreenCategory} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get single screen category by ID
     * Display the specified screen category.
     * @param {String} screenCategoryId ID of screen category to return
     * @param {module:api/ScreenCategoriesApi~getScreenCategoryByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ScreenCategory}
     */

  }, {
    key: "getScreenCategoryById",
    value: function getScreenCategoryById(screenCategoryId, callback) {
      var postBody = null; // verify the required parameter 'screenCategoryId' is set

      if (screenCategoryId === undefined || screenCategoryId === null) {
        throw new Error("Missing the required parameter 'screenCategoryId' when calling getScreenCategoryById");
      }

      var pathParams = {
        'screen_category_id': screenCategoryId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ScreenCategory["default"];
      return this.apiClient.callApi('/screen_categories/{screen_category_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateScreenCategory operation.
     * @callback module:api/ScreenCategoriesApi~updateScreenCategoryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ScreenCategory} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a screen Category
     * Updates the current element
     * @param {String} screenCategoryId ID of screen category to return
     * @param {module:model/ScreenCategoryEditable} screenCategoryEditable 
     * @param {module:api/ScreenCategoriesApi~updateScreenCategoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ScreenCategory}
     */

  }, {
    key: "updateScreenCategory",
    value: function updateScreenCategory(screenCategoryId, screenCategoryEditable, callback) {
      var postBody = screenCategoryEditable; // verify the required parameter 'screenCategoryId' is set

      if (screenCategoryId === undefined || screenCategoryId === null) {
        throw new Error("Missing the required parameter 'screenCategoryId' when calling updateScreenCategory");
      } // verify the required parameter 'screenCategoryEditable' is set


      if (screenCategoryEditable === undefined || screenCategoryEditable === null) {
        throw new Error("Missing the required parameter 'screenCategoryEditable' when calling updateScreenCategory");
      }

      var pathParams = {
        'screen_category_id': screenCategoryId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ScreenCategory["default"];
      return this.apiClient.callApi('/screen_categories/{screen_category_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return ScreenCategoriesApi;
}();

exports["default"] = ScreenCategoriesApi;