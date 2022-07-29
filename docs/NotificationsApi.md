# ProcessMakerApi.NotificationsApi

All URIs are relative to *http://localhost/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createNotification**](NotificationsApi.md#createNotification) | **POST** /notifications | Save a new notifications
[**deleteNotification**](NotificationsApi.md#deleteNotification) | **DELETE** /notifications/{notification_id} | Delete a notification
[**getNotificationById**](NotificationsApi.md#getNotificationById) | **GET** /notifications/{notification_id} | Get single notification by ID
[**getNotifications**](NotificationsApi.md#getNotifications) | **GET** /notifications | Returns all notifications that the user has access to
[**markAllAsRead**](NotificationsApi.md#markAllAsRead) | **PUT** /read_all_notifications | Mark notifications as read by id and type
[**markNotificationAsRead**](NotificationsApi.md#markNotificationAsRead) | **PUT** /read_notifications | Mark notifications as read by the user
[**markNotificationAsUnread**](NotificationsApi.md#markNotificationAsUnread) | **PUT** /unread_notifications | Mark notifications as unread by the user
[**updateNotification**](NotificationsApi.md#updateNotification) | **PUT** /notifications/{notification_id} | Update a notification



## createNotification

> Notification createNotification(notificationEditable)

Save a new notifications

Store a newly created resource in storage.

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

let apiInstance = new ProcessMakerApi.NotificationsApi();
let notificationEditable = new ProcessMakerApi.NotificationEditable(); // NotificationEditable | 
apiInstance.createNotification(notificationEditable, (error, data, response) => {
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
 **notificationEditable** | [**NotificationEditable**](NotificationEditable.md)|  | 

### Return type

[**Notification**](Notification.md)

### Authorization

[pm_api_auth_code](../README.md#pm_api_auth_code), [pm_api_bearer](../README.md#pm_api_bearer), [pm_api_key](../README.md#pm_api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteNotification

> deleteNotification(notificationId)

Delete a notification

Delete a notification

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

let apiInstance = new ProcessMakerApi.NotificationsApi();
let notificationId = "notificationId_example"; // String | ID of notification to return
apiInstance.deleteNotification(notificationId, (error, data, response) => {
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
 **notificationId** | **String**| ID of notification to return | 

### Return type

null (empty response body)

### Authorization

[pm_api_auth_code](../README.md#pm_api_auth_code), [pm_api_bearer](../README.md#pm_api_bearer), [pm_api_key](../README.md#pm_api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getNotificationById

> Notification getNotificationById(notificationId)

Get single notification by ID

Display the specified resource.

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

let apiInstance = new ProcessMakerApi.NotificationsApi();
let notificationId = "notificationId_example"; // String | ID of notification to return
apiInstance.getNotificationById(notificationId, (error, data, response) => {
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
 **notificationId** | **String**| ID of notification to return | 

### Return type

[**Notification**](Notification.md)

### Authorization

[pm_api_auth_code](../README.md#pm_api_auth_code), [pm_api_bearer](../README.md#pm_api_bearer), [pm_api_key](../README.md#pm_api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getNotifications

> InlineResponse2007 getNotifications(opts)

Returns all notifications that the user has access to

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

let apiInstance = new ProcessMakerApi.NotificationsApi();
let opts = {
  'status': "status_example", // String | Only return notifications by status (unread, all, etc.)
  'filter': "filter_example", // String | Filter results by string. Searches Name, Description, and Status. Status must match exactly. Others can be a substring.
  'orderBy': "orderBy_example", // String | Field to order results by
  'orderDirection': "'asc'", // String | 
  'perPage': 56, // Number | 
  'include': "''" // String | Include data from related models in payload. Comma separated list.
};
apiInstance.getNotifications(opts, (error, data, response) => {
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
 **status** | **String**| Only return notifications by status (unread, all, etc.) | [optional] 
 **filter** | **String**| Filter results by string. Searches Name, Description, and Status. Status must match exactly. Others can be a substring. | [optional] 
 **orderBy** | **String**| Field to order results by | [optional] 
 **orderDirection** | **String**|  | [optional] [default to &#39;asc&#39;]
 **perPage** | **Number**|  | [optional] 
 **include** | **String**| Include data from related models in payload. Comma separated list. | [optional] [default to &#39;&#39;]

### Return type

[**InlineResponse2007**](InlineResponse2007.md)

### Authorization

[pm_api_auth_code](../README.md#pm_api_auth_code), [pm_api_bearer](../README.md#pm_api_bearer), [pm_api_key](../README.md#pm_api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## markAllAsRead

> markAllAsRead(inlineObject4)

Mark notifications as read by id and type

Update all notification as read.

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

let apiInstance = new ProcessMakerApi.NotificationsApi();
let inlineObject4 = new ProcessMakerApi.InlineObject4(); // InlineObject4 | 
apiInstance.markAllAsRead(inlineObject4, (error, data, response) => {
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
 **inlineObject4** | [**InlineObject4**](InlineObject4.md)|  | 

### Return type

null (empty response body)

### Authorization

[pm_api_auth_code](../README.md#pm_api_auth_code), [pm_api_bearer](../README.md#pm_api_bearer), [pm_api_key](../README.md#pm_api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## markNotificationAsRead

> markNotificationAsRead(inlineObject2)

Mark notifications as read by the user

Update notification as read

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

let apiInstance = new ProcessMakerApi.NotificationsApi();
let inlineObject2 = new ProcessMakerApi.InlineObject2(); // InlineObject2 | 
apiInstance.markNotificationAsRead(inlineObject2, (error, data, response) => {
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
 **inlineObject2** | [**InlineObject2**](InlineObject2.md)|  | 

### Return type

null (empty response body)

### Authorization

[pm_api_auth_code](../README.md#pm_api_auth_code), [pm_api_bearer](../README.md#pm_api_bearer), [pm_api_key](../README.md#pm_api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## markNotificationAsUnread

> markNotificationAsUnread(inlineObject3)

Mark notifications as unread by the user

Update notifications as unread

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

let apiInstance = new ProcessMakerApi.NotificationsApi();
let inlineObject3 = new ProcessMakerApi.InlineObject3(); // InlineObject3 | 
apiInstance.markNotificationAsUnread(inlineObject3, (error, data, response) => {
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
 **inlineObject3** | [**InlineObject3**](InlineObject3.md)|  | 

### Return type

null (empty response body)

### Authorization

[pm_api_auth_code](../README.md#pm_api_auth_code), [pm_api_bearer](../README.md#pm_api_bearer), [pm_api_key](../README.md#pm_api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## updateNotification

> updateNotification(notificationId, notificationEditable)

Update a notification

Update a user

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

let apiInstance = new ProcessMakerApi.NotificationsApi();
let notificationId = "notificationId_example"; // String | ID of notification to return
let notificationEditable = new ProcessMakerApi.NotificationEditable(); // NotificationEditable | 
apiInstance.updateNotification(notificationId, notificationEditable, (error, data, response) => {
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
 **notificationId** | **String**| ID of notification to return | 
 **notificationEditable** | [**NotificationEditable**](NotificationEditable.md)|  | 

### Return type

null (empty response body)

### Authorization

[pm_api_auth_code](../README.md#pm_api_auth_code), [pm_api_bearer](../README.md#pm_api_bearer), [pm_api_key](../README.md#pm_api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

