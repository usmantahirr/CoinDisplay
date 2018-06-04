## How to run the App

### 1. Install dependencies

```sh
$ yarn
```

### 2. Run the app

```sh
$ yarn run dev
```

It will start the development server with [HMR](https://webpack.github.io/docs/hot-module-replacement) on top of it.

> [http://localhost:3000](http://localhost:3000) — Development server<br>

Now you can open [http://localhost:3000](http://localhost:3000) in browser and start developing.

## Project Structure



## API Details (CoinAPI.io)

**OHLCV** *(Open, High, Low, Close, Volume)*

**Headers**  `X-CoinAPI-Key: 90E70A51-A3F7-4193-85F8-819BD0999527`

**URL:**  `GET /v1/ohlcv/{symbol_id}/latest?period_id={period_id}&limit={limit}`

**SYMBOL_ID**:  {EXCHANGE} _ {TYPE} _ {FROM} _ {TO}
**EXAMPLES:** If Exchage is *BitRex*, Type is *Spot*, From is *ETH* and to is *USD*
Symbol ID Would be *BITREX_SPOT_ETH_USD*

**PERIOD_ID:** {TIME}{UNIT}
**Examples:** 1HRS, 4HRS, 8HRS, 1DAY, 3DAY, 7DAY,1MTH

#### ETH to USD
Get BTC to USD Timeseries data

#### BTC to USD
Details

#### API Response
```json
// v1/ohlcv/BITSTAMP_SPOT_BTC_USD/latest?period_id=1MIN
[
  {
    "time_period_start": "2017-08-09T14:31:00.0000000Z",
    "time_period_end": "2017-08-09T14:32:00.0000000Z",
    "time_open": "2017-08-09T14:31:01.0000000Z",
    "time_close": "2017-08-09T14:31:46.0000000Z",
    "price_open": 3255.590000000,
    "price_high": 3255.590000000,
    "price_low": 3244.740000000,
    "price_close": 3244.740000000,
    "volume_traded": 16.903274550,
    "trades_count": 31
  },
  {
    "time_period_start": "2017-08-09T14:30:00.0000000Z",
    "time_period_end": "2017-08-09T14:31:00.0000000Z",
    "time_open": "2017-08-09T14:30:05.0000000Z",
    "time_close": "2017-08-09T14:30:35.0000000Z",
    "price_open": 3256.000000000,
    "price_high": 3256.010000000,
    "price_low": 3247.000000000,
    "price_close": 3255.600000000,
    "volume_traded": 58.131397920,
    "trades_count": 33
  }
]
```

**Output** (Explained)
1. **time_period_start:** Period starting time (range left inclusive)
2. **time_period_end** Period ending time (range right exclusive)
3. **time_open** Time of first trade inside period range
4. **time_close** Time of last trade inside period range
5. **price_open** First trade price inside period range
6. **price_high** Highest traded price inside period range
7. **price_low** Lowest traded price inside period range
8. **price_close** Last trade price inside period range
9. **volume_traded** Cumulative base amount traded inside period range
10. **trades_count** Amount of trades executed inside period range

### Error Response

| Error Code | Meaning                                                      |
| ---------- | ------------------------------------------------------------ |
| 400        | Bad Request – There is something wrong with your request     |
| 401        | Unauthorized – Your API key is wrong                         |
| 403        | Forbidden – Your API key doesnt’t have enough privileges to access this resource |
| 429        | Too many requests – You have exceeded your API key rate limits |
| 550        | No data – You requested specific single item that we don’t have at this moment. |