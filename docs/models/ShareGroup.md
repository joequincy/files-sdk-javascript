# ShareGroup

## Example ShareGroup Object

```
{
  "id": 1,
  "name": "Test group 1",
  "notes": "This group is defined for testing purposes",
  "user_id": 1,
  "share_group_members": [
    {
      "name": "John Doe",
      "company": "Acme Ltd",
      "email": "johndoe@gmail.com"
    }
  ]
}
```

* `id` (int64): Share Group ID
* `name` (string): Name of the share group
* `notes` (string): Additional notes of the share group
* `user_id` (int64): Owner User ID
* `share_group_members` (array): A list of share group members
* `members` (array(object)): A list of share group members.

---

## List Share Groups

```
await ShareGroup.list({
  'user_id': 1,
  'per_page': 1,
})
```


### Parameters

* `user_id` (int64): User ID.  Provide a value of `0` to operate the current session's user.
* `cursor` (string): Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.
* `per_page` (int64): Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).

---

## Show Share Group

```
await ShareGroup.find(id)
```


### Parameters

* `id` (int64): Required - Share Group ID.

---

## Create Share Group

```
await ShareGroup.create({
  'user_id': 1,
  'notes': "This group is defined for testing purposes",
  'name': "Test group 1",
  'members': [{"name":"John Doe","company":"Acme Ltd","email":"johndoe@gmail.com"}],
})
```


### Parameters

* `user_id` (int64): User ID.  Provide a value of `0` to operate the current session's user.
* `notes` (string): Additional notes of the share group
* `name` (string): Required - Name of the share group
* `members` (array(object)): Required - A list of share group members.

---

## Update Share Group

```
const [share_group] = await ShareGroup.list()

await share_group.update({
  'notes': "This group is defined for testing purposes",
  'name': "Test group 1",
  'members': [{"name":"John Doe","company":"Acme Ltd","email":"johndoe@gmail.com"}],
})
```

### Parameters

* `id` (int64): Required - Share Group ID.
* `notes` (string): Additional notes of the share group
* `name` (string): Name of the share group
* `members` (array(object)): A list of share group members.

### Example Response

```json
{
  "id": 1,
  "name": "Test group 1",
  "notes": "This group is defined for testing purposes",
  "user_id": 1,
  "share_group_members": [
    {
      "name": "John Doe",
      "company": "Acme Ltd",
      "email": "johndoe@gmail.com"
    }
  ]
}
```

---

## Delete Share Group

```
const [share_group] = await ShareGroup.list()

await share_group.delete()
```

### Parameters

* `id` (int64): Required - Share Group ID.

