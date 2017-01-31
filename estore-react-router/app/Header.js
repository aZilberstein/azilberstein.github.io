import React from 'react';

class Header extends React.Component {
	render(){
		return (
			<div className="container">
	    		<header>
			        <a className="logo" href="index.html"></a>
			        <ul className="nav">
			            <li><a href="index.html#/women">Women</a></li>
			            <li><a href="index.html#/men">Men</a></li>
			            <li><a href="index.html#/kids">Kids</a></li>
			            <li><a href="index.html#/soon">Coming soon</a></li>
			            <li><a href="#">About</a></li>
			        </ul>
			        <div className="headerTools">
			            <div className="toolsWrapper"> 
			            	<a className="login" href="#">Log In</a>
			            	<a className="basket" href="#">Basket</a>
			                <input className="searchInput searchInputHidden" type="text" placeholder="Search something..."></input>
			                <div className="search">
			                    <div></div>
			                </div>
			            </div>
			        </div>
			    </header>
			</div>
		);
	}
}

export default Header;