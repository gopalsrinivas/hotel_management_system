import RoomTypeImages from "@/app/components/RoomTypeImages";
import Link from "next/link";

export default function page() {
    return (
        <section className="container my-5">
            <div className="row">
                <div className="col-7">
                    <RoomTypeImages />
                    <h4 className="my-4">Amenties</h4>
                    <div className="row">
                        <div className="col-3">
                            <p>Wifi: <i className="fa fa-check-circle text-success"></i></p>
                            <p>Swimming Pool: <i className="fa fa-check-circle text-success"></i></p>
                            <p>Security Camera: <i className="fa fa-check-circle text-success"></i></p>
                        </div>
                    </div>
                    <h4 className="my-4">Location</h4>
                    <p>Google Map</p>
                </div>

                <div className="col-5">
                    <div className="card">
                        <h5 className="card-header text-center">
                            Booking Details
                        </h5>
                        <div className="card-body">
                            <div className="mb-2">
                                <label htmlFor="" className="form-label"><strong>Room Type</strong>: Double Bedroom</label>
                            </div>
                            <div className="mb-2">
                                <label htmlFor="" className="form-label"><strong>Charges </strong>: 1500/- Night</label>
                            </div>
                            <div className="mb-2">
                                <label htmlFor="" className="form-label"><strong>Total Guest</strong></label>
                                <input type="number" id="totalguest" name="totalguest" className="form-control" />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="check-in" className="form-label"><strong>Check-In</strong></label>
                                <input type="text" id="check-in" name="check-in" className="form-control" placeholder="DD-MM-YYYY" />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="check-out" className="form-label"><strong>Check-Out</strong></label>
                                <input type="text" id="check-out" name="check-out" className="form-control" placeholder="DD-MM-YYYY"/>
                            </div>
                            
                            <Link href="/checkout" className="btn hms-bg-dark text-white text-center mt-4">Confirm Booking</Link>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}