# ProcessMakerApi.ScreenCategoriesApi

All URIs are relative to *http://localhost/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createScreenCategory**](ScreenCategoriesApi.md#createScreenCategory) | **POST** /screen_categories | Save a new Screen Category
[**deleteScreenCategory**](ScreenCategoriesApi.md#deleteScreenCategory) | **DELETE** /screen_categories/{screen_category_id} | Delete a screen category
[**getScreenCategories**](ScreenCategoriesApi.md#getScreenCategories) | **GET** /screen_categories | Returns all screens categories that the user has access to
[**getScreenCategoryById**](ScreenCategoriesApi.md#getScreenCategoryById) | **GET** /screen_categories/{screen_category_id} | Get single screen category by ID
[**updateScreenCategory**](ScreenCategoriesApi.md#updateScreenCategory) | **PUT** /screen_categories/{screen_category_id} | Update a screen Category



## createScreenCategory

> ScreenCategory createScreenCategory(screenCategoryEditable)

Save a new Screen Category

Store a newly created Screen Category in storage

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

let apiInstance = new ProcessMakerApi.ScreenCategoriesApi();
let screenCategoryEditable = new ProcessMakerApi.ScreenCategoryEditable(); // ScreenCategoryEditable | 
apiInstance.createScreenCategory(screenCategoryEditable, (error, data, response) => {
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
 **screenCategoryEditable** | [**ScreenCategoryEditable**](ScreenCategoryEditable.md)|  | 

### Return type

[**ScreenCategory**](ScreenCategory.md)

### Authorization

[pm_api_auth_code](../README.md#pm_api_auth_code), [pm_api_bearer](../README.md#pm_api_bearer), [pm_api_key](../README.md#pm_api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteScreenCategory

> deleteScreenCategory(screenCategoryId)

Delete a screen category

Remove the specified resource from storage.

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

let apiInstance = new ProcessMakerApi.ScreenCategoriesApi();
let screenCategoryId = "screenCategoryId_example"; // String | ID of screen category to return
apiInstance.deleteScreenCategory(screenCategoryId, (error, data, response) => {
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
 **screenCategoryId** | **String**| ID of screen category to return | 

### Return type

null (empty response body)

### Authorization

[pm_api_auth_code](../README.md#pm_api_auth_code), [pm_api_bearer](../README.md#pm_api_bearer), [pm_api_key](../README.md#pm_api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getScreenCategories

> InlineResponse20016 getScreenCategories(opts)

Returns all screens categories that the user has access to

Display a listing of the Screen Categories.

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

let apiInstance = new ProcessMakerApi.ScreenCategoriesApi();
let opts = {
  'filter': "filter_example", // String | Filter results by string. Searches Name, Description, and Status. All fields must match exactly.
  'orderBy': "orderBy_example", // String | Field to order results by
  'orderDirection': "'asc'", // String | 
  'perPage': 56 // Number | 
};
apiInstance.getScreenCategories(opts, (error, data, response) => {
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
 **filter** | **String**| Filter results by string. Searches Name, Description, and Status. All fields must match exactly. | [optional] 
 **orderBy** | **String**| Field to order results by | [optional] 
 **orderDirection** | **String**|  | [optional] [default to &#39;asc&#39;]
 **perPage** | **Number**|  | [optional] 

### Return type

[**InlineResponse20016**](InlineResponse20016.md)

### Authorization

[pm_api_auth_code](../README.md#pm_api_auth_code), [pm_api_bearer](../README.md#pm_api_bearer), [pm_api_key](../README.md#pm_api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getScreenCategoryById

> ScreenCategory getScreenCategoryById(screenCategoryId)

Get single screen category by ID

Display the specified screen category.

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

let apiInstance = new ProcessMakerApi.ScreenCategoriesApi();
let screenCategoryId = "screenCategoryId_example"; // String | ID of screen category to return
apiInstance.getScreenCategoryById(screenCategoryId, (error, data, response) => {
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
 **screenCategoryId** | **String**| ID of screen category to return | 

### Return type

[**ScreenCategory**](ScreenCategory.md)

### Authorization

[pm_api_auth_code](../README.md#pm_api_auth_code), [pm_api_bearer](../README.md#pm_api_bearer), [pm_api_key](../README.md#pm_api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateScreenCategory

> ScreenCategory updateScreenCategory(screenCategoryId, screenCategoryEditable)

Update a screen Category

Updates the current element

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

let apiInstance = new ProcessMakerApi.ScreenCategoriesApi();
let screenCategoryId = "screenCategoryId_example"; // String | ID of screen category to return
let screenCategoryEditable = new ProcessMakerApi.ScreenCategoryEditable(); // ScreenCategoryEditable | 
apiInstance.updateScreenCategory(screenCategoryId, screenCategoryEditable, (error, data, response) => {
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
 **screenCategoryId** | **String**| ID of screen category to return | 
 **screenCategoryEditable** | [**ScreenCategoryEditable**](ScreenCategoryEditable.md)|  | 

### Return type

[**ScreenCategory**](ScreenCategory.md)

### Authorization

[pm_api_auth_code](../README.md#pm_api_auth_code), [pm_api_bearer](../README.md#pm_api_bearer), [pm_api_key](../README.md#pm_api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

