import React from 'react'
import { Link } from 'react-router-dom';
import './navBar.css'

const navBar = () => {
 	return (
 	 	<div className='navBar'>
			<div className='container'>
				<div className='navBarWrapper'>
					<div className='logo'>
						<img src="https://xhubaddis.com/wp-content/uploads/2021/11/UPDATED-LOGOS-GUYS-02.png" alt="XHUB" />
					</div>
					<div className='menu'>
						<ul>
							<Link to='/'>
								<li>Home</li>
							</Link>
							<Link to='/'>
								<li>About us</li>
							</Link>
							<Link to='/'>
								<li>Our programs</li>
							</Link>
							<Link to='/'>
								<li>Our products</li>
							</Link>
							<Link to='/'>
								<li>Our partners</li>
							</Link>
							<Link to='/'>
								<li>Contact Us</li>
							</Link>
						</ul>
					</div>
				</div>
			</div>
 	 	</div>
 	);
};

export default navBar;