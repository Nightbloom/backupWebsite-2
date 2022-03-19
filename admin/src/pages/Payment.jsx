import React from 'react'

const Order = () => {

    
        var url = '/api/payment/order';
        var params = {
            amount: document.getElementById('order-amt').value,  
            currency: "INR",
            receipt: "su001",
            payment_capture: '1'
        };
        
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function (res) {
            if (xmlHttp.readyState === 4) {
                res=JSON.parse(xmlHttp.responseText);
                document.getElementById('rzp-text').value=res.sub.id;
            }
        }
        xmlHttp.open("POST", url, true); // false for synchronous request
        xmlHttp.setRequestHeader("Content-type", "application/json");
        xmlHttp.send(JSON.stringify(params));
    

}


const Loader = (src) => {
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



const Checkout = async (e)  => { 
    
    
    const script = await Loader('https://checkout.razorpay.com/v1/checkout.js')
    
    if (script) {
        alert('Razorpay SDK failed to load. Are you online?')
        return
    }

     var options = {
         "key": "rzp_test_9I8gTyiGHoVj8K",  //Enter your razorpay key
         "currency": "INR",
         "name": "Razor Tutorial",
         "description": "Razor Test Transaction",
         "image": "https://previews.123rf.com/images/subhanbaghirov/subhanbaghirov1605/subhanbaghirov160500087/56875269-vector-light-bulb-icon-with-concept-of-idea-brainstorming-idea-illustration-.jpg",
         "order_id": document.getElementById('rzp-text').value,
         "handler": function (response){
             document.getElementById('order-pay-id').value=response.razorpay_payment_id;
             document.getElementById('order-id').value=response.razorpay_order_id;
             document.getElementById('order-sig').value=response.razorpay_signature;
            },
            "theme": {
                "color": "#227254"
            }
        };
        var rzp1 = new window.Razorpay(options);
        rzp1.open();
        // e.preventDefault();
        

}

const Verfiy = () => {
    
    var url = '/api/payment/verify';
    var params = {
        razorpay_order_id:  document.getElementById('order-id').value,  
        razorpay_payment_id:  document.getElementById('order-pay-id').value,
        razorpay_signature:  document.getElementById('order-sig').value
    };
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function (res) {
        if (xmlHttp.readyState === 4) {
            alert(xmlHttp.responseText);
    }
    }
    xmlHttp.open("POST", url, true); // false for synchronous request
    xmlHttp.setRequestHeader("Content-type", "application/json");
    xmlHttp.send(JSON.stringify(params));
}


const Payment = () => {
  return (
    <div>
        <hr/>
         
         
        <br/>
            <br/>
            <br/>
            <label>Amount    :</label><input type="text" id="order-amt" /><br/>
            <button id="order-button1" onClick={Order}>Get Order id from server</button> <br/>

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