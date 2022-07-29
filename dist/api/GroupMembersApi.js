"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CreateGroupMembers = _interopRequireDefault(require("../model/CreateGroupMembers"));

var _GetGroupMembersById = _interopRequireDefault(require("../model/GetGroupMembersById"));

var _GroupMembersEditable = _interopRequireDefault(require("../model/GroupMembersEditable"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse2004"));

var _InlineResponse2 = _interopRequireDefault(require("../model/InlineResponse2005"));

var _InlineResponse3 = _interopRequireDefault(require("../model/InlineResponse2006"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* GroupMembers service.
* @module api/GroupMembersApi
* @version 1.0.0
*/
var GroupMembersApi = /*#__PURE__*/function () {
  /**
  * Constructs a new GroupMembersApi. 
  * @alias module:api/GroupMembersApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function GroupMembersApi(apiClient) {
    _classCallCheck(this, GroupMembersApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the createGroupMember operation.
   * @callback module:api/GroupMembersApi~createGroupMemberCallback
   * @param {String} error Error message, if any.
   * @param {module:model/CreateGroupMembers} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Save a new group member
   * Store a newly created resource in storage.
   * @param {module:model/GroupMembersEditable} groupMembersEditable 
   * @param {module:api/GroupMembersApi~createGroupMemberCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/CreateGroupMembers}
   */


  _createClass(GroupMembersApi, [{
    key: "createGroupMember",
    value: function createGroupMember(groupMembersEditable, callback) {
      var postBody = groupMembersEditable; // verify the required parameter 'groupMembersEditable' is set

      if (groupMembersEditable === undefined || groupMembersEditable === null) {
        throw new Error("Missing the required parameter 'groupMembersEditable' when calling createGroupMember");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _CreateGroupMembers["default"];
      return this.apiClient.callApi('/group_members', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the deleteGroupMember operation.
     * @callback module:api/GroupMembersApi~deleteGroupMemberCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a group member
     * Delete a group membership
     * @param {String} groupMemberId ID of group_members to return
     * @param {module:api/GroupMembersApi~deleteGroupMemberCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "deleteGroupMember",
    value: function deleteGroupMember(groupMemberId, callback) {
      var postBody = null; // verify the required parameter 'groupMemberId' is set

      if (groupMemberId === undefined || groupMemberId === null) {
        throw new Error("Missing the required parameter 'groupMemberId' when calling deleteGroupMember");
      }

      var pathParams = {
        'group_member_id': groupMemberId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/group_members/{group_member_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getGroupMemberById operation.
     * @callback module:api/GroupMembersApi~getGroupMemberByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetGroupMembersById} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get single group member by ID
     * Display the specified resource.
     * @param {String} groupMemberId ID of group members to return
     * @param {module:api/GroupMembersApi~getGroupMemberByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetGroupMembersById}
     */

  }, {
    key: "getGroupMemberById",
    value: function getGroupMemberById(groupMemberId, callback) {
      var postBody = null; // verify the required parameter 'groupMemberId' is set

      if (groupMemberId === undefined || groupMemberId === null) {
        throw new Error("Missing the required parameter 'groupMemberId' when calling getGroupMemberById");
      }

      var pathParams = {
        'group_member_id': groupMemberId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GetGroupMembersById["default"];
      return this.apiClient.callApi('/group_members/{group_member_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getGroupMembers operation.
     * @callback module:api/GroupMembersApi~getGroupMembersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2005} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns all groups for a given member
     * Display a listing of the resource.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.memberId 
     * @param {String} opts.orderBy Field to order results by
     * @param {module:model/String} opts.orderDirection  (default to 'asc')
     * @param {Number} opts.perPage 
     * @param {module:api/GroupMembersApi~getGroupMembersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2005}
     */

  }, {
    key: "getGroupMembers",
    value: function getGroupMembers(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'member_id': opts['memberId'],
        'order_by': opts['orderBy'],
        'order_direction': opts['orderDirection'],
        'per_page': opts['perPage']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse2["default"];
      return this.apiClient.callApi('/group_members', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getGroupMembersAvailable operation.
     * @callback module:api/GroupMembersApi~getGroupMembersAvailableCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2006} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns all groups available for a given member
     * Display a listing of groups available
     * @param {String} memberId ID of group member to return
     * @param {String} memberType type of group member to return
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Filter results by string. Searches Name, Description, and Status. Status must match exactly. Others can be a substring.
     * @param {String} opts.orderBy Field to order results by
     * @param {module:model/String} opts.orderDirection  (default to 'asc')
     * @param {Number} opts.perPage 
     * @param {module:api/GroupMembersApi~getGroupMembersAvailableCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2006}
     */

  }, {
    key: "getGroupMembersAvailable",
    value: function getGroupMembersAvailable(memberId, memberType, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'memberId' is set

      if (memberId === undefined || memberId === null) {
        throw new Error("Missing the required parameter 'memberId' when calling getGroupMembersAvailable");
      } // verify the required parameter 'memberType' is set


      if (memberType === undefined || memberType === null) {
        throw new Error("Missing the required parameter 'memberType' when calling getGroupMembersAvailable");
      }

      var pathParams = {
        'member_id': memberId,
        'member_type': memberType
      };
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
      var returnType = _InlineResponse3["default"];
      return this.apiClient.callApi('/group_members_available', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getUserMembersAvailable operation.
     * @callback module:api/GroupMembersApi~getUserMembersAvailableCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2004} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns all users available for a given group
     * Display a listing of users available
     * @param {String} groupId ID of group to return
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Filter results by string. Searches Name. Can be a substring.
     * @param {String} opts.orderBy Field to order results by
     * @param {module:model/String} opts.orderDirection  (default to 'asc')
     * @param {Number} opts.perPage 
     * @param {module:api/GroupMembersApi~getUserMembersAvailableCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2004}
     */

  }, {
    key: "getUserMembersAvailable",
    value: function getUserMembersAvailable(groupId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'groupId' is set

      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling getUserMembersAvailable");
      }

      var pathParams = {
        'group_id': groupId
      };
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
      return this.apiClient.callApi('/user_members_available', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return GroupMembersApi;
}();

exports["default"] = GroupMembersApi;