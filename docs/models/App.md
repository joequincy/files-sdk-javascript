# App

## Example App Object

```
{
  "name": "example",
  "extended_description": "example",
  "short_description": "example",
  "documentation_links": {
    "Important Info": "http://files.test/learn-more"
  },
  "icon_url": "example",
  "logo_url": "example",
  "screenshot_list_urls": [
    "example"
  ],
  "logo_thumbnail_url": "example",
  "sso_strategy_type": "example",
  "remote_server_type": "example",
  "folder_behavior_type": "example",
  "external_homepage_url": "example",
  "marketing_youtube_url": "example",
  "tutorial_youtube_url": "example",
  "app_type": "example",
  "featured": true
}
```

* `name` (string): Name of the App
* `extended_description` (string): Long form description of the App
* `short_description` (string): Short description of the App
* `documentation_links` (object): Collection of named links to documentation
* `icon_url` (string): App icon
* `logo_url` (string): Full size logo for the App
* `screenshot_list_urls` (array): Screenshots of the App
* `logo_thumbnail_url` (string): Logo thumbnail for the App
* `sso_strategy_type` (string): Associated SSO Strategy type, if any
* `remote_server_type` (string): Associated Remote Server type, if any
* `folder_behavior_type` (string): Associated Folder Behavior type, if any
* `external_homepage_url` (string): Link to external homepage
* `marketing_youtube_url` (string): Marketing video page
* `tutorial_youtube_url` (string): Tutorial video page
* `app_type` (string): The type of the App
* `featured` (boolean): Is featured on the App listing?

---

## List Apps

```
await App.list({
  'per_page': 1,
})
```


### Parameters

* `cursor` (string): Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.
* `per_page` (int64): Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).
* `sort_by` (object): If set, sort records by the specified field in either `asc` or `desc` direction (e.g. `sort_by[name]=desc`). Valid fields are `name` and `app_type`.
* `filter` (object): If set, return records where the specified field is equal to the supplied value. Valid fields are `name` and `app_type`. Valid field combinations are `[ name, app_type ]` and `[ app_type, name ]`.
* `filter_prefix` (object): If set, return records where the specified field is prefixed by the supplied value. Valid fields are `name`.
