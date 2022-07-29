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
import EnvironmentVariable from '../model/EnvironmentVariable';
import EnvironmentVariableEditable from '../model/EnvironmentVariableEditable';
import InlineResponse200 from '../model/InlineResponse200';

/**
* EnvironmentVariables service.
* @module api/EnvironmentVariablesApi
* @version 1.0.0
*/
export default class EnvironmentVariablesApi {

    /**
    * Constructs a new EnvironmentVariablesApi. 
    * @alias module:api/EnvironmentVariablesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createEnvironmentVariable operation.
     * @callback module:api/EnvironmentVariablesApi~createEnvironmentVariableCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnvironmentVariable} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new environment variable
     * Creates a new global Environment Variable in the system
     * @param {module:model/EnvironmentVariableEditable} environmentVariableEditable 
     * @param {module:api/EnvironmentVariablesApi~createEnvironmentVariableCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnvironmentVariable}
     */
    createEnvironmentVariable(environmentVariableEditable, callback) {
      let postBody = environmentVariableEditable;
      // verify the required parameter 'environmentVariableEditable' is set
      if (environmentVariableEditable === undefined || environmentVariableEditable === null) {
        throw new Error("Missing the required parameter 'environmentVariableEditable' when calling createEnvironmentVariable");
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
      let returnType = EnvironmentVariable;
      return this.apiClient.callApi(
        '/environment_variables', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteEnvironmentVariable operation.
     * @callback module:api/EnvironmentVariablesApi~deleteEnvironmentVariableCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an environment variable
     * @param {Number} environmentVariableId ID of environment_variables to return
     * @param {module:api/EnvironmentVariablesApi~deleteEnvironmentVariableCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteEnvironmentVariable(environmentVariableId, callback) {
      let postBody = null;
      // verify the required parameter 'environmentVariableId' is set
      if (environmentVariableId === undefined || environmentVariableId === null) {
        throw new Error("Missing the required parameter 'environmentVariableId' when calling deleteEnvironmentVariable");
      }

      let pathParams = {
        'environment_variable_id': environmentVariableId
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
        '/environment_variables/{environment_variable_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getEnvironmentVariableById operation.
     * @callback module:api/EnvironmentVariablesApi~getEnvironmentVariableByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnvironmentVariable} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an environment variable by id. For security, the value is not included.
     * Return an environment variable instance Using implicit model binding, will automatically return 404 if variable now found
     * @param {Number} environmentVariableId ID of environment_variables to return
     * @param {module:api/EnvironmentVariablesApi~getEnvironmentVariableByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnvironmentVariable}
     */
    getEnvironmentVariableById(environmentVariableId, callback) {
      let postBody = null;
      // verify the required parameter 'environmentVariableId' is set
      if (environmentVariableId === undefined || environmentVariableId === null) {
        throw new Error("Missing the required parameter 'environmentVariableId' when calling getEnvironmentVariableById");
      }

      let pathParams = {
        'environment_variable_id': environmentVariableId
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
      let returnType = EnvironmentVariable;
      return this.apiClient.callApi(
        '/environment_variables/{environment_variable_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getEnvironmentVariables operation.
     * @callback module:api/EnvironmentVariablesApi~getEnvironmentVariablesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns all environmentVariables that the user has access to. For security, values are not included.
     * Fetch a collection of variables based on paged request and filter if provided
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Filter results by string. Searches Name, Description, and Status. Status must match exactly. Others can be a substring.
     * @param {String} opts.orderBy Field to order results by
     * @param {module:model/String} opts.orderDirection  (default to 'asc')
     * @param {Number} opts.perPage 
     * @param {String} opts.include Include data from related models in payload. Comma separated list. (default to '')
     * @param {module:api/EnvironmentVariablesApi~getEnvironmentVariablesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse200}
     */
    getEnvironmentVariables(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'filter': opts['filter'],
        'order_by': opts['orderBy'],
        'order_direction': opts['orderDirection'],
        'per_page': opts['perPage'],
        'include': opts['include']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse200;
      return this.apiClient.callApi(
        '/environment_variables', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateEnvironmentVariable operation.
     * @callback module:api/EnvironmentVariablesApi~updateEnvironmentVariableCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnvironmentVariable} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an environment variable
     * Update an environment variable
     * @param {Number} environmentVariableId ID of environment variables to update
     * @param {module:model/EnvironmentVariableEditable} environmentVariableEditable 
     * @param {module:api/EnvironmentVariablesApi~updateEnvironmentVariableCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EnvironmentVariable}
     */
    updateEnvironmentVariable(environmentVariableId, environmentVariableEditable, callback) {
      let postBody = environmentVariableEditable;
      // verify the required parameter 'environmentVariableId' is set
      if (environmentVariableId === undefined || environmentVariableId === null) {
        throw new Error("Missing the required parameter 'environmentVariableId' when calling updateEnvironmentVariable");
      }
      // verify the required parameter 'environmentVariableEditable' is set
      if (environmentVariableEditable === undefined || environmentVariableEditable === null) {
        throw new Error("Missing the required parameter 'environmentVariableEditable' when calling updateEnvironmentVariable");
      }

      let pathParams = {
        'environment_variable_id': environmentVariableId
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
      let returnType = EnvironmentVariable;
      return this.apiClient.callApi(
        '/environment_variables/{environment_variable_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
