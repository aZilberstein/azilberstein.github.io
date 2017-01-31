import React from 'react';
import BreadCrumbs from './BreadCrumbs';
import ItemBlock from './ItemBlock';
import Lookbook from './Lookbook';

import ReactMixin from 'react-mixin';
import ReactFire from 'reactfire';
import firebase from 'firebase';

class CategoryWomenContent extends React.Component {
	constructor(){
        super();
        this.state = {
            womenActiveWear: [{}, {}, {}, {}],
            womenWinterWear: [{}, {}, {}, {}],
            womenShoes: [{}, {}, {}, {}]
        }
    }

    componentDidMount() {
        this.bindAsArray(firebase.database().ref().child("womenActiveWear"), "womenActiveWear");
        this.bindAsArray(firebase.database().ref().child("womenWinterWear"), "womenWinterWear");
        this.bindAsArray(firebase.database().ref().child("womenShoes"), "womenShoes");
    }

	render () {
		const womenActiveWear = this.state.womenActiveWear;
		const womenWinterWear = this.state.womenWinterWear;
		const womenShoes = this.state.womenShoes;
		return (
			<div className="container">
				<BreadCrumbs categoryType = 'women'/>
				<ItemBlock categoryName = "activewear" itemBank = {womenActiveWear}/>
				<ItemBlock categoryName = "winterwear" itemBank = {womenWinterWear}/>
				<ItemBlock categoryName = "shoes" itemBank = {womenShoes}/>
				<Lookbook/>
			</div>
		);
	}
}

ReactMixin(CategoryWomenContent.prototype, ReactFire);

export default CategoryWomenContent;