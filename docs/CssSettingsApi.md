# ProcessMakerApi.CssSettingsApi

All URIs are relative to *http://localhost/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**updateCssSetting**](CssSettingsApi.md#updateCssSetting) | **POST** /customize-ui | Create or update a new setting



## updateCssSetting

> Settings updateCssSetting(inlineObject)

Create or update a new setting

Create a new Settings css-override

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

let apiInstance = new ProcessMakerApi.CssSettingsApi();
let inlineObject = new ProcessMakerApi.InlineObject(); // InlineObject | 
apiInstance.updateCssSetting(inlineObject, (error, data, response) => {
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
 **inlineObject** | [**InlineObject**](InlineObject.md)|  | 

### Return type

[**Settings**](Settings.md)

### Authorization

[pm_api_auth_code](../README.md#pm_api_auth_code), [pm_api_bearer](../README.md#pm_api_bearer), [pm_api_key](../README.md#pm_api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

