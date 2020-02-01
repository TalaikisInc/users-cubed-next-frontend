import { CardElement, Elements, useStripe, useElements } from '@stripe/react-stripe-js'

import { STRIPE_KEY } from 'config'
const stripe = window.Stripe(STRIPE_KEY)

const MyCheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement)
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button>Pay</button>
    </form>
  )
}

const Checkout = () => {
  return (
    <Elements stripe={stripe}>
      <MyCheckoutForm />
    </Elements>
  )
}

export default Checkout
