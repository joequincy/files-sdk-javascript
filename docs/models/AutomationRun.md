# AutomationRun

## Example AutomationRun Object

```
{
  "id": 1,
  "automation_id": 1,
  "completed_at": "2000-01-01T01:00:00Z",
  "created_at": "2000-01-01T01:00:00Z",
  "status": "success",
  "status_messages_url": "https://www.example.com/log_file.txt"
}
```

* `id` (int64): ID.
* `automation_id` (int64): ID of the associated Automation.
* `completed_at` (date-time): Automation run completion/failure date/time.
* `created_at` (date-time): Automation run start date/time.
* `status` (string): The success status of the AutomationRun. One of `running`, `success`, `partial_failure`, or `failure`.
* `status_messages_url` (string): Link to status messages log file.

---

## List Automation Runs

```
await AutomationRun.list({
  'user_id': 1,
  'per_page': 1,
  'automation_id': 1,
})
```


### Parameters

* `user_id` (int64): User ID.  Provide a value of `0` to operate the current session's user.
* `cursor` (string): Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.
* `per_page` (int64): Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).
* `sort_by` (object): If set, sort records by the specified field in either `asc` or `desc` direction (e.g. `sort_by[automation_id]=desc`). Valid fields are `automation_id`, `created_at` or `status`.
* `filter` (object): If set, return records where the specified field is equal to the supplied value. Valid fields are `status` and `automation_id`. Valid field combinations are `[ automation_id, status ]`.
* `automation_id` (int64): Required - ID of the associated Automation.

---

## Show Automation Run

```
await AutomationRun.find(id)
```


### Parameters

* `id` (int64): Required - Automation Run ID.
