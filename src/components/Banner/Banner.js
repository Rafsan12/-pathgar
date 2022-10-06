import React from 'react';
import banner from '../../banner/banner1.jpeg'
import banner2 from '../../banner/banner2.jpeg';
import banner3 from '../../banner/banner3.jpeg';

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full h-72">
                    <img src={banner} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle bg-transparent">❮</a>
                        <a href="#slide2" className="btn btn-circle bg-transparent">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full h-72">
                    <img src={banner2} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle bg-transparent">❮</a>
                        <a href="#slide3" className="btn btn-circle bg-transparent">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full h-72">
                    <img src={banner3} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle bg-transparent">❮</a>
                        <a href="#slide1" className="btn btn-circle bg-transparent">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;