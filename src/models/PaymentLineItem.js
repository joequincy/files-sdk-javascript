import Api from '../Api'
import Logger from '../Logger'
import { getType, isArray, isInt, isObject, isString } from '../utils'

/**
 * Class PaymentLineItem
 */
class PaymentLineItem {
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

  // double # Payment line item amount
  getAmount = () => this.attributes.amount

  // date-time # Payment line item created at date/time
  getCreatedAt = () => this.attributes.created_at

  // int64 # Invoice ID
  getInvoiceId = () => this.attributes.invoice_id

  // int64 # Payment ID
  getPaymentId = () => this.attributes.payment_id

  // date-time # Payment line item updated at date/time
  getUpdatedAt = () => this.attributes.updated_at

}

export default PaymentLineItem
