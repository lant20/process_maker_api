"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineObject = _interopRequireDefault(require("../model/InlineObject"));

var _Settings = _interopRequireDefault(require("../model/Settings"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* CssSettings service.
* @module api/CssSettingsApi
* @version 1.0.0
*/
var CssSettingsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new CssSettingsApi. 
  * @alias module:api/CssSettingsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function CssSettingsApi(apiClient) {
    _classCallCheck(this, CssSettingsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the updateCssSetting operation.
   * @callback module:api/CssSettingsApi~updateCssSettingCallback
   * @param {String} error Error message, if any.
   * @param {module:model/Settings} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Create or update a new setting
   * Create a new Settings css-override
   * @param {module:model/InlineObject} inlineObject 
   * @param {module:api/CssSettingsApi~updateCssSettingCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/Settings}
   */


  _createClass(CssSettingsApi, [{
    key: "updateCssSetting",
    value: function updateCssSetting(inlineObject, callback) {
      var postBody = inlineObject; // verify the required parameter 'inlineObject' is set

      if (inlineObject === undefined || inlineObject === null) {
        throw new Error("Missing the required parameter 'inlineObject' when calling updateCssSetting");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['pm_api_auth_code', 'pm_api_bearer', 'pm_api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Settings["default"];
      return this.apiClient.callApi('/customize-ui', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return CssSettingsApi;
}();

exports["default"] = CssSettingsApi;