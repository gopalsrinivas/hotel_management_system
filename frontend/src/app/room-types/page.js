import Link from "next/link";

export default function page() {
    return (
        <section className="container my-5">
            <h3 className="my-3 text-center"> Room Types (6)</h3>
            <div className="row text-center">
                <div className="col-4 my-3">
                    <div className="card">
                        <Link href='/room-types' >
                            <img src="thumbs/1.png" className="card-img-top" alt="" />
                        </Link>
                        <div className="card-body hms-bg-dark text-white">
                            <h5 className="card-title">
                                <Link href='/room-types' className="text-white">Room Types1 </Link>
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="col-4 my-3">
                    <div className="card">
                        <Link href='/room-types' >
                            <img src="thumbs/1.png" className="card-img-top" alt="" />
                        </Link>
                        <div className="card-body hms-bg-dark text-white">
                            <h5 className="card-title">
                                <Link href='/room-types' className="text-white">Room Types 2 </Link>
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="col-4 my-3">
                    <div className="card">
                        <Link href='/room-types' >
                            <img src="thumbs/1.png" className="card-img-top" alt="" />
                        </Link>
                        <div className="card-body hms-bg-dark text-white">
                            <h5 className="card-title">
                                <Link href='/room-types' className="text-white">Room Types3 </Link>
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="col-4 my-3">
                    <div className="card">
                        <Link href='/room-types' >
                            <img src="thumbs/1.png" className="card-img-top" alt="" />
                        </Link>
                        <div className="card-body hms-bg-dark text-white">
                            <h5 className="card-title">
                                <Link href='/room-types' className="text-white">Room Types1 </Link>
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="col-4 my-3">
                    <div className="card">
                        <Link href='/room-types' >
                            <img src="thumbs/1.png" className="card-img-top" alt="" />
                        </Link>
                        <div className="card-body hms-bg-dark text-white">
                            <h5 className="card-title">
                                <Link href='/room-types' className="text-white">Room Types1 </Link>
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="col-4 my-3">
                    <div className="card">
                        <Link href='/room-types' >
                            <img src="thumbs/1.png" className="card-img-top" alt="" />
                        </Link>
                        <div className="card-body hms-bg-dark text-white">
                            <h5 className="card-title">
                                <Link href='/room-types' className="text-white">Room Types1 </Link>
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}