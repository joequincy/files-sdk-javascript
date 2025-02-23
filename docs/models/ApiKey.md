# ApiKey

## Example ApiKey Object

```
{
  "id": 1,
  "descriptive_label": "Site-wide API key for https://site.files.com/ (key ID #1)",
  "description": "example",
  "created_at": "2000-01-01T01:00:00Z",
  "expires_at": "2000-01-01T01:00:00Z",
  "key": "[key]",
  "last_use_at": "2000-01-01T01:00:00Z",
  "name": "My Main API Key",
  "path": "shared/docs",
  "permission_set": "full",
  "platform": "win32",
  "url": "example",
  "user_id": 1
}
```

* `id` (int64): API Key ID
* `descriptive_label` (string): Unique label that describes this API key.  Useful for external systems where you may have API keys from multiple accounts and want a human-readable label for each key.
* `description` (string): User-supplied description of API key.
* `created_at` (date-time): Time which API Key was created
* `expires_at` (date-time): API Key expiration date
* `key` (string): API Key actual key string
* `last_use_at` (date-time): API Key last used - note this value is only updated once per 3 hour period, so the 'actual' time of last use may be up to 3 hours later than this timestamp.
* `name` (string): Internal name for the API Key.  For your use.
* `path` (string): Folder path restriction for this api key. This must be slash-delimited, but it must neither start nor end with a slash. Maximum of 5000 characters.
* `permission_set` (string): Permissions for this API Key.  Keys with the `desktop_app` permission set only have the ability to do the functions provided in our Desktop App (File and Share Link operations).  Additional permission sets may become available in the future, such as for a Site Admin to give a key with no administrator privileges.  If you have ideas for permission sets, please let us know.
* `platform` (string): If this API key represents a Desktop app, what platform was it created on?
* `url` (string): URL for API host.
* `user_id` (int64): User ID for the owner of this API Key.  May be blank for Site-wide API Keys.

---

## List Api Keys

```
await ApiKey.list({
  'user_id': 1,
  'per_page': 1,
})
```


### Parameters

* `user_id` (int64): User ID.  Provide a value of `0` to operate the current session's user.
* `cursor` (string): Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.
* `per_page` (int64): Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).
* `sort_by` (object): If set, sort records by the specified field in either `asc` or `desc` direction (e.g. `sort_by[expires_at]=desc`). Valid fields are `expires_at`.
* `filter` (object): If set, return records where the specified field is equal to the supplied value. Valid fields are `expires_at`.
* `filter_gt` (object): If set, return records where the specified field is greater than the supplied value. Valid fields are `expires_at`.
* `filter_gteq` (object): If set, return records where the specified field is greater than or equal the supplied value. Valid fields are `expires_at`.
* `filter_lt` (object): If set, return records where the specified field is less than the supplied value. Valid fields are `expires_at`.
* `filter_lteq` (object): If set, return records where the specified field is less than or equal the supplied value. Valid fields are `expires_at`.

---

## Show information about current API key.  (Requires current API connection to be using an API key.)

```
await ApiKey.findCurrent
```


---

## Show Api Key

```
await ApiKey.find(id)
```


### Parameters

* `id` (int64): Required - Api Key ID.

---

## Create Api Key

```
await ApiKey.create({
  'user_id': 1,
  'name': "My Main API Key",
  'description': "example",
  'expires_at': "2000-01-01T01:00:00Z",
  'permission_set': "full",
  'path': "shared/docs",
})
```


### Parameters

* `user_id` (int64): User ID.  Provide a value of `0` to operate the current session's user.
* `name` (string): Internal name for the API Key.  For your use.
* `description` (string): User-supplied description of API key.
* `expires_at` (string): API Key expiration date
* `permission_set` (string): Permissions for this API Key.  Keys with the `desktop_app` permission set only have the ability to do the functions provided in our Desktop App (File and Share Link operations).  Additional permission sets may become available in the future, such as for a Site Admin to give a key with no administrator privileges.  If you have ideas for permission sets, please let us know.
* `path` (string): Folder path restriction for this api key.

---

## Update current API key.  (Requires current API connection to be using an API key.)

```
await ApiKey.updateCurrent({
  'expires_at': "2000-01-01T01:00:00Z",
  'name': "My Main API Key",
  'permission_set': "full",
})
```


### Parameters

* `expires_at` (string): API Key expiration date
* `name` (string): Internal name for the API Key.  For your use.
* `permission_set` (string): Permissions for this API Key.  Keys with the `desktop_app` permission set only have the ability to do the functions provided in our Desktop App (File and Share Link operations).  Additional permission sets may become available in the future, such as for a Site Admin to give a key with no administrator privileges.  If you have ideas for permission sets, please let us know.

---

## Delete current API key.  (Requires current API connection to be using an API key.)

```
await ApiKey.deleteCurrent
```


---

## Update Api Key

```
const [api_key] = await ApiKey.list()

await api_key.update({
  'name': "My Main API Key",
  'description': "example",
  'expires_at': "2000-01-01T01:00:00Z",
  'permission_set': "full",
})
```

### Parameters

* `id` (int64): Required - Api Key ID.
* `name` (string): Internal name for the API Key.  For your use.
* `description` (string): User-supplied description of API key.
* `expires_at` (string): API Key expiration date
* `permission_set` (string): Permissions for this API Key.  Keys with the `desktop_app` permission set only have the ability to do the functions provided in our Desktop App (File and Share Link operations).  Additional permission sets may become available in the future, such as for a Site Admin to give a key with no administrator privileges.  If you have ideas for permission sets, please let us know.

### Example Response

```json
{
  "id": 1,
  "descriptive_label": "Site-wide API key for https://site.files.com/ (key ID #1)",
  "description": "example",
  "created_at": "2000-01-01T01:00:00Z",
  "expires_at": "2000-01-01T01:00:00Z",
  "key": "[key]",
  "last_use_at": "2000-01-01T01:00:00Z",
  "name": "My Main API Key",
  "path": "shared/docs",
  "permission_set": "full",
  "platform": "win32",
  "url": "example",
  "user_id": 1
}
```

---

## Delete Api Key

```
const [api_key] = await ApiKey.list()

await api_key.delete()
```

### Parameters

* `id` (int64): Required - Api Key ID.

