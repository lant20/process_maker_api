# ProcessMakerApi.SettingsApi

All URIs are relative to *http://localhost/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSettings**](SettingsApi.md#getSettings) | **GET** /settings | Returns all settings
[**updateSetting**](SettingsApi.md#updateSetting) | **PUT** /settings/{setting_id} | Update a setting



## getSettings

> InlineResponse20026 getSettings(opts)

Returns all settings

Display a listing of the resource.

### Example

```javascript
import ProcessMakerApi from 'process_maker_api';
let defaultClient = ProcessMakerApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: pm_api_auth_code
let pm_api_auth_code = defaultClient.authentications['pm_api_auth_code'];
pm_api_auth_code.accessToken = 'YOUR ACCESS TOKEN';
// Configure Bearer (JWT) access token for authorization: pm_api_bearer
let pm_api_bearer = defaultClient.authentications['pm_api_bearer'];
pm_api_bearer.accessToken = "YOUR ACCESS TOKEN"
// Configure API key authorization: pm_api_key
let pm_api_key = defaultClient.authentications['pm_api_key'];
pm_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//pm_api_key.apiKeyPrefix = 'Token';

let apiInstance = new ProcessMakerApi.SettingsApi();
let opts = {
  'filter': "filter_example", // String | Filter results by string. Searches Name, Description, and Status. Status must match exactly. Others can be a substring.
  'orderBy': "orderBy_example", // String | Field to order results by
  'orderDirection': "'asc'", // String | 
  'perPage': 56, // Number | 
  'include': "''" // String | Include data from related models in payload. Comma separated list.
};
apiInstance.getSettings(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| Filter results by string. Searches Name, Description, and Status. Status must match exactly. Others can be a substring. | [optional] 
 **orderBy** | **String**| Field to order results by | [optional] 
 **orderDirection** | **String**|  | [optional] [default to &#39;asc&#39;]
 **perPage** | **Number**|  | [optional] 
 **include** | **String**| Include data from related models in payload. Comma separated list. | [optional] [default to &#39;&#39;]

### Return type

[**InlineResponse20026**](InlineResponse20026.md)

### Authorization

[pm_api_auth_code](../README.md#pm_api_auth_code), [pm_api_bearer](../README.md#pm_api_bearer), [pm_api_key](../README.md#pm_api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateSetting

> updateSetting(settingId, settingsEditable)

Update a setting

Update a setting

### Example

```javascript
import ProcessMakerApi from 'process_maker_api';
let defaultClient = ProcessMakerApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: pm_api_auth_code
let pm_api_auth_code = defaultClient.authentications['pm_api_auth_code'];
pm_api_auth_code.accessToken = 'YOUR ACCESS TOKEN';
// Configure Bearer (JWT) access token for authorization: pm_api_bearer
let pm_api_bearer = defaultClient.authentications['pm_api_bearer'];
pm_api_bearer.accessToken = "YOUR ACCESS TOKEN"
// Configure API key authorization: pm_api_key
let pm_api_key = defaultClient.authentications['pm_api_key'];
pm_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//pm_api_key.apiKeyPrefix = 'Token';

let apiInstance = new ProcessMakerApi.SettingsApi();
let settingId = 56; // Number | ID of setting to return
let settingsEditable = new ProcessMakerApi.SettingsEditable(); // SettingsEditable | 
apiInstance.updateSetting(settingId, settingsEditable, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settingId** | **Number**| ID of setting to return | 
 **settingsEditable** | [**SettingsEditable**](SettingsEditable.md)|  | 

### Return type

null (empty response body)

### Authorization

[pm_api_auth_code](../README.md#pm_api_auth_code), [pm_api_bearer](../README.md#pm_api_bearer), [pm_api_key](../README.md#pm_api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

