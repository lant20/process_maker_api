# ProcessMakerApi.PermissionsApi

All URIs are relative to *http://localhost/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**call51b3555fb753f44324bf5c3880e01454**](PermissionsApi.md#call51b3555fb753f44324bf5c3880e01454) | **PUT** /permissions | Update the permissions of a user



## call51b3555fb753f44324bf5c3880e01454

> call51b3555fb753f44324bf5c3880e01454(inlineObject5)

Update the permissions of a user

Update permissions

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

let apiInstance = new ProcessMakerApi.PermissionsApi();
let inlineObject5 = new ProcessMakerApi.InlineObject5(); // InlineObject5 | 
apiInstance.call51b3555fb753f44324bf5c3880e01454(inlineObject5, (error, data, response) => {
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
 **inlineObject5** | [**InlineObject5**](InlineObject5.md)|  | 

### Return type

null (empty response body)

### Authorization

[pm_api_auth_code](../README.md#pm_api_auth_code), [pm_api_bearer](../README.md#pm_api_bearer), [pm_api_key](../README.md#pm_api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

