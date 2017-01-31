import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';

class HomePage extends React.Component {
	componentDidMount() {
    	document.title = "Home";
  	}

	render() {
		return (
			<div>
				<Header/>
				<MainContent/>
				<Footer/>
			</div>
		);
	}
}

export default HomePage;