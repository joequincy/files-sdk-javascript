import Api from '../Api'
import Logger from '../Logger'
import { getType, isArray, isBrowser, isInt, isObject, isString } from '../utils'

/**
 * Class As2IncomingMessage
 */
class As2IncomingMessage {
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
  // int64 # Id of the AS2 Partner.
  getId = () => this.attributes.id

  // int64 # Id of the AS2 Partner associated with this message.
  getAs2PartnerId = () => this.attributes.as2_partner_id

  // string # UUID assigned to this message.
  getUuid = () => this.attributes.uuid

  // string # Content Type header of the incoming message.
  getContentType = () => this.attributes.content_type

  // object # HTTP Headers sent with this message.
  getHttpHeaders = () => this.attributes.http_headers

  // string # JSON Structure of the activity log.
  getActivityLog = () => this.attributes.activity_log

  // string # Result of processing.
  getProcessingResult = () => this.attributes.processing_result

  // string # AS2 TO header of message
  getAs2To = () => this.attributes.as2_to

  // string # AS2 FROM header of message
  getAs2From = () => this.attributes.as2_from

  // string # AS2 Message Id
  getMessageId = () => this.attributes.message_id

  // string # AS2 Subject Header
  getSubject = () => this.attributes.subject

  // string # Encrypted Payload Body Size
  getBodySize = () => this.attributes.body_size

  // string # Filename of the file being received.
  getAttachmentFilename = () => this.attributes.attachment_filename

  // date-time # Message creation date/time
  getCreatedAt = () => this.attributes.created_at


  // Parameters:
  //   cursor - string - Used for pagination.  Send a cursor value to resume an existing list from the point at which you left off.  Get a cursor from an existing list via either the X-Files-Cursor-Next header or the X-Files-Cursor-Prev header.
  //   per_page - int64 - Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).
  //   as2_partner_id - int64 - As2 Partner ID.  If provided, will return message specific to that partner.
  static list = async (params = {}, options = {}) => {
    if (params['cursor'] && !isString(params['cursor'])) {
      throw new Error(`Bad parameter: cursor must be of type String, received ${getType(cursor)}`)
    }

    if (params['per_page'] && !isInt(params['per_page'])) {
      throw new Error(`Bad parameter: per_page must be of type Int, received ${getType(per_page)}`)
    }

    if (params['as2_partner_id'] && !isInt(params['as2_partner_id'])) {
      throw new Error(`Bad parameter: as2_partner_id must be of type Int, received ${getType(as2_partner_id)}`)
    }

    const response = await Api.sendRequest(`/as2_incoming_messages`, 'GET', params, options)

    return response?.data?.map(obj => new As2IncomingMessage(obj, options)) || []
  }

  static all = (params = {}, options = {}) =>
    As2IncomingMessage.list(params, options)
}

export default As2IncomingMessage
