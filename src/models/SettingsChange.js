import Api from '../Api'
import Logger from '../Logger'
import { getType, isArray, isBrowser, isInt, isObject, isString } from '../utils'

/**
 * Class SettingsChange
 */
class SettingsChange {
  attributes = {}
  options = {}

  constructor(attributes = {}, options = {}) {
    Object.entries(attributes).forEach(([key, value]) => {
      const normalizedKey = key.replace('?', '')

      this.attributes[normalizedKey] = value

      Object.defineProperty(this, normalizedKey, { value, writable: false })
    })

    this.options = { ...options }
  }

  isLoaded = () => !!this.attributes.id
  // string # Markdown-formatted change messages.
  getChanges = () => this.attributes.changes

  // date-time # The time this change was made
  getCreatedAt = () => this.attributes.created_at

  // int64 # The user id responsible for this change
  getUserId = () => this.attributes.user_id

  // boolean # true if this change was performed by Files.com support.
  getUserIsFilesSupport = () => this.attributes.user_is_files_support

  // string # The username of the user responsible for this change
  getUsername = () => this.attributes.username


  // Parameters:
  //   cursor - string - Used for pagination.  Send a cursor value to resume an existing list from the point at which you left off.  Get a cursor from an existing list via either the X-Files-Cursor-Next header or the X-Files-Cursor-Prev header.
  //   per_page - int64 - Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).
  //   sort_by - object - If set, sort records by the specified field in either 'asc' or 'desc' direction (e.g. sort_by[last_login_at]=desc). Valid fields are `api_key_id`, `created_at` or `user_id`.
  //   filter - object - If set, return records where the specified field is equal to the supplied value. Valid fields are `api_key_id` and `user_id`.
  //   filter_gt - object - If set, return records where the specified field is greater than the supplied value. Valid fields are `api_key_id` and `user_id`.
  //   filter_gteq - object - If set, return records where the specified field is greater than or equal to the supplied value. Valid fields are `api_key_id` and `user_id`.
  //   filter_like - object - If set, return records where the specified field is equal to the supplied value. Valid fields are `api_key_id` and `user_id`.
  //   filter_lt - object - If set, return records where the specified field is less than the supplied value. Valid fields are `api_key_id` and `user_id`.
  //   filter_lteq - object - If set, return records where the specified field is less than or equal to the supplied value. Valid fields are `api_key_id` and `user_id`.
  static list = async (params = {}, options = {}) => {
    if (params['cursor'] && !isString(params['cursor'])) {
      throw new Error(`Bad parameter: cursor must be of type String, received ${getType(cursor)}`)
    }

    if (params['per_page'] && !isInt(params['per_page'])) {
      throw new Error(`Bad parameter: per_page must be of type Int, received ${getType(per_page)}`)
    }

    const response = await Api.sendRequest(`/settings_changes`, 'GET', params, options)

    return response?.data?.map(obj => new SettingsChange(obj, options)) || []
  }

  static all = (params = {}, options = {}) =>
    SettingsChange.list(params, options)
}

export default SettingsChange
