"use client"
import FsLightbox from "fslightbox-react";
import { useState } from 'react';

export default function HomeGallery() {
    const [toggler, setToggler] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (image) => {
        setSelectedImage(image);
        setToggler(!toggler);
    };

    return (
        <section className="container my-3">
            <FsLightbox
                toggler={toggler}
                sources={[selectedImage]}
            />
            <h3 className="my-3 text-center"> Gallery
                <button onClick={() => setToggler(!toggler)} className="float-end fs-5 btn text-white hms-bg-dark">View All</button>
            </h3>
            <div className="row text-center">
                <div className="col-4">
                    <div className="card" style={{ cursor: 'pointer' }}>
                        <img src="thumbs/1.png" className="card-img-top" alt="" onClick={() => handleImageClick("thumbs/1.png")} />
                    </div>
                </div>
                <div className="col-4">
                    <div className="card" style={{ cursor: 'pointer' }}>
                        <img src="thumbs/2.png" className="card-img-top" alt="" onClick={() => handleImageClick("thumbs/2.png")} />
                    </div>
                </div>
                <div className="col-4">
                    <div className="card" style={{ cursor: 'pointer' }}>
                        <img src="thumbs/3.png" className="card-img-top" alt="" onClick={() => handleImageClick("thumbs/3.png")} />
                    </div>
                </div>
            </div>
            <div className="row text-center mt-3">
                <div className="col-4">
                    <div className="card" style={{ cursor: 'pointer' }}>
                        <img src="thumbs/4.png" className="card-img-top" alt="" onClick={() => handleImageClick("thumbs/4.png")} />
                    </div>
                </div>
                <div className="col-4">
                    <div className="card" style={{ cursor: 'pointer' }}>
                        <img src="thumbs/5.png" className="card-img-top" alt="" onClick={() => handleImageClick("thumbs/5.png")} />
                    </div>
                </div>
                <div className="col-4">
                    <div className="card" style={{ cursor: 'pointer' }}>
                        <img src="thumbs/6.png" className="card-img-top" alt="" onClick={() => handleImageClick("thumbs/6.png")} />
                    </div>
                </div>
            </div>
        </section>
    );
}
