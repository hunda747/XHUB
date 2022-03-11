import React from 'react'
import './home.css'

import NavBar from '../../component/navBar/navBar'
import ImageSlider from '../../component/imageSlider/imageSlider'
import YoutubeVid from '../../component/youtubeVid/youtubeVid'
import Footer from '../../component/footer/footer'
import { sliderData } from '../../component/imageSlider/sliderData'
import { Button, Box } from '@material-ui/core'

export default function Home() {
 return(
  <>
   	<NavBar />
   	<ImageSlider className="imageSliderComponent" slides={sliderData} />
   	<div className='video'>
   	 	<div className='container'>
   	 	 	<h1>Our Video</h1>
   	 	 	<div className='youVidItems'>
   	 	 	 	<div className='youVid'>
   	 	 	 	 	<YoutubeVid url={'wulE-oW5-bw'}/>
   	 	 	 	</div>
   	 	 	 	<div className='youVid'>
   	 	 	 	 	<YoutubeVid url={'cUdbjW6f-0A'}/>
   	 	 	 	</div>
   	 	 	 	<div className='youVid'>
   	 	 	 	 	<YoutubeVid url={'-7ixI9qPk6I'}/>
   	 	 	 	</div>
   	 	 	</div>
				<Box textAlign='center'>
					<Button variant="contained" color='secondary' className='btn'>Visit Our Youtube Channel</Button>
				</Box>
   	 	</div>
   	</div>
		<div className='events'>
   	 	<div className='container'>
   	 	 	<h1>Events</h1>
   	 	 	<div className='eventItems'>
   	 	 	 	<div className='event'>
   	 	 	 	 	<h2>EMS</h2>
						<img src="https://xhubaddis.com/wp-content/uploads/2022/01/website-3-1-1024x614.jpeg" alt="" />
   	 	 	 	</div>
   	 	 	 	<div className='event'>
   	 	 	 	 	<h2>WORDSHOP</h2>
						<img src="https://xhubaddis.com/wp-content/uploads/2022/01/IMGM1412.jpg" alt="" />
   	 	 	 	</div>
   	 	 	 	<div className='event'>
   	 	 	 	 	<h2>NETWORKING</h2>
						<img src="https://xhubaddis.com/wp-content/uploads/2022/01/IMGM1412.jpg" 
						alt="" />
   	 	 	 	</div>
   	 	 	</div>
   	 	</div>
   	</div>
		<div className='events'>
   	 	<div className='container'>
   	 	 	<h1>Upcoming Event</h1>
					<div className='eventItems'>
   	 	 	 		<div className='event'>
   	 	 	 		</div>
   	 	 	</div>
   	 	</div>
   	</div>
		 <Footer/>
  </>
 )
}