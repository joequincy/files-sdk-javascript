import Api from '../Api'
import Logger from '../Logger'
import { getType, isArray, isInt, isObject, isString } from '../utils'

/**
 * Class History
 */
class History {
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

  // int64 # Action ID
  getId = () => this.attributes.id

  // string # Path This must be slash-delimited, but it must neither start nor end with a slash. Maximum of 5000 characters.
  getPath = () => this.attributes.path

  // date-time # Action occurrence date/time
  getWhen = () => this.attributes.when

  // string # The destination path for this action, if applicable
  getDestination = () => this.attributes.destination

  // string # Friendly displayed output
  getDisplay = () => this.attributes.display

  // string # IP Address that performed this action
  getIp = () => this.attributes.ip

  // string # The source path for this action, if applicable
  getSource = () => this.attributes.source

  // array # Targets
  getTargets = () => this.attributes.targets

  // int64 # User ID
  getUserId = () => this.attributes.user_id

  // string # Username
  getUsername = () => this.attributes.username

  // string # Type of action
  getAction = () => this.attributes.action

  // string # Failure type.  If action was a user login or session failure, why did it fail?
  getFailureType = () => this.attributes.failure_type

  // string # Interface on which this action occurred.
  getInterface = () => this.attributes.interface


  // Parameters:
  //   start_at - string - Leave blank or set to a date/time to filter earlier entries.
  //   end_at - string - Leave blank or set to a date/time to filter later entries.
  //   display - string - Display format. Leave blank or set to `full` or `parent`.
  //   page - int64 - Current page number.
  //   per_page - int64 - Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).
  //   action - string - Deprecated: If set to `count` returns a count of matching records rather than the records themselves.
  //   path (required) - string - Path to operate on.
  static listForFile = async (path, params = {}, options = {}) => {
    if (!isObject(params)) {
      throw new Error(`Bad parameter: params must be of type object, received ${getType(params)}`)
    }

    params['path'] = path

    if (!params['path']) {
      throw new Error('Parameter missing: path')
    }

    if (params['start_at'] && !isString(params['start_at'])) {
      throw new Error(`Bad parameter: start_at must be of type String, received ${getType(start_at)}`)
    }

    if (params['end_at'] && !isString(params['end_at'])) {
      throw new Error(`Bad parameter: end_at must be of type String, received ${getType(end_at)}`)
    }

    if (params['display'] && !isString(params['display'])) {
      throw new Error(`Bad parameter: display must be of type String, received ${getType(display)}`)
    }

    if (params['page'] && !isInt(params['page'])) {
      throw new Error(`Bad parameter: page must be of type Int, received ${getType(page)}`)
    }

    if (params['per_page'] && !isInt(params['per_page'])) {
      throw new Error(`Bad parameter: per_page must be of type Int, received ${getType(per_page)}`)
    }

    if (params['action'] && !isString(params['action'])) {
      throw new Error(`Bad parameter: action must be of type String, received ${getType(action)}`)
    }

    if (params['path'] && !isString(params['path'])) {
      throw new Error(`Bad parameter: path must be of type String, received ${getType(path)}`)
    }

    const response = await Api.sendRequest(`/history/files(/*path)`, 'GET', params, options)

    return response?.data?.map(obj => new Action(obj, options)) || []
  }

  // Parameters:
  //   start_at - string - Leave blank or set to a date/time to filter earlier entries.
  //   end_at - string - Leave blank or set to a date/time to filter later entries.
  //   display - string - Display format. Leave blank or set to `full` or `parent`.
  //   page - int64 - Current page number.
  //   per_page - int64 - Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).
  //   action - string - Deprecated: If set to `count` returns a count of matching records rather than the records themselves.
  //   path (required) - string - Path to operate on.
  static listForFolder = async (path, params = {}, options = {}) => {
    if (!isObject(params)) {
      throw new Error(`Bad parameter: params must be of type object, received ${getType(params)}`)
    }

    params['path'] = path

    if (!params['path']) {
      throw new Error('Parameter missing: path')
    }

    if (params['start_at'] && !isString(params['start_at'])) {
      throw new Error(`Bad parameter: start_at must be of type String, received ${getType(start_at)}`)
    }

    if (params['end_at'] && !isString(params['end_at'])) {
      throw new Error(`Bad parameter: end_at must be of type String, received ${getType(end_at)}`)
    }

    if (params['display'] && !isString(params['display'])) {
      throw new Error(`Bad parameter: display must be of type String, received ${getType(display)}`)
    }

    if (params['page'] && !isInt(params['page'])) {
      throw new Error(`Bad parameter: page must be of type Int, received ${getType(page)}`)
    }

    if (params['per_page'] && !isInt(params['per_page'])) {
      throw new Error(`Bad parameter: per_page must be of type Int, received ${getType(per_page)}`)
    }

    if (params['action'] && !isString(params['action'])) {
      throw new Error(`Bad parameter: action must be of type String, received ${getType(action)}`)
    }

    if (params['path'] && !isString(params['path'])) {
      throw new Error(`Bad parameter: path must be of type String, received ${getType(path)}`)
    }

    const response = await Api.sendRequest(`/history/folders(/*path)`, 'GET', params, options)

    return response?.data?.map(obj => new Action(obj, options)) || []
  }

  // Parameters:
  //   start_at - string - Leave blank or set to a date/time to filter earlier entries.
  //   end_at - string - Leave blank or set to a date/time to filter later entries.
  //   display - string - Display format. Leave blank or set to `full` or `parent`.
  //   page - int64 - Current page number.
  //   per_page - int64 - Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).
  //   action - string - Deprecated: If set to `count` returns a count of matching records rather than the records themselves.
  //   user_id (required) - int64 - User ID.
  static listForUser = async (user_id, params = {}, options = {}) => {
    if (!isObject(params)) {
      throw new Error(`Bad parameter: params must be of type object, received ${getType(params)}`)
    }

    params['user_id'] = user_id

    if (!params['user_id']) {
      throw new Error('Parameter missing: user_id')
    }

    if (params['start_at'] && !isString(params['start_at'])) {
      throw new Error(`Bad parameter: start_at must be of type String, received ${getType(start_at)}`)
    }

    if (params['end_at'] && !isString(params['end_at'])) {
      throw new Error(`Bad parameter: end_at must be of type String, received ${getType(end_at)}`)
    }

    if (params['display'] && !isString(params['display'])) {
      throw new Error(`Bad parameter: display must be of type String, received ${getType(display)}`)
    }

    if (params['page'] && !isInt(params['page'])) {
      throw new Error(`Bad parameter: page must be of type Int, received ${getType(page)}`)
    }

    if (params['per_page'] && !isInt(params['per_page'])) {
      throw new Error(`Bad parameter: per_page must be of type Int, received ${getType(per_page)}`)
    }

    if (params['action'] && !isString(params['action'])) {
      throw new Error(`Bad parameter: action must be of type String, received ${getType(action)}`)
    }

    if (params['user_id'] && !isInt(params['user_id'])) {
      throw new Error(`Bad parameter: user_id must be of type Int, received ${getType(user_id)}`)
    }

    const response = await Api.sendRequest(`/history/users/' . params['user_id'] . '`, 'GET', params, options)

    return response?.data?.map(obj => new Action(obj, options)) || []
  }

  // Parameters:
  //   start_at - string - Leave blank or set to a date/time to filter earlier entries.
  //   end_at - string - Leave blank or set to a date/time to filter later entries.
  //   display - string - Display format. Leave blank or set to `full` or `parent`.
  //   page - int64 - Current page number.
  //   per_page - int64 - Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).
  //   action - string - Deprecated: If set to `count` returns a count of matching records rather than the records themselves.
  static listLogins = async (params = {}, options = {}) => {
    if (params['start_at'] && !isString(params['start_at'])) {
      throw new Error(`Bad parameter: start_at must be of type String, received ${getType(start_at)}`)
    }

    if (params['end_at'] && !isString(params['end_at'])) {
      throw new Error(`Bad parameter: end_at must be of type String, received ${getType(end_at)}`)
    }

    if (params['display'] && !isString(params['display'])) {
      throw new Error(`Bad parameter: display must be of type String, received ${getType(display)}`)
    }

    if (params['page'] && !isInt(params['page'])) {
      throw new Error(`Bad parameter: page must be of type Int, received ${getType(page)}`)
    }

    if (params['per_page'] && !isInt(params['per_page'])) {
      throw new Error(`Bad parameter: per_page must be of type Int, received ${getType(per_page)}`)
    }

    if (params['action'] && !isString(params['action'])) {
      throw new Error(`Bad parameter: action must be of type String, received ${getType(action)}`)
    }

    const response = await Api.sendRequest(`/history/login`, 'GET', params, options)

    return response?.data?.map(obj => new Action(obj, options)) || []
  }

  // Parameters:
  //   start_at - string - Leave blank or set to a date/time to filter earlier entries.
  //   end_at - string - Leave blank or set to a date/time to filter later entries.
  //   display - string - Display format. Leave blank or set to `full` or `parent`.
  //   page - int64 - Current page number.
  //   per_page - int64 - Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).
  //   action - string - Deprecated: If set to `count` returns a count of matching records rather than the records themselves.
  static list = async (params = {}, options = {}) => {
    if (params['start_at'] && !isString(params['start_at'])) {
      throw new Error(`Bad parameter: start_at must be of type String, received ${getType(start_at)}`)
    }

    if (params['end_at'] && !isString(params['end_at'])) {
      throw new Error(`Bad parameter: end_at must be of type String, received ${getType(end_at)}`)
    }

    if (params['display'] && !isString(params['display'])) {
      throw new Error(`Bad parameter: display must be of type String, received ${getType(display)}`)
    }

    if (params['page'] && !isInt(params['page'])) {
      throw new Error(`Bad parameter: page must be of type Int, received ${getType(page)}`)
    }

    if (params['per_page'] && !isInt(params['per_page'])) {
      throw new Error(`Bad parameter: per_page must be of type Int, received ${getType(per_page)}`)
    }

    if (params['action'] && !isString(params['action'])) {
      throw new Error(`Bad parameter: action must be of type String, received ${getType(action)}`)
    }

    const response = await Api.sendRequest(`/history`, 'GET', params, options)

    return response?.data?.map(obj => new Action(obj, options)) || []
  }

  static all = (params = {}, options = {}) =>
    History.list(params, options)
}

export default History
