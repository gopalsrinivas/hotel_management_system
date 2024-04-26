import BarChart from "../BarChart";
import { Chart } from "chart.js/auto";
import Link from "next/link";

export default function page() {
    return (
        <>
            <section className="container my-5">
                <div className="row">
                    <div className="col-md-3 col-12">
                        <div className="list-group">
                            <a className="list-group-item hms-bg-normal" href="#">Dashboard</a>
                            <a className="list-group-item" href="#">Booking History</a>
                            <a className="list-group-item" href="#">Payment logs</a>
                            <a className="list-group-item" href="#">Update Profile</a>
                            <a className="list-group-item text-danger" href="#">Logout</a>
                        </div>
                    </div>

                    <div className="col-md-9 col-12">
                        <div className="row">
                            <div className="col-6 text-center">
                                <div className="card">
                                    <h4 className="card-header">Total Booking</h4>
                                    <div className="card-body">
                                        <Link href="#">123</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 text-center">
                                <div className="card">
                                    <h4 className="card-header">Total Payment</h4>
                                    <div className="card-body">
                                        <Link href="#">Rs. 25000 /-</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Chart start */}
                        <div className="row my-5">
                            <div className="col-12" id="pyamentChart">
                                <BarChart/>
                            </div>
                        </div>
                        {/* Chart end */}
                    </div>
                </div>
            </section>
        </>
    );
}