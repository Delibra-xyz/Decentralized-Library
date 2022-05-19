import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Box, Image, IconButton } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'

function PrevArrow({...props}){
    	return(
    	   <IconButton
    	   		colorScheme="gray"
    	   		aria-label='previous'
    	   		icon={<ChevronLeftIcon/>}
    	   		isRound
    	   		{...props}
    	   	/>
    	)
    }

function NextArrow({...props}){
	return(
	   <IconButton
	   		colorScheme="gray"
	   		aria-label='next'
	   		icon={<ChevronRightIcon/>}
	   		isRound
	   		{...props}
	   	/>
	)
}

const Carousel = () => {

	 const settings = {
       dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };

    const slider = React.useRef(null)

    return (
    	<div style={{overflow:"hidden", padding:"30px", margin:"auto"}}>
         <Slider {...settings} ref={slider}>
          <Image 
      				src="image2.jpg" 
      				alt="book-cover" 
      				overflow="hidden" 
      				objectFit="cover" 
      				width="100%" 
      				height="calc(100vh - 100px)"
          		/>	
          	<Image 
      				src="image3.jpg" 
      				alt="book-cover" 
      				overflow="hidden" 
      				objectFit="cover" 
      				width="100%" 
      				height="calc(100vh - 100px)"
          		/>	
          	<Image 
      				src="image4.jpg" 
      				alt="book-cover" 
      				overflow="hidden" 
      				objectFit="cover" 
      				width="100%" 
      				height="calc(100vh - 100px)"
          		/>	

          	<Image 
      				src="image5.jpg" 
      				alt="book-cover" 
      				overflow="hidden" 
      				objectFit="cover" 
      				width="100%" 
      				height="calc(100vh - 100px)"
          		/>	
          	<Image 
      				src="image6.jpg" 
      				alt="book-cover" 
      				overflow="hidden" 
      				objectFit="cover" 
      				width="100%" 
      				height="calc(100vh - 100px)"
          		/>	
        </Slider>

        <NextArrow
        	position="absolute"
        	right="80px"
        	top="50%"
        	w="30px"
        	onClick={()=> slider?.current?.slickNext()}
        />

        <PrevArrow
        	position="absolute"
        	left="80px"
        	top="50%"
        	w="30px"
        	onClick={()=> slider?.current?.slickPrev()}
        />
    </div>
    );
};


export default 	Carousel;
