"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineObject = _interopRequireDefault(require("../model/InlineObject2"));

var _InlineObject2 = _interopRequireDefault(require("../model/InlineObject3"));

var _InlineObject3 = _interopRequireDefault(require("../model/InlineObject4"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse2007"));

var _Notification = _interopRequireDefault(require("../model/Notification"));

var _NotificationEditable = _interopRequireDefault(require("../model/NotificationEditable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Notifications service.
* @module api/NotificationsApi
* @version 1.0.0
*/
var NotificationsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new NotificationsApi. 
  * @alias module:api/NotificationsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function NotificationsApi(apiClient) {
    _classCallCheck(this, NotificationsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the createNotification operation.
   * @callback module:api/NotificationsApi~createNotificationCallback
   * @param {String} error Error message, if any.
   * @param {module:model/Notification} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Save a new notifications
   * Store a newly created resource in storage.
   * @param {module:model/NotificationEditable} notificationEditable 
   * @param {module:api/NotificationsApi~createNotificationCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/Notification}
   */


  _createClass(NotificationsApi, [{
    key: "createNotification",
    value: function createNotification(notificationEditable, callback) {
      var postBody = notificationEditable; // verify the required parameter 'notificationEditable' is set

      if (notificationEditable === undefined || notificationEditable === null) {
        throw new Error("Missing the required parameter 'notificationEditable' when calling createNotification");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Notification["default"];
      return this.apiClient.callApi('/notifications', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the deleteNotification operation.
     * @callback module:api/NotificationsApi~deleteNotificationCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a notification
     * Delete a notification
     * @param {String} notificationId ID of notification to return
     * @param {module:api/NotificationsApi~deleteNotificationCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "deleteNotification",
    value: function deleteNotification(notificationId, callback) {
      var postBody = null; // verify the required parameter 'notificationId' is set

      if (notificationId === undefined || notificationId === null) {
        throw new Error("Missing the required parameter 'notificationId' when calling deleteNotification");
      }

      var pathParams = {
        'notification_id': notificationId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/notifications/{notification_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getNotificationById operation.
     * @callback module:api/NotificationsApi~getNotificationByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Notification} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get single notification by ID
     * Display the specified resource.
     * @param {String} notificationId ID of notification to return
     * @param {module:api/NotificationsApi~getNotificationByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Notification}
     */

  }, {
    key: "getNotificationById",
    value: function getNotificationById(notificationId, callback) {
      var postBody = null; // verify the required parameter 'notificationId' is set

      if (notificationId === undefined || notificationId === null) {
        throw new Error("Missing the required parameter 'notificationId' when calling getNotificationById");
      }

      var pathParams = {
        'notification_id': notificationId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Notification["default"];
      return this.apiClient.callApi('/notifications/{notification_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getNotifications operation.
     * @callback module:api/NotificationsApi~getNotificationsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2007} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns all notifications that the user has access to
     * Display a listing of the resource.
     * @param {Object} opts Optional parameters
     * @param {String} opts.status Only return notifications by status (unread, all, etc.)
     * @param {String} opts.filter Filter results by string. Searches Name, Description, and Status. Status must match exactly. Others can be a substring.
     * @param {String} opts.orderBy Field to order results by
     * @param {module:model/String} opts.orderDirection  (default to 'asc')
     * @param {Number} opts.perPage 
     * @param {String} opts.include Include data from related models in payload. Comma separated list. (default to '')
     * @param {module:api/NotificationsApi~getNotificationsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2007}
     */

  }, {
    key: "getNotifications",
    value: function getNotifications(opts, callback) {
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
      return this.apiClient.callApi('/notifications', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the markAllAsRead operation.
     * @callback module:api/NotificationsApi~markAllAsReadCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Mark notifications as read by id and type
     * Update all notification as read.
     * @param {module:model/InlineObject4} inlineObject4 
     * @param {module:api/NotificationsApi~markAllAsReadCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "markAllAsRead",
    value: function markAllAsRead(inlineObject4, callback) {
      var postBody = inlineObject4; // verify the required parameter 'inlineObject4' is set

      if (inlineObject4 === undefined || inlineObject4 === null) {
        throw new Error("Missing the required parameter 'inlineObject4' when calling markAllAsRead");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/read_all_notifications', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the markNotificationAsRead operation.
     * @callback module:api/NotificationsApi~markNotificationAsReadCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Mark notifications as read by the user
     * Update notification as read
     * @param {module:model/InlineObject2} inlineObject2 
     * @param {module:api/NotificationsApi~markNotificationAsReadCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "markNotificationAsRead",
    value: function markNotificationAsRead(inlineObject2, callback) {
      var postBody = inlineObject2; // verify the required parameter 'inlineObject2' is set

      if (inlineObject2 === undefined || inlineObject2 === null) {
        throw new Error("Missing the required parameter 'inlineObject2' when calling markNotificationAsRead");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/read_notifications', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the markNotificationAsUnread operation.
     * @callback module:api/NotificationsApi~markNotificationAsUnreadCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Mark notifications as unread by the user
     * Update notifications as unread
     * @param {module:model/InlineObject3} inlineObject3 
     * @param {module:api/NotificationsApi~markNotificationAsUnreadCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "markNotificationAsUnread",
    value: function markNotificationAsUnread(inlineObject3, callback) {
      var postBody = inlineObject3; // verify the required parameter 'inlineObject3' is set

      if (inlineObject3 === undefined || inlineObject3 === null) {
        throw new Error("Missing the required parameter 'inlineObject3' when calling markNotificationAsUnread");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/unread_notifications', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateNotification operation.
     * @callback module:api/NotificationsApi~updateNotificationCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a notification
     * Update a user
     * @param {String} notificationId ID of notification to return
     * @param {module:model/NotificationEditable} notificationEditable 
     * @param {module:api/NotificationsApi~updateNotificationCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "updateNotification",
    value: function updateNotification(notificationId, notificationEditable, callback) {
      var postBody = notificationEditable; // verify the required parameter 'notificationId' is set

      if (notificationId === undefined || notificationId === null) {
        throw new Error("Missing the required parameter 'notificationId' when calling updateNotification");
      } // verify the required parameter 'notificationEditable' is set


      if (notificationEditable === undefined || notificationEditable === null) {
        throw new Error("Missing the required parameter 'notificationEditable' when calling updateNotification");
      }

      var pathParams = {
        'notification_id': notificationId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/notifications/{notification_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return NotificationsApi;
}();

exports["default"] = NotificationsApi;