import Link from "next/link";
import DashboardSideMenu from "@/app/user/DashboardSideMenu";

export default function page() {
    return (
        <>
            <section className="container my-5">
                <div className="row">
                    <div className="col-md-2 col-12">
                        <DashboardSideMenu />
                    </div>

                    <div className="col-md-9 col-12">
                        <h5 className="mb-4">Booking History</h5>
                        <div className="table-responsive">
                            <table className="table table-bordered table-striped table-hover">
                                <thead className="hms-bg-normal">
                                    <tr>
                                        <th>S.No</th>
                                        <th>Date</th>
                                        <th>Booking Details</th>
                                        <th>Invoice</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1.</td>
                                        <td>20-5-2024</td>
                                        <td>
                                            <p className="m-0 fw-bold hms-color">Birthday Party</p>
                                            <p className="m-0 fw-bold hms-color">50 Guest</p>
                                        </td>
                                        <td>
                                            <p className="m-0 fw-bold hms-color">
                                                <Link href='#'>HMS_EVT-001</Link>
                                            </p>
                                            <p className="m-0 fw-bold hms-color">RS. 15,000 /-</p>
                                            <p className="m-0 fw-bold hms-color text-danger">Due</p>
                                        </td>
                                        <td>
                                            <Link href="#" className="btn btn-sm btn-outline-danger ms-1">Cancel</Link>
                                            <Link href="#" className="btn btn-sm hms-bg-dark ms-1">Pay Now</Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>1.</td>
                                        <td>20-5-2024</td>
                                        <td>
                                            <p className="m-0 fw-bold hms-color">Birthday Party</p>
                                            <p className="m-0 fw-bold hms-color">50 Guest</p>
                                        </td>
                                        <td>
                                            <p className="m-0 fw-bold hms-color">
                                                <Link href='#'>HMS_EVT-001</Link>
                                            </p>
                                            <p className="m-0 fw-bold hms-color">RS. 15,000 /-</p>
                                            <p className="m-0 fw-bold hms-color text-success">Paid</p>
                                        </td>
                                        <td>
                                            <Link href="#" className="btn btn-sm btn-success ms-1">Support</Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}