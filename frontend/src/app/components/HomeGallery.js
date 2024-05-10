'use client'
import FsLightbox from "fslightbox-react";
import { useState } from 'react'

export default function HomeGallery() {
    const [toggler, setToggler] = useState(false);

    return (
        <section className="container my-3">
            <FsLightbox 
              toggler = {toggler}
              source={[
                "thumbs/1.png",
                "thumbs/1.png",
                "thumbs/1.png",
              ]}
            />
            <h3 className="my-3 text-center"> Gallery 
            <button onClick={()=> setToggler(!toggler)} className="float-end fs-5 btn text-white hms-bg-dark">View All</button></h3>
            <div className="row text-center">
                <div className="col-4">
                    <div className="card">
                        <img src="thumbs/1.png" className="card-img-top" alt="" />
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <img src="thumbs/1.png" className="card-img-top" alt="" />
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <img src="thumbs/1.png" className="card-img-top" alt="" />
                    </div>
                </div>
            </div>
            <div className="row text-center mt-3">
                <div className="col-4">
                    <div className="card">
                        <img src="thumbs/1.png" className="card-img-top" alt="" />
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <img src="thumbs/1.png" className="card-img-top" alt="" />
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <img src="thumbs/1.png" className="card-img-top" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}