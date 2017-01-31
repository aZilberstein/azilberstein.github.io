import React from 'react';


class BreadCrumbs extends React.Component {
	render () {
		return (
			<div className="breadcrumbs">
				<a href="index.html#/" className="breadcrumbsHome">home</a>
				<a>/</a>
				<a href={"index.html#/"+this.props.categoryType} className="breadcrumbsHome">{this.props.categoryType}</a>
			</div>
		);
	}
}

export default BreadCrumbs;