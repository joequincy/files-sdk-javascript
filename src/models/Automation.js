import Api from '../Api'
import Logger from '../Logger'
import { getType, isArray, isInt, isObject, isString } from '../utils'

/**
 * Class Automation
 */
class Automation {
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

  // int64 # Automation ID
  getId = () => this.attributes.id

  setId = value => {
    this.attributes.id = value
  }

  // string # Automation type
  getAutomation = () => this.attributes.automation

  setAutomation = value => {
    this.attributes.automation = value
  }

  // string # Source Path
  getSource = () => this.attributes.source

  setSource = value => {
    this.attributes.source = value
  }

  // string # Destination Path
  getDestination = () => this.attributes.destination

  setDestination = value => {
    this.attributes.destination = value
  }

  // string # If set, this string in the destination path will be replaced with the value in `destination_replace_to`.
  getDestinationReplaceFrom = () => this.attributes.destination_replace_from

  setDestinationReplaceFrom = value => {
    this.attributes.destination_replace_from = value
  }

  // string # If set, this string will replace the value `destination_replace_from` in the destination filename. You can use special patterns here.
  getDestinationReplaceTo = () => this.attributes.destination_replace_to

  setDestinationReplaceTo = value => {
    this.attributes.destination_replace_to = value
  }

  // string # How often to run this automation?  One of: `day`, `week`, `week_end`, `month`, `month_end`, `quarter`, `quarter_end`, `year`, `year_end`
  getInterval = () => this.attributes.interval

  setInterval = value => {
    this.attributes.interval = value
  }

  // string # Date this automation will next run.
  getNextProcessOn = () => this.attributes.next_process_on

  setNextProcessOn = value => {
    this.attributes.next_process_on = value
  }

  // string # Path on which this Automation runs.  Supports globs. This must be slash-delimited, but it must neither start nor end with a slash. Maximum of 5000 characters.
  getPath = () => this.attributes.path

  setPath = value => {
    this.attributes.path = value
  }

  // boolean # Does this automation run in real time?  This is a read-only property based on automation type.
  getRealtime = () => this.attributes.realtime

  setRealtime = value => {
    this.attributes.realtime = value
  }

  // int64 # User ID of the Automation's creator.
  getUserId = () => this.attributes.user_id

  setUserId = value => {
    this.attributes.user_id = value
  }

  // array # IDs of Users for the Automation (i.e. who to Request File from)
  getUserIds = () => this.attributes.user_ids

  setUserIds = value => {
    this.attributes.user_ids = value
  }

  // array # IDs of Groups for the Automation (i.e. who to Request File from)
  getGroupIds = () => this.attributes.group_ids

  setGroupIds = value => {
    this.attributes.group_ids = value
  }


  // Parameters:
  //   automation (required) - string - Type of automation.  One of: `create_folder`, `request_file`, `request_move`
  //   source - string - Source Path
  //   destination - string - Destination Path
  //   destination_replace_from - string - If set, this string in the destination path will be replaced with the value in `destination_replace_to`.
  //   destination_replace_to - string - If set, this string will replace the value `destination_replace_from` in the destination filename. You can use special patterns here.
  //   interval - string - How often to run this automation? One of: `day`, `week`, `week_end`, `month`, `month_end`, `quarter`, `quarter_end`, `year`, `year_end`
  //   path - string - Path on which this Automation runs.  Supports globs.
  //   user_ids - string - A list of user IDs the automation is associated with. If sent as a string, it should be comma-delimited.
  //   group_ids - string - A list of group IDs the automation is associated with. If sent as a string, it should be comma-delimited.
  update = async (params = {}) => {
    if (!this.attributes.id) {
      throw new Error('Current object has no ID')
    }

    if (!isObject(params)) {
      throw new Error(`Bad parameter: params must be of type object, received ${getType(params)}`)
    }

    params.id = this.attributes.id

    if (params['id'] && !isInt(params['id'])) {
      throw new Error(`Bad parameter: id must be of type Int, received ${getType(id)}`)
    }
    if (params['automation'] && !isString(params['automation'])) {
      throw new Error(`Bad parameter: automation must be of type String, received ${getType(automation)}`)
    }
    if (params['source'] && !isString(params['source'])) {
      throw new Error(`Bad parameter: source must be of type String, received ${getType(source)}`)
    }
    if (params['destination'] && !isString(params['destination'])) {
      throw new Error(`Bad parameter: destination must be of type String, received ${getType(destination)}`)
    }
    if (params['destination_replace_from'] && !isString(params['destination_replace_from'])) {
      throw new Error(`Bad parameter: destination_replace_from must be of type String, received ${getType(destination_replace_from)}`)
    }
    if (params['destination_replace_to'] && !isString(params['destination_replace_to'])) {
      throw new Error(`Bad parameter: destination_replace_to must be of type String, received ${getType(destination_replace_to)}`)
    }
    if (params['interval'] && !isString(params['interval'])) {
      throw new Error(`Bad parameter: interval must be of type String, received ${getType(interval)}`)
    }
    if (params['path'] && !isString(params['path'])) {
      throw new Error(`Bad parameter: path must be of type String, received ${getType(path)}`)
    }
    if (params['user_ids'] && !isString(params['user_ids'])) {
      throw new Error(`Bad parameter: user_ids must be of type String, received ${getType(user_ids)}`)
    }
    if (params['group_ids'] && !isString(params['group_ids'])) {
      throw new Error(`Bad parameter: group_ids must be of type String, received ${getType(group_ids)}`)
    }

    if (!params['id']) {
      if (this.attributes.id) {
        params['id'] = this.id
      } else {
        throw new Error('Parameter missing: id')
      }
    }

    if (!params['automation']) {
      if (this.attributes.automation) {
        params['automation'] = this.automation
      } else {
        throw new Error('Parameter missing: automation')
      }
    }

    return Api.sendRequest(`/automations/' . params['id'] . '`, 'PATCH', params, this.options)
  }

  delete = async (params = {}) => {
    if (!this.attributes.id) {
      throw new Error('Current object has no ID')
    }

    if (!isObject(params)) {
      throw new Error(`Bad parameter: params must be of type object, received ${getType(params)}`)
    }

    params.id = this.attributes.id

    if (params['id'] && !isInt(params['id'])) {
      throw new Error(`Bad parameter: id must be of type Int, received ${getType(id)}`)
    }

    if (!params['id']) {
      if (this.attributes.id) {
        params['id'] = this.id
      } else {
        throw new Error('Parameter missing: id')
      }
    }

    return Api.sendRequest(`/automations/' . params['id'] . '`, 'DELETE', params, this.options)
  }

  destroy = (params = {}) =>
    this.delete(params)

  save = () => {
    if (this.attributes['id']) {
      return this.update(this.attributes)
    } else {
      const newObject = Automation.create(this.attributes, this.options)
      this.attributes = { ...newObject.attributes }
      return true
    }
  }

  // Parameters:
  //   page - int64 - Current page number.
  //   per_page - int64 - Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).
  //   action - string - Deprecated: If set to `count` returns a count of matching records rather than the records themselves.
  //   automation - string - Type of automation to filter by.
  static list = async (params = {}, options = {}) => {
    if (params['page'] && !isInt(params['page'])) {
      throw new Error(`Bad parameter: page must be of type Int, received ${getType(page)}`)
    }

    if (params['per_page'] && !isInt(params['per_page'])) {
      throw new Error(`Bad parameter: per_page must be of type Int, received ${getType(per_page)}`)
    }

    if (params['action'] && !isString(params['action'])) {
      throw new Error(`Bad parameter: action must be of type String, received ${getType(action)}`)
    }

    if (params['automation'] && !isString(params['automation'])) {
      throw new Error(`Bad parameter: automation must be of type String, received ${getType(automation)}`)
    }

    const response = await Api.sendRequest(`/automations`, 'GET', params, options)

    return response?.data?.map(obj => new Automation(obj, options)) || []
  }

  static all = (params = {}, options = {}) =>
    Automation.list(params, options)

  // Parameters:
  //   id (required) - int64 - Automation ID.
  static find = async (id, params = {}, options = {}) => {
    if (!isObject(params)) {
      throw new Error(`Bad parameter: params must be of type object, received ${getType(params)}`)
    }

    params['id'] = id

    if (!params['id']) {
      throw new Error('Parameter missing: id')
    }

    if (params['id'] && !isInt(params['id'])) {
      throw new Error(`Bad parameter: id must be of type Int, received ${getType(id)}`)
    }

    const response = await Api.sendRequest(`/automations/' . params['id'] . '`, 'GET', params, options)

    return new Automation(response?.data, options)
  }

  static get = (id, params = {}, options = {}) =>
    Automation.find(id, params, options)

  // Parameters:
  //   automation (required) - string - Type of automation.  One of: `create_folder`, `request_file`, `request_move`
  //   source - string - Source Path
  //   destination - string - Destination Path
  //   destination_replace_from - string - If set, this string in the destination path will be replaced with the value in `destination_replace_to`.
  //   destination_replace_to - string - If set, this string will replace the value `destination_replace_from` in the destination filename. You can use special patterns here.
  //   interval - string - How often to run this automation? One of: `day`, `week`, `week_end`, `month`, `month_end`, `quarter`, `quarter_end`, `year`, `year_end`
  //   path - string - Path on which this Automation runs.  Supports globs.
  //   user_ids - string - A list of user IDs the automation is associated with. If sent as a string, it should be comma-delimited.
  //   group_ids - string - A list of group IDs the automation is associated with. If sent as a string, it should be comma-delimited.
  static create = async (params = {}, options = {}) => {
    if (!params['automation']) {
      throw new Error('Parameter missing: automation')
    }

    if (params['automation'] && !isString(params['automation'])) {
      throw new Error(`Bad parameter: automation must be of type String, received ${getType(automation)}`)
    }

    if (params['source'] && !isString(params['source'])) {
      throw new Error(`Bad parameter: source must be of type String, received ${getType(source)}`)
    }

    if (params['destination'] && !isString(params['destination'])) {
      throw new Error(`Bad parameter: destination must be of type String, received ${getType(destination)}`)
    }

    if (params['destination_replace_from'] && !isString(params['destination_replace_from'])) {
      throw new Error(`Bad parameter: destination_replace_from must be of type String, received ${getType(destination_replace_from)}`)
    }

    if (params['destination_replace_to'] && !isString(params['destination_replace_to'])) {
      throw new Error(`Bad parameter: destination_replace_to must be of type String, received ${getType(destination_replace_to)}`)
    }

    if (params['interval'] && !isString(params['interval'])) {
      throw new Error(`Bad parameter: interval must be of type String, received ${getType(interval)}`)
    }

    if (params['path'] && !isString(params['path'])) {
      throw new Error(`Bad parameter: path must be of type String, received ${getType(path)}`)
    }

    if (params['user_ids'] && !isString(params['user_ids'])) {
      throw new Error(`Bad parameter: user_ids must be of type String, received ${getType(user_ids)}`)
    }

    if (params['group_ids'] && !isString(params['group_ids'])) {
      throw new Error(`Bad parameter: group_ids must be of type String, received ${getType(group_ids)}`)
    }

    const response = await Api.sendRequest(`/automations`, 'POST', params, options)

    return new Automation(response?.data, options)
  }
}

export default Automation
