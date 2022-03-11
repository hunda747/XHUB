import React from 'react'
import { Link } from 'react-router-dom';
import './footer.css'

const footer = () => {
  return (
		<div className='footer'>
			<div className='container'>
				<div className='upper'>
					<ul>
						<Link to='/'>
							<li className='border'>Home</li>
						</Link>
						<Link to='/'>
							<li className='border'>About us</li>
						</Link>
						<Link to='/'>
							<li className='border'>Our programs</li>
						</Link>
						<Link to='/'>
							<li className='border'>Our products</li>
						</Link>
						<Link to='/'>
							<li className='border'>Our partners</li>
						</Link>
						<Link to='/'>
							<li>Contact Us</li>
						</Link>
					</ul>
				</div>
				<div className='lower'>
					<p>"THE BEST CONTRIBUTION YOU GIVE TO YOURS OWN GROWTH DEVELOPMENT"</p>
				</div>
			</div>
		</div>
  )
}

export default footer;