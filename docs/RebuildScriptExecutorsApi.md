# ProcessMakerApi.RebuildScriptExecutorsApi

All URIs are relative to *http://localhost/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelScriptExecutor**](RebuildScriptExecutorsApi.md#cancelScriptExecutor) | **POST** /script-executors/cancel | Cancel a script executor
[**createScriptExecutor**](RebuildScriptExecutorsApi.md#createScriptExecutor) | **POST** /script-executors | Create a script executor
[**deleteScriptExecutor**](RebuildScriptExecutorsApi.md#deleteScriptExecutor) | **DELETE** /script-executors/{script_executor} | Delete a script executor
[**getAvailableLanguages**](RebuildScriptExecutorsApi.md#getAvailableLanguages) | **GET** /script-executors/available-languages | Returns all available languages
[**getScriptExecutors**](RebuildScriptExecutorsApi.md#getScriptExecutors) | **GET** /script-executors | Returns all script executors that the user has access to
[**updateScriptExecutor**](RebuildScriptExecutorsApi.md#updateScriptExecutor) | **PUT** /script-executors/{script_executor} | Update script executor



## cancelScriptExecutor

> InlineResponse20021 cancelScriptExecutor(inlineObject12)

Cancel a script executor

Cancel a script executor

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

let apiInstance = new ProcessMakerApi.RebuildScriptExecutorsApi();
let inlineObject12 = new ProcessMakerApi.InlineObject12(); // InlineObject12 | 
apiInstance.cancelScriptExecutor(inlineObject12, (error, data, response) => {
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
 **inlineObject12** | [**InlineObject12**](InlineObject12.md)|  | 

### Return type

[**InlineResponse20021**](InlineResponse20021.md)

### Authorization

[pm_api_auth_code](../README.md#pm_api_auth_code), [pm_api_bearer](../README.md#pm_api_bearer), [pm_api_key](../README.md#pm_api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createScriptExecutor

> InlineResponse20021 createScriptExecutor(scriptExecutorsEditable)

Create a script executor

Create a script executor

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

let apiInstance = new ProcessMakerApi.RebuildScriptExecutorsApi();
let scriptExecutorsEditable = new ProcessMakerApi.ScriptExecutorsEditable(); // ScriptExecutorsEditable | 
apiInstance.createScriptExecutor(scriptExecutorsEditable, (error, data, response) => {
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
 **scriptExecutorsEditable** | [**ScriptExecutorsEditable**](ScriptExecutorsEditable.md)|  | 

### Return type

[**InlineResponse20021**](InlineResponse20021.md)

### Authorization

[pm_api_auth_code](../README.md#pm_api_auth_code), [pm_api_bearer](../README.md#pm_api_bearer), [pm_api_key](../README.md#pm_api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteScriptExecutor

> InlineResponse20022 deleteScriptExecutor(scriptExecutor)

Delete a script executor

Delete a script executor

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

let apiInstance = new ProcessMakerApi.RebuildScriptExecutorsApi();
let scriptExecutor = "scriptExecutor_example"; // String | ID of script executor to return
apiInstance.deleteScriptExecutor(scriptExecutor, (error, data, response) => {
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
 **scriptExecutor** | **String**| ID of script executor to return | 

### Return type

[**InlineResponse20022**](InlineResponse20022.md)

### Authorization

[pm_api_auth_code](../README.md#pm_api_auth_code), [pm_api_bearer](../README.md#pm_api_bearer), [pm_api_key](../README.md#pm_api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAvailableLanguages

> InlineResponse20023 getAvailableLanguages(opts)

Returns all available languages

Get a list of available languages.

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

let apiInstance = new ProcessMakerApi.RebuildScriptExecutorsApi();
let opts = {
  'filter': "filter_example", // String | Filter results by string. Searches Name, Description, and Status. Status must match exactly. Others can be a substring.
  'orderBy': "orderBy_example", // String | Field to order results by
  'orderDirection': "'asc'", // String | 
  'perPage': 56 // Number | 
};
apiInstance.getAvailableLanguages(opts, (error, data, response) => {
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

### Return type

[**InlineResponse20023**](InlineResponse20023.md)

### Authorization

[pm_api_auth_code](../README.md#pm_api_auth_code), [pm_api_bearer](../README.md#pm_api_bearer), [pm_api_key](../README.md#pm_api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getScriptExecutors

> InlineResponse20020 getScriptExecutors(opts)

Returns all script executors that the user has access to

Get a list of script executors.

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

let apiInstance = new ProcessMakerApi.RebuildScriptExecutorsApi();
let opts = {
  'filter': "filter_example", // String | Filter results by string. Searches Name, Description, and Status. Status must match exactly. Others can be a substring.
  'orderBy': "orderBy_example", // String | Field to order results by
  'orderDirection': "'asc'", // String | 
  'perPage': 56 // Number | 
};
apiInstance.getScriptExecutors(opts, (error, data, response) => {
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

### Return type

[**InlineResponse20020**](InlineResponse20020.md)

### Authorization

[pm_api_auth_code](../README.md#pm_api_auth_code), [pm_api_bearer](../README.md#pm_api_bearer), [pm_api_key](../README.md#pm_api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateScriptExecutor

> InlineResponse20022 updateScriptExecutor(scriptExecutor, scriptExecutorsEditable)

Update script executor

Update and rebuild the script executor

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

let apiInstance = new ProcessMakerApi.RebuildScriptExecutorsApi();
let scriptExecutor = "scriptExecutor_example"; // String | ID of script executor to return
let scriptExecutorsEditable = new ProcessMakerApi.ScriptExecutorsEditable(); // ScriptExecutorsEditable | 
apiInstance.updateScriptExecutor(scriptExecutor, scriptExecutorsEditable, (error, data, response) => {
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
 **scriptExecutor** | **String**| ID of script executor to return | 
 **scriptExecutorsEditable** | [**ScriptExecutorsEditable**](ScriptExecutorsEditable.md)|  | 

### Return type

[**InlineResponse20022**](InlineResponse20022.md)

### Authorization

[pm_api_auth_code](../README.md#pm_api_auth_code), [pm_api_bearer](../README.md#pm_api_bearer), [pm_api_key](../README.md#pm_api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

