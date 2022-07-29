"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse20026"));

var _InlineResponse2 = _interopRequireDefault(require("../model/InlineResponse404"));

var _InlineResponse3 = _interopRequireDefault(require("../model/InlineResponse422"));

var _SettingsEditable = _interopRequireDefault(require("../model/SettingsEditable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Settings service.
* @module api/SettingsApi
* @version 1.0.0
*/
var SettingsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new SettingsApi. 
  * @alias module:api/SettingsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function SettingsApi(apiClient) {
    _classCallCheck(this, SettingsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the getSettings operation.
   * @callback module:api/SettingsApi~getSettingsCallback
   * @param {String} error Error message, if any.
   * @param {module:model/InlineResponse20026} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Returns all settings
   * Display a listing of the resource.
   * @param {Object} opts Optional parameters
   * @param {String} opts.filter Filter results by string. Searches Name, Description, and Status. Status must match exactly. Others can be a substring.
   * @param {String} opts.orderBy Field to order results by
   * @param {module:model/String} opts.orderDirection  (default to 'asc')
   * @param {Number} opts.perPage 
   * @param {String} opts.include Include data from related models in payload. Comma separated list. (default to '')
   * @param {module:api/SettingsApi~getSettingsCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/InlineResponse20026}
   */


  _createClass(SettingsApi, [{
    key: "getSettings",
    value: function getSettings(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
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
      return this.apiClient.callApi('/settings', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateSetting operation.
     * @callback module:api/SettingsApi~updateSettingCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a setting
     * Update a setting
     * @param {Number} settingId ID of setting to return
     * @param {module:model/SettingsEditable} settingsEditable 
     * @param {module:api/SettingsApi~updateSettingCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "updateSetting",
    value: function updateSetting(settingId, settingsEditable, callback) {
      var postBody = settingsEditable; // verify the required parameter 'settingId' is set

      if (settingId === undefined || settingId === null) {
        throw new Error("Missing the required parameter 'settingId' when calling updateSetting");
      } // verify the required parameter 'settingsEditable' is set


      if (settingsEditable === undefined || settingsEditable === null) {
        throw new Error("Missing the required parameter 'settingsEditable' when calling updateSetting");
      }

      var pathParams = {
        'setting_id': settingId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/settings/{setting_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return SettingsApi;
}();

exports["default"] = SettingsApi;