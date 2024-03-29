import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100
	const publishableKey = 'pk_test_eD4nXDlwmoAtBnXfYBo1taDi'
	const onToken = (token) => {
		console.log(token, 'ééé')
		alert('Payment Successful')
	}
	return (
		<StripeCheckout
			label="Pay Now"
			name="Portfolio1 Store Ltd."
			billingAddress
			shippingAddress
			image="https://svgshare.com/i/CUz.svg"
			description={`yout total is $$${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	)
}
export default StripeCheckoutButton
