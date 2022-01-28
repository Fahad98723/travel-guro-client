import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation"
// Import Swiper styles
import 'swiper/css';
import SwiperCore, {
    Navigation
  } from 'swiper';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
  
  // install Swiper modules
  SwiperCore.use([Navigation]);
const bannerData = [
    {title : 'Travel is Life ', img : 'https://i.ibb.co/h1K0D0n/banner-7.jpg'},
    {title : 'Make Your Life Memorable By Travel ', img :'https://i.ibb.co/wNJJ826/banner-6.jpg'},
    {title : 'Live Your Life With Travel', img : 'https://i.ibb.co/b55CGLV/banner-5.jpg'},
    {title : 'Travel Make Everyone Happy', img : 'https://i.ibb.co/HDfjQC2/banner-4.jpg'},
    {title : 'Love Travel You Will Love The World', img : 'https://i.ibb.co/qCVxdRr/johnny-chau-Wb-BTl-Ok-CRY-unsplash.jpg'}
]

const Banner = () => {
    return (
        <div><Swiper navigation={true} className="mySwiper">
            {
                bannerData.map(banner => 
                    <SwiperSlide 
                                    
                    >
                        <div style={{background: ` linear-gradient(rgba(34, 65, 124, 0.5),rgba(26, 54, 105, 0.5)) ,url('${banner.img}) `, backgroundRepeat:'no-repeat', backgroundPosition:'center center', backgroundSize:'cover', padding:'200px 0px'}}>
                            <Container className='text-center text-white'>
                            
                            <h1>
                            {banner.title}
                            </h1>
                            <p  className='w-50 mx-auto'>
                            Find Your Travel Places And I think you will know about the project Ser vice In Usa. Unlimited Access. 100% Secure. Always Facts. Privacy Friendly. The Best Resources. 
                        
                            Results  Answers. Types: Best Results, Explore Now, New Sources, Best in Searc
                            </p>
                            
                            <Link to='/contact' className="btn btn-danger">Contact</Link>
                            <Link to='/addExperience' className="btn ms-2 btn-danger">Add Experience</Link>
                            </Container>
                        </div>
                    </SwiperSlide>)
            }
            </Swiper>
        </div>
    );
};

export default Banner;