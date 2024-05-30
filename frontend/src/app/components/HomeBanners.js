'use client'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios';
import { useState, useEffect } from "react";

export default function HomeBanners() {
    const [banners, setBanners] = useState([])
    const [error, setError] = useState(null)

    const fetchBanners = async () => {
        try {
            const response = await axios.get(`${process.env.API_URL}/api/banners`);
            setBanners(response.data);
        } catch (err) {
            setError(err.message);
        }
    }

    useEffect(() => {
        fetchBanners();
    }, [])

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <Carousel showThumbs={false}>
            {
                banners.map(banner => (
                    <div key={banner.id}>
                        <img src={banner.image} alt={banner.title} />
                    </div>
                ))

            }
        </Carousel>
    );
}