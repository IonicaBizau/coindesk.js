## Documentation

You can see below the API reference of this module.

### `current(currency, cb)`
Fetches the current price.

#### Params

- **String** `currency`: The currency. If not provided, the Bitcoin price will be fetched in different currencies.
- **Function** `cb`: The callback function.

#### Return
- **Promise** The request object with a promise.

### `historical(opts, cb)`
Fetches the Bitcoin prices from the past.

#### Params

- **Object** `opts`: An object containing the following fields:
   - `index` (String): `[USD/CNY]` The index to return data for. Defaults
      to USD.
   - `currency` (String): The currency to return the data in, specified in
      ISO 4217 format. Defaults to USD.
   - `start` (Date) and `end` (Date): Allows data to be returned for a
      specific date range. Must be listed as a pair of start and end
      parameters.
   - `for` (String): If `yesterday`, will return a single value for the
      previous day. Overrides the start/end parameter.
- **Function** `cb`: The callback function.

#### Return
- **Promise** The request object with a promise.

