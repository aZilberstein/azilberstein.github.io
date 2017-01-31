import React from 'react';
import Header from './Header';
import CategoryWomenContent from './CategoryWomenContent';
import Footer from './Footer';


class CategoryWomenPage extends React.Component {
	componentDidMount() {
    	document.title = "Women";
  	}
	render() {
		return (
			<div>
				<Header/>
				<CategoryWomenContent/>
				<Footer/>
			</div>
		);
	}
}

export default CategoryWomenPage;