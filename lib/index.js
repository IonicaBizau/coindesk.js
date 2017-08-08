"use strict"

const req = require("jsonrequest")
    , qs = require("querystring")
    , Daty = require("daty")
    , noop = require("noop6")

const BitcoinValue = module.exports = {}

const COINDESK_HOST = BitcoinValue.HOST = "https://api.coindesk.com/v1/bpi"

/**
 * current
 * Fetches the current price.
 *
 * @name current
 * @function
 * @param {String} currency The currency. If not provided, the Bitcoin price will be fetched in different currencies.
 * @param {Function} cb The callback function.
 * @returns {Promise} The request object with a promise.
 */
BitcoinValue.current = (currency, cb) => {
    if (typeof currency === "function") {
        cb = currency
    }
    if (typeof currency === "string") {
        return req(`${COINDESK_HOST}/currentprice/${currency}.json`, cb || noop)
    }
    return req(`${COINDESK_HOST}/currentprice.json`, cb || noop)
}

/**
 * historical
 * Fetches the Bitcoin prices from the past.
 *
 * @name historical
 * @function
 * @param {Object} opts An object containing the following fields:
 *
 *    - `index` (String): `[USD/CNY]` The index to return data for. Defaults
 *       to USD.
 *    - `currency` (String): The currency to return the data in, specified in
 *       ISO 4217 format. Defaults to USD.
 *    - `start` (Date) and `end` (Date): Allows data to be returned for a
 *       specific date range. Must be listed as a pair of start and end
 *       parameters.
 *    - `for` (String): If `yesterday`, will return a single value for the
 *       previous day. Overrides the start/end parameter.
 *
 * @param {Function} cb The callback function.
 * @returns {Promise} The request object with a promise.
 */
BitcoinValue.historical = (opts, cb) => {
    if (typeof opts === "function") {
        cb = opts
        opts = null
    }
    if (opts) {
        if (opts.end) { opts.end = new Daty(opts.end).format("YYYY-MM-DD") }
        if (opts.start) { opts.start = new Daty(opts.start).format("YYYY-MM-DD") }
        return req(`${COINDESK_HOST}/historical/close.json?${qs.stringify(opts)}`, cb || noop)
    }
    return req(`${COINDESK_HOST}/historical/close.json`, cb || noop)
}
