'use client'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function HomeBanners() {
    return (
        <Carousel showThumbs={false}>
            <div>
                <img src="/banners/banner-1.png" alt="Banner 1" />
                {/* <p className="legend">Legend 1</p> */}
            </div>
            <div>
                <img src="/banners/banner-2.jpeg" alt="Banner 1" />
                {/* <p className="legend">Legend 2</p> */}
            </div>
            <div>
                <img src="/banners/banner-1.png" alt="Banner 1" />
                {/* <p className="legend">Legend 3</p> */}
            </div>
        </Carousel>
    );
}