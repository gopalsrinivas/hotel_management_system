import Link from "next/link";

export default function HomeServices() {
    return (
        <section className="container my-3">
            <h3 className="my-3 text-center"> Services</h3>
            <div className="row text-center">
                <div className="col-4">
                    <div className="card">
                        <Link href='/room-types' >
                         <img src="thumbs/1.png" className="card-img-top" alt="" />
                        </Link>
                       <div className="card-body hms-bg-dark text-white">
                            <h5 className="card-title">
                                <Link href='/room-types' className="text-white">Room Types</Link>
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <img src="thumbs/1.png" className="card-img-top" alt="" />
                        <div className="card-body hms-bg-dark text-white">
                            <h5 className="card-title">Events</h5>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <img src="thumbs/1.png" className="card-img-top" alt="" />
                        <div className="card-body hms-bg-dark text-white">
                            <h5 className="card-title">Online Bookings</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}