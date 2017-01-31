import React from 'react';

class SignupZone extends React.Component {
	render () {
		return (
			<div className="signupZone">
		        <h2>sign up to receive our updates</h2>
		        <div className="subheader">Nulla ipsum dolor lacus, suscipit adipiscing. Cum sociis natoque penatibus et ultrices volutpat.</div>
		        <input className="searchInput" type="text" placeholder="Your e-mail"></input>
		        <button className="emailSubmit">add</button>
		    </div>
		);
	}
}

export default SignupZone;