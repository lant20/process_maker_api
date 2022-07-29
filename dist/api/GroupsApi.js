"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Groups = _interopRequireDefault(require("../model/Groups"));

var _GroupsEditable = _interopRequireDefault(require("../model/GroupsEditable"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse2003"));

var _InlineResponse2 = _interopRequireDefault(require("../model/InlineResponse2004"));

var _InlineResponse3 = _interopRequireDefault(require("../model/InlineResponse404"));

var _InlineResponse4 = _interopRequireDefault(require("../model/InlineResponse422"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Groups service.
* @module api/GroupsApi
* @version 1.0.0
*/
var GroupsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new GroupsApi. 
  * @alias module:api/GroupsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function GroupsApi(apiClient) {
    _classCallCheck(this, GroupsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the createGroup operation.
   * @callback module:api/GroupsApi~createGroupCallback
   * @param {String} error Error message, if any.
   * @param {module:model/Groups} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Save a new group
   * Store a newly created resource in storage.
   * @param {module:model/GroupsEditable} groupsEditable 
   * @param {module:api/GroupsApi~createGroupCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/Groups}
   */


  _createClass(GroupsApi, [{
    key: "createGroup",
    value: function createGroup(groupsEditable, callback) {
      var postBody = groupsEditable; // verify the required parameter 'groupsEditable' is set

      if (groupsEditable === undefined || groupsEditable === null) {
        throw new Error("Missing the required parameter 'groupsEditable' when calling createGroup");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Groups["default"];
      return this.apiClient.callApi('/groups', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the deleteGroup operation.
     * @callback module:api/GroupsApi~deleteGroupCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a group
     * Delete a user
     * @param {Number} groupId ID of group to return
     * @param {module:api/GroupsApi~deleteGroupCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "deleteGroup",
    value: function deleteGroup(groupId, callback) {
      var postBody = null; // verify the required parameter 'groupId' is set

      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling deleteGroup");
      }

      var pathParams = {
        'group_id': groupId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/groups/{group_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getGroupById operation.
     * @callback module:api/GroupsApi~getGroupByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Groups} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get single group by ID
     * Display the specified resource.
     * @param {Number} groupId ID of group to return
     * @param {module:api/GroupsApi~getGroupByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Groups}
     */

  }, {
    key: "getGroupById",
    value: function getGroupById(groupId, callback) {
      var postBody = null; // verify the required parameter 'groupId' is set

      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling getGroupById");
      }

      var pathParams = {
        'group_id': groupId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Groups["default"];
      return this.apiClient.callApi('/groups/{group_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getGroupGroupss operation.
     * @callback module:api/GroupsApi~getGroupGroupssCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2003} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns all users of a group
     * Display the list of groups in a group
     * @param {Number} groupId ID of group
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Filter results by string. Searches Name, Description, and Status. Status must match exactly. Others can be a substring.
     * @param {module:model/String} opts.orderDirection  (default to 'asc')
     * @param {Number} opts.perPage 
     * @param {module:api/GroupsApi~getGroupGroupssCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2003}
     */

  }, {
    key: "getGroupGroupss",
    value: function getGroupGroupss(groupId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'groupId' is set

      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling getGroupGroupss");
      }

      var pathParams = {
        'group_id': groupId
      };
      var queryParams = {
        'filter': opts['filter'],
        'order_direction': opts['orderDirection'],
        'per_page': opts['perPage']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse["default"];
      return this.apiClient.callApi('/groups/{group_id}/groups', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getGroupUsers operation.
     * @callback module:api/GroupsApi~getGroupUsersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2004} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns all users of a group
     * Display the list of users in a group
     * @param {Number} groupId ID of group
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Filter results by string. Searches Name, Description, and Status. Status must match exactly. Others can be a substring.
     * @param {module:model/String} opts.orderDirection  (default to 'asc')
     * @param {Number} opts.perPage 
     * @param {module:api/GroupsApi~getGroupUsersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2004}
     */

  }, {
    key: "getGroupUsers",
    value: function getGroupUsers(groupId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'groupId' is set

      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling getGroupUsers");
      }

      var pathParams = {
        'group_id': groupId
      };
      var queryParams = {
        'filter': opts['filter'],
        'order_direction': opts['orderDirection'],
        'per_page': opts['perPage']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse2["default"];
      return this.apiClient.callApi('/groups/{group_id}/users', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getGroups operation.
     * @callback module:api/GroupsApi~getGroupsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2003} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns all groups that the user has access to
     * Display a listing of the resource.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.status ACTIVE or INACTIVE
     * @param {String} opts.filter Filter results by string. Searches Name, Description, and Status. Status must match exactly. Others can be a substring.
     * @param {String} opts.orderBy Field to order results by
     * @param {module:model/String} opts.orderDirection  (default to 'asc')
     * @param {Number} opts.perPage 
     * @param {String} opts.include Include data from related models in payload. Comma separated list. (default to '')
     * @param {module:api/GroupsApi~getGroupsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2003}
     */

  }, {
    key: "getGroups",
    value: function getGroups(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'status': opts['status'],
        'filter': opts['filter'],
        'order_by': opts['orderBy'],
        'order_direction': opts['orderDirection'],
        'per_page': opts['perPage'],
        'include': opts['include']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse["default"];
      return this.apiClient.callApi('/groups', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateGroup operation.
     * @callback module:api/GroupsApi~updateGroupCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a group
     * Update a user
     * @param {Number} groupId ID of group to return
     * @param {module:model/GroupsEditable} groupsEditable 
     * @param {module:api/GroupsApi~updateGroupCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "updateGroup",
    value: function updateGroup(groupId, groupsEditable, callback) {
      var postBody = groupsEditable; // verify the required parameter 'groupId' is set

      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling updateGroup");
      } // verify the required parameter 'groupsEditable' is set


      if (groupsEditable === undefined || groupsEditable === null) {
        throw new Error("Missing the required parameter 'groupsEditable' when calling updateGroup");
      }

      var pathParams = {
        'group_id': groupId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/groups/{group_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return GroupsApi;
}();

exports["default"] = GroupsApi;