/**
 * ProcessMaker API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@processmaker.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import InlineResponse20016 from '../model/InlineResponse20016';
import ScreenCategory from '../model/ScreenCategory';
import ScreenCategoryEditable from '../model/ScreenCategoryEditable';

/**
* ScreenCategories service.
* @module api/ScreenCategoriesApi
* @version 1.0.0
*/
export default class ScreenCategoriesApi {

    /**
    * Constructs a new ScreenCategoriesApi. 
    * @alias module:api/ScreenCategoriesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
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
    createScreenCategory(screenCategoryEditable, callback) {
      let postBody = screenCategoryEditable;
      // verify the required parameter 'screenCategoryEditable' is set
      if (screenCategoryEditable === undefined || screenCategoryEditable === null) {
        throw new Error("Missing the required parameter 'screenCategoryEditable' when calling createScreenCategory");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ScreenCategory;
      return this.apiClient.callApi(
        '/screen_categories', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    deleteScreenCategory(screenCategoryId, callback) {
      let postBody = null;
      // verify the required parameter 'screenCategoryId' is set
      if (screenCategoryId === undefined || screenCategoryId === null) {
        throw new Error("Missing the required parameter 'screenCategoryId' when calling deleteScreenCategory");
      }

      let pathParams = {
        'screen_category_id': screenCategoryId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/screen_categories/{screen_category_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    getScreenCategories(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'filter': opts['filter'],
        'order_by': opts['orderBy'],
        'order_direction': opts['orderDirection'],
        'per_page': opts['perPage']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse20016;
      return this.apiClient.callApi(
        '/screen_categories', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    getScreenCategoryById(screenCategoryId, callback) {
      let postBody = null;
      // verify the required parameter 'screenCategoryId' is set
      if (screenCategoryId === undefined || screenCategoryId === null) {
        throw new Error("Missing the required parameter 'screenCategoryId' when calling getScreenCategoryById");
      }

      let pathParams = {
        'screen_category_id': screenCategoryId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ScreenCategory;
      return this.apiClient.callApi(
        '/screen_categories/{screen_category_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    updateScreenCategory(screenCategoryId, screenCategoryEditable, callback) {
      let postBody = screenCategoryEditable;
      // verify the required parameter 'screenCategoryId' is set
      if (screenCategoryId === undefined || screenCategoryId === null) {
        throw new Error("Missing the required parameter 'screenCategoryId' when calling updateScreenCategory");
      }
      // verify the required parameter 'screenCategoryEditable' is set
      if (screenCategoryEditable === undefined || screenCategoryEditable === null) {
        throw new Error("Missing the required parameter 'screenCategoryEditable' when calling updateScreenCategory");
      }

      let pathParams = {
        'screen_category_id': screenCategoryId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ScreenCategory;
      return this.apiClient.callApi(
        '/screen_categories/{screen_category_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
