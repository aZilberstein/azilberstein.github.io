import React from 'react';
import Header from './Header';
import CategoryMenContent from './CategoryMenContent';
import Footer from './Footer';


class CategoryMenPage extends React.Component {
	componentDidMount() {
    	document.title = "Men";
  	}
	render() {
		return (
			<div>
				<Header/>
				<CategoryMenContent/>
				<Footer/>
			</div>
		);
	}
}

export default CategoryMenPage;