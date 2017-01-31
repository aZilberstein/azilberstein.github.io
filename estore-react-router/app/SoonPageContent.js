import React from 'react';
import BreadCrumbs from './BreadCrumbs';
import ItemBlock from './ItemBlock';
import Lookbook from './Lookbook';

import ReactMixin from 'react-mixin';
import ReactFire from 'reactfire';
import firebase from 'firebase';

class SoonPageContent extends React.Component {
	constructor(){
        super();
        this.state = {
            soonFemaleDresses: [{}, {}, {}, {}],
            soonFemaleSkirts: [{}, {}, {}, {}],
            soonMaleTops: [{}, {}, {}, {}]
        }
    }

    componentDidMount() {
        this.bindAsArray(firebase.database().ref().child("soonFemaleDresses"), "soonFemaleDresses");
        this.bindAsArray(firebase.database().ref().child("soonFemaleSkirts"), "soonFemaleSkirts");
        this.bindAsArray(firebase.database().ref().child("soonMaleTops"), "soonMaleTops");
    }

	render () {
		const soonFemaleDresses = this.state.soonFemaleDresses;
		const soonFemaleSkirts = this.state.soonFemaleSkirts;
		const soonMaleTops = this.state.soonMaleTops;

		return (
			<div className="container">
				<BreadCrumbs categoryType='men'/>
				<ItemBlock categoryName = "dresses" itemBank = {soonFemaleDresses}/>
				<ItemBlock categoryName = "skirts" itemBank = {soonFemaleSkirts}/>
				<ItemBlock categoryName = "male tops" itemBank = {soonMaleTops}/>
				<Lookbook/>
			</div>
		);
	}
}

ReactMixin(SoonPageContent.prototype, ReactFire);

export default SoonPageContent;