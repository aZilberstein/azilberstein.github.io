import React from 'react';
import Header from './Header';
import CategoryKidsContent from './CategoryKidsContent';
import Footer from './Footer';


class CategoryKidsPage extends React.Component {
	componentDidMount() {
    	document.title = "Kids";
  	}
	render() {
		return (
			<div>
				<Header/>
				<CategoryKidsContent/>
				<Footer/>
			</div>
		);
	}
}

export default CategoryKidsPage;