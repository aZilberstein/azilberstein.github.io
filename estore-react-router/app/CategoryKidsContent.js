import React from 'react';
import BreadCrumbs from './BreadCrumbs';
import ItemBlock from './ItemBlock';
import Lookbook from './Lookbook';

import ReactMixin from 'react-mixin';
import ReactFire from 'reactfire';
import firebase from 'firebase';

class CategoryKidsContent extends React.Component {
	constructor(){
        super();
        this.state = {
            kidsFemTops: [{}, {}, {}, {}],
            kidsMaleTops: [{}, {}, {}, {}],
            kidsMixJeans: [{}, {}, {}, {}]
        }
    }

    componentDidMount() {
        this.bindAsArray(firebase.database().ref().child("kidsFemTops"), "kidsFemTops");
        this.bindAsArray(firebase.database().ref().child("kidsMaleTops"), "kidsMaleTops");
        this.bindAsArray(firebase.database().ref().child("kidsMixJeans"), "kidsMixJeans");
    }

	render () {
		const kidsFemTops = this.state.kidsFemTops;
		const kidsMaleTops = this.state.kidsMaleTops;
		const kidsMixJeans = this.state.kidsMixJeans;
		return (
			<div className="container">
				<BreadCrumbs categoryType= 'kids' />
				<ItemBlock categoryName = "tops for girls" itemBank = {kidsFemTops}/>
				<ItemBlock categoryName = "tops for boys" itemBank = {kidsMaleTops}/>
				<ItemBlock categoryName = "jeans for all" itemBank = {kidsMixJeans}/>
				<Lookbook/>
			</div>
		);
	}
}

ReactMixin(CategoryKidsContent.prototype, ReactFire);

export default CategoryKidsContent;