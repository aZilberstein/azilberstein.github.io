import React from 'react';
import BreadCrumbs from './BreadCrumbs';
import ItemBlock from './ItemBlock';
import Lookbook from './Lookbook';

import ReactMixin from 'react-mixin';
import ReactFire from 'reactfire';
import firebase from 'firebase';

class CategoryMenContent extends React.Component {
	constructor(){
        super();
        this.state = {
            menCoats: [{}, {}, {}, {}],
            menJeans: [{}, {}, {}, {}],
            menShirts: [{}, {}, {}, {}]
        }
    }

    componentDidMount() {
        this.bindAsArray(firebase.database().ref().child("menCoats"), "menCoats");
        this.bindAsArray(firebase.database().ref().child("menJeans"), "menJeans");
        this.bindAsArray(firebase.database().ref().child("menShirts"), "menShirts");
    }

	render () {
		const menCoats = this.state.menCoats;
		const menJeans = this.state.menJeans;
		const menShirts = this.state.menShirts;

		return (
			<div className="container">
				<BreadCrumbs categoryType='men'/>
				<ItemBlock categoryName = "coats" itemBank = {menCoats}/>
				<ItemBlock categoryName = "jeans" itemBank = {menJeans}/>
				<ItemBlock categoryName = "shirts" itemBank = {menShirts}/>
				<Lookbook/>
			</div>
		);
	}
}

ReactMixin(CategoryMenContent.prototype, ReactFire);

export default CategoryMenContent;