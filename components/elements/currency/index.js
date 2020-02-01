import React from 'react'
import LocalCurrency from 'react-local-currency'

import { IPDATA_KEY, OEXCHANGE_KEY } from 'config'

const Currency = ({ amount, base }) => (
  <LocalCurrency
    amount={amount}
    base={base}
    IPDATA_API_KEY={IPDATA_KEY}
    OXR_API_ID={OEXCHANGE_KEY}
    render={({ data, loading, error }) => {
      if (error) return `Error! ${error.message}`
      if (loading) return 'Loading ...'
      if (!data) return null

      return (
        <div>
          <h3>
            My service price: <strong>7 USD.</strong>
          </h3>
          <h3>
            My currency based on my IP: <strong>{`${data.currency}`}</strong>
          </h3>
          <h3>
            My local price is: <strong>{`${data.amount} ${data.currency}`}</strong>
          </h3>
        </div>
      )
    }}
  />
)

export default Currency
