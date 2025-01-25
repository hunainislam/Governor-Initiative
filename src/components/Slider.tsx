"use client"
import React, { Component } from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

export default class SlickSlider extends Component {
    render(): React.ReactNode {
        const slides = [
            { id: 1, img: '/images/slide1.jpg', title: 'Card 1' },
            { id: 2, img: '/images/slide2.jpg', title: 'Card 2' },
            { id: 3, img: '/images/slide3.jpg', title: 'Card 3' },
            { id: 4, img: '/images/slide4.jpg', title: 'Card 4' },
            { id: 5, img: '/images/slide5.jpg', title: 'Card 5' },
            { id: 6, img: '/images/slide6.jpg', title: 'Card 6' },
            { id: 7, img: '/images/slide7.jpg', title: 'Card 7' },
            { id: 8, img: '/images/slide8.jpg', title: 'Card 8' },
        ];

        const settings = {
            dots: true,
            dotsClass: "slick-dots line-indicator",
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: false,
            autoplay: true,
            responsive: [
                {
                    breakpoint: 1100,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: false,
                        infinite: true,
                    }
                },
            ],
            customPaging: (i: number) => (
                <div className='mt-2 text-xs opacity-0'>{i}</div>
            ) 
        };
        return (
            <div className='mt-10 w-full'>
                <Slider {...settings} className='w-full'>
                     {
                        slides.map((val, i) => {
                            return (
                                <div key={i} className="px-3 lg:px-1 group mb-2 md:mb-5 relative overflow-hidden cursor-pointer outline-none">
                                <div className="relative bg-slate-900 rounded-lg overflow-hidden">
                                    <Image 
                                        src={val.img} 
                                        alt={val.title} 
                                        decoding='async'
                                        width={1600} 
                                        height={900} 
                                        quality={90}  
                                        placeholder="blur"  
                                        blurDataURL={`/_next/image?url=${val.img}&w=16&q=1`} 
                                        className="object-cover w-full h-[300px]  md:h-[600px]"
                                    />
                                </div>
                            </div>
                            
                            )
                        })
                     }
                </Slider>
            </div>
        )

    }
};


