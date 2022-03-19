import React, { useState } from 'react'

const loadScript = (src) => {
	return new Promise((resolve) => {
		const script = document.createElement('script')
		script.src = src
		script.onload = () => {
			resolve(true)
		}
		script.onerror = () => {
			resolve(false)
		}
		document.body.appendChild(script)
	})
}

const __DEV__ = document.domain === 'localhost'




const Payment = () => {

	const [name, setName] = useState('Mehul')

	async function displayRazorpay() {
		const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

		if (!res) {
			alert('Razorpay SDK failed to load. Are you online?')
			return
		}

		const data = await fetch('http://localhost:1337/razorpay', { method: 'POST' }).then((t) =>
			t.json()
		)

		console.log(data)

		const options = {
			key: __DEV__ ? 'rzp_test_uGoq5ABJztRAhk' : 'PRODUCTION_KEY',
			currency: data.currency,
			amount: data.amount.toString(),
			order_id: data.id,
			name: 'Donation',
			description: 'Thank you for nothing. Please give us some money',
			image: 'http://localhost:1337/logo.svg',
			handler: function (response) {
				alert(response.razorpay_payment_id)
				alert(response.razorpay_order_id)
				alert(response.razorpay_signature)
			},
			prefill: {
				name,
				email: 'sdfdsjfh2@ndsfdf.com',
				phone_number: '9899999999'
			}
		}
		const paymentObject = new window.Razorpay(options)
		paymentObject.open()
	}



  return (
    <div>
        <hr/>
         
        <br/>
            <br/>
            <br/>
            <label>Amount    :</label><input type="text" id="order-amt" /><br/>

            <button id="order-button1" onClick={Order}>Get Order id from server</button> <br/>
            <button id="order-button1" onClick={displayRazorpay}>Get Razorpay</button> <br/>

            <br/>
            <br/>
            <br/>
            <br/>
            <hr/>

            <label>Order id   :</label><input type="text" id="rzp-text" /><br/>
            <button id="rzp-button1" onClick={Checkout}>CHeckout</button>
            <div id="paymentDetails"></div>
        
            <br/>
            <br/>
            <br/>
            <br/>
            <hr/>


            <label>Order id    :</label><input type="text" id="order-id" />
            <br/>
            <label>payment id  :</label><input type="text" id="order-pay-id" />
            <br/>
            <label>Signature   :</label><input type="text" id="order-sig" />

            <br/>
            <label>Verify Signature</label><button id="verify-button1" onClick={Verfiy}>Verify</button>
         
    </div>
  )
}

export default Payment