import React, { useState } from "react";
import validator from 'validator'

const App = () => {

const [errorMessage, setErrorMessage] = useState('')
	
const validateCreditCard = (value) => {
	
	if (validator.isCreditCard(value)) {
	setErrorMessage('Valid Credit Card Number')
	} else {
	setErrorMessage('Invalid Credit Card Number!')
	}
}

return (
	<div style={{
	marginLeft: '200px',
	}}>
	<pre>
		<h2>Credit Card Validation</h2>
    <h3>Using Luhn Algorithm</h3>
		<span>Enter Credit Card Number to Validate: </span><br></br><input type="text"
		onChange={(e) => validateCreditCard(e.target.value)}></input> <br />
		<span style={{
		fontWeight: 'bold',
		color: 'red',
		}}>{errorMessage}</span>
	</pre>
	</div>
);
}

export default App
