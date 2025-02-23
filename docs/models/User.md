# User

## Example User Object

```
{
  "id": 1,
  "username": "user",
  "admin_group_ids": [
    1
  ],
  "allowed_ips": "127.0.0.1",
  "attachments_permission": true,
  "api_keys_count": 1,
  "authenticate_until": "2000-01-01T01:00:00Z",
  "authentication_method": "password",
  "avatar_url": "example",
  "billing_permission": true,
  "bypass_site_allowed_ips": true,
  "bypass_inactive_disable": true,
  "created_at": "2000-01-01T01:00:00Z",
  "dav_permission": true,
  "disabled": true,
  "email": "example",
  "first_login_at": "2000-01-01T01:00:00Z",
  "ftp_permission": true,
  "group_ids": "example",
  "header_text": "User-specific message.",
  "language": "en",
  "last_login_at": "2000-01-01T01:00:00Z",
  "last_web_login_at": "2000-01-01T01:00:00Z",
  "last_ftp_login_at": "2000-01-01T01:00:00Z",
  "last_sftp_login_at": "2000-01-01T01:00:00Z",
  "last_dav_login_at": "2000-01-01T01:00:00Z",
  "last_desktop_login_at": "2000-01-01T01:00:00Z",
  "last_restapi_login_at": "2000-01-01T01:00:00Z",
  "last_api_use_at": "2000-01-01T01:00:00Z",
  "last_active_at": "2000-01-01T01:00:00Z",
  "last_protocol_cipher": "example",
  "lockout_expires": "2000-01-01T01:00:00Z",
  "name": "John Doe",
  "company": "ACME Corp.",
  "notes": "Internal notes on this user.",
  "notification_daily_send_time": 18,
  "office_integration_enabled": true,
  "password_set_at": "2000-01-01T01:00:00Z",
  "password_validity_days": 1,
  "public_keys_count": 1,
  "receive_admin_alerts": true,
  "require_2fa": "always_require",
  "require_login_by": "2000-01-01T01:00:00Z",
  "active_2fa": true,
  "require_password_change": true,
  "password_expired": true,
  "restapi_permission": true,
  "self_managed": true,
  "sftp_permission": true,
  "site_admin": true,
  "skip_welcome_screen": true,
  "ssl_required": "always_require",
  "sso_strategy_id": 1,
  "subscribe_to_newsletter": true,
  "externally_managed": true,
  "time_zone": "Pacific Time (US & Canada)",
  "type_of_2fa": "yubi",
  "user_root": "example",
  "days_remaining_until_password_expire": 1,
  "password_expire_at": "2000-01-01T01:00:00Z"
}
```

* `id` (int64): User ID
* `username` (string): User's username
* `admin_group_ids` (array): List of group IDs of which this user is an administrator
* `allowed_ips` (string): A list of allowed IPs if applicable.  Newline delimited
* `attachments_permission` (boolean): DEPRECATED: Can the user create Bundles (aka Share Links)? Use the bundle permission instead.
* `api_keys_count` (int64): Number of api keys associated with this user
* `authenticate_until` (date-time): Scheduled Date/Time at which user will be deactivated
* `authentication_method` (string): How is this user authenticated?
* `avatar_url` (string): URL holding the user's avatar
* `billing_permission` (boolean): Allow this user to perform operations on the account, payments, and invoices?
* `bypass_site_allowed_ips` (boolean): Allow this user to skip site-wide IP blacklists?
* `bypass_inactive_disable` (boolean): Exempt this user from being disabled based on inactivity?
* `created_at` (date-time): When this user was created
* `dav_permission` (boolean): Can the user connect with WebDAV?
* `disabled` (boolean): Is user disabled? Disabled users cannot log in, and do not count for billing purposes.  Users can be automatically disabled after an inactivity period via a Site setting.
* `email` (email): User email address
* `first_login_at` (date-time): User's first login time
* `ftp_permission` (boolean): Can the user access with FTP/FTPS?
* `group_ids` (string): Comma-separated list of group IDs of which this user is a member
* `header_text` (string): Text to display to the user in the header of the UI
* `language` (string): Preferred language
* `last_login_at` (date-time): User's most recent login time via any protocol
* `last_web_login_at` (date-time): User's most recent login time via web
* `last_ftp_login_at` (date-time): User's most recent login time via FTP
* `last_sftp_login_at` (date-time): User's most recent login time via SFTP
* `last_dav_login_at` (date-time): User's most recent login time via WebDAV
* `last_desktop_login_at` (date-time): User's most recent login time via Desktop app
* `last_restapi_login_at` (date-time): User's most recent login time via Rest API
* `last_api_use_at` (date-time): User's most recent API use time
* `last_active_at` (date-time): User's most recent activity time, which is the latest of most recent login, most recent API use, enablement, or creation
* `last_protocol_cipher` (string): The most recent protocol and cipher used
* `lockout_expires` (date-time): Time in the future that the user will no longer be locked out if applicable
* `name` (string): User's full name
* `company` (string): User's company
* `notes` (string): Any internal notes on the user
* `notification_daily_send_time` (int64): Hour of the day at which daily notifications should be sent. Can be in range 0 to 23
* `office_integration_enabled` (boolean): Enable integration with Office for the web?
* `password_set_at` (date-time): Last time the user's password was set
* `password_validity_days` (int64): Number of days to allow user to use the same password
* `public_keys_count` (int64): Number of public keys associated with this user
* `receive_admin_alerts` (boolean): Should the user receive admin alerts such a certificate expiration notifications and overages?
* `require_2fa` (string): 2FA required setting
* `require_login_by` (date-time): Require user to login by specified date otherwise it will be disabled.
* `active_2fa` (boolean): Is 2fa active for the user?
* `require_password_change` (boolean): Is a password change required upon next user login?
* `password_expired` (boolean): Is user's password expired?
* `restapi_permission` (boolean): Can this user access the REST API?
* `self_managed` (boolean): Does this user manage it's own credentials or is it a shared/bot user?
* `sftp_permission` (boolean): Can the user access with SFTP?
* `site_admin` (boolean): Is the user an administrator for this site?
* `skip_welcome_screen` (boolean): Skip Welcome page in the UI?
* `ssl_required` (string): SSL required setting
* `sso_strategy_id` (int64): SSO (Single Sign On) strategy ID for the user, if applicable.
* `subscribe_to_newsletter` (boolean): Is the user subscribed to the newsletter?
* `externally_managed` (boolean): Is this user managed by a SsoStrategy?
* `time_zone` (string): User time zone
* `type_of_2fa` (string): Type(s) of 2FA methods in use.  Will be either `sms`, `totp`, `u2f`, `yubi`, or multiple values sorted alphabetically and joined by an underscore.
* `user_root` (string): Root folder for FTP (and optionally SFTP if the appropriate site-wide setting is set.)  Note that this is not used for API, Desktop, or Web interface.
* `days_remaining_until_password_expire` (int64): Number of days remaining until password expires
* `password_expire_at` (date-time): Password expiration datetime
* `avatar_file` (file): An image file for your user avatar.
* `avatar_delete` (boolean): If true, the avatar will be deleted.
* `change_password` (string): Used for changing a password on an existing user.
* `change_password_confirmation` (string): Optional, but if provided, we will ensure that it matches the value sent in `change_password`.
* `grant_permission` (string): Permission to grant on the user root.  Can be blank or `full`, `read`, `write`, `list`, `read+write`, or `list+write`
* `group_id` (int64): Group ID to associate this user with.
* `imported_password_hash` (string): Pre-calculated hash of the user's password. If supplied, this will be used to authenticate the user on first login. Supported hash menthods are MD5, SHA1, and SHA256.
* `password` (string): User password.
* `password_confirmation` (string): Optional, but if provided, we will ensure that it matches the value sent in `password`.
* `announcements_read` (boolean): Signifies that the user has read all the announcements in the UI.

---

## List Users

```
await User.list({
  'per_page': 1,
})
```


### Parameters

* `cursor` (string): Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.
* `per_page` (int64): Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).
* `sort_by` (object): If set, sort records by the specified field in either `asc` or `desc` direction (e.g. `sort_by[authenticate_until]=desc`). Valid fields are `authenticate_until`, `email`, `last_desktop_login_at`, `last_login_at`, `username`, `company`, `name`, `site_admin`, `receive_admin_alerts`, `password_validity_days`, `ssl_required` or `not_site_admin`.
* `filter` (object): If set, return records where the specified field is equal to the supplied value. Valid fields are `username`, `email`, `company`, `site_admin`, `password_validity_days`, `ssl_required`, `last_login_at`, `authenticate_until` or `not_site_admin`. Valid field combinations are `[ not_site_admin, username ]`.
* `filter_gt` (object): If set, return records where the specified field is greater than the supplied value. Valid fields are `password_validity_days`, `last_login_at` or `authenticate_until`.
* `filter_gteq` (object): If set, return records where the specified field is greater than or equal the supplied value. Valid fields are `password_validity_days`, `last_login_at` or `authenticate_until`.
* `filter_prefix` (object): If set, return records where the specified field is prefixed by the supplied value. Valid fields are `username`, `email` or `company`.
* `filter_lt` (object): If set, return records where the specified field is less than the supplied value. Valid fields are `password_validity_days`, `last_login_at` or `authenticate_until`.
* `filter_lteq` (object): If set, return records where the specified field is less than or equal the supplied value. Valid fields are `password_validity_days`, `last_login_at` or `authenticate_until`.
* `ids` (string): comma-separated list of User IDs
* `q[username]` (string): List users matching username.
* `q[email]` (string): List users matching email.
* `q[notes]` (string): List users matching notes field.
* `q[admin]` (string): If `true`, list only admin users.
* `q[allowed_ips]` (string): If set, list only users with overridden allowed IP setting.
* `q[password_validity_days]` (string): If set, list only users with overridden password validity days setting.
* `q[ssl_required]` (string): If set, list only users with overridden SSL required setting.
* `search` (string): Searches for partial matches of name, username, or email.

---

## Show User

```
await User.find(id)
```


### Parameters

* `id` (int64): Required - User ID.

---

## Create User

```
await User.create({
  'avatar_delete': true,
  'email': "example",
  'group_id': 1,
  'group_ids': "example",
  'announcements_read': true,
  'allowed_ips': "127.0.0.1",
  'attachments_permission': true,
  'authenticate_until': "2000-01-01T01:00:00Z",
  'authentication_method': "password",
  'billing_permission': true,
  'bypass_inactive_disable': true,
  'bypass_site_allowed_ips': true,
  'dav_permission': true,
  'disabled': true,
  'ftp_permission': true,
  'header_text': "User-specific message.",
  'language': "en",
  'notification_daily_send_time': 18,
  'name': "John Doe",
  'company': "ACME Corp.",
  'notes': "Internal notes on this user.",
  'office_integration_enabled': true,
  'password_validity_days': 1,
  'receive_admin_alerts': true,
  'require_login_by': "2000-01-01T01:00:00Z",
  'require_password_change': true,
  'restapi_permission': true,
  'self_managed': true,
  'sftp_permission': true,
  'site_admin': true,
  'skip_welcome_screen': true,
  'ssl_required': "always_require",
  'sso_strategy_id': 1,
  'subscribe_to_newsletter': true,
  'require_2fa': "always_require",
  'time_zone': "Pacific Time (US & Canada)",
  'user_root': "example",
  'username': "user",
})
```


### Parameters

* `avatar_file` (file): An image file for your user avatar.
* `avatar_delete` (boolean): If true, the avatar will be deleted.
* `change_password` (string): Used for changing a password on an existing user.
* `change_password_confirmation` (string): Optional, but if provided, we will ensure that it matches the value sent in `change_password`.
* `email` (string): User's email.
* `grant_permission` (string): Permission to grant on the user root.  Can be blank or `full`, `read`, `write`, `list`, `read+write`, or `list+write`
* `group_id` (int64): Group ID to associate this user with.
* `group_ids` (string): A list of group ids to associate this user with.  Comma delimited.
* `imported_password_hash` (string): Pre-calculated hash of the user's password. If supplied, this will be used to authenticate the user on first login. Supported hash menthods are MD5, SHA1, and SHA256.
* `password` (string): User password.
* `password_confirmation` (string): Optional, but if provided, we will ensure that it matches the value sent in `password`.
* `announcements_read` (boolean): Signifies that the user has read all the announcements in the UI.
* `allowed_ips` (string): A list of allowed IPs if applicable.  Newline delimited
* `attachments_permission` (boolean): DEPRECATED: Can the user create Bundles (aka Share Links)? Use the bundle permission instead.
* `authenticate_until` (string): Scheduled Date/Time at which user will be deactivated
* `authentication_method` (string): How is this user authenticated?
* `billing_permission` (boolean): Allow this user to perform operations on the account, payments, and invoices?
* `bypass_inactive_disable` (boolean): Exempt this user from being disabled based on inactivity?
* `bypass_site_allowed_ips` (boolean): Allow this user to skip site-wide IP blacklists?
* `dav_permission` (boolean): Can the user connect with WebDAV?
* `disabled` (boolean): Is user disabled? Disabled users cannot log in, and do not count for billing purposes.  Users can be automatically disabled after an inactivity period via a Site setting.
* `ftp_permission` (boolean): Can the user access with FTP/FTPS?
* `header_text` (string): Text to display to the user in the header of the UI
* `language` (string): Preferred language
* `notification_daily_send_time` (int64): Hour of the day at which daily notifications should be sent. Can be in range 0 to 23
* `name` (string): User's full name
* `company` (string): User's company
* `notes` (string): Any internal notes on the user
* `office_integration_enabled` (boolean): Enable integration with Office for the web?
* `password_validity_days` (int64): Number of days to allow user to use the same password
* `receive_admin_alerts` (boolean): Should the user receive admin alerts such a certificate expiration notifications and overages?
* `require_login_by` (string): Require user to login by specified date otherwise it will be disabled.
* `require_password_change` (boolean): Is a password change required upon next user login?
* `restapi_permission` (boolean): Can this user access the REST API?
* `self_managed` (boolean): Does this user manage it's own credentials or is it a shared/bot user?
* `sftp_permission` (boolean): Can the user access with SFTP?
* `site_admin` (boolean): Is the user an administrator for this site?
* `skip_welcome_screen` (boolean): Skip Welcome page in the UI?
* `ssl_required` (string): SSL required setting
* `sso_strategy_id` (int64): SSO (Single Sign On) strategy ID for the user, if applicable.
* `subscribe_to_newsletter` (boolean): Is the user subscribed to the newsletter?
* `require_2fa` (string): 2FA required setting
* `time_zone` (string): User time zone
* `user_root` (string): Root folder for FTP (and optionally SFTP if the appropriate site-wide setting is set.)  Note that this is not used for API, Desktop, or Web interface.
* `username` (string): User's username

---

## Unlock user who has been locked out due to failed logins

```
const [user] = await User.list()

await user.unlock()
```

### Parameters

* `id` (int64): Required - User ID.


---

## Resend user welcome email

```
const [user] = await User.list()

await user.resend_welcome_email()
```

### Parameters

* `id` (int64): Required - User ID.


---

## Trigger 2FA Reset process for user who has lost access to their existing 2FA methods

```
const [user] = await User.list()

await user.user_2fa_reset()
```

### Parameters

* `id` (int64): Required - User ID.


---

## Update User

```
const [user] = await User.list()

await user.update({
  'avatar_delete': true,
  'email': "example",
  'group_id': 1,
  'group_ids': "example",
  'announcements_read': true,
  'allowed_ips': "127.0.0.1",
  'attachments_permission': true,
  'authenticate_until': "2000-01-01T01:00:00Z",
  'authentication_method': "password",
  'billing_permission': true,
  'bypass_inactive_disable': true,
  'bypass_site_allowed_ips': true,
  'dav_permission': true,
  'disabled': true,
  'ftp_permission': true,
  'header_text': "User-specific message.",
  'language': "en",
  'notification_daily_send_time': 18,
  'name': "John Doe",
  'company': "ACME Corp.",
  'notes': "Internal notes on this user.",
  'office_integration_enabled': true,
  'password_validity_days': 1,
  'receive_admin_alerts': true,
  'require_login_by': "2000-01-01T01:00:00Z",
  'require_password_change': true,
  'restapi_permission': true,
  'self_managed': true,
  'sftp_permission': true,
  'site_admin': true,
  'skip_welcome_screen': true,
  'ssl_required': "always_require",
  'sso_strategy_id': 1,
  'subscribe_to_newsletter': true,
  'require_2fa': "always_require",
  'time_zone': "Pacific Time (US & Canada)",
  'user_root': "example",
  'username': "user",
})
```

### Parameters

* `id` (int64): Required - User ID.
* `avatar_file` (file): An image file for your user avatar.
* `avatar_delete` (boolean): If true, the avatar will be deleted.
* `change_password` (string): Used for changing a password on an existing user.
* `change_password_confirmation` (string): Optional, but if provided, we will ensure that it matches the value sent in `change_password`.
* `email` (string): User's email.
* `grant_permission` (string): Permission to grant on the user root.  Can be blank or `full`, `read`, `write`, `list`, `read+write`, or `list+write`
* `group_id` (int64): Group ID to associate this user with.
* `group_ids` (string): A list of group ids to associate this user with.  Comma delimited.
* `imported_password_hash` (string): Pre-calculated hash of the user's password. If supplied, this will be used to authenticate the user on first login. Supported hash menthods are MD5, SHA1, and SHA256.
* `password` (string): User password.
* `password_confirmation` (string): Optional, but if provided, we will ensure that it matches the value sent in `password`.
* `announcements_read` (boolean): Signifies that the user has read all the announcements in the UI.
* `allowed_ips` (string): A list of allowed IPs if applicable.  Newline delimited
* `attachments_permission` (boolean): DEPRECATED: Can the user create Bundles (aka Share Links)? Use the bundle permission instead.
* `authenticate_until` (string): Scheduled Date/Time at which user will be deactivated
* `authentication_method` (string): How is this user authenticated?
* `billing_permission` (boolean): Allow this user to perform operations on the account, payments, and invoices?
* `bypass_inactive_disable` (boolean): Exempt this user from being disabled based on inactivity?
* `bypass_site_allowed_ips` (boolean): Allow this user to skip site-wide IP blacklists?
* `dav_permission` (boolean): Can the user connect with WebDAV?
* `disabled` (boolean): Is user disabled? Disabled users cannot log in, and do not count for billing purposes.  Users can be automatically disabled after an inactivity period via a Site setting.
* `ftp_permission` (boolean): Can the user access with FTP/FTPS?
* `header_text` (string): Text to display to the user in the header of the UI
* `language` (string): Preferred language
* `notification_daily_send_time` (int64): Hour of the day at which daily notifications should be sent. Can be in range 0 to 23
* `name` (string): User's full name
* `company` (string): User's company
* `notes` (string): Any internal notes on the user
* `office_integration_enabled` (boolean): Enable integration with Office for the web?
* `password_validity_days` (int64): Number of days to allow user to use the same password
* `receive_admin_alerts` (boolean): Should the user receive admin alerts such a certificate expiration notifications and overages?
* `require_login_by` (string): Require user to login by specified date otherwise it will be disabled.
* `require_password_change` (boolean): Is a password change required upon next user login?
* `restapi_permission` (boolean): Can this user access the REST API?
* `self_managed` (boolean): Does this user manage it's own credentials or is it a shared/bot user?
* `sftp_permission` (boolean): Can the user access with SFTP?
* `site_admin` (boolean): Is the user an administrator for this site?
* `skip_welcome_screen` (boolean): Skip Welcome page in the UI?
* `ssl_required` (string): SSL required setting
* `sso_strategy_id` (int64): SSO (Single Sign On) strategy ID for the user, if applicable.
* `subscribe_to_newsletter` (boolean): Is the user subscribed to the newsletter?
* `require_2fa` (string): 2FA required setting
* `time_zone` (string): User time zone
* `user_root` (string): Root folder for FTP (and optionally SFTP if the appropriate site-wide setting is set.)  Note that this is not used for API, Desktop, or Web interface.
* `username` (string): User's username

### Example Response

```json
{
  "id": 1,
  "username": "user",
  "admin_group_ids": [
    1
  ],
  "allowed_ips": "127.0.0.1",
  "attachments_permission": true,
  "api_keys_count": 1,
  "authenticate_until": "2000-01-01T01:00:00Z",
  "authentication_method": "password",
  "avatar_url": "example",
  "billing_permission": true,
  "bypass_site_allowed_ips": true,
  "bypass_inactive_disable": true,
  "created_at": "2000-01-01T01:00:00Z",
  "dav_permission": true,
  "disabled": true,
  "email": "example",
  "first_login_at": "2000-01-01T01:00:00Z",
  "ftp_permission": true,
  "group_ids": "example",
  "header_text": "User-specific message.",
  "language": "en",
  "last_login_at": "2000-01-01T01:00:00Z",
  "last_web_login_at": "2000-01-01T01:00:00Z",
  "last_ftp_login_at": "2000-01-01T01:00:00Z",
  "last_sftp_login_at": "2000-01-01T01:00:00Z",
  "last_dav_login_at": "2000-01-01T01:00:00Z",
  "last_desktop_login_at": "2000-01-01T01:00:00Z",
  "last_restapi_login_at": "2000-01-01T01:00:00Z",
  "last_api_use_at": "2000-01-01T01:00:00Z",
  "last_active_at": "2000-01-01T01:00:00Z",
  "last_protocol_cipher": "example",
  "lockout_expires": "2000-01-01T01:00:00Z",
  "name": "John Doe",
  "company": "ACME Corp.",
  "notes": "Internal notes on this user.",
  "notification_daily_send_time": 18,
  "office_integration_enabled": true,
  "password_set_at": "2000-01-01T01:00:00Z",
  "password_validity_days": 1,
  "public_keys_count": 1,
  "receive_admin_alerts": true,
  "require_2fa": "always_require",
  "require_login_by": "2000-01-01T01:00:00Z",
  "active_2fa": true,
  "require_password_change": true,
  "password_expired": true,
  "restapi_permission": true,
  "self_managed": true,
  "sftp_permission": true,
  "site_admin": true,
  "skip_welcome_screen": true,
  "ssl_required": "always_require",
  "sso_strategy_id": 1,
  "subscribe_to_newsletter": true,
  "externally_managed": true,
  "time_zone": "Pacific Time (US & Canada)",
  "type_of_2fa": "yubi",
  "user_root": "example",
  "days_remaining_until_password_expire": 1,
  "password_expire_at": "2000-01-01T01:00:00Z"
}
```

---

## Delete User

```
const [user] = await User.list()

await user.delete()
```

### Parameters

* `id` (int64): Required - User ID.

