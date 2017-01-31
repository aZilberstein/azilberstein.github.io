import React from 'react';



class ItemBlock extends React.Component {
	render () {
		return (
			<div className="categoryWrapper">
	            <h2>{this.props.categoryName}</h2><a className="showMore">show more</a>
	            <div className="displayItems">
	                <div className="item item1">
	                    <div className="itemPhoto">
	                    	<img src={(this.props.itemBank[0] !== undefined) ? this.props.itemBank[0].image : ''}></img>
	                    </div>
	                    <p className="name">{(this.props.itemBank[0] !== undefined) ? this.props.itemBank[0].name : ''}</p>
	                    <p className="price">{(this.props.itemBank[0] !== undefined) ? this.props.itemBank[0].price : ''}</p>
	                </div>
	                <div className="item item2">
	                    <div className="itemPhoto">
	                    	<img src={(this.props.itemBank[1] !== undefined) ? this.props.itemBank[1].image : ''}></img>
	                    </div>
	                    <p className="name">{(this.props.itemBank[1] !== undefined) ? this.props.itemBank[1].name : ''}</p>
	                    <p className="price">{(this.props.itemBank[1] !== undefined) ? this.props.itemBank[1].price : ''}</p>
	                </div>
	                <div className="item item3">
	                    <div className="itemPhoto">
	                    	<img src={(this.props.itemBank[2] !== undefined) ? this.props.itemBank[2].image : ''}></img>
	                    </div>
	                    <p className="name">{(this.props.itemBank[2] !== undefined) ? this.props.itemBank[2].name : ''}</p>
	                    <p className="price">{(this.props.itemBank[2] !== undefined) ? this.props.itemBank[2].price : ''}</p>
	                </div>
	                <div className="item item4">
	                    <div className="itemPhoto">
	                    	<img src={(this.props.itemBank[3] !== undefined) ? this.props.itemBank[3].image : ''}></img>
	                    </div>
	                    <p className="name">{(this.props.itemBank[3] !== undefined) ? this.props.itemBank[3].name : ''}</p>
	                    <p className="price">{(this.props.itemBank[3] !== undefined) ? this.props.itemBank[3].price : ''}</p>
	                </div>
	            </div>
	        </div>
		);
	}
}

export default ItemBlock;