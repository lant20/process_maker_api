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
import InlineObject13 from '../model/InlineObject13';
import InlineResponse20029 from '../model/InlineResponse20029';
import InlineResponse404 from '../model/InlineResponse404';
import InlineResponse422 from '../model/InlineResponse422';
import ProcessRequestToken from '../model/ProcessRequestToken';

/**
* Tasks service.
* @module api/TasksApi
* @version 1.0.0
*/
export default class TasksApi {

    /**
    * Constructs a new TasksApi. 
    * @alias module:api/TasksApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getTasks operation.
     * @callback module:api/TasksApi~getTasksCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20029} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns all tasks that the user has access to
     * Display a listing of the resource.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.processRequestId Process request id
     * @param {String} opts.filter Filter results by string. Searches Name, Description, and Status. Status must match exactly. Others can be a substring.
     * @param {String} opts.orderBy Field to order results by
     * @param {module:model/String} opts.orderDirection  (default to 'asc')
     * @param {String} opts.include Include data from related models in payload. Comma separated list. (default to '')
     * @param {module:api/TasksApi~getTasksCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20029}
     */
    getTasks(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'process_request_id': opts['processRequestId'],
        'filter': opts['filter'],
        'order_by': opts['orderBy'],
        'order_direction': opts['orderDirection'],
        'include': opts['include']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse20029;
      return this.apiClient.callApi(
        '/tasks', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getTasksById operation.
     * @callback module:api/TasksApi~getTasksByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProcessRequestToken} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a single task by ID
     * Display the specified resource.
     * @param {Number} taskId task id
     * @param {module:api/TasksApi~getTasksByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProcessRequestToken}
     */
    getTasksById(taskId, callback) {
      let postBody = null;
      // verify the required parameter 'taskId' is set
      if (taskId === undefined || taskId === null) {
        throw new Error("Missing the required parameter 'taskId' when calling getTasksById");
      }

      let pathParams = {
        'task_id': taskId
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
      let returnType = ProcessRequestToken;
      return this.apiClient.callApi(
        '/tasks/{task_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateTask operation.
     * @callback module:api/TasksApi~updateTaskCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProcessRequestToken} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a task
     * Updates the current element
     * @param {Number} taskId ID of task to update
     * @param {module:model/InlineObject13} inlineObject13 
     * @param {module:api/TasksApi~updateTaskCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProcessRequestToken}
     */
    updateTask(taskId, inlineObject13, callback) {
      let postBody = inlineObject13;
      // verify the required parameter 'taskId' is set
      if (taskId === undefined || taskId === null) {
        throw new Error("Missing the required parameter 'taskId' when calling updateTask");
      }
      // verify the required parameter 'inlineObject13' is set
      if (inlineObject13 === undefined || inlineObject13 === null) {
        throw new Error("Missing the required parameter 'inlineObject13' when calling updateTask");
      }

      let pathParams = {
        'task_id': taskId
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
      let returnType = ProcessRequestToken;
      return this.apiClient.callApi(
        '/tasks/{task_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
