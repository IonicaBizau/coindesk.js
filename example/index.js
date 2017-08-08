"use strict"

const BitcoinValue = require("../lib")

BitcoinValue.historical().then(data => {
    console.log(data)
    // =>
    // { bpi:
    //    { '2017-07-08': 2579.9338,
    //      ...
    //      '2017-08-06': 3255.0025,
    //      '2017-08-07': 3431.9688 },
    //   disclaimer: 'This data was produced from the CoinDesk Bitcoin Price Index. BPI value data returned as USD.',
    //   time:
    //    { updated: 'Aug 8, 2017 00:03:00 UTC',
    //      updatedISO: '2017-08-08T00:03:00+00:00' } }
}).catch(err => {
    console.log(err)
})

BitcoinValue.current("RON", (err, data) => {
    console.log(err || data)
    // =>
    // { time:
    //    {...},
    //   disclaimer: '...',
    //   bpi:
    //    { USD:
    //       {...},
    //      RON:
    //       { code: 'RON',
    //         rate: '13,370.4374',
    //         description: 'Romanian Leu',
    //         rate_float: 13370.4374 } } }
})

BitcoinValue.historical({
    start: new Date(2011, 0, 1)
  , end: new Date(2011, 0, 31)
  , currency: "EUR"
}).then(data => {
    console.log(data)
    // =>
    // { bpi:
    //    { '2011-01-01': 0.2243,
    //        ...
    //      '2011-01-30': 0.3513,
    //      '2011-01-31': 0.3796 },
    //   disclaimer: '...',
    //   time:
    //    {...} }
}).catch(err => {
    console.error(err)
})
