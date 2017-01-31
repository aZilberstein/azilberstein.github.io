import React from 'react';
import PseudoSlider from './PseudoSlider';
import PromoZone from './PromoZone';
import SignupZone from './SignupZone';
import Lookbook from './Lookbook';

class MainContent extends React.Component {
	render () {
		return (
			<div className="container">
				<PseudoSlider/>
				<PromoZone/>
				<SignupZone/>
				<Lookbook/>
			</div>
		);
	}
}

export default MainContent;