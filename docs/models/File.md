# File

## Example File Object

```
{
  "path": "path/file.txt",
  "display_name": "file.txt",
  "type": "file",
  "size": 1024,
  "created_at": "2000-01-01T01:00:00Z",
  "mtime": "2000-01-01T01:00:00Z",
  "provided_mtime": "2000-01-01T01:00:00Z",
  "crc32": "70976923",
  "md5": "17c54824e9931a4688ca032d03f6663c",
  "mime_type": "application/octet-stream",
  "region": "us-east-1",
  "permissions": "rwd",
  "subfolders_locked?": true,
  "is_locked": true,
  "download_uri": "https://mysite.files.com/...",
  "priority_color": "red",
  "preview_id": 1,
  "preview": {
    "id": 1,
    "status": "complete",
    "download_uri": "https://mysite.files.com/...",
    "type": "image",
    "size": "large"
  }
}
```

* `path` (string): File/Folder path This must be slash-delimited, but it must neither start nor end with a slash. Maximum of 5000 characters.
* `display_name` (string): File/Folder display name
* `type` (string): Type: `directory` or `file`.
* `size` (int64): File/Folder size
* `created_at` (date-time): File created date/time
* `mtime` (date-time): File last modified date/time, according to the server.  This is the timestamp of the last Files.com operation of the file, regardless of what modified timestamp was sent.
* `provided_mtime` (date-time): File last modified date/time, according to the client who set it.  Files.com allows desktop, FTP, SFTP, and WebDAV clients to set modified at times.  This allows Desktop<->Cloud syncing to preserve modified at times.
* `crc32` (string): File CRC32 checksum. This is sometimes delayed, so if you get a blank response, wait and try again.
* `md5` (string): File MD5 checksum. This is sometimes delayed, so if you get a blank response, wait and try again.
* `mime_type` (string): MIME Type.  This is determined by the filename extension and is not stored separately internally.
* `region` (string): Region location
* `permissions` (string): A short string representing the current user's permissions.  Can be `r`,`w`,`d`, `l` or any combination
* `subfolders_locked?` (boolean): Are subfolders locked and unable to be modified?
* `is_locked` (boolean): Is this folder locked and unable to be modified?
* `download_uri` (string): Link to download file. Provided only in response to a download request.
* `priority_color` (string): Bookmark/priority color of file/folder
* `preview_id` (int64): File preview ID
* `preview` (Preview): File preview
* `action` (string): The action to perform.  Can be `append`, `attachment`, `end`, `upload`, `put`, or may not exist
* `length` (int64): Length of file.
* `mkdir_parents` (boolean): Create parent directories if they do not exist?
* `part` (int64): Part if uploading a part.
* `parts` (int64): How many parts to fetch?
* `ref` (string): 
* `restart` (int64): File byte offset to restart from.
* `structure` (string): If copying folder, copy just the structure?
* `with_rename` (boolean): Allow file rename instead of overwrite?

---

## Upload file

```
await File.create(path, {
  'length': 1,
  'mkdir_parents': true,
  'part': 1,
  'parts': 1,
  'provided_mtime': "2000-01-01T01:00:00Z",
  'restart': 1,
  'size': 1,
  'with_rename': true,
})
```


### Parameters

* `path` (string): Required - Path to operate on.
* `action` (string): The action to perform.  Can be `append`, `attachment`, `end`, `upload`, `put`, or may not exist
* `etags[etag]` (array(string)): etag identifier.
* `etags[part]` (array(int64)): Part number.
* `length` (int64): Length of file.
* `mkdir_parents` (boolean): Create parent directories if they do not exist?
* `part` (int64): Part if uploading a part.
* `parts` (int64): How many parts to fetch?
* `provided_mtime` (string): User provided modification time.
* `ref` (string): 
* `restart` (int64): File byte offset to restart from.
* `size` (int64): Size of file.
* `structure` (string): If copying folder, copy just the structure?
* `with_rename` (boolean): Allow file rename instead of overwrite?

---

## Find file/folder by path

```
await File.find(path, {
  'with_previews': true,
  'with_priority_color': true,
})
```


### Parameters

* `path` (string): Required - Path to operate on.
* `preview_size` (string): Request a preview size.  Can be `small` (default), `large`, `xlarge`, or `pdf`.
* `with_previews` (boolean): Include file preview information?
* `with_priority_color` (boolean): Include file priority color information?

---

## Download file

```
const file = new File()
file.path = myFilePath

await file.download({
  'with_previews': true,
  'with_priority_color': true,
})
```

### Parameters

* `path` (string): Required - Path to operate on.
* `action` (string): Can be blank, `redirect` or `stat`.  If set to `stat`, we will return file information but without a download URL, and without logging a download.  If set to `redirect` we will serve a 302 redirect directly to the file.  This is used for integrations with Zapier, and is not recommended for most integrations.
* `preview_size` (string): Request a preview size.  Can be `small` (default), `large`, `xlarge`, or `pdf`.
* `with_previews` (boolean): Include file preview information?
* `with_priority_color` (boolean): Include file priority color information?

### Example Response

```json
{
  "path": "path/file.txt",
  "display_name": "file.txt",
  "type": "file",
  "size": 1024,
  "created_at": "2000-01-01T01:00:00Z",
  "mtime": "2000-01-01T01:00:00Z",
  "provided_mtime": "2000-01-01T01:00:00Z",
  "crc32": "70976923",
  "md5": "17c54824e9931a4688ca032d03f6663c",
  "mime_type": "application/octet-stream",
  "region": "us-east-1",
  "permissions": "rwd",
  "subfolders_locked?": true,
  "is_locked": true,
  "download_uri": "https://mysite.files.com/...",
  "priority_color": "red",
  "preview_id": 1,
  "preview": {
    "id": 1,
    "status": "complete",
    "download_uri": "https://mysite.files.com/...",
    "type": "image",
    "size": "large"
  }
}
```

---

## Update file/folder metadata

```
const file = new File()
file.path = myFilePath

await file.update({
  'provided_mtime': "2000-01-01T01:00:00Z",
  'priority_color': "red",
})
```

### Parameters

* `path` (string): Required - Path to operate on.
* `provided_mtime` (string): Modified time of file.
* `priority_color` (string): Priority/Bookmark color of file.

### Example Response

```json
{
  "path": "path/file.txt",
  "display_name": "file.txt",
  "type": "file",
  "size": 1024,
  "created_at": "2000-01-01T01:00:00Z",
  "mtime": "2000-01-01T01:00:00Z",
  "provided_mtime": "2000-01-01T01:00:00Z",
  "crc32": "70976923",
  "md5": "17c54824e9931a4688ca032d03f6663c",
  "mime_type": "application/octet-stream",
  "region": "us-east-1",
  "permissions": "rwd",
  "subfolders_locked?": true,
  "is_locked": true,
  "download_uri": "https://mysite.files.com/...",
  "priority_color": "red",
  "preview_id": 1,
  "preview": {
    "id": 1,
    "status": "complete",
    "download_uri": "https://mysite.files.com/...",
    "type": "image",
    "size": "large"
  }
}
```

---

## Delete file/folder

```
const file = new File()
file.path = myFilePath

await file.delete({
  'recursive': true,
})
```

### Parameters

* `path` (string): Required - Path to operate on.
* `recursive` (boolean): If true, will recursively delete folers.  Otherwise, will error on non-empty folders.


---

## Copy file/folder

```
const file = new File()
file.path = myFilePath

await file.copy({
  'destination': "destination",
  'structure': true,
})
```

### Parameters

* `path` (string): Required - Path to operate on.
* `destination` (string): Required - Copy destination path.
* `structure` (boolean): Copy structure only?

### Example Response

```json
{
  "status": "pending",
  "file_migration_id": 1
}
```

---

## Move file/folder

```
const file = new File()
file.path = myFilePath

await file.move({
  'destination': "destination",
})
```

### Parameters

* `path` (string): Required - Path to operate on.
* `destination` (string): Required - Move destination path.

### Example Response

```json
{
  "status": "pending",
  "file_migration_id": 1
}
```

---

## Begin file upload

```
const file = new File()
file.path = myFilePath

await file.begin_upload({
  'mkdir_parents': true,
  'part': 1,
  'parts': 1,
  'ref': "upload-1",
  'restart': 1,
  'size': 1,
  'with_rename': true,
})
```

### Parameters

* `path` (string): Required - Path to operate on.
* `mkdir_parents` (boolean): Create parent directories if they do not exist?
* `part` (int64): Part if uploading a part.
* `parts` (int64): How many parts to fetch?
* `ref` (string): 
* `restart` (int64): File byte offset to restart from.
* `size` (int64): Total bytes of file being uploaded (include bytes being retained if appending/restarting).
* `with_rename` (boolean): Allow file rename instead of overwrite?

### Example Response

```json
[
  {
    "send": {
      "key": "example value"
    },
    "action": "multipart",
    "ask_about_overwrites": true,
    "available_parts": 1,
    "expires": "example",
    "headers": {
      "key": "example value"
    },
    "http_method": "PUT",
    "next_partsize": 1,
    "parallel_parts": true,
    "retry_parts": true,
    "parameters": {
      "key": "example value"
    },
    "part_number": 1,
    "partsize": 1,
    "path": "",
    "ref": "upload-1",
    "upload_uri": "example"
  }
]
```
