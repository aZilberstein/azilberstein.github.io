import React from 'react';

class Footer extends React.Component {
	render () {
		return (
			<div className="container">
			    <footer>
			        <div className="footerBlock footerCollection">
			            <h5>collection</h5>
			            <ul></ul>
			            <li><a href="category.html">Woman (1725)</a></li>
			            <li><a href="category.html">Men (635)</a></li>
			            <li><a href="category.html">Kids(2514)</a></li>
			            <li><a href="category.html">Coming Soon (76)</a></li>
			        </div>
			        <div className="footerBlock footerSite">
			            <h5>site</h5>
			            <ul>
			            	<li><a href="#">Terms of Service</a></li>
			            	<li><a href="#">Privacy Policy</a></li>
			            	<li><a href="#">Copytight Policy</a></li>
			            	<li><a href="#">Press Kit</a></li>
			            	<li><a href="#">Support</a></li>
			            </ul>
			        </div>
			        <div className="footerBlock footerShop">
			            <h5>shop</h5>
			            <ul>
			            	<li><a href="#">About us</a></li>
			            	<li><a href="#">Shipping Metods</a></li>
			            	<li><a href="#">Career</a></li>
			            	<li><a href="#">Contact</a></li>
			             </ul>
			        </div>
			        <div className="footerBlock footerSocial">
			            <h5>social</h5>
			            <p>Shoper is made with love in Warsaw, </p>
			            <p>2014 © All rights reserved. El Passion</p>
			            <div className="socialWrapper">
			                <a className="twitterSocial" href="#">
			                    <div></div>
			                </a>
			                <a className="facebookSocial" href="#">
			                    <div></div>
			                </a>
			                <a className="instagramSocial" href="#">
			                    <div></div>
			                </a>
			            </div>
			        </div>
			    </footer>
			</div>
		);
	}
}

export default Footer;