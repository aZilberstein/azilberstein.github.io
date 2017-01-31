import React from 'react';
import Header from './Header';
import SoonPageContent from './SoonPageContent';
import Footer from './Footer';



class SoonPage extends React.Component {
	componentDidMount() {
    	document.title = "Coming soon";
  	}
	render() {
		return (
			<div>
				<Header/>
				<SoonPageContent/>
				<Footer/>
			</div>
		);
	}
}

export default SoonPage;