"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse2004"));

var _InlineResponse2 = _interopRequireDefault(require("../model/InlineResponse404"));

var _InlineResponse3 = _interopRequireDefault(require("../model/InlineResponse422"));

var _RestoreUser = _interopRequireDefault(require("../model/RestoreUser"));

var _UpdateUserGroups = _interopRequireDefault(require("../model/UpdateUserGroups"));

var _Users = _interopRequireDefault(require("../model/Users"));

var _UsersEditable = _interopRequireDefault(require("../model/UsersEditable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Users service.
* @module api/UsersApi
* @version 1.0.0
*/
var UsersApi = /*#__PURE__*/function () {
  /**
  * Constructs a new UsersApi. 
  * @alias module:api/UsersApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function UsersApi(apiClient) {
    _classCallCheck(this, UsersApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the createUser operation.
   * @callback module:api/UsersApi~createUserCallback
   * @param {String} error Error message, if any.
   * @param {module:model/Users} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Save a new users
   * Store a newly created resource in storage.
   * @param {module:model/UsersEditable} usersEditable 
   * @param {module:api/UsersApi~createUserCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/Users}
   */


  _createClass(UsersApi, [{
    key: "createUser",
    value: function createUser(usersEditable, callback) {
      var postBody = usersEditable; // verify the required parameter 'usersEditable' is set

      if (usersEditable === undefined || usersEditable === null) {
        throw new Error("Missing the required parameter 'usersEditable' when calling createUser");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Users["default"];
      return this.apiClient.callApi('/users', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the deleteUser operation.
     * @callback module:api/UsersApi~deleteUserCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a user
     * Delete a user
     * @param {Number} userId ID of user to delete
     * @param {module:api/UsersApi~deleteUserCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "deleteUser",
    value: function deleteUser(userId, callback) {
      var postBody = null; // verify the required parameter 'userId' is set

      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling deleteUser");
      }

      var pathParams = {
        'user_id': userId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/users/{user_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getUserById operation.
     * @callback module:api/UsersApi~getUserByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Users} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get single user by ID
     * Display the specified resource.
     * @param {Number} userId ID of user to return
     * @param {module:api/UsersApi~getUserByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Users}
     */

  }, {
    key: "getUserById",
    value: function getUserById(userId, callback) {
      var postBody = null; // verify the required parameter 'userId' is set

      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getUserById");
      }

      var pathParams = {
        'user_id': userId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Users["default"];
      return this.apiClient.callApi('/users/{user_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getUsers operation.
     * @callback module:api/UsersApi~getUsersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2004} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns all users
     * Display a listing of the resource.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.status ACTIVE or INACTIVE
     * @param {String} opts.filter Filter results by string. Searches Name, Description, and Status. Status must match exactly. Others can be a substring.
     * @param {String} opts.orderBy Field to order results by
     * @param {module:model/String} opts.orderDirection  (default to 'asc')
     * @param {Number} opts.perPage 
     * @param {String} opts.include Include data from related models in payload. Comma separated list. (default to '')
     * @param {String} opts.excludeIds Comma separated list of IDs to exclude from the response (default to '')
     * @param {module:api/UsersApi~getUsersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2004}
     */

  }, {
    key: "getUsers",
    value: function getUsers(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'status': opts['status'],
        'filter': opts['filter'],
        'order_by': opts['orderBy'],
        'order_direction': opts['orderDirection'],
        'per_page': opts['perPage'],
        'include': opts['include'],
        'exclude_ids': opts['excludeIds']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse["default"];
      return this.apiClient.callApi('/users', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the restoreUser operation.
     * @callback module:api/UsersApi~restoreUserCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Restore a soft deleted user
     * @param {module:model/RestoreUser} restoreUser 
     * @param {module:api/UsersApi~restoreUserCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "restoreUser",
    value: function restoreUser(_restoreUser, callback) {
      var postBody = _restoreUser; // verify the required parameter 'restoreUser' is set

      if (_restoreUser === undefined || _restoreUser === null) {
        throw new Error("Missing the required parameter 'restoreUser' when calling restoreUser");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/users/restore', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateUser operation.
     * @callback module:api/UsersApi~updateUserCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a user
     * Update a user
     * @param {Number} userId ID of user to return
     * @param {module:model/UsersEditable} usersEditable 
     * @param {module:api/UsersApi~updateUserCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "updateUser",
    value: function updateUser(userId, usersEditable, callback) {
      var postBody = usersEditable; // verify the required parameter 'userId' is set

      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling updateUser");
      } // verify the required parameter 'usersEditable' is set


      if (usersEditable === undefined || usersEditable === null) {
        throw new Error("Missing the required parameter 'usersEditable' when calling updateUser");
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
      var returnType = null;
      return this.apiClient.callApi('/users/{user_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateUserGroups operation.
     * @callback module:api/UsersApi~updateUserGroupsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set the groups a users belongs to
     * @param {Number} userId ID of user
     * @param {module:model/UpdateUserGroups} updateUserGroups 
     * @param {module:api/UsersApi~updateUserGroupsCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "updateUserGroups",
    value: function updateUserGroups(userId, _updateUserGroups, callback) {
      var postBody = _updateUserGroups; // verify the required parameter 'userId' is set

      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling updateUserGroups");
      } // verify the required parameter 'updateUserGroups' is set


      if (_updateUserGroups === undefined || _updateUserGroups === null) {
        throw new Error("Missing the required parameter 'updateUserGroups' when calling updateUserGroups");
      }

      var pathParams = {
        'user_id': userId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/users/{user_id}/groups', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return UsersApi;
}();

exports["default"] = UsersApi;