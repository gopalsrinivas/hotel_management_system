import Link from "next/link";
import RoomTypeImages from "../components/RoomTypeImages";

export default function page() {
    return (
        <section className="container my-5">
            <h3 className="my-4"> Book Event</h3>
            <div className="row">
                <div className="col-5">
                    <RoomTypeImages />
                </div>
                <div className="col-7">
                    <div className="card">
                        <h5 className="card-header hms-bg-normal">Book Event</h5>
                        <div className="card-body">
                            <div className="mb-3">
                                <label htmlFor="TotalGuest" className="form-label">Event Type</label>
                                <select name="eventtype" id="eventtype" className="form-control">
                                    <option>Birthday Party</option>
                                    <option>kitty Party</option>
                                    <option>Seminar</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="Eventdetail" className="form-label">Event detail</label>
                                <textarea name="eventdetail" id="eventdetail" className="form-control"></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="TotalGuest" className="form-label">Total Guest</label>
                                <input type="number" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="Eventdate" className="form-label">Event Date</label>
                                <input type="date" id="eventdate" name="eventdate" className="form-control" placeholder="DD-MM-YYYY" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="Total Cost" className="form-label">Total Cost</label>
                                <h5 className="hms-color">Rs. 57896 /-</h5>
                            </div>
                            <Link href="#" className="btn hms-bg-dark mt-3">Confirm Booking</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}